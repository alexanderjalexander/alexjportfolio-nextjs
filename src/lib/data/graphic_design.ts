import {
  DeleteObjectsCommand,
  DeleteObjectsCommandOutput,
  GetObjectCommand,
  ListObjectsCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import sharp from "sharp";

const s3 = new S3Client({
  endpoint: `https://s3.${process.env.REGION!}.backblazeb2.com`,
  region: process.env.REGION!,
});

export async function getObjects() {
  const command = new ListObjectsCommand({
    Bucket: process.env.BUCKET_NAME!,
  });
  const { Contents } = await s3.send(command);
  for (let x of Contents!) {
    [
      "LastModified",
      "ETag",
      "StorageClass",
      "Owner",
      "ChecksumAlgorithm",
      "ChecksumType",
    ].forEach(
      // It works, TypeScript is just being annoying about it bc it thinks a string can't be used to index an object smh my head
      // @ts-ignore
      (e) => delete x[e],
    );
  }
  return Contents;
}

export async function getObjectsResized() {
  const command = new ListObjectsCommand({
    Bucket: `${process.env.BUCKET_NAME_RESIZE!}-temp`,
  });
  const { Contents } = await s3.send(command);
  for (let x of Contents!) {
    [
      "LastModified",
      "ETag",
      "StorageClass",
      "Owner",
      "ChecksumAlgorithm",
      "ChecksumType",
    ].forEach(
      // It works, TypeScript is just being annoying about it bc it thinks a string can't be used to index an object smh my head
      // @ts-ignore
      (e) => delete x[e],
    );
  }
  return Contents;
}

export async function getObject(key: string) {
  const command = new GetObjectCommand({
    Bucket: process.env.BUCKET_NAME!,
    Key: key,
  });
  const data = await s3.send(command);
  return data;
}

export async function getObjectResized(key: string) {
  const command = new GetObjectCommand({
    Bucket: `${process.env.BUCKET_NAME_RESIZE!}`,
    Key: key,
  });
  const data = await s3.send(command);
  return data;
}

export async function syncObjects() {
  const list_temp_objs_command = new ListObjectsCommand({
    Bucket: `${process.env.BUCKET_NAME_RESIZE!}`,
  });
  let keys_data =
    (await s3.send(list_temp_objs_command)).Contents?.map((x) => ({
      Key: x.Key,
    })) ?? [];

  const del_objs_command = new DeleteObjectsCommand({
    Bucket: `${process.env.BUCKET_NAME_RESIZE!}`,
    Delete: {
      Objects: keys_data,
    },
  });
  let del_data = await s3.send(del_objs_command);

  const list_full_size_objs_command = new ListObjectsCommand({
    Bucket: `${process.env.BUCKET_NAME!}`,
  });
  let full_keys_data =
    (await s3.send(list_full_size_objs_command)).Contents ?? [];

  let put_results = [];

  for (let key of full_keys_data) {
    let res = await getObject(key.Key!);
    const streamToString = await res.Body?.transformToByteArray();

    const resize_image = await sharp(streamToString)
      .resize({ width: 360 })
      .toBuffer();

    const put_obj_command = new PutObjectCommand({
      Bucket: `${process.env.BUCKET_NAME_RESIZE!}`,
      Key: key.Key!,
      Body: resize_image!,
      ContentType: res.ContentType,
    });
    let put_data = await s3.send(put_obj_command);
    put_results.push({
      Key: key.Key!,
      $metadata: put_data.$metadata,
      ContentType: res.ContentType,
      ETag: put_data.ETag,
      VersionId: put_data.VersionId,
    });
  }

  return put_results;
}

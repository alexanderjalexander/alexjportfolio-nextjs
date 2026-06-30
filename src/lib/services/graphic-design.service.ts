import {
  DeleteObjectsCommand,
  ListObjectsCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import sharp from "sharp";
import { getGraphicDesignObject } from "../repos/graphic-design.repo";

const s3 = new S3Client({
  endpoint: `https://s3.${process.env.REGION!}.backblazeb2.com`,
  region: process.env.REGION!,
});

export async function syncGraphicDesignObjects() {
  const list_temp_objs_command = new ListObjectsCommand({
    Bucket: `${process.env.GD_BUCKET_NAME_RESIZE!}`,
  });
  let keys_data =
    (await s3.send(list_temp_objs_command)).Contents?.map((x) => ({
      Key: x.Key,
    })) ?? [];

  const del_objs_command = new DeleteObjectsCommand({
    Bucket: `${process.env.GD_BUCKET_NAME_RESIZE!}`,
    Delete: {
      Objects: keys_data,
    },
  });
  let del_data = await s3.send(del_objs_command);

  const list_full_size_objs_command = new ListObjectsCommand({
    Bucket: `${process.env.GD_BUCKET_NAME!}`,
  });
  let full_keys_data =
    (await s3.send(list_full_size_objs_command)).Contents ?? [];

  let put_results = [];

  for (let key of full_keys_data) {
    let res = await getGraphicDesignObject(key.Key!);
    const streamToString = await res.Body?.transformToByteArray();

    const resize_image = await sharp(streamToString)
      .resize({ width: 360 })
      .toBuffer();

    const put_obj_command = new PutObjectCommand({
      Bucket: `${process.env.GD_BUCKET_NAME_RESIZE!}`,
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
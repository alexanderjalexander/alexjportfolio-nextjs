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
    ["LastModified", "ETag", "StorageClass", "Owner"].forEach(
      // It works, TypeScript is just being annoying about it bc it thinks a string can't be used to index an object smh my head
      // @ts-ignore
      (e) => delete x[e],
    );
  }
  return Contents;
}

export async function getObjectsResized() {
  const command = new ListObjectsCommand({
    Bucket: process.env.BUCKET_NAME_RESIZE!,
  });
  const { Contents } = await s3.send(command);
  for (let x of Contents!) {
    ["LastModified", "ETag", "StorageClass", "Owner"].forEach(
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
    Bucket: process.env.BUCKET_NAME_RESIZE!,
    Key: key,
  });
  const data = await s3.send(command);
  return data;
}

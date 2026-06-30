import { getS3Client } from "@/src/db";
import {
  GetObjectCommand,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";

const s3 = getS3Client();

export async function listGraphicDesignObjects() {
  const command = new ListObjectsCommand({
    Bucket: process.env.GD_BUCKET_NAME!,
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

export async function listGraphicDesignResizedObjects() {
  const command = new ListObjectsCommand({
    Bucket: `${process.env.GD_BUCKET_NAME_RESIZE!}`,
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

export async function getGraphicDesignObject(key: string) {
  const command = new GetObjectCommand({
    Bucket: process.env.GD_BUCKET_NAME!,
    Key: key,
  });
  const data = await s3.send(command);
  return data;
}

export async function getGraphicDesignResizedObject(key: string) {
  const command = new GetObjectCommand({
    Bucket: `${process.env.GD_BUCKET_NAME_RESIZE!}`,
    Key: key,
  });
  const data = await s3.send(command);
  return data;
}

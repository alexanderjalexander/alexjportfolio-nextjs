import { siteConfig } from "@/config/site";
import { GetObjectCommand, ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";
import { unstable_cache } from "next/cache";

const s3 = new S3Client({
    endpoint: `https://s3.${process.env.REGION!}.backblazeb2.com`,
    region: process.env.REGION!
})

export async function getObjects() {
    const command = new ListObjectsCommand({
        Bucket: process.env.BUCKET_NAME_RESIZE!,
    });
    const { Contents } = await s3.send(command);
    for (let x of Contents!) {
        ['LastModified', 'ETag', 'StorageClass', 'Owner'].forEach(
            // It works, TypeScript is just being annoying about it bc it thinks a string can't be used to index an object smh my head
            // @ts-ignore
            e => delete x[e]
        );
    }
    return Contents;
}

export const getCachedObjects = unstable_cache(
    async() => await getObjects(),
    ['graphic-design-objects'],
    { 
        tags: ['graphic-design-objects'],
        revalidate: siteConfig.revalidateTime, 
    }
)

export async function getObject(key:string) {
    const command = new GetObjectCommand({
        Bucket: process.env.BUCKET_NAME!,
        Key: key
    })
    const data = await s3.send(command);
    return data;
}

export const getCachedObject = unstable_cache(
    async(key:string) => await getObject(key),
    ['graphic-design-object'],
    { 
        tags: ['graphic-design-object'],
        revalidate: siteConfig.revalidateTime, 
    }
)

export async function getObjectResized(key:string) {
    const command = new GetObjectCommand({
        Bucket: process.env.BUCKET_NAME_RESIZE!,
        Key: key
    })
    const data = await s3.send(command);
    return data;
}

export const getCachedObjectResized = unstable_cache(
    async(key:string) => await getObjectResized(key),
    ['graphic-design-object-resized'],
    { 
        tags: ['graphic-design-object-resized'],
        revalidate: siteConfig.revalidateTime, 
    }
)
import { getResumeFromS3 } from "@/src/lib/data/work_experience";
import { NoSuchKey } from "@aws-sdk/client-s3";

export const revalidate = 86400;

export async function GET(req: Request) {
  try {
    let res = await getResumeFromS3();
    const streamToString = await res.Body?.transformToByteArray();
    // @ts-ignore
    return new Response(streamToString, {
      status: 200,
      // @ts-ignore
      headers: {
        "Content-Type": res.ContentType,
        "Content-Length": res.ContentLength?.toString() || "",
        "Content-Disposition": "inline",
      },
    });
  } catch (e) {
    console.error(e);
    if (e instanceof NoSuchKey) {
      return new Response("NoSuchKey Error: key not found.", {
        status: 404,
      });
    } else {
      return new Response("An error happened while fetching data", {
        status: 500,
      });
    }
  }
}
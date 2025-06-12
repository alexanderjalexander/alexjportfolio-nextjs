import { getObjectResized } from "@/src/lib/data/graphic_design";
import { NoSuchKey } from "@aws-sdk/client-s3";

export const dynamic = "force-static";

export async function GET(
  req: Request,
  props: { params: Promise<{ id: string[] }> },
) {
  const params = await props.params;
  try {
    const key = Array.isArray(params.id) ? params.id.join("/") : params.id;
    let res = await getObjectResized(key);
    const streamToString = await res.Body?.transformToByteArray();
    return new Response(streamToString, {
      status: 200,
      // @ts-ignore
      headers: {
        "Content-Type": res.ContentType,
        "Content-Length": res.ContentLength,
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

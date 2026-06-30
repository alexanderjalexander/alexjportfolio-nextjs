import { listGraphicDesignResizedObjects } from "@/src/lib/repos/graphic-design.repo";

export const revalidate = 86400;

export async function GET(req: Request) {
  try {
    let res = await listGraphicDesignResizedObjects();
    // let res = await getObjects();
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {},
    });
  } catch (e) {
    return new Response("An error happened while fetching data", {
      status: 500,
    });
  }
}

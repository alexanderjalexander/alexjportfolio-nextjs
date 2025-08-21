import { syncObjects } from "@/src/lib/data/graphic_design";
import { authorizeBearerToken } from "@/src/app/api/bearerHelpers";

export async function GET(req: Request) {
  if (!authorizeBearerToken(req)) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    let res = await syncObjects();
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {},
    });
  } catch (e) {
    return new Response(
      "An error happened while syncing the graphic design objects",
      {
        status: 500,
      },
    );
  }
}

import { syncGraphicDesignObjects } from "@/src/lib/repos/graphic-design.repo";
import { authorizeBearerToken } from "@/src/app/api/bearerHelpers";

export async function GET(req: Request) {
  if (!authorizeBearerToken(req)) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    let res = await syncGraphicDesignObjects();
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

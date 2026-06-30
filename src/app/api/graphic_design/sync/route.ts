import { authorizeBearerToken } from "@/src/app/api/bearerHelpers";
import { syncGraphicDesignObjects } from "@/src/lib/services/graphic-design.service";

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

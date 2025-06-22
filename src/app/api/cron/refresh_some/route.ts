import { revalidatePath } from "next/cache";
import { authorizeBearerToken } from "../../bearerHelpers";

export async function GET(req: Request) {
  if (!authorizeBearerToken(req)) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const paths = ["/", "/video", "/api/video", "/api/video/commissions"];
    for (let path of paths) {
      revalidatePath(path);
    }
    return Response.json({ success: true });
  } catch (e) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}

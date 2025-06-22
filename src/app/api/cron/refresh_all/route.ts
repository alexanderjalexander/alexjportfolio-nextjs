import { revalidatePath } from "next/cache";
import { getObjects, getObjectsResized } from "@/src/lib/data/graphic_design";
import { authorizeBearerToken } from "../../bearerHelpers";

export async function GET(req: Request) {
  if (!authorizeBearerToken(req)) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const paths = [
      "/",
      "/programming",
      "/video",
      "/motion_graphics",
      "/graphic_design",
      "/3d_animation",
      "/api-reference",
      "/api/animation",
      "/api/graphic_design",
      "/api/motion",
      "/api/programming",
      "/api/video",
      "/api/video/commissions",
    ];
    for (let path of paths) {
      revalidatePath(path);
    }
    let gd_objs = await getObjects();
    for (let gd_obj of gd_objs!) {
      revalidatePath(`/api/graphic_design/${gd_obj.Key}`);
    }
    let gd_objs_resized = await getObjectsResized();
    for (let gd_obj of gd_objs_resized!) {
      revalidatePath(`/api/graphic_design/resize/${gd_obj.Key}`);
    }
    return Response.json({ success: true });
  } catch (e) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}

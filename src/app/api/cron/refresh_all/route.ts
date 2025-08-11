import { revalidatePath } from "next/cache";
import {
  getObjects,
  getObjectsResized,
  syncObjects,
} from "@/src/lib/data/graphic_design";
import { authorizeBearerToken } from "../../bearerHelpers";

export async function GET(req: Request) {
  if (!authorizeBearerToken(req)) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const sync_result = await syncObjects();
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
    const revalidated_paths = [];
    const error_revalidated_paths = [];
    for (let path of paths) {
      try {
        revalidatePath(path);
        revalidated_paths.push(path);
      } catch (_) {
        error_revalidated_paths.push(path);
      }
    }
    let gd_objs = await getObjects();
    for (let gd_obj of gd_objs!) {
      try {
        revalidatePath(`/api/graphic_design/${gd_obj.Key}`);
        revalidated_paths.push(`/api/graphic_design/${gd_obj.Key}`);
      } catch (_) {
        error_revalidated_paths.push(`/api/graphic_design/${gd_obj.Key}`);
      }
    }
    let gd_objs_resized = await getObjectsResized();
    for (let gd_obj of gd_objs_resized!) {
      try {
        revalidatePath(`/api/graphic_design/resize/${gd_obj.Key}`);
        revalidated_paths.push(`/api/graphic_design/resize/${gd_obj.Key}`);
      } catch (_) {
        error_revalidated_paths.push(
          `/api/graphic_design/resize/${gd_obj.Key}`,
        );
      }
    }
    return Response.json({
      syncedObjects: sync_result,
      revalidatedPaths: revalidated_paths,
      error_revalidated_paths: error_revalidated_paths,
    });
  } catch (e) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}

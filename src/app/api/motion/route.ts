import { getMotionGraphics } from "@/src/lib/data/motion";

export async function GET(req: Request) {
    try {
        const res = await getMotionGraphics();
        return new Response(JSON.stringify(res), {
            status: 200,
            headers: {}
        });
    } catch(e) {
        return new Response('An error happened while fetching data', {
            status: 500
        })
    }
}
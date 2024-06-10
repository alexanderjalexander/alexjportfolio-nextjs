import { getAnimation } from "@/src/lib/data/animation";

export const dynamic = 'force-dynamic'
export async function GET(req: Request) {
    try {
        const res = await getAnimation();
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
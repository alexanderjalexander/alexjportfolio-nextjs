import { getCachedObjects } from "@/src/lib/data/graphic_design";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(req: Request) {
    try {
        let res = await getCachedObjects();
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
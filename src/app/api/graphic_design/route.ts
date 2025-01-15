import { getObjects } from "@/src/lib/data/graphic_design";

export async function GET(req: Request) {
    try {
        let res = await getObjects();
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
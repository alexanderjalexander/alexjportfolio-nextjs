import { getPersonalVideos } from "@/src/lib/data/videos";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(req: Request) {
    try {
        const body = await getPersonalVideos();

        return new Response(JSON.stringify(body), {
            status: 200,
            headers: {}
        });
    } catch(e) {
        return new Response('An error happened while fetching data', {
            status: 500
        })
    }
}
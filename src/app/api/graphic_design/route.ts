import { getObjects } from "@/src/lib/data/graphic_design";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(req: Request) {
    try {
        let res = await getObjects();
        for (let x of res!) {
            ['LastModified', 'ETag', 'StorageClass', 'Owner'].forEach(
                // It works, TypeScript is just being annoying about it bc it thinks a string can't be used to index an object smh my head
                // @ts-ignore
                e => delete x[e]
            );
            console.log(x);
        }
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
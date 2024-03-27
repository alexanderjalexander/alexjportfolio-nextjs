import { getCommissions } from "@/src/lib/data/videos";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(req: Request) {
    try {
        const body = await getCommissions();
        return new NextResponse(JSON.stringify(body), {
            status: 200,
            headers: {}
        });
    } catch(e) {
        return new NextResponse('An error happened while fetching data', {
            status: 500
        })
    }
}
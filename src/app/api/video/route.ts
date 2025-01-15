import { siteConfig } from "@/config/site";
import { getPersonalVideos } from "@/src/lib/data/videos";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const body = await getPersonalVideos();
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
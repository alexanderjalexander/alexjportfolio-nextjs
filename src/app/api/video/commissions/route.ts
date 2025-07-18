import { getCommissions } from "@/src/lib/data/videos";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(req: Request) {
  try {
    const body = await getCommissions();
    return new NextResponse(JSON.stringify(body), {
      status: 200,
      headers: {},
    });
  } catch (e) {
    return new NextResponse(`An error happened while fetching data: ${e}`, {
      status: 500,
    });
  }
}

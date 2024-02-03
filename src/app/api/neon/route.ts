import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

type ResponseData = { message: string }

const sql = neon(process.env.DATABASE_URL!);

export async function GET(request: Request) {
    const response = await sql`SELECT version()`;
    console.log(response);
    return Response.json(response); 
}
 
export async function POST(request: Request) {

}
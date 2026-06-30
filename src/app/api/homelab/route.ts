import { getHomelabUptimes } from "@/src/lib/repos/programming.repo";

export async function GET(req: Request) {
  try {
    const res = await getHomelabUptimes();
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {},
    });
  } catch (e) {
    console.error(e);
    return new Response("An error happened while fetching data", {
      status: 500,
    });
  }
}

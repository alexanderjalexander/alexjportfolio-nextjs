import { getProgrammingProjectsSkills } from "@/src/lib/data/programming";

export const dynamic = "force-static";

export async function GET(req: Request) {
  try {
    const res = await getProgrammingProjectsSkills();
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {},
    });
  } catch (e) {
    return new Response("An error happened while fetching data", {
      status: 500,
    });
  }
}

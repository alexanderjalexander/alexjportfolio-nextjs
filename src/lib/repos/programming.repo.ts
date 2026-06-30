import { getDatabase } from "@/src/db";
import {
  programmingProjects,
  programmingSkills,
  skills,
} from "@/src/db/migrations/schema";
import { eq } from "drizzle-orm";

export async function getProgrammingProjects() {
  return (await getDatabase()).select().from(programmingProjects);
}

export async function getProgrammingProjectSkills() {
  return (await getDatabase())
    .select({
      project: programmingSkills.project,
      skill: skills.skill,
    })
    .from(programmingSkills)
    .innerJoin(skills, eq(skills.id, programmingSkills.skill));
}

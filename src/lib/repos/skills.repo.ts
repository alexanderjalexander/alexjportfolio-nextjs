import { getDatabase } from "@/src/db";
import { skills, categories, skillCategory } from "../../db/migrations/schema";
import { eq } from "drizzle-orm";
import {
  SkillCategoryRow
} from "@/src/lib/types/skills";

export async function getSkillsCategories(): Promise<SkillCategoryRow[]> {
  return await (await getDatabase())
    .select({
      category: categories.category,
      skill: skills.skill,
    })
    .from(skillCategory)
    .innerJoin(categories, eq(categories.id, skillCategory.category))
    .innerJoin(skills, eq(skills.id, skillCategory.skill));
}

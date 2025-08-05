import { getDatabase } from "@/src/db";
import { skills, categories, skillCategory } from "../../db/migrations/schema";
import { eq } from "drizzle-orm";
import { LooseObject } from "@/types";

export async function getSkillsCategories() {
  const skillsCategories = (await getDatabase())
    .select({
      category: categories.category,
      skill: skills.skill,
    })
    .from(skillCategory)
    .innerJoin(categories, eq(categories.id, skillCategory.category))
    .innerJoin(skills, eq(skills.id, skillCategory.skill));

  let i = 0;
  // ENSURE THESE COLORS ARE CONSISTENT WITH TAILWIND CONFIG JS COLORS
  const colors = [
    "dark:bg-red-700 bg-red-300",
    "dark:bg-fuchsia-700 bg-fuchsia-300",
    "dark:bg-yellow-700 bg-yellow-300",
    "dark:bg-green-700 bg-green-300",
    "dark:bg-cyan-700 bg-cyan-300",
    "dark:bg-blue-700 bg-blue-300",
    "dark:bg-pink-700 bg-pink-300",
    "dark:bg-slate-700 bg-slate-300",
  ];

  const result: LooseObject = {};

  for (let x of await skillsCategories) {
    if (!result.hasOwnProperty(x.category)) {
      result[x.category] = {
        color: colors[i % colors.length],
        skills: [],
      };
      i++;
    }
    result[x.category].skills.push(x.skill);
  }

  return result;
}

export async function getColorCategorizedSkills() {
  const skillsCategories = await getSkillsCategories();

  interface ColorCategorizedSkill {
    color: string;
    skill: string;
  }
  let result: ColorCategorizedSkill[] = [];

  for (let x of Object.keys(skillsCategories)) {
    const color: string = skillsCategories[x].color;
    for (let skill of skillsCategories[x].skills) {
      result.push({
        color: color,
        skill: skill,
      });
    }
  }
  return result;
}

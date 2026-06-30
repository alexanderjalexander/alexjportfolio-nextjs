import { ColorCategorizedSkill, SkillCategoriesMap } from "@/src/lib/types/skills";

type SkillColorLookup = Record<string, string>;

export function buildSkillColorMap(skills: ColorCategorizedSkill[]): SkillColorLookup {
  const lookup: SkillColorLookup = {};

  for (const { skill, color } of skills) {
    lookup[skill] = color;
  }

  return lookup;
}

export function buildSkillColorMapFromCategories(
  categories: SkillCategoriesMap,
): SkillColorLookup {
  const lookup: SkillColorLookup = {};

  for (const category of Object.values(categories)) {
    for (const skill of category.skills) {
      lookup[skill] = category.color;
    }
  }

  return lookup;
}

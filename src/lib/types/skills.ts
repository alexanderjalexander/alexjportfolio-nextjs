export interface SkillCategoryRow {
  category: string;
  skill: string;
}

export interface SkillCategoryValue {
  color: string;
  skills: string[];
}

export type SkillCategoriesMap = Record<string, SkillCategoryValue>;

export interface ColorCategorizedSkill {
  skill: string;
  color: string;
}

export interface SkillCategoryDto {
  category: string;
  color: string;
  skills: string[];
}

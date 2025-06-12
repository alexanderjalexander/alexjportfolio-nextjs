"use server";

import { getDatabase } from "@/src/db";
import { skills, categories, skillCategory } from "@/src/db/migrations/schema";
import { eq, getTableColumns } from "drizzle-orm";
import { unstable_cache } from "next/cache";

export type tableDataType = {
  columns: { column: string; label: string; type?: string }[];
  data: {}[];
};

const options = (tags?: string[]) => ({
  tags: tags,
  revalidate: 86400,
});

/**
 * Gets the HTML column type depending on the input column
 * @param cols
 */
function getColType(arg: string) {
  switch (arg) {
    case "string":
      return "text";
    case "number":
      return "number";
    case "date":
      return "date";
    default:
      return "text";
  }
}

/**
 * Obtains every single column, returning the name, a label for it, and the HTML Input Type
 * @param cols the result of running getTableColumns
 */
function obtainCols(cols: {}) {
  return (
    Object.keys(cols)
      .map((col) => ({
        column: col,
        label: col.toUpperCase(),
        // @ts-ignore
        type: getColType(cols[col].dataType),
      }))
  );
}

export async function getAllSkills() {
  const data = await (await getDatabase()).select().from(skills).execute();
  return {
    columns: obtainCols(getTableColumns(skills)),
    data: data,
  };
}

export const getAllCategories = unstable_cache(
  async () => {
    const data = await (await getDatabase())
      .select()
      .from(categories)
      .execute();
    return {
      columns: obtainCols(getTableColumns(categories)),
      data: data,
    };
  },
  ["categories"],
  options(),
);

export const getAllSkillCategoryMappings = unstable_cache(
  async () => {
    const data = await (
      await getDatabase()
    )
      .select({
        categoryId: categories.id,
        category: categories.category,
        skillId: skills.id,
        skill: skills.skill,
      })
      .from(skillCategory)
      .innerJoin(skills, eq(skills.id, skillCategory.skill))
      .innerJoin(categories, eq(categories.id, skillCategory.category))
      .execute();

    return {
      columns: (
        Object.keys(data[0]) ?? ["skillId", "skill", "categoryId", "category"]
      )
        // @ts-ignore
        .map((col) => ({
          column: col,
          label: col.toUpperCase(),
          type: getColType(typeof data[0][col]),
        })),
      data: data,
    };
  },
  ["skillCategory"],
  options(),
);

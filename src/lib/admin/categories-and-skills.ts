import { getDatabase } from "@/src/db";
import { skills, categories, skillCategory } from "@/src/db/migrations/schema";
import {getTableColumns} from "drizzle-orm";
import {unstable_cache} from "next/cache";

export type tableDataType = {
    columns: { column: string, label: string }[],
    data: {}[]
}

const options = (tags?:string[]) => ({
    tags: tags,
    revalidate: 86400,
})

export const getAllSkills = unstable_cache(
    async () => {
        const data = await (await getDatabase())
            .select()
            .from(skills)
            .execute();
        return {
            columns: Object.keys(getTableColumns(skills))
                .map((col) => ({column: col, label: col.toUpperCase()})),
            data: data,
        }
    },
    ['skills'],
    options()
);

export const getAllCategories = unstable_cache(
    async () => {
        const data = await (await getDatabase())
            .select()
            .from(categories)
            .execute();
        return {
            columns: Object.keys(getTableColumns(categories))
                .map((col) => ({column: col, label: col.toUpperCase()})),
            data: data,
        }
    },
    ['categories'],
    options()
);

export const getAllSkillCategoryMappings = unstable_cache(
    async () => {
        const data = await (await getDatabase())
            .select()
            .from(skillCategory)
            .execute();
        return {
            columns: Object.keys(getTableColumns(skillCategory))
                .map((col) => ({column: col, label: col.toUpperCase()})),
            data: data,
        }
    },
    ['skillCategory'],
    options()
);
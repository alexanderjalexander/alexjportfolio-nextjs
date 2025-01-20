import { getDatabase } from "@/src/db";
import { skills, categories, skillCategory } from "@/src/db/migrations/schema";
import {getTableColumns} from "drizzle-orm";

export type tableDataType = {
    columns: { column: string, label: string }[],
    data: {}[]
}

export async function getAllSkills(): Promise<tableDataType> {
    const data = await (await getDatabase())
        .select()
        .from(skills)
        .execute();
    return {
        columns: Object.keys(getTableColumns(skills))
            .map((col) => ({column: col, label: col.toUpperCase()})),
        data: data,
    }
}

export async function getAllCategories(): Promise<tableDataType> {
    const data = await (await getDatabase())
        .select()
        .from(categories)
        .execute();
    return {
        columns: Object.keys(getTableColumns(categories))
            .map((col) => ({column: col, label: col.toUpperCase()})),
        data: data,
    }
}

export async function getAllSkillCategoryMappings(): Promise<tableDataType> {
    const data = await (await getDatabase())
        .select()
        .from(skillCategory)
        .execute();
    return {
        columns: Object.keys(getTableColumns(skillCategory))
            .map((col) => ({column: col, label: col.toUpperCase()})),
        data: data,
    }
}
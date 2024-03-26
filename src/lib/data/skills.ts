import { getDatabase } from "@/src/db";
import { skills, categories, skillCategory } from "../../db/migrations/schema";
import { eq, isNull } from "drizzle-orm";

/*
 * select c.category, s.skill
 * from skill_category
 *      inner join categories c on c.id = skill_category.category
 *      inner join skills s on s.id = skill_category.skill
 */

export async function getCategories() {
    return (await getDatabase())
    .select({category: categories.category})
    .from(categories);
}

export async function getSkillsCategories() {
    const skillsCategories = (await getDatabase())
    .select({
        category: categories.category, 
        skill: skills.skill
    })
    .from(skillCategory)
    .innerJoin(categories, eq(categories.id, skillCategory.category))
    .innerJoin(skills, eq(skills.id, skillCategory.skill));

    interface LooseObject {
        [key: string]: any
    }

    let i = 0;
    const colors = ['red', 'cyan', 'purple', 'yellow', 'emerald', 'orange'];
    
    const result: LooseObject = {};

    for (let x of await skillsCategories) {
        if (!result.hasOwnProperty(x.category)) {
            result[x.category] = {
                color: colors[i%(colors.length)],
                skills: []
            };
            i++;
        }
        result[x.category].skills.push(x.skill);

    }

    return result;
}
import { getDatabase } from "@/src/db";
import { programmingProjects, programmingSkills, skills } from "@/src/db/migrations/schema";
import { eq } from "drizzle-orm";
import { siteConfig } from "@/config/site";
import { unstable_cache } from "next/cache";
import { getCachedColorCategorizedSkills } from "./skills";


/*
export async function getProgrammingProjects() {
    return (await getDatabase())
        .select()
        .from(programmingProjects);
}
*/

export const getProgrammingProjects = unstable_cache(
    async () => {
        return (await getDatabase())
        .select()
        .from(programmingProjects);
    },
    ['programming-projects'],
    {
        tags: ['programming-projects'],
        revalidate: siteConfig.revalidateTime,
    }
);

/*
export async function getProgrammingSkills() {
    return (await getDatabase())
        .select({
            project: programmingSkills.project,
            skill: skills.skill
        })
        .from(programmingSkills)
        .innerJoin(skills, eq(skills.id, programmingSkills.skill));
}
*/

export const getProgrammingSkills = unstable_cache(
    async () => {
        return (await getDatabase())
        .select({
            project: programmingSkills.project,
            skill: skills.skill
        })
        .from(programmingSkills)
        .innerJoin(skills, eq(skills.id, programmingSkills.skill));
    },
    ['programming-skills'],
    {
        tags: ['programming-skills'],
        revalidate: siteConfig.revalidateTime,
    }
)


export async function getProgrammingProjectsSkills() {
    const programmingSkills = await getProgrammingSkills();
    /** skills = 
     * [
     *  { project: id, skill }
     * ...
     * ]
     */
    let projects = await getProgrammingProjects();
    /** projects = 
     * [
     *  { id, title, subtitle, description, link }
     * ...
     * ]
     */
    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];
        let skills = programmingSkills.filter(
            (element) => (element.project === project.id)
        ).map(
            (element) => (element.skill)
        )
        // @ts-ignore
        // Because adding a new thing to an object isn't fun
        project['skills'] = skills;
    }

    return projects;
}

export const getCachedProgrammingProjectsSkills = unstable_cache(
    async () => await getProgrammingProjectsSkills(),
    ['programming-projects-skills'],
    { 
        tags: ['programming-projects-skills'],
        revalidate: siteConfig.revalidateTime 
    }
)

export async function getProgrammingProjectsSkillsFull() {
    const programmingSkills = await getProgrammingSkills();
    /** skills = 
     * [
     *  { project: id, skill }
     * ...
     * ]
     */
    const skillsColored = await getCachedColorCategorizedSkills();
    /** skillsColored = 
     * [
     *  { color: 'red', skill: 'Git & GitHub' },
     *  ...
     *  { color: 'cyan', skill: 'VEGAS Pro' },
     *  ...
     * ]
     */
    let projects = await getProgrammingProjects();
    /** projects = 
     * [
     *  { id, title, subtitle, description, link }
     * ...
     * ]
     */
    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];
        let skills = programmingSkills.filter(
            (element) => (element.project === project.id)
        ).map(
            (element) => (element.skill)
        ).map(
            (skill) => {
                let color = skillsColored.filter(
                    (color_skill) => (color_skill.skill === skill)
                )[0].color;
                return {color: color, skill: skill}
            }
        )
        // @ts-ignore
        // Because adding a new thing to an object isn't fun
        project['skills'] = skills;
    }

    return projects;
}

export const getCachedProgrammingProjectsSkillsFull = unstable_cache(
    async () => await getProgrammingProjectsSkillsFull(),
    ['programming-projects-skills-full'],
    {
        tags: ['programming-projects-skills-full'],
        revalidate: siteConfig.revalidateTime
    }
)

// Desired Format:
/** Desired Format:
 * [
 *  {   id, 
 *      title, 
 *      subtitle, 
 *      description, 
 *      link, 
 *      skills: 
 *          [
 *          
 *          ]}
 * ]
 */

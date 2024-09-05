import { getDatabase } from "@/src/db";
import { programmingProjects, programmingSkills, skills } from "@/src/db/migrations/schema";
import { eq } from "drizzle-orm";
import { siteConfig } from "@/config/site";
import { getCachedColorCategorizedSkills } from "./skills";
import { memoize } from "nextjs-better-unstable-cache";



export const getProgrammingProjects = memoize(
    async () => {
        return (await getDatabase())
        .select()
        .from(programmingProjects);
    },
    {
        revalidateTags: ['programming-projects'],
        duration: siteConfig.revalidateTime,
        log: ['datacache', 'verbose'],
        logid: 'Programming Projects'
    }
);

export const getProgrammingSkills = memoize(
    async () => {
        return (await getDatabase())
        .select({
            project: programmingSkills.project,
            skill: skills.skill
        })
        .from(programmingSkills)
        .innerJoin(skills, eq(skills.id, programmingSkills.skill));
    },
    {
        revalidateTags: ['programming-skills'],
        duration: siteConfig.revalidateTime,
        log: ['datacache', 'verbose'],
        logid: 'Programming Skills'
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

export const getCachedProgrammingProjectsSkills = memoize(
    async () => await getProgrammingProjectsSkills(),
    { 
        revalidateTags: ['programming-projects-skills'],
        duration: siteConfig.revalidateTime,
        log: ['datacache', 'verbose'],
        logid: 'Programming Projects + Skills'
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

export const getCachedProgrammingProjectsSkillsFull = memoize(
    async () => await getProgrammingProjectsSkillsFull(),
    {
        revalidateTags: ['programming-projects-skills-full'],
        duration: siteConfig.revalidateTime,
        log: ['datacache', 'verbose'],
        logid: 'Programming Projects + Skills Full'
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

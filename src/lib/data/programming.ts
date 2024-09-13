import { getDatabase } from "@/src/db";
import { programmingProjects, programmingSkills, skills } from "@/src/db/migrations/schema";
import { eq } from "drizzle-orm";
import { getColorCategorizedSkills } from "./skills";


export async function getProgrammingProjects() {
    return (await getDatabase())
        .select()
        .from(programmingProjects);
}

export async function getProgrammingSkills() {
    return (await getDatabase())
        .select({
            project: programmingSkills.project,
            skill: skills.skill
        })
        .from(programmingSkills)
        .innerJoin(skills, eq(skills.id, programmingSkills.skill));
}


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

export async function getProgrammingProjectsSkillsFull() {
    const programmingSkills = await getProgrammingSkills();
    /** skills = 
     * [
     *  { project: id, skill }
     * ...
     * ]
     */
    const skillsColored = await getColorCategorizedSkills();
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

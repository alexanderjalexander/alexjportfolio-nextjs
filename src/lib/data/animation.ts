import { getDatabase } from "@/src/db";
import { animationProjects, skills, animationSkills } from "@/src/db/migrations/schema";
import { desc, eq, sql } from "drizzle-orm";
import { getColorCategorizedSkills } from "./skills";

export async function getAnimation() {
    return (await getDatabase())
    .select({
        id: animationProjects.id,
        name: animationProjects.name,
        description: animationProjects.description,
        youtube_id: animationProjects.youtubeId,
        publish_date: animationProjects.publishDate,
        skills: sql<string[]>`array_agg(${skills.skill})`
    })
    .from(animationProjects)
    .innerJoin(animationSkills, eq(animationProjects.id, animationSkills.project))
    .innerJoin(skills, eq(animationSkills.skill, skills.id))
    .groupBy(
        animationProjects.id,
        animationProjects.name,
        animationProjects.description,
        animationProjects.youtubeId,
        animationProjects.publishDate
    )
    .orderBy(desc(animationProjects.publishDate));
}

export async function getAnimationFull(): Promise<{
    id: number,
    name: string,
    description: string,
    youtube_id: string,
    publish_date: string,
    skills: { color: string, skill: string }[]
}[]> {
    let projects = await getAnimation();
    const skillsColored = await getColorCategorizedSkills();
    projects.map(
        (project) => {
            //@ts-ignore
            project.skills = project.skills.map(
                (skill) => 
                {return {
                    color: skillsColored.filter((cs) => (cs.skill === skill))[0].color,
                    skill,
                }}
            )
        }
    );
    //@ts-ignore
    return projects;
}
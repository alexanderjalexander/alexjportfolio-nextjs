import { getDatabase } from "@/src/db";
import { motionGraphicsProjects, skills, motionGraphicsSkills } from "@/src/db/migrations/schema";
import { desc, eq, sql } from "drizzle-orm";
import { getColorCategorizedSkills } from "./skills";

export async function getMotionGraphics() {
    return (await getDatabase())
    .select({
        id: motionGraphicsProjects.id,
        name: motionGraphicsProjects.name,
        description: motionGraphicsProjects.description,
        youtube_id: motionGraphicsProjects.youtubeId,
        publish_date: motionGraphicsProjects.publishDate,
        skills: sql<string[]>`array_agg(${skills.skill})`
    })
    .from(motionGraphicsProjects)
    .innerJoin(motionGraphicsSkills, eq(motionGraphicsProjects.id, motionGraphicsSkills.project))
    .innerJoin(skills, eq(motionGraphicsSkills.skill, skills.id))
    .groupBy(
        motionGraphicsProjects.id,
        motionGraphicsProjects.name,
        motionGraphicsProjects.description,
        motionGraphicsProjects.youtubeId,
        motionGraphicsProjects.publishDate
    )
    .orderBy(desc(motionGraphicsProjects.publishDate));
}

export async function getMotionGraphicsFull(): Promise<{
    id: number,
    name: string,
    description: string,
    youtube_id: string,
    publish_date: string,
    skills: { color: string, skill: string }[]
}[]> {
    let projects = await getMotionGraphics();
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
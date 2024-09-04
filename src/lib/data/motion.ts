import { getDatabase } from "@/src/db";
import { motionGraphicsProjects, skills, motionGraphicsSkills } from "@/src/db/migrations/schema";
import { desc, eq, sql } from "drizzle-orm";
import { getCachedColorCategorizedSkills } from "./skills";
import { unstable_cache } from "next/cache";
import { siteConfig } from "@/config/site";

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
    const skillsColored = await getCachedColorCategorizedSkills();
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

export const getCachedMotionGraphics = unstable_cache(
    async () => await getMotionGraphics(),
    ['motion-graphics'],
    {
        tags: ['motion-graphics'],
        revalidate: siteConfig.revalidateTime,
    }
);

export const getCachedMotionGraphicsFull = unstable_cache(
    async () => await getMotionGraphicsFull(),
    ['motion-graphics-full'],
    {
        tags: ['motion-graphics-full'],
        revalidate: siteConfig.revalidateTime,
    }
);
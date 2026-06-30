import { getDatabase } from "@/src/db";
import {
  motionGraphicsProjects,
  skills,
  motionGraphicsSkills,
} from "@/src/db/migrations/schema";
import { desc, eq, sql } from "drizzle-orm";
import { MotionGraphicsProject } from "../types/motion-graphics";

export async function getMotionGraphics(): Promise<MotionGraphicsProject[]> {
  return (await getDatabase())
    .select({
      id: motionGraphicsProjects.id,
      name: motionGraphicsProjects.name,
      description: motionGraphicsProjects.description,
      youtubeId: motionGraphicsProjects.youtubeId,
      publishDate: motionGraphicsProjects.publishDate,
      skills: sql<string[]>`array_agg(${skills.skill})`,
    })
    .from(motionGraphicsProjects)
    .innerJoin(
      motionGraphicsSkills,
      eq(motionGraphicsProjects.id, motionGraphicsSkills.project),
    )
    .innerJoin(skills, eq(motionGraphicsSkills.skill, skills.id))
    .groupBy(
      motionGraphicsProjects.id,
      motionGraphicsProjects.name,
      motionGraphicsProjects.description,
      motionGraphicsProjects.youtubeId,
      motionGraphicsProjects.publishDate,
    )
    .orderBy(desc(motionGraphicsProjects.publishDate));
}

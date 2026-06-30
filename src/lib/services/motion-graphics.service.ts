import { getMotionGraphics } from "@/src/lib/repos/motion-graphics.repo";
import { getColorCategorizedSkills } from "@/src/lib/services/skills.service";
import { MotionGraphicsProjectDto } from "../types/motion-graphics";

export async function getMotionGraphicsWithColoredSkills(): Promise<MotionGraphicsProjectDto[]> {
  let projects = await getMotionGraphics();
  const skillsColored = await getColorCategorizedSkills();
  projects.map((project) => {
    //@ts-ignore
    project.skills = project.skills.map((skill) => {
      return {
        color: skillsColored.filter((cs) => cs.skill === skill)[0].color,
        skill,
      };
    });
  });
  //@ts-ignore
  return projects;
}

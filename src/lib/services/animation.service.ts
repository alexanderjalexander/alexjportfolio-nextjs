import { getAnimationProjects } from "@/src/lib/repos/animation.repo";
import { getColorCategorizedSkills } from "@/src/lib/services/skills.service";
import { AnimationProjectDto } from "../types/animation";

export async function getAnimationProjectsWithColoredSkills(): Promise<AnimationProjectDto[]> {
  let projects = await getAnimationProjects();
  const skillsColored = await getColorCategorizedSkills();

  return projects.map((project) => ({
    ...project,
    skills: project.skills.map((skill) => {
      return {
        color: skillsColored.filter((cs) => cs.skill === skill)[0].color,
        skill,
      };
    }),
  }));
}

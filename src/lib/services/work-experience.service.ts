import { getWorkExperienceJobRows, getWorkExperienceSkillRows } from "@/src/lib/repos/work-experience.repo";
import { WorkExperienceJob, WorkExperienceJobDto } from "@/src/lib/types/work-experience";
import { getColorCategorizedSkills } from "@/src/lib/services/skills.service";

export async function getSkillsByJob(): Promise<Map<number, string[]>> {
  const rows = await getWorkExperienceSkillRows();
  return rows.reduce<Map<number, string[]>>((acc, row) => {
    if (!acc.has(row.job)) {
      acc.set(row.job, []);
    }

    acc.get(row.job)?.push(row.skill);
    return acc;
  }, new Map<number, string[]>())
}

export async function getWorkExperienceJobsWithSkills(): Promise<WorkExperienceJob[]> {
  const jobs = await getWorkExperienceJobRows();
  const skillsByJob = await getSkillsByJob();

  return jobs.map((job) => ({
    ...job,
    skills: skillsByJob.get(job.id) ?? [],
  }))
}

export async function getWorkExperienceJobsWithColoredSkills(): Promise<
  WorkExperienceJobDto[]
> {
  let jobs = await getWorkExperienceJobRows();
  const workExperienceSkills = await getWorkExperienceSkillRows();
  const skillsColored = await getColorCategorizedSkills();

  return jobs.map((job) => ({
    ...job,
    skills: workExperienceSkills
      .filter((element) => element.job === job.id)
      .map((element) => element.skill)
      .map((skill) => {
        let color = skillsColored.filter(
          (color_skill) => color_skill.skill === skill,
        )[0].color;
        return { color: color, skill: skill };
      }),
  }));
}
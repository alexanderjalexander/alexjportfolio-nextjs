import { getDatabase } from "@/src/db";
import {
  skills,
  workExperienceJobs,
  workExperienceSkills,
} from "@/src/db/migrations/schema";
import { desc, eq } from "drizzle-orm";
import { getColorCategorizedSkills } from "@/src/lib/data/skills";

export async function getWorkExperienceJobs() {
  return (await getDatabase())
    .select()
    .from(workExperienceJobs)
    .orderBy(
      desc(workExperienceJobs.jobEndDate),
      desc(workExperienceJobs.jobStartDate),
    );
}

export async function getWorkExperienceSkills() {
  return (await getDatabase())
    .select({
      job: workExperienceSkills.job,
      skill: skills.skill,
    })
    .from(workExperienceSkills)
    .innerJoin(skills, eq(skills.id, workExperienceSkills.skill));
}

interface WorkExperienceJob {
  id: number;
  jobTitle: string;
  jobStartDate: string;
  jobEndDate: string | null;
  jobCompany: string;
  jobLocation: string;
  responsibilities: string;
  skills: string[] | null | undefined;
}

export async function getWorkExperienceJobsSkills(): Promise<
  WorkExperienceJob[]
> {
  let jobs = await getWorkExperienceJobs();
  const workExperienceSkills = await getWorkExperienceSkills();

  for (let i = 0; i < jobs.length; i++) {
    let project = jobs[i];
    // @ts-ignore
    // Because adding a new thing to an object isn't fun
    project["skills"] = workExperienceSkills
      .filter((element) => element.job === project.id)
      .map((element) => element.skill);
  }

  //@ts-ignore
  return jobs;
}

interface WorkExperienceJobFull {
  id: number;
  jobTitle: string;
  jobStartDate: string;
  jobEndDate: string | null;
  jobCompany: string;
  jobLocation: string;
  responsibilities: string;
  skills:
    | {
        color: string;
        skill: string;
      }[]
    | null
    | undefined;
}
[];

export async function getWorkExperienceJobsSkillsFull(): Promise<
  WorkExperienceJobFull[]
> {
  let jobs = await getWorkExperienceJobs();
  const workExperienceSkills = await getWorkExperienceSkills();
  const skillsColored = await getColorCategorizedSkills();

  for (let i = 0; i < jobs.length; i++) {
    let job = jobs[i];
    // @ts-ignore
    // Because adding a new thing to an object isn't fun
    job["skills"] = workExperienceSkills
      .filter((element) => element.job === job.id)
      .map((element) => element.skill)
      .map((skill) => {
        let color = skillsColored.filter(
          (color_skill) => color_skill.skill === skill,
        )[0].color;
        return { color: color, skill: skill };
      });
  }

  //@ts-ignore
  return jobs;
}

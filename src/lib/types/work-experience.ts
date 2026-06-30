import { ColorCategorizedSkill } from "@/src/lib/types/skills";

export interface WorkExperienceSkill {
  job: number;
  skill: string;
}

export interface WorkExperienceJob {
  id: number;
  companyPictureKey: string | null | undefined;
  jobTitle: string;
  jobStartDate: string;
  jobEndDate: string | null;
  jobCompany: string;
  jobLocation: string;
  responsibilities: string;
  skills: string[];
}

export interface WorkExperienceJobDto {
  id: number;
  companyPictureKey: string | null | undefined;
  jobTitle: string;
  jobStartDate: string;
  jobEndDate: string | null;
  jobCompany: string;
  jobLocation: string;
  responsibilities: string;
  skills: ColorCategorizedSkill[];
}

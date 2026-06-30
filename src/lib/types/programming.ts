import { ColorCategorizedSkill } from "./skills";

export interface EndpointStatus {
  name: string;
  url: string | null;
  up: boolean;
  uptime_percent: number;
}

export interface ProgrammingProject{
  id: number;
  title: string;
  subtitle: string;
  description: string;
  repoLink: string | null;
  liveLink: string | null;
  skills:
    | string[]
    | null
    | undefined;
};


export interface ProgrammingProjectDto {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  repoLink: string | null;
  liveLink: string | null;
  skills:
    | ColorCategorizedSkill[]
    | null
    | undefined;
};

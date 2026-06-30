import { ColorCategorizedSkill } from "./skills";

export interface MotionGraphicsProject {
  id: number;
  name: string;
  description: string;
  youtubeId: string;
  publishDate: string;
  skills: string[];
}

export interface MotionGraphicsProjectDto {
  id: number;
  name: string;
  description: string;
  youtubeId: string;
  publishDate: string;
  skills: ColorCategorizedSkill[];
}

import { ColorCategorizedSkill } from "./skills";

export interface AnimationProject {
  id: number;
  name: string;
  description: string;
  youtubeId: string;
  publishDate: string;
  skills: string[];
}

export interface AnimationProjectDto {
  id: number;
  name: string;
  description: string;
  youtubeId: string;
  publishDate: string;
  skills: ColorCategorizedSkill[];
}

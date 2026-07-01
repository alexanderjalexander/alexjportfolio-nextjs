import { Metadata } from "next";

import { getAnimationProjectsWithColoredSkills } from "@/src/lib/services/animation.service";

export const metadata: Metadata = {
  title: "3D Animation",
};

export default async function Animation() {
  const animation_projects = await getAnimationProjectsWithColoredSkills();

  return (
    <div></div>
  );
}

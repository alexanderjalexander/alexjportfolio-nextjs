import { Metadata } from "next";

import { getMotionGraphicsWithColoredSkills } from "@/src/lib/services/motion-graphics.service";

export const metadata: Metadata = {
  title: "Motion Graphics",
};

export default async function Motion_Graphics() {
  const motionGraphicsProjects = await getMotionGraphicsWithColoredSkills();

  return (
    <div></div>
  );
}

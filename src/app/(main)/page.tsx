import { getSkillsCategoriesMap } from "@/src/lib/services/skills.service";

export default async function Home() {
  const skillsCategories = await getSkillsCategoriesMap();

  return (
    <div></div>
  );
}

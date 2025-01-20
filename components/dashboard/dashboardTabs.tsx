"use client"

import {Tab, Tabs} from "@heroui/tabs";
import SkillsTable from "@/components/dashboard/tables/skills_table";
import {skillsDataType, categoriesDataType, skillsCategoriesDataType} from "@/src/lib/admin/categories-and-skills";

export default function DashboardTabs({
    skills,
    categories,
    skillsCategories
}:{
    skills: skillsDataType,
    categories: categoriesDataType,
    skillsCategories: skillsCategoriesDataType,
}) {
    return (
        <Tabs aria-label={"Options"} radius={"md"} variant={"bordered"}
              classNames={{
                  tabList: "border-primary-700 dark:border-primary-400",
                  cursor: "group-data-[selected=true]:bg-primary-700 group-data-[selected=true]:dark:bg-primary-400",
              }}
        >
            <Tab key="skills" title="Skills">
                <SkillsTable skillsData={skills} />
            </Tab>
            <Tab key="categories" title="Categories">

            </Tab>
            <Tab key="skills-and-categories" title="Skills & Categories">

            </Tab>
        </Tabs>
    )
}
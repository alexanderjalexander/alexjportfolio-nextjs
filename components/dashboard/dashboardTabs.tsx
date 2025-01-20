"use client"

import {Tab, Tabs} from "@heroui/tabs";
import ActionableDataTable from "@/components/dashboard/tables/actionable_data_table";
import {tableDataType} from "@/src/lib/admin/categories-and-skills";

export default function DashboardTabs({
    skills,
    categories,
    skillsCategories
}:{
    skills: tableDataType,
    categories: tableDataType,
    skillsCategories: tableDataType,
}) {
    return (
        <Tabs aria-label={"Options"} radius={"md"} variant={"bordered"}
              classNames={{
                  tabList: "border-primary-700 dark:border-primary-400",
                  cursor: "group-data-[selected=true]:bg-primary-700 group-data-[selected=true]:dark:bg-primary-400",
              }}
        >
            <Tab key="skills" title="Skills">
                <ActionableDataTable inputData={skills} />
            </Tab>
            <Tab key="categories" title="Categories">
                <ActionableDataTable inputData={categories} />
            </Tab>
            <Tab key="skill-category-map" title="Skill-Category Mappings">
                <ActionableDataTable inputData={skillsCategories} />
            </Tab>
        </Tabs>
    )
}
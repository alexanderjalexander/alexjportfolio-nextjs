import {Header1Mono} from "@/components/text/headers";
import {PageWrapper} from "@/components/page-anim/pagewrapper";
import DashboardTabs from "@/components/dashboard/dashboardTabs";
import {Metadata} from "next";
import {getAllCategories, getAllSkillCategoryMappings, getAllSkills} from "@/src/lib/admin/categories-and-skills";

export const metadata: Metadata = {
    title: 'Admin Dashboard',
}

export default async function AdminHome({
    params,
}: {
    params: Promise<{ tab: string }>
}) {
    const categories = await getAllCategories();
    const skills = await getAllSkills();
    const mappings = await getAllSkillCategoryMappings();

    return <PageWrapper>
        <div className="pt-24">
            <div className="">
                <Header1Mono align={"left"} className={"mb-4"}>Dashboard</Header1Mono>
                <DashboardTabs
                    skills={skills}
                    categories={categories}
                    skillsCategories={mappings}
                />
            </div>
        </div>
    </PageWrapper>
}
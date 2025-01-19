import {Header1Mono} from "@/components/text/headers";
import {PageWrapper} from "@/components/page-anim/pagewrapper";
import Dashboard from "@/components/dashboard/dashboard";

export default function AdminHome() {
    return <PageWrapper>
        <div className="pt-24">
            <div className="">
                <Header1Mono align={"left"} className={"mb-4"}>Dashboard</Header1Mono>
                <Dashboard />
            </div>
        </div>
    </PageWrapper>
}
import {Header1Mono} from "@/components/headers";
import React from "react";
import {PageWrapper} from "@/components/pagewrapper";
import LoginButtons from "@/src/app/admin/login/loginbuttons";

export default function AdminLogin() {

    return <PageWrapper>
        <div className="h-screen flex items-center">
            <div className="h-min m-auto w-1/3">
                <Header1Mono>Log In</Header1Mono>
                <LoginButtons />
            </div>
        </div>
    </PageWrapper>
}
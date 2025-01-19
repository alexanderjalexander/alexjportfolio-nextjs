import {Header1Mono} from "@/components/text/headers";
import React from "react";
import {PageWrapper} from "@/components/page-anim/pagewrapper";
import LoginButtons from "@/src/app/admin/login/loginbuttons";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Admin Log In',
}

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
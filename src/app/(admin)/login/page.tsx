import { Header1Mono, Header2Mono, Header3Mono, SubheaderMono } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Metadata } from "next";
import LoginButtons from "./loginbuttons";

export const metadata: Metadata = {
  title: 'Login',
}

export default function Login() {
  return (
    <PageWrapper>
        <div className="h-screen flex items-center">
            <div className="h-min m-auto">
                <Header1Mono>Login</Header1Mono>
                <LoginButtons />
            </div>
        </div>
    </PageWrapper>
  )
}
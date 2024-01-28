import { Header1, Header1Mono, Header2Mono, Header3, SubheaderMono } from "@/components/headers";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { PageWrapper } from "@/components/pagewrapper";
import { title } from "@/components/primitives";
import { FadeInScroll } from "@/components/fadeinscroll";
import { Divider } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Video',
}

export default function Video() {
    return (
    	<PageWrapper>
    		{/* Intro Header */}
            <div className="h-screen flex items-center">
                <div className="h-min m-auto">
                    <Header1Mono className="pt-32 mb-5">Video Editing</Header1Mono>
                    <SubheaderMono>
                        <TypewriterWrapper text="A comprehensive history of all my YouTube and editing experience." />
                    </SubheaderMono>
                </div>
            </div>
    
    		{/* About Section??? */}
        	<FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono className="mb-5">About Me</Header2Mono>
            </FadeInScroll>
        </PageWrapper>
    );
}
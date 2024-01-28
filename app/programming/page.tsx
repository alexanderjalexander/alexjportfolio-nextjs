import { Header1, Header1Mono, Header2, Header3, SubheaderMono } from "@/components/headers";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { PageWrapper } from "@/components/pagewrapper";
import { title } from "@/components/primitives";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Programming',
}

export default function Programming() {
	return (
		<PageWrapper>
			{/* Intro Header */}
            <div className="h-screen flex items-center">
                <div className="h-min m-auto">
                    <Header1Mono className="mb-5">Video Editing</Header1Mono>
                    <SubheaderMono>
                        <TypewriterWrapper text="A comprehensive history of all my YouTube and editing experience." />
                    </SubheaderMono>
                </div>
            </div>
		</PageWrapper>
	);
}
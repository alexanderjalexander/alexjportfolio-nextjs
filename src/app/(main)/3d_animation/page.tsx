import { FadeInScroll } from "@/components/fadeinscroll";
import { Header1Mono, Header2Mono, SubheaderMono } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { makeCards } from "@/components/youtube_project_card";
import { getCachedAnimationFull } from "@/src/lib/data/animation";
import { Divider } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '3D Animation',
}

export const dynamic = 'force-dynamic';

export default async function Animation() {
	const animation_projects = makeCards(await getCachedAnimationFull());
	
	return (
		<PageWrapper>
			{/* Intro Header */}
			<div className="h-screen flex items-center">
                <div className="h-min m-auto">
                    <Header1Mono className="mb-5">3D Animation</Header1Mono>
                    <SubheaderMono>
                        <TypewriterWrapper text="Where even the most impossible of things can come to life" />
                    </SubheaderMono>
                </div>
            </div>

			{/* About Section */}
        	<FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono className="mb-5">About</Header2Mono>
                <p>3D Animation has always been a particularly interesting hobby of mine. In addition with Video Editing and Motion Graphics, I found that it has always filled the gap that those two disciplines could not. It has the ability to make raw models come to life, create luscious and intricate environments, </p>
            </FadeInScroll>

			{/* 3D Animation Cards Section */}
			<FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono>My Work</Header2Mono>
                <div className="flex flex-wrap justify-around content-center my-2 sm:my-4 gap-4 sm:gap-8">
                    {animation_projects}
                </div>
            </FadeInScroll>
		</PageWrapper>
	);
}
import { FadeInScroll } from "@/components/fadeinscroll";
import { Header1Mono, Header2Mono, SubheaderMono } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { getAnimationFull } from "@/src/lib/data/animation";
import { Divider } from "@nextui-org/react";
import { Metadata } from "next";
import VideoCardContent from "@/components/video_card_content";

export const metadata: Metadata = {
    title: '3D Animation',
}

export default async function Animation() {
	const animation_projects = await getAnimationFull();
	
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
            <VideoCardContent content={animation_projects} header={"My Work"} />
		</PageWrapper>
	);
}
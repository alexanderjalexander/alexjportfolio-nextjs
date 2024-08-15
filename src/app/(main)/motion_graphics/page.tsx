import { Header1Mono, Header2Mono, SubheaderMono } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import { Metadata } from "next";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { FadeInScroll } from "@/components/fadeinscroll";
import { Divider } from "@nextui-org/react";
import { getCachedMotionGraphicsFull } from "@/src/lib/data/motion";
import { makeCards } from "@/components/youtube_project_card";

export const metadata: Metadata = {
    title: 'Motion Graphics',
}

export default async function Motion_Graphics() {
	// TODO: Modal implementation of iframe for optimization
	// Use a skeleton to optimize loading and keep UI persistent.
	const motion_graphics_projects = makeCards(await getCachedMotionGraphicsFull());

	return (
		<PageWrapper>
			{/* Intro Header */}
            <div className="h-screen flex items-center">
                <div className="h-min m-auto">
                    <Header1Mono className="mb-5">Motion Graphics</Header1Mono>
                    <SubheaderMono>
                        <TypewriterWrapper text="Adjustment layers, chroma keys, typography, and VFX galore" />
                    </SubheaderMono>
                </div>
            </div>

			{/* About Section */}
        	<FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono className="mb-5">About</Header2Mono>
                <p>Motion Graphics is one of many influential disciplines that transformed the techniques of videography and filmmaking, and is unbelievably prevalent in modern content creation. We see it everywhere: flashy text animation, character walk cycles, design animations, etc. Motion Graphics has the power to take mere illustrative concepts to the next level by bringing it to life for all to watch.</p>
            </FadeInScroll>

			{/* Motion Graphics Work */}
            <FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono>My Work</Header2Mono>
                <div className="flex flex-wrap justify-around content-center my-2 sm:my-4 gap-4 sm:gap-8">
                    {motion_graphics_projects}
                </div>
            </FadeInScroll>
		</PageWrapper>
	);
}
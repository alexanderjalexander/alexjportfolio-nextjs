import { Header1Mono, SubheaderMono, Header2Mono } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { FadeInScroll } from "@/components/fadeinscroll";
import { Divider } from "@nextui-org/react";
import { Metadata } from "next";
import { getObjects } from "@/src/lib/data/graphic_design";
import GraphicDesignContent from "@/components/graphic_design_content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: 'Graphic Design',
}

export const revalidate = siteConfig.revalidateTime;

export default async function Graphic_Design() {

    let objects = (await getObjects())!.map((obj) => (obj.Key));
	
    return (
		<PageWrapper>
			{/* Intro Header */}
            <div className="h-screen flex items-center">
                <div className="h-min m-auto">
                    <Header1Mono className="mb-5">Graphic Design</Header1Mono>
                    <SubheaderMono>
                        <TypewriterWrapper text="Creating designs that attracts your attention and first click." />
                    </SubheaderMono>
                </div>
            </div>

			{/* About Section */}
        	<FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono className="mb-5">About</Header2Mono>
                <p>Whether it&apos;s for thumbnails, posters, or other promotional material, graphic design has the power to grab your attention from the first glance. It&apos;s one of the most fundamental pieces behind such disciplines such as content creation, marketing, UI/UX, etc. Throughout my time and experience with the discipline, the tenets and teachings of Graphic Design has played an undoubtedly fundamental role helping me make birthday posters for friends, thumbnails for YouTube videos, designing mockups for apps and icons, and so much more.</p>
            </FadeInScroll>

            {/* Graphic Design Work Section */}
            <GraphicDesignContent videos={objects}/>

		</PageWrapper>
	);
}
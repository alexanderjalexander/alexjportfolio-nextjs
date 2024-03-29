import { Header1Mono, Header2Mono, SubheaderMono } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import { Metadata } from "next";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { FadeInScroll } from "@/components/fadeinscroll";
import { Card, CardHeader, CardBody, CardFooter, Divider, Chip } from "@nextui-org/react";
import { getMotionGraphicsFull } from "@/src/lib/data/motion";

export const metadata: Metadata = {
    title: 'Motion Graphics',
}

export default async function Motion_Graphics() {
	const motion_graphics_projects = (await getMotionGraphicsFull()).map(
		(project) =>
		(<Card key={project.id} isBlurred className="basis-full md:basis-2/5 bg-primary-900 p-1 my-4">
			<CardHeader className="justify-between items-baseline">
				<div className="text-lg lg:text-lg font-bold">{project.name}</div>
				<div className="text-sm lg:text-sm opacity-70 italic">{project.publish_date}</div>
			</CardHeader>
			<CardBody>
				<iframe
					className="rounded-xl"
					width="100%"
					height="260"
					src={`https://www.youtube.com/embed/${project.youtube_id}`}
					allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				/>
				<div>{project.description}</div>
			</CardBody>
			<CardFooter className="flex-wrap">
				{project.skills.map(
					(skill, index) => 
					(<Chip key={index} className={`m-1 ${skill.color}`}>{skill.skill}</Chip>)
				)}
			</CardFooter>
		</Card>)
	);
	return (
		<PageWrapper>
			{/* Intro Header */}
            <div className="h-screen flex items-center">
                <div className="h-min m-auto">
                    <Header1Mono className="mb-5">Motion Graphics</Header1Mono>
                    <SubheaderMono>
                        <TypewriterWrapper text="Motion graphics central: the hub for all my motion graphics experimentation and projects." />
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
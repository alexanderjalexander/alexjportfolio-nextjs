import { Header1Mono, Header2Mono, SubheaderMono } from "@/components/headers";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { PageWrapper } from "@/components/pagewrapper";
import { Metadata } from "next";
import { FadeInScroll } from "@/components/fadeinscroll";
import { Button, Chip, Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";
import { GithubIcon } from "@/components/icons";
import * as db from "@/src/lib/data/programming";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: 'Programming',
}

export const revalidate = siteConfig.revalidateTime;

export default async function Programming() {
	const programmingProjects = await db.getProgrammingProjectsSkillsFull();
    
    return (
		<PageWrapper>
			{/* Intro Header */}
            <div className="h-screen flex items-center">
                <div className="h-min m-auto">
                    <Header1Mono className="mb-5">Programming</Header1Mono>
                    <SubheaderMono>
                        <TypewriterWrapper text={"public static void main(String args[]) { System.out.println(\"Hello World!\"); }"} />
                    </SubheaderMono>
                </div>
            </div>

            {/* About Section */}
        	<FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono className="mb-5">About</Header2Mono>
                <p>Programming has not only been the primary facet of my studies in Computer Science, but has also been a distinct passion of mine ever since I started learning about it in middle school and high school. From developing games to creating parsers and interpreters, I&apos;ve always been super interested in developing my own programs and creating awesome products for users.</p>
            </FadeInScroll>

            {/* Programming Project Cards Section */}
            <FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono className="mb-5">Projects</Header2Mono>
                {programmingProjects.reverse().map(
                    (project) => 
                    (<Card key={project.id} isBlurred className="bg-primary-900 my-8">
                        <CardHeader className="block">
                            <div className="font-bold text-lg lg:text-lg">{project.title}</div>
                            <div className="text-sm lg:text-sm opacity-70">{project.subtitle}</div>
                        </CardHeader>
                        <CardBody>
                            <div>{project.description}</div>
                        </CardBody>
                        <CardFooter className="flex flex-wrap">
                            <div >
                                {//@ts-ignore
                                project.skills.map(
                                    //@ts-ignore
                                    (item, index) => 
                                    (<Chip key={index} className={'m-1 ' + item.color}>
                                        {item.skill}
                                    </Chip>)
                                )}
                            </div>
                            
                            {project.link 
                                ? (<Button 
                                    href={project.link}
                                    as={Link}
                                    target="_blank"
                                    color="primary"
                                    startContent={<GithubIcon />}
                                    showAnchorIcon
                                    variant="solid"
                                    className="text-foreground bg-primary-700 right-0 ml-auto w-full my-2 sm:w-auto">
                                        View Project
                                    </Button>) 
                                : (<div></div>)}
                        </CardFooter>
                    </Card>)
                )}
            </FadeInScroll>

		</PageWrapper>
	);
}
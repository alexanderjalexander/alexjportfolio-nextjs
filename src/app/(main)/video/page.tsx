import { Header1, Header1Mono, Header2Mono, Header3, Header3Mono, SubheaderMono } from "@/components/headers";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { PageWrapper } from "@/components/pagewrapper";
import { FadeInScroll } from "@/components/fadeinscroll";
import { Accordion, AccordionItem, Card, Divider, Image } from "@nextui-org/react";
import { Metadata } from "next";

// Importing video file declaration
import * as vid from "@/src/lib/data/videos"

export const metadata: Metadata = {
    title: 'Video',
}

export default async function Video() {
    const vids = await vid.getPersonalVideos();
    const commissions = await vid.getCommissions();
    const commissioners = await vid.getCommissioners();

    const commissionGroups = [];

    for (let x of commissioners) {
        commissionGroups.push({
            creator: x.creator,
            commissions: commissions.filter(
                (item) => { return (item.person === x.creator) ? true : false }
            )
        })
    }
    
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
    
    		{/* About Section */}
        	<FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono className="mb-5">About</Header2Mono>
                <p>Without a doubt, video editing has been one of my most prominent hobbies. I enjoy exploring how manipulation of certain video clips/shots allows for conveying specific messages, illlustrating stories, or implementing certain themes. Having experience with After Effects, VEGAS Pro, and Premiere Pro, I enjoy creating my own films and montages to create content and portray my best creative vision.</p>
            </FadeInScroll>

            {/* Personal Videos */}
            <FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono>My YouTube Videos</Header2Mono>
                <div className="flex flex-wrap justify-center content-center my-2 sm:my-4 gap-4 sm:gap-8">
                    {vids.map(
                        (item, index) =>
                        (<a key={index} target="_blank" href={vid.getVideoURL(item.url)} rel="noopener noreferrer">
                            <Card isPressable className="w-[160px] sm:w-[320px]">
                                <Image 
                                    isZoomed
                                    alt=""
                                    src={vid.getVideoThumbnail(item.url)}
                                    className="z-0 w-full h-full object-cover"
                                    height={160}
                                    width={320}
                                />
                            </Card>
                        </a>)
                    )}
                    
                </div>
            </FadeInScroll>

            {/* Database Fetched Commissions */}
            <FadeInScroll>
                <Divider className="my-10" />
                <Header2Mono>Commissions</Header2Mono>
                
                {commissionGroups.map(
                    (item, index) => 
                    (<FadeInScroll className="my-8" key={index}>
                        <Header3Mono>{item.creator}</Header3Mono>
                        <div className="flex flex-wrap justify-center content-center my-2 sm:my-4 gap-4 sm:gap-8">
                            {item.commissions.map(
                                (innerItem, innerIndex) =>
                                (<a key={innerIndex} target="_blank" href={vid.getVideoURL(innerItem.url)} rel="noopener noreferrer">
                                    <Card isPressable className="w-[160px] sm:w-[320px] bg-blue-500 backdrop-blur-sm">
                                        <Image
                                            isZoomed
                                            alt=""
                                            src={vid.getVideoThumbnail(innerItem.url)}
                                            className="z-0 w-full h-full object-cover opacity-0"
                                            height={160}
                                            width={320}
                                        />
                                    </Card>
                                </a>)
                            )}
                        </div>
                    </FadeInScroll>)
                )}

            </FadeInScroll>
        </PageWrapper>
    );
}
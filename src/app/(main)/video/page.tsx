import { Header1Mono, Header2Mono, Header3Mono, SubheaderMono } from "@/components/headers";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { PageWrapper } from "@/components/pagewrapper";
import { FadeInScroll } from "@/components/fadeinscroll";
import { Card, Divider, Image } from "@nextui-org/react";
import { Metadata } from "next";


// Importing video file declaration
import * as vid from "@/src/lib/data/videos"

export const metadata: Metadata = {
    title: 'Video',
}

export default async function Video() {
    let vids:{url:string,date:string}[];
    let commissions:vid.CommissionsObject;
    try {
        vids = await vid.getPersonalVideos();
        commissions = await vid.getCommissions()
    } catch(e) {
        throw Error('500: ' + e);
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
                                    alt={`Video ${index} Link`}
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
                
                {Object.keys(commissions).map(
                    (commissioner, index) => 
                    (<FadeInScroll className="my-8" key={index}>
                        <Header3Mono>{commissioner}</Header3Mono>
                        <div className="flex flex-wrap justify-center content-center my-2 sm:my-4 gap-4 sm:gap-8">
                            {(commissions[commissioner].map(
                                (video, innerIndex) => 
                                (<a key={innerIndex} target="_blank" href={vid.getVideoURL(video.url)} rel="noopener noreferrer">
                                <Card isPressable className="w-[160px] sm:w-[320px] bg-blue-500 backdrop-blur-sm">
                                    <Image
                                        isZoomed
                                        alt={`${commissioner} Video ${index}`}
                                        src={vid.getVideoThumbnail(video.url)}
                                        className="z-0 w-full h-full object-cover opacity-0"
                                        height={160}
                                        width={320}
                                    />
                                </Card>
                            </a>)   
                            ))}
                        </div>
                    </FadeInScroll>)
                )}

            </FadeInScroll>
        </PageWrapper>
    );
}
import { Header1Mono, SubheaderMono } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function Home() {
	return (
		<PageWrapper>
			<div className="hero container max-w-screen-lg mx-auto pb-10 flex">
				<Image 
					as={NextImage}
					width={300}
					height={300}
					removeWrapper={true}
					shadow="lg"
					alt="Profile Picture of AJ"
					src="/AJPicrew.png"
					loading="eager"
					radius="full"
					className="mx-auto border-8 border-primary-50"
				/>
			</div>
			<Header1Mono>AJ&apos;s Portfolio</Header1Mono>
			<SubheaderMono>
				<TypewriterWrapper 
				text="An interactive portfolio of my projects, accomplishments, and hobbies :)"/>
			</SubheaderMono>
		</PageWrapper>
	);
}

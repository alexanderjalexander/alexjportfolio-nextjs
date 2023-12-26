import { Header1Mono, SubheaderMono } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import TypewriterWrapper from "@/components/typewriterwrapper";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function Home() {
	return (
		<PageWrapper>
			<div className="mx-auto">
				<Image 
					as={NextImage}
					width={300}
					height={300}
					alt="Profile Picture of AJ"
					src="/AJPicrew.png"
					radius="full"
					className="my-5 mx-auto w-50% justify-center"
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

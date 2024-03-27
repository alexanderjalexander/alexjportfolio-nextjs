import { Header1Mono, Subheader } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '3D Animation',
}


export default function Animation() {
	return (
		<PageWrapper>
			<Header1Mono className="pt-32">3D Animation</Header1Mono>
			<Subheader>Under construction!</Subheader>
		</PageWrapper>
	);
}
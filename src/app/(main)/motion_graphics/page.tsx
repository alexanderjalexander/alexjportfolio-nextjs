import { Header1Mono, Subheader } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Motion Graphics',
}

export default function Motion_Graphics() {
	return (
		<PageWrapper>
			<Header1Mono className="pt-32">Motion Graphics</Header1Mono>
			<Subheader>Under construction!</Subheader>
		</PageWrapper>
	);
}
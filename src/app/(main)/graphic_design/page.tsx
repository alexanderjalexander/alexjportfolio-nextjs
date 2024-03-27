import { Header1Mono, Subheader } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Graphic Design',
}

export default function Graphic_Design() {
	return (
		<PageWrapper>
			<Header1Mono className="pt-32">Graphic Design</Header1Mono>
			<Subheader>Under construction!</Subheader>
		</PageWrapper>
	);
}
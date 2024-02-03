import { Header1, Header1Mono, Header2, Header3, Subheader } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import { title } from "@/components/primitives";
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
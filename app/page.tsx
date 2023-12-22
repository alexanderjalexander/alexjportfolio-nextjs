import { Header1, Header1Mono, Header2, Header3, Subheader } from "@/components/headers";
import { PageWrapper } from "@/components/pagewrapper";
import { title } from "@/components/primitives";
import { motion } from "framer-motion"

export default function Home() {
	return (
		<PageWrapper>
			<Header1Mono text="AJ's Portfolio"/>
		</PageWrapper>
	);
}

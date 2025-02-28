import { Navbar } from "@/components/layout/navbar";
import { Divider } from "@heroui/divider";
import Footer from "@/components/layout/footer";
import React from "react";

export default function RootLayout({children,}: {children: React.ReactNode;}) {
	return (
		<div>
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			<Divider className="my-10" />
			<Footer />
		</div>
	)
}
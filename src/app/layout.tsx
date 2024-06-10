import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `${siteConfig.name} - %s`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({children,}: {children: React.ReactNode;}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={'min-h-screen '+fontSans.variable+' font-sans antialiased' + 
			' bg-fixed bg-gradient-to-tr from-primary-900 via-background to-primary-900'}>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					{children}
				</Providers>
			</body>
		</html>
	);
}

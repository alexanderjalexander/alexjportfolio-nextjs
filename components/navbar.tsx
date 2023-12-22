"use client"

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";

import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon, LinkedInIcon,
} from "@/components/icons";
import { useState } from "react";


import { fontMono } from "@/config/fonts";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	return (
		<NextUINavbar 
			isBordered 
			maxWidth="xl" 
			position="sticky" 
			isMenuOpen={isMenuOpen} 
			onMenuOpenChange={setIsMenuOpen}
			className="z-10"
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className={'font-bold '+fontMono.variable+' font-mono font-weight-800 text-xl text-inherit'}>AJ</p>
					</NextLink>
				</NavbarBrand>

				<ul className="hidden min-[920px]:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<Link
								as={NextLink}
								className={clsx(
									linkStyles({ color: "foreground" }),
									"hover:text-primary-100 hover:font-medium",
									"transition ease-in-out"
								)}
								color="foreground"
								isBlock
								href={item.href}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent className="basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon
						className={clsx(
							linkStyles({ color: "foreground" }),
							"hover:text-primary-100 hover:font-medium",
							"transition ease-in-out"
						)} 
					/>
				</Link>

				<Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
					<LinkedInIcon 
						className={clsx(
							linkStyles({ color: "foreground" }),
							"hover:text-primary-100 hover:font-medium",
							"transition ease-in-out"
						)} 
					/>
				</Link>

				<ThemeSwitch />
				<NavbarMenuToggle className="min-[920px]:hidden hover:text-primary-100 transition-all ease-in-out" />
			</NavbarContent>

			<NavbarMenu className="overflow-auto scrollbar-hide">
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link 
								isBlock
								as={NextLink}
								onClick={() => setIsMenuOpen(false)} 
								href={item.href} color="foreground" size="lg"
								className={clsx(
									linkStyles({ color: "foreground" }),
									"hover:text-primary-100 hover:font-medium",
									"transition ease-in-out"
								)}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};

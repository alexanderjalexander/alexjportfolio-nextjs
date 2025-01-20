"use client"

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";

import clsx from "clsx";

import { ThemeSwitch } from "@/components/layout/theme-switch";
import { siteConfig } from "@/config/site";
import { fontMono } from "@/config/fonts";

import { useState } from "react";
import {useAuthContext} from "@/components/AuthContext";
import {signOutUser} from "@/src/auth/firebaseFunctions";
import {logoutAction} from "@/src/app/actions";
import {usePathname} from "next/navigation";

export const NavbarDashboard = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { user } = useAuthContext();
	const pathname = usePathname();

	async function handleSignOut() {
		await signOutUser();
		await logoutAction();
	}

	return (
		<div className="w-full top-0 z-10 fixed">
			<NextUINavbar 
				isBordered 
				maxWidth="full"
				isMenuOpen={isMenuOpen} 
				onMenuOpenChange={setIsMenuOpen}
				className="">
				<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
					<NavbarBrand as="li" className="gap-3 max-w-fit">
						<NextLink className="flex justify-start items-center gap-1" href={"/admin/"}>
							<p className={'font-bold '+fontMono.variable+' font-mono font-weight-800 text-xl text-inherit'}>AJ: Admin</p>
						</NextLink>
					</NavbarBrand>

					<ul className="hidden min-[920px]:flex gap-4 justify-start ml-2">
						{siteConfig.adminNavItems.map((item) => (
							<NavbarItem key={item.href}>
								<Link
									as={NextLink}
									className={clsx(
										linkStyles({ color: "foreground" }),
										"hover:text-primary-100 hover:font-medium",
										"transition ease-in-out rounded-xl",
										(item.href === pathname ? "bg-primary-700" : "")
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
					{user === null && pathname !== "/admin/login" && (
						<NavbarItem>
							<Link
								as={NextLink}
								className={clsx(
									linkStyles({ color: "foreground" }),
									"hover:text-primary-100 hover:font-medium",
									"transition ease-in-out rounded-xl cursor-pointer",
									('/admin/login' === pathname ? "bg-primary-700" : "")
								)}
								color="foreground"
								isBlock
								href={"/admin/login"}
							>
								Log In
							</Link>
						</NavbarItem>
					)}
					{user !== null && (
						<div className={'flex flex-row justify-end gap-4 items-center'}>
							<NavbarItem>
								<Link
									className={clsx(
										linkStyles({ color: "foreground" }),
										"hover:text-primary-100 hover:font-medium",
										"transition ease-in-out rounded-xl cursor-pointer"
									)}
									color="foreground"
									isBlock
									onPress={handleSignOut}
								>
									Log Out
								</Link>
							</NavbarItem>
						</div>
					)}
					<ThemeSwitch />
					<NavbarMenuToggle className="min-[920px]:hidden hover:text-primary-100 transition-all ease-in-out" />
				</NavbarContent>

				<NavbarMenu className="overflow-auto scrollbar-hide">
					<div className="mx-4 mt-2 flex flex-col gap-2">
						{siteConfig.adminNavItems.map((item, index) => (
							<NavbarMenuItem key={`${item}-${index}`}>
								<Link 
									isBlock
									as={NextLink}
									onPress={() => setIsMenuOpen(false)}
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
		</div>
	);
};

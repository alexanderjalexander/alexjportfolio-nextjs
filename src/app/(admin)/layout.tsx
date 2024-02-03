import { NavbarDashboard } from "@/components/navbar_dashboard";
import { fontSans } from "@/config/fonts";

export default function Layout({children,}: {children: React.ReactNode;}) {
	return (
		<div>
			<NavbarDashboard />
			<main className={'container '+fontSans.variable+' mx-auto max-w-7xl px-6 flex-grow'}>
				{children}
			</main>
		</div>
	);
}

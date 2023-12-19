export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "AJ's Portfolio",
	description: "A comprehensive website of all my projects/hobbies/accomplishments.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Programming",
			href: "/programming",
		},
		{
			label: "Video",
			href: "/video",
		},
		{
			label: "Motion Graphics",
			href: "/motion_graphics",
		},
		{
			label: "Graphic Design",
			href: "/graphic_design",
		},
		{
			label: "3D Animation",
			href: "/3d_animation",
		},
	],
	links: {
		github: "https://github.com/alexanderjalexander",
		linkedin: "https://www.linkedin.com/in/alexander-j-27144720b/"
	},
};

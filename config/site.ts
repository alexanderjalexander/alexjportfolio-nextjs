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
			label: "Motion",
			href: "/motion_graphics",
		},
		{
			label: "Graphics",
			href: "/graphic_design",
		},
		{
			label: "3D Animation",
			href: "/3d_animation",
		},
		{
			label: "API",
			href: "/api_reference",
		},
	],
	adminNavItems: [
		{
			label: "Main Site",
			href: "/",
		},
		{
			label: "Dashboard",
			href: "/admin",
		},
	],
	activities: [
		{
			label: "Programming",
			href: "/programming",
			img: "/Programming.png",
		},
		{
			label: "Video",
			href: "/video",
			img: "/VideoEditing.png",
		},
		{
			label: "Motion Graphics",
			href: "/motion_graphics",
			img: "/MotionGraphics.png",
		},
		{
			label: "Graphic Design",
			href: "/graphic_design",
			img: "/GraphicDesign.png",
		},
		{
			label: "3D Animation",
			href: "/3d_animation",
			img: "/Animation.png",
		},
	],
	links: {
		github: "https://github.com/alexanderjalexander",
		linkedin: "https://www.linkedin.com/in/alexander-j-27144720b/"
	}
};

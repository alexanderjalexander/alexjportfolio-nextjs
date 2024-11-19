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
		{
			label: "API",
			href: "/api_reference",
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
	},
	revalidateTime: (60*60*24) // 60 seconds/min * 60 min/hr * 24 hr/day = 86400 sec
};

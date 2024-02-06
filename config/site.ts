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
	skills: {
		programmingsoftware: [
			{ label: "Github" },
			{ label: "IntelliJ IDEA" },
			{ label: "Eclipse" },
			{ label: "VirtualBox" },
			{ label: "Microsoft Office" },
			{ label: "VSCode" },
			{ label: "PyCharm" },
			{ label: "DataGrip" },
			{ label: "WebStorm" },
			{ label: "Google Workspace" },
		],
		creativesoftware: [
			{ label: "VEGAS Pro" },
			{ label: "Premiere Pro" },
			{ label: "After Effects" },
			{ label: "Photoshop" },
			{ label: "Source Filmmaker" },
			{ label: "Blender" },
		],
		languages: [
			{ label: "Java" },
			{ label: "OCaml" },
			{ label: "C++" },
			{ label: "C" },
			{ label: "C#" },
			{ label: "Groovy" },
			{ label: "Scheme" },
			{ label: "Python" },
			{ label: "Bash" },
			{ label: "ARMv8" },
			{ label: "HTML" },
			{ label: "CSS" },
			{ label: "JS" },
			{ label: "TypeScript" },
		],
		databases: [
			{ label: "PostGreSQL" },
			{ label: "MongoDB" },
		],
		frameworks: [
			{ label: "Next.js" },
			{ label: "Node.js" },
			{ label: "Mantine" },
			{ label: "NextUI" },
			{ label: "Tailwind CSS" },
			{ label: "Framer Motion" },
		],
		miscellaneous: [
			{ label: "Hardware Repair/Assembly" },
			{ label: "Hardware Diagnostics" },
		]

	},
	links: {
		github: "https://github.com/alexanderjalexander",
		linkedin: "https://www.linkedin.com/in/alexander-j-27144720b/"
	},
};

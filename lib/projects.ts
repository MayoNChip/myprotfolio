import guruImage from "../public/guru.png";
import ChatAppImage from "../public/angularTodos.png";
import DebateItImage from "../public/debateit.png";
import { StaticImageData } from "next/image";
import reactLogo from "../public/reactlogo.png";
import jsLogo from "../public/jslogo.png";
import cssLogo from "../public/csslogo.png";
import nextLogo from "../public/next.svg";
import nodeJsLogo from "../public/nodejslogo.png";
import tailwindLogo from "../public/tailwindlogo.png";
import tsLogo from "../public/Typescript_logo_2020.svg";
import expressLogo from "../public/Expressjs.png";
import chakraLogo from "../public/chakra.png";
import angularLogo from "../public/angular.png";

type Project = {
	id: number;
	title: string;
	description: string;
	tags: TagNames[];
	app_url?: string;
	repository_url?: string;
	image: StaticImageData;
	elementId: string;
};

// Convert the tags array to a mapped type
type TagNames = (typeof tags)[number]["name"]; // Gets the type of an element in the tags array

// Extract tag names as a union type

export const tags = [
	{
		name: "React",
		logo: reactLogo,
	},
	{
		name: "Next",
		logo: nextLogo,
	},
	{
		name: "TailwindCSS",
		logo: tailwindLogo,
	},
	{
		name: "Typescript",
		logo: tsLogo,
	},
	{
		name: "Node",
		logo: nodeJsLogo,
	},
	{
		name: "Express",
		logo: expressLogo,
	},

	{
		name: "Javascript",
		logo: jsLogo,
	},
	{
		name: "CSS",
		logo: cssLogo,
	},
	{
		name: "ChakraUI",
		logo: chakraLogo,
	},
	{
		name: "AngularJS",
		logo: angularLogo,
	},
	{
		name: "Frontend",
	},
	{
		name: "Backend",
	},
	{
		name: "Full Stack",
	},
	{
		name: "postgreSQL",
	},
	{
		name: "MongoDB",
	},
];

export const getProjectTags = (project: Project) => {
	return tags.filter((tag) => project.tags.includes(tag.name));
};

export const projects: Project[] = [
	{
		id: 1,
		elementId: "guru",
		title: "guru - Grocery shop",
		description: "some description",
		tags: ["React", "ChakraUI", "Frontend", "Javascript"],
		repository_url: "https://github.com/MayoNChip/group-project-frontend",
		image: guruImage,
	},
	{
		id: 2,
		title: "do! - Todo's App",
		elementId: "do",
		description: "To-do app.",
		tags: ["AngularJS", "TailwindCSS", "Frontend"],
		repository_url: "https://github.com/MayoNChip/angular-todoapp",
		app_url: "https://angular-todoapp-idoc.vercel.app/",
		image: ChatAppImage,
	},
	{
		id: 3,
		title: "Pet Adoption App",
		elementId: "pet",
		description: "Pet Adoption.",
		tags: ["React", "Full Stack", "ChakraUI", "MongoDB", "Express"],
		app_url: "https://full-stack-pet-adoption-mayo-n-chip.vercel.app/",
		repository_url:
			"https://github.com/MayoNChip/full-stack-pet-adoption-MayoNChip",
		image: guruImage,
	},
	{
		id: 4,
		title: "Debate It",
		elementId: "debate",
		description: "some description",
		tags: ["AngularJS", "TailwindCSS", "Full Stack"],
		app_url: "http://www.google.com",
		repository_url: "",
		image: DebateItImage,
	},
	{
		id: 5,
		title: "Shiftin'",
		elementId: "shiftin",
		description:
			"Shiftin' is an application for scheduling shifts and work force management.",
		tags: ["Next", "React", "TailwindCSS", "Full Stack", "postgreSQL"],
		app_url: "http://www.google.com",
		repository_url: "",
		image: ChatAppImage,
	},
];

export type project = (typeof projects)[0];

import guruImage from "../public/guru.png";
import ChatAppImage from "../public/angularTodos.png";
import DebateItImage from "../public/debateit.png";
import { StaticImageData } from "next/image";

type Project =
	| {
			title: string;
			description: string;
			tags: string[];
			app_url: string;
			repository_url: string;
			image: StaticImageData;
			isLive: true;
	  }
	| {
			title: string;
			description: string;
			tags: string[];
			repository_url: string;
			image: StaticImageData;
			isLive: false;
	  };

export const projects: Project[] = [
	{
		title: "guru - Grocery shop",
		description: "some description",
		tags: ["React", "ChakraUI", "Frontend"],
		repository_url: "http://www.google.com",
		image: guruImage,
		isLive: false,
	},
	{
		title: "do! - Todo's App",
		description: "To-do app.",
		tags: ["AngularJS", "TailwindCSS", "Frontend"],
		repository_url: "https://github.com/MayoNChip/angular-todoapp",
		app_url: "https://angular-todoapp-idoc.vercel.app/",
		image: ChatAppImage,
		isLive: true,
	},
	{
		title: "Pet Project",
		description: "Pet Adoption.",
		tags: ["React", "Frontend", "Backend", "ChakraUI", "MongoDB", "Express"],
		app_url: "https://full-stack-pet-adoption-mayo-n-chip.vercel.app/",
		repository_url:
			"https://github.com/MayoNChip/full-stack-pet-adoption-MayoNChip",
		image: guruImage,
		isLive: true,
	},
	{
		title: "Debate It",
		description: "some description",
		tags: ["AngularJS", "TailwindCSS", "Full Stack"],
		app_url: "http://www.google.com",
		repository_url: "",
		image: DebateItImage,
		isLive: true,
	},
];

export type project = (typeof projects)[0];

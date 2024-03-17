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
import postgresLogo from "../public/postgreslogo.png";
import mongoDBLogo from "../public/mongodblogo.png";
import framerMotionLogo from "../public/framermotion.svg";
import bestPalsProject from "../public/bestpals.png";

export type Project = {
	id: number;
	title: string;
	description: string;
	tags: TagNames[];
	app_url?: string;
	example_user?: string;
	repository_url?: string;
	image: StaticImageData;
	elementId: string;
	hosting?: {
		frontend?: string;
		backend?: string;
	};
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
		logo: postgresLogo,
	},
	{
		name: "MongoDB",
		logo: mongoDBLogo,
	},
	{
		name: "FramerMotion",
		logo: framerMotionLogo,
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
		description:
			"guru is a grocery shop full stack project, it was a group project as part of my bootcamp at ITC israel. I worked on the frontend side of the project. ",
		tags: ["React", "ChakraUI", "Frontend", "Javascript"],
		repository_url: "https://github.com/MayoNChip/group-project-frontend",
		image: guruImage,
	},
	{
		id: 2,
		title: "do! - Todo's App",
		elementId: "do",
		description:
			"A to do app that was made to learn and practice angular. It was made with angular and tailwindcss and took advantage of the jsonplaceholder api to allow users to login and manage todos. below is an email to login for testing (password does not matter, any 6 characters or more will do). hosted on Vercel.",
		tags: ["AngularJS", "TailwindCSS", "Frontend", "Typescript"],
		example_user: "Telly.Hoeger@billy.biz",
		repository_url: "https://github.com/MayoNChip/angular-todoapp",
		app_url: "https://angular-todoapp-idoc.vercel.app/",
		image: ChatAppImage,
		hosting: {
			frontend: "Vercel",
		},
	},
	{
		id: 3,
		title: "BestPals - Pet Adoption App",
		elementId: "pet",
		description:
			"BestPals is a pet adoption app. Made with React and ChakraUI for the frontend, mongoDB, express and cloudinary for the backend. originally it was coded in javascript and later migrated to typescript. users can foster or adopt pets. The administrator can add and edit pets and see the admin dashboard. You are welcome to register and try it out.",
		tags: ["React", "Full Stack", "ChakraUI", "MongoDB", "Express"],
		app_url: "https://full-stack-pet-adoption-mayo-n-chip.vercel.app/",
		repository_url:
			"https://github.com/MayoNChip/full-stack-pet-adoption-MayoNChip",
		image: bestPalsProject,
		hosting: {
			frontend: "Vercel",
			backend: "AWS",
		},
	},
	{
		id: 4,
		title: "Debate It",
		elementId: "debate",
		description:
			"Debate It is a live debating app. Made with AngularJS and TailwindCSS for the frontend, mySQL, express and some pyton for the backend. it utilizes socket.io for live chat and peers for the video call. users can create and join rooms as debaters, watch live debates that are currently in progress and chat with other people. users can also watch previous debate sessions in the archives.",
		tags: ["AngularJS", "TailwindCSS", "Full Stack", "mySQL"],
		app_url: "http://www.debateit.app",
		repository_url: "",
		image: DebateItImage,
		hosting: {
			frontend: "AWS",
			backend: "AWS",
		},
	},
	// {
	// 	id: 5,
	// 	title: "Shiftin'",
	// 	elementId: "shiftin",
	// 	description:
	// 		"Shiftin' is an application for scheduling shifts and work force management.",
	// 	tags: ["Next", "React", "TailwindCSS", "Full Stack", "postgreSQL"],
	// 	app_url: "http://www.google.com",
	// 	repository_url: "",
	// 	image: ChatAppImage,
	// },
];

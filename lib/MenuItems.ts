import AboutMe from "../components/AboutMe";
import Homepage from "../app/_components/Homepage";
import Projects from "../app/_components/Projects";
import ContactMeForm from "../app/_components/ContactMe";

export const menuItems = [
	{
		id: 1,
		title: "Home",
		idName: "home",
		path: "/",
		component: Homepage,
	},
	{
		id: 2,
		title: "About Me",
		idName: "about-me",
		path: "/aboutme",
		component: AboutMe,
	},
	{
		id: 3,
		title: "Projects",
		idName: "projects",
		path: "/projects",
		component: Projects,
	},
	{
		id: 4,
		title: "Contact",
		idName: "contact",
		path: "/contactme",
		component: ContactMeForm,
	},
];

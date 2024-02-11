// import { createRef, useState } from "react";
// import ContactMeForm from "../app/contactme/ContactMeForm";
// import ProjectList from "../app/projects/_components/ProjectList";
// import AboutMe from "../components/AboutMe";
// import Homepage from "../components/Homepage";

// function useMenu() {
// 	const [menuItemIndex, setMenuItemIndex] = useState(0);

// 	const menuItems = [
// 		{
// 			id: 1,
// 			title: "Home",
// 			idName: "home",
// 			path: "/",
// 			component: Homepage,
// 		},
// 		{
// 			id: 2,
// 			title: "About Me",
// 			idName: "about-me",
// 			path: "/aboutme",
// 			component: AboutMe,
// 		},
// 		{
// 			id: 3,
// 			title: "Projects",
// 			idName: "projects",
// 			path: "/projects",
// 			component: ProjectList,
// 		},
// 		{
// 			id: 4,
// 			title: "Contact",
// 			idName: "contact",
// 			path: "/contactme",
// 			component: ContactMeForm,
// 		},
// 	];
// 	interface RefsMap {
// 		[key: number]: React.RefObject<HTMLDivElement>;
// 	}
// 	const refs = menuItems.reduce((acc: RefsMap, value) => {
// 		acc[value.id] = createRef<HTMLDivElement>();
// 		return acc;
// 	}, {});

// 	return {
// 		menuItemIndex,
// 		setMenuItemIndex,
// 		menuItems,
// 		refs,
// 	};
// }

// export default useMenu;

import React from "react";

function useMenu() {
	return <div>hello</div>;
}

export default useMenu;

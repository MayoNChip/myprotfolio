"use client";
import { useContext, useEffect, useState } from "react";
import { GlobalContext, InitialContext } from "../context/GlobalContext";

// type Props = {
// 	isInViewArray?: Record<
// 		"home" | "aboutme" | "projects" | "contactme",
// 		boolean
// 	>;
// };

const defaultRoutes = [
	{
		id: 1,
		title: "Home",
		idName: "home",
		path: "/",
	},
	{
		id: 2,
		title: "About Me",
		idName: "aboutme",
		path: "/aboutme",
	},
	{
		id: 3,
		title: "Projects",
		idName: "projects",
		path: "/projects",
	},
	{
		id: 4,
		title: "Contact",
		idName: "contactme",
		path: "/contactme",
	},
];

type Route = (typeof defaultRoutes)[0];

function useNav() {
	const {
		setInViewComponentId,
		refs,
		isHeroInView,
		isAboutMeInView,
		isProjectsInView,
		isContactMeInView,
	} = useContext(GlobalContext) as InitialContext;
	const [navbarVisable, setNavbarVisable] = useState(true);
	const [lastYPos, setLastYPos] = useState(0);
	const [routeByClick, setRouteByClick] = useState(false);

	// { isInViewArray }: Props

	const [routes, setRoutes] = useState([
		{
			id: 1,
			ref: refs[0].ref,
			isInView: isHeroInView,
			title: "Home",
		},
		{
			id: 2,
			ref: refs[1].ref,
			isInView: isAboutMeInView,
			title: "About Me",
		},
		{
			id: 3,
			ref: refs[2].ref,
			isInView: isProjectsInView,
			title: "Projects",
		},
		{
			id: 4,
			ref: refs[3].ref,
			isInView: isContactMeInView,
			title: "Contact",
		},
	]);

	// const [routes, setRoutes] = useState<Route[]>(defaultRoutes);
	const [activeRoute, setActiveRoute] = useState<Route>(defaultRoutes[0]);

	useEffect(() => {
		const inViewComponents = [
			{
				id: 1,
				isInView: isHeroInView,
			},
			{
				id: 2,
				isInView: isAboutMeInView,
			},
			{
				id: 3,
				isInView: isProjectsInView,
			},
			{
				id: 4,
				isInView: isContactMeInView,
			},
		];

		inViewComponents.map((route) => {
			if (route.isInView) {
				setInViewComponentId(route.id);
			}
		});
	}, [isAboutMeInView, isContactMeInView, isHeroInView, isProjectsInView]);

	useEffect(() => {
		const handleScroll = () => {
			if (routeByClick) {
				window.removeEventListener("scroll", handleScroll, false);
				setRouteByClick(false);
				return;
			}
			const yPos = window.scrollY;
			const isScrollingUp = yPos < lastYPos;

			setNavbarVisable(isScrollingUp);
			setLastYPos(yPos);
		};

		window.addEventListener("scroll", handleScroll, false);

		return () => {
			window.removeEventListener("scroll", handleScroll, false);
		};
	}, [lastYPos, routeByClick]);

	const handleRouteClick = (routeId: number) => {
		setRouteByClick(true);
		refs.map((element) => {
			if (element.id === routeId) {
				setInViewComponentId(routeId);
				element.ref.current?.scrollIntoView({
					behavior: "auto",
				});
			}
		});
	};

	return {
		routes,
		activeRoute,
		setActiveRoute,
		navbarVisable,
		handleRouteClick,
	};
}

export default useNav;

"use client";
import {
	motion,
	useAnimate,
	useInView,
	useScroll,
	useTransform,
} from "framer-motion";
import { useContext, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import AboutMe from "./AboutMe";
import Carousel from "./Carusale";
import ContactMeForm from "./ContactMe";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Home() {
	const { darkMode, refs, setRefs } = useContext(
		GlobalContext
	) as InitialContext;
	const { scrollY } = useScroll();
	const scrolled = useTransform(scrollY, [0, 200], [1, 0]);
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope);

	// useEffect(() => {
	// 	if (isInView) {
	// 		animate("#name", {
	// 			y: [100, 0],
	// 			transition: {
	// 				duration: 4,
	// 				ease: [0.6, 0.01, -0.05, 0.9],
	// 			},
	// 		});
	// 	}
	// }, [isInView]);

	useEffect(() => {
		setRefs([
			{
				id: 1,
				ref: refs[0].ref,
			},
			{
				id: 2,
				ref: refs[1].ref,
			},
			{
				id: 3,
				ref: refs[2].ref,
			},
			{
				id: 4,
				ref: refs[3].ref,
			},
		]);
	}, []);

	return (
		<div className="relative flex flex-col w-full h-screen bg-dark">
			<div className="flex items-center self-center justify-center w-1/2 h-full text-white"></div>
			<div ref={refs[0].ref}>
				<Hero />
			</div>
			<div className="flex flex-col" ref={refs[1].ref}>
				<AboutMe />
				<Carousel />
			</div>
			<div ref={refs[2].ref}>
				<Projects />
			</div>
			<div ref={refs[3].ref}>
				<ContactMeForm />
			</div>

			<div className="h-screen">
				<Footer />
			</div>

			<motion.div
				className="sticky self-center"
				initial={{
					bottom: 0,
				}}
				animate={{
					bottom: [5, 0, 5],
				}}
				transition={{
					duration: 0.7,
					repeat: Infinity,
				}}
				style={{
					opacity: scrolled,
				}}
			>
				<MdKeyboardArrowDown className="z-10 w-8 h-8 text-dark" />
			</motion.div>
		</div>
	);
}

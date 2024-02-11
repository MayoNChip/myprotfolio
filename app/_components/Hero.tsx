"use client";

import { useContext } from "react";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import Inner from "./Layout/Inner";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import { cn } from "../../lib/utils";

// TODO:
// - add responsivness
// - edit the image to not have edges

function Hero() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	const { scrollY, scrollYProgress } = useScroll();
	const heyXPosition = useTransform(
		scrollYProgress,
		[0.05, 1],
		["0px", "-400px"]
	);
	const opacity = useTransform(scrollYProgress, [0.05, 0.2], [1, 0]);
	const idoXPosition = useTransform(
		scrollYProgress,
		[0.05, 1],
		["0px", "400px"]
	);
	const jobYPosition = useTransform(
		scrollYProgress,
		[0.05, 1],
		["0px", "400px"]
	);

	// useEffect(() => {
	// 	console.log(isPresent);
	// 	if (isPresent) {
	// 		const enterAnimations = async () => {
	// 			animate(
	// 				"#hi",
	// 				{
	// 					opacity: [0, 1],
	// 					y: [0, 0],
	// 					x: [-100, 0],
	// 					scale: [1, 1],
	// 				},
	// 				{ duration: 0.5, ease: "backInOut", delay: 1 }
	// 			);
	// 			animate(
	// 				"#name",
	// 				{
	// 					opacity: [0, 1],
	// 					y: [0, 0],
	// 					x: [-50, 0],
	// 					scale: [1],
	// 				},
	// 				{ duration: 0.5, ease: "backInOut", delay: 1.5 }
	// 			);
	// 			animate(
	// 				"#job",
	// 				{
	// 					opacity: [0, 1],
	// 					y: [-100, 0],
	// 					x: [0],
	// 					scale: [1],
	// 				},
	// 				{ duration: 1, ease: "backInOut", delay: 1.8 }
	// 			);
	// 		};
	// 		enterAnimations();
	// 	} else {
	// 		const exitAnimations = async () => {
	// 			animate(
	// 				"#hi",
	// 				{
	// 					opacity: 0,

	// 					x: 100,
	// 				},
	// 				{ duration: 0.5, ease: "backInOut", delay: 0.5 }
	// 			);
	// 			animate(
	// 				"#name",
	// 				{
	// 					opacity: 0,

	// 					x: 100,
	// 				},
	// 				{ duration: 0.5, ease: "backInOut", delay: 0.6 }
	// 			);
	// 			animate(
	// 				"#job",
	// 				{
	// 					opacity: 0,
	// 					x: 100,
	// 				},
	// 				{ duration: 1, ease: "backInOut", delay: 0.7 }
	// 			);
	// 		};
	// 		exitAnimations();
	// 	}
	// 	// initial={{ opacity: 0, y: 0, x: -100 }}
	// 	// 			animate={{
	// 	// 				opacity: 1,
	// 	// 				y: [0, 200],
	// 	// 				x: [0, -50],
	// 	// 				scale: [1, 0.5],
	// 	// 				transition: { duration: 1, ease: "backInOut" },
	// 	// 			}}
	// }, [pathname]);

	return (
		<AnimatePresence>
			<div className="flex items-center justify-center w-full h-screen">
				<div className="z-[2] flex flex-col whitespace-nowrap">
					<div className="z-[2] flex flex-col items-center whitespace-nowrap">
						<motion.span
							initial={{
								opacity: 0,
								x: -100,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
							id="hi"
							className={cn(
								darkMode ? "text-black-1" : "text-light",

								"md:text-9xl opacity-0 font-bold text-2xl mr-3 z-[2]"
							)}
							style={{
								x: heyXPosition,
								opacity: opacity,
							}}
						>
							HI THERE
						</motion.span>

						<motion.span
							id="name"
							initial={{
								opacity: 0,
								x: 200,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								duration: 1,
								ease: [0.85, 0, 0.15, 1],
							}}
							style={{
								x: idoXPosition,
								opacity: opacity,
							}}
							className={cn(
								darkMode ? "text-black-1" : "text-light",

								"md:text-9xl font-bold flex flex-col text-2xl z-[2]"
							)}
						>
							<span>
								I AM <span className="text-accent">IDO</span>
							</span>
						</motion.span>
						<motion.div
							id="job"
							className={cn(
								!darkMode ? "text-black-1" : "text-accent",
								"text-xl flex items-end font-semibold md:text-3xl self-center z-[-2] overflow-hidden"
							)}
						>
							<motion.h3
								initial={{
									opacity: 0,
									y: -100,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									duration: 1,
									delay: 1,
									ease: [0.85, 0, 0.15, 1],
								}}
								style={{ y: jobYPosition }}
							>
								Fullstack Developer
							</motion.h3>
						</motion.div>
					</div>
				</div>
			</div>
		</AnimatePresence>
	);
}

export default Hero;

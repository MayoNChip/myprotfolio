"use client";

import { useContext } from "react";
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import { cn } from "../../lib/utils";

// TODO:
// - add responsivness

function Hero() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	const { scrollYProgress } = useScroll();
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

	return (
		<AnimatePresence>
			<div className="flex items-center justify-center w-full h-screen bg-light">
				<div className="z-[2] flex flex-col whitespace-nowrap">
					<div className="z-[2] flex flex-col items-center justify-between whitespace-nowrap">
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
							className="md:text-9xl opacity-0 font-bold text-2xl z-[2] text-dark"
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
							className="md:text-9xl font-bold flex text-2xl z-[2]  text-dark"
						>
							<span>I AM &nbsp;</span>
							<span className="text-accent">IDO</span>
						</motion.span>
						<motion.div
							id="job"
							className={cn(
								!darkMode ? "text-dark" : "text-accent",
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

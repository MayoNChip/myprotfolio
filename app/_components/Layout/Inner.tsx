"use client";
import { motion, Variants } from "framer-motion";
function Inner({ children }: { children: React.ReactNode }) {
	const anim = (variants: Variants) => {
		return {
			initial: "initial",
			animate: "enter",
			exit: "exit",
			variants,
		};
	};

	const opacity: Variants = {
		initial: { opacity: 0 },
		enter: { opacity: 1 },
		exit: { opacity: 0 },
	};

	return (
		<div className="relative w-full h-full">
			<motion.div {...anim({ opacity })}>{children}</motion.div>
		</div>
	);
}

export default Inner;

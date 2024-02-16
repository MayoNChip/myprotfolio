"use client";

import React, { useRef } from "react";
import {
	motion,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
function page() {
	const ref = useRef(null);
	const { scrollY } = useScroll();
	const scrollStop = useMotionValue(1000);

	useMotionValueEvent(scrollY, "change", (latest) => {
		console.log("Page scroll: ", latest);
		if (scrollY.get() > scrollStop.get()) {
			scrollY.set(1800);
		}
	});

	return (
		<motion.div
			ref={ref}
			className="w-full h-full flex bg-zinc-700 max-h-[1500px] self-center overflow-y-scroll"
		>
			<motion.div className="min-h-[400px] w-full bg-emerald-400 absolute"></motion.div>
			<div className="min-h-[2000px] w-full bg-amber-400"></div>
			<div className="min-h-[2000px] w-full bg-amber-400"></div>
		</motion.div>
	);
}

export default page;

"use client";

import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "../../public/aboutme2.png";

function AboutMeImage() {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(scope.current, {
			opacity: [0, 1],
		});
	}, []);

	return (
		<motion.div
			ref={scope}
			initial={{
				y: 600,
			}}
			animate={{
				y: 0,
			}}
			whileHover={{}}
			transition={{ delay: 0.2, duration: 1, type: "spring" }}
			// onAnimationComplete={imageAnimFinish}
			className="relative self-end w-2/3 h-full"
		>
			<Image
				src={aboutMeImage}
				alt="Me"
				className="absolute bottom-0"
				// fill
				// style={{ objectFit: "cover" }}
			/>
		</motion.div>
	);
}

export default AboutMeImage;

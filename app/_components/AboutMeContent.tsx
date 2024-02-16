"use client";

import {
	useScroll,
	useTransform,
	motion,
	useMotionValueEvent,
	MotionValue,
	useInView,
	useAnimation,
} from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

function AboutMeContent() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.7", "end 0.4"],
	});

	const text = `My name is Ido Cohen and I am a self-proclaimed tech-nerd and lover of
	all things innovative. Based in Israel, I have been fascinated with
	technology from a young age and my passion has only continued to grow. I
	am a lifelong learner, with a love for science and an insatiable
	curiosity about how things work. This drive led me to complete an
	intensive full-stack bootcamp at ITC (Israel Tech Challenge), where I
	honed my skills in coding and software development, and have since been
	working as a dev team manager at Partner for the past 4 years, on a
	product in the call centers and telephony field. My expertise in this
	field and strong problem-solving skills have allowed me to effectively
	lead my team and bring innovative solutions to the table. But what sets me apart from your average developer is my eclectic mix of
	interests and hobbies. I have a deep love for photography and even had
	the privilege of turning my passion into a business as an independent
	studio owner. In addition, I have studied 3D modeling and animation,
	fueling my secret dream of one day creating my own video game. I am also
	an avid gamer, movie buff, and tech enthusiast, always keeping up with
	the latest advancements in the industry. These diverse pursuits add
	depth to my perspective and allow me to approach problem-solving from a
	unique angle. I am now eager to bring my passion for development and love for all
	things tech to a new company, where I can continue growing as a
	developer and making a positive impact. Whether I&apos;m snapping the
	perfect shot, creating a virtual world, or finding new ways to use
	technology for good, I am always on the lookout for the next adventure
	and eager to learn and grow along the way.`;

	const words = text.split(" ");
	const wordsCount = words.length;
	const wordSpace = 1 / wordsCount;

	return (
		<div className="relative flex-col flex self-center my-20 min-h-[1000px] w-1/2   font-extralight text-2xl">
			<div
				ref={ref}
				className="flex flex-wrap gap-1 leading-[2rem] justify-stretch items-baseline"
			>
				{words.map((word, index) => {
					const start = index / wordsCount;
					const end = start + wordSpace;
					const range = [start, end];
					if (index === 0) {
						return (
							<Word key={index} range={range} progress={scrollYProgress} larger>
								{word}
							</Word>
						);
					}
					return (
						<Word key={index} range={range} progress={scrollYProgress}>
							{word}
						</Word>
					);
				})}
			</div>
			<p className="absolute flex flex-wrap self-center w-full gap-1 text-light/40 leading-[2rem] justify-stretch  items-baseline">
				{words.map((word, index) => {
					if (index === 0) {
						return (
							<span key={index} className="text-5xl font-semibold">
								{word}
							</span>
						);
					}
					return <span key={index}>{word}</span>;
				})}
			</p>
		</div>
	);
}

export default AboutMeContent;

const Word = ({
	children,
	range,
	progress,
	larger = false,
}: {
	children: ReactNode;
	range: number[];
	progress: MotionValue;
	larger?: boolean;
}) => {
	const controls = useAnimation();

	const opacity = useTransform(progress, range, [0, 1]);
	const reveal = useTransform(progress, range, ["-100px", "100px"], {
		clamp: false,
	});
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [isInView]);

	return (
		<div ref={ref} className="relative overflow-hidden">
			<motion.span
				className={cn("text-light", larger && "text-5xl  font-semibold")}
				style={{ opacity }}
			>
				{children}
			</motion.span>
			<motion.span
				transition={{ duration: 0.5 }}
				style={{ y: reveal }}
				className="absolute z-20 w-full h-full bg-accent"
			/>
		</div>
	);
};

"use client";

import {
	useScroll,
	useTransform,
	motion,
	useMotionValueEvent,
	MotionValue,
	useInView,
	useAnimation,
	useMotionValue,
} from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

function AboutMeContent() {
	const parentRef = useRef(null);
	const firstParagraphRef = useRef(null);
	const secondParagraphRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: firstParagraphRef,
		offset: ["start 0.7", "end 0.6"],
	});

	const secondParagraphScrollYProgress = useScroll({
		target: secondParagraphRef,
		offset: ["start 0.7", "end 0.5"],
	});

	const parentRefScrollYProgress = useScroll({
		target: parentRef,
		offset: ["start 0.7", "end 0.5"],
	});

	const progress = useMotionValue(0);

	const firstTitleParallex = useTransform(
		parentRefScrollYProgress.scrollYProgress,
		[0, 1],
		[50, -100]
	);
	const secondTitleParallex = useTransform(
		parentRefScrollYProgress.scrollYProgress,
		[0, 1],
		[100, -100]
	);

	const firstParagraph = `My name is Ido Cohen and I am a self-proclaimed tech-nerd and lover of
	all things innovative. Based in Israel, I have been fascinated with
	technology from a young age and my passion has only continued to grow. I
	am a lifelong learner, with a love for science and an insatiable
	curiosity about how things work. This drive led me to complete an
	intensive full-stack bootcamp at ITC (Israel Tech Challenge), where I
	honed my skills in coding and software development, and have since been
	working as a dev team manager at Partner for the past 4 years, on a
	product in the call centers and telephony field. My expertise in this
	field and strong problem-solving skills have allowed me to effectively
	lead my team and bring innovative solutions to the table.`;

	const secondParagraph = `what sets me apart from your average developer is my eclectic mix of
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

	const firstParagraphWords = firstParagraph.split(" ");
	const firstParagraphWordsCount = firstParagraphWords.length;
	const firstParagraphWordSpace = 1 / firstParagraphWordsCount;
	const secondParagraphWords = secondParagraph.split(" ");
	const secondParagraphWordsCount = secondParagraphWords.length;
	const secondParagraphWordSpace = 1 / secondParagraphWordsCount;

	return (
		<div className="relative flex flex-col self-center w-full p-6 text-xl md:text-2xl md:my-12 md:px-40 h-fit font-extralight">
			<div className="flex flex-col h-full" ref={parentRef}>
				<div className="relative md:w-1/2" ref={firstParagraphRef}>
					{/* <motion.h1
						style={{
							y: firstTitleParallex,
						}}
						// whileInView={{ opacity: [0, 1], y: [100, 0] }}
						className="absolute font-semibold text-8xl -top-[10%] -left-[15%] text-accent/30 "
					>
						WHO AM I?
					</motion.h1> */}
					<div className="flex flex-wrap leading-[2rem] gap-1 justify-stretch items-baseline">
						{firstParagraphWords.map((word, index) => {
							const start = index / firstParagraphWordsCount;
							const end = start + firstParagraphWordSpace;
							const range = [start, end];
							if (index === 0) {
								return (
									<Word
										key={index}
										range={range}
										progress={scrollYProgress}
										larger
									>
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
					<p className="absolute flex flex-wrap gap-1 leading-[2rem] justify-stretch items-baseline bottom-0 text-light/40">
						{/* semi transparent first paragraph words */}
						{firstParagraphWords.map((word, index) => {
							if (index === 0) {
								return (
									<span key={index} className="text-2xl font-bold md:text-5xl">
										{word}
									</span>
								);
							}
							return <span key={index}>{word}</span>;
						})}
					</p>
				</div>
				<div
					className="relative self-end h-full mt-40 md:w-1/2"
					ref={secondParagraphRef}
				>
					<motion.h1
						style={{
							y: secondTitleParallex,
						}}
						className="absolute font-semibold text-8xl md:-top-[10%] md:-left-[15%] text-accent/30 "
					>
						WHY ME?
					</motion.h1>
					<div
						className="flex flex-wrap gap-1 leading-[2rem] justify-stretch items-baseline"
						ref={secondParagraphRef}
					>
						{secondParagraphWords.map((word, index) => {
							const start = index / secondParagraphWordsCount;
							const end = start + secondParagraphWordSpace;
							const range = [start, end];
							if (index === 0) {
								return (
									<Word
										key={index}
										range={range}
										progress={secondParagraphScrollYProgress.scrollYProgress}
										larger
									>
										{word}
									</Word>
								);
							}
							return (
								<Word
									key={index}
									range={range}
									progress={secondParagraphScrollYProgress.scrollYProgress}
								>
									{word}
								</Word>
							);
						})}
						<p className="absolute flex flex-wrap top-0 self-center w-full gap-1 text-light/40 leading-[2rem] justify-stretch items-baseline">
							{/* semi transparent second paragraph words */}

							{secondParagraphWords.map((word, index) => {
								if (index === 0) {
									return (
										<span
											key={index}
											className="text-2xl font-bold md:text-5xl"
										>
											{word}
										</span>
									);
								}
								return <span key={index}>{word}</span>;
							})}
						</p>
					</div>
				</div>
			</div>
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
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [isInView, controls]);

	return (
		<div ref={ref} className="relative overflow-hidden">
			<motion.span
				className={cn("text-light", larger && "md:text-5xl text-2xl font-bold")}
				style={{ opacity }}
			>
				{children}
			</motion.span>
			{/* <motion.span
				transition={{ duration: 0.5 }}
				className="absolute z-20 w-full h-full bg-accent"
			/> */}
		</div>
	);
};

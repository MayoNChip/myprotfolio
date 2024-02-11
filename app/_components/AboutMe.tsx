"use client";

import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import aboutMeImage from "../../public/aboutme2.png";
import {
	AnimatePresence,
	motion,
	stagger,
	useAnimate,
	useInView,
	usePresence,
} from "framer-motion";
import Inner from "./Layout/Inner";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import MyStack from "./MyStack";
import { cn } from "../../lib/utils";
import AboutMeImage from "./AboutMeImage";

function AboutMe() {
	const { darkMode, refs } = useContext(GlobalContext) as InitialContext;
	const [imageAnimComplete, setImageAnimComplete] = useState(false);
	// const contentRef = useRef<HTMLDivElement>(null);
	// const paragraphRef = useRef<HTMLDivElement>(null);
	// const isInView = useInView(paragraphRef, { root: contentRef, once: true });
	const [scope, animate] = useAnimate();
	const [isPresent, safeToRemove] = usePresence();
	const isInView = useInView(scope);

	const imageAnimFinish = (e: any) => {
		setImageAnimComplete(true);
	};

	useEffect(() => {
		console.log("use Effect from about me");
		const enterAnimations = async () => {
			if (isInView) {
				await animate(scope.current, {
					opacity: [0, 1],
				});
			}

			// if (isPresent) {
			// 	await animate(
			// 		"h1",
			// 		{
			// 			x: [-200, 0],
			// 			opacity: [0, 1],
			// 		},
			// 		{ delay: stagger(0.2) }
			// 	);
			// } else {
			// 	safeToRemove();
			// }
		};

		enterAnimations();
	}, [refs[2], isPresent]);
	return (
		<div className="flex h-full p-8">
			<div
				ref={scope}
				className={cn(
					darkMode ? "bg-black-1" : "bg-light",
					"flex flex-col w-full h-screen relative"
				)}
			>
				{/* <div className="self-end"> */}
				{/* <AnimatePresence>
						{!imageAnimComplete && (
							<motion.div
								key="imageUnderline"
								initial={{ width: "0%" }}
								animate={{ width: "100%" }}
								exit={{ width: "0%" }}
								transition={{ duration: 0.2 }} // Adjust duration as needed
								className="absolute bottom-0 z-10 self-center h-[1px] bg-light"
							></motion.div>
						)}
					</AnimatePresence> */}
				<AboutMeImage />
				{/* </div> */}

				<div
					id="content"
					// ref={contentRef}
					className="absolute top-[50%] flex flex-col self-center w-full text-6xl text-light "
				>
					{/* <h1 className={`my-5 ${!darkMode && "text-black-2"}`}>
						My name is Ido Cohen and I am a self-proclaimed tech-nerd and lover
						of all things innovative. Based in Israel, I have been fascinated
						with technology from a young age and my passion has only continued
						to grow. I am a lifelong learner, with a love for science and an
						insatiable curiosity about how things work. This drive led me to
						complete an intensive full-stack bootcamp at ITC (Israel Tech
						Challenge), where I honed my skills in coding and software
						development, and have since been working as a dev team manager at
						Partner for the past 4 years, on a product in the call centers and
						telephony field. My expertise in this field and strong
						problem-solving skills have allowed me to effectively lead my team
						and bring innovative solutions to the table.
					</h1>
				
					<h1 className={`${!darkMode && "text-black-2"}`}>
						But what sets me apart from your average developer is my eclectic
						mix of interests and hobbies. I have a deep love for photography and
						even had the privilege of turning my passion into a business as an
						independent studio owner. In addition, I have studied 3D modeling
						and animation, fueling my secret dream of one day creating my own
						video game. I am also an avid gamer, movie buff, and tech
						enthusiast, always keeping up with the latest advancements in the
						industry. These diverse pursuits add depth to my perspective and
						allow me to approach problem-solving from a unique angle.
					</h1>
					<h1 className={`my-5 ${!darkMode && "text-black-2"}`}>
						I am now eager to bring my passion for development and love for all
						things tech to a new company, where I can continue growing as a
						developer and making a positive impact. Whether I&apos;m snapping
						the perfect shot, creating a virtual world, or finding new ways to
						use technology for good, I am always on the lookout for the next
						adventure and eager to learn and grow along the way.
					</h1> */}
					<h1 className="font-extralight">
						"Programming isn't about what you know.
					</h1>
					<div className="flex items-center space-x-2 font-extralight">
						<h1>it's about what you can </h1>
						<h1 className="font-medium text-accent">figure out</h1>." -
						<h1 className="self-end text-xl text-stone-700">Chris Pine</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;

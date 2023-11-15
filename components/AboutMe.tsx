"use client";

import Image from "next/image";
import React, { useContext } from "react";
import aboutMeImage from "../public/me.jpeg";
import { GlobalContext, InitialContext } from "../context/GlobalContext";

function AboutMe() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;

	return (
		<div
			className={`${
				darkMode ? "bg-black-1" : "bg-light "
			} w-full h-full flex flex-col items-center`}
		>
			<Image
				src={aboutMeImage}
				alt="Me"
				className="mt-16 rounded-full hover:scale-[1.01] transition-transform"
				width={500}
			/>
			<div
				className={`text-xl text-light ${
					darkMode ? "text-light" : "text-black-1"
				} "flex w-1/2 p-4 mx-16 my-16 text-left h-fit "`}
			>
				<h1 className={`my-5 ${!darkMode && "text-black-2"}`}>
					Hi there! My name is Ido and I am a self-proclaimed tech-nerd and
					lover of all things innovative. Based in Israel, I have been
					fascinated with technology from a young age and my passion has only
					continued to grow. I am a lifelong learner, with a love for science
					and an insatiable curiosity about how things work. This drive led me
					to complete an intensive full-stack bootcamp at ITC (Israel Tech
					Challenge), where I honed my skills in coding and software
					development, and have since been working as a dev team manager at
					Partner for the past 4 years, on a product in the call centers and
					telephony field. My expertise in this field and strong problem-solving
					skills have allowed me to effectively lead my team and bring
					innovative solutions to the table.
				</h1>
				<h1 className={`${!darkMode && "text-black-2"}`}>
					But what sets me apart from your average developer is my eclectic mix
					of interests and hobbies. I have a deep love for photography and even
					had the privilege of turning my passion into a business as an
					independent studio owner. In addition, I have studied 3D modeling and
					animation, fueling my secret dream of one day creating my own video
					game. I am also an avid gamer, movie buff, and tech enthusiast, always
					keeping up with the latest advancements in the industry. These diverse
					pursuits add depth to my perspective and allow me to approach
					problem-solving from a unique angle.
				</h1>
				<h1 className={`my-5 ${!darkMode && "text-black-2"}`}>
					I am now eager to bring my passion for development and love for all
					things tech to a new company, where I can continue growing as a
					developer and making a positive impact. Whether I`m snapping the
					perfect shot, creating a virtual world, or finding new ways to use
					technology for good, I am always on the lookout for the next adventure
					and eager to learn and grow along the way.
				</h1>
			</div>
		</div>
	);
}

export default AboutMe;

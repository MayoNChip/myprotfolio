"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { tags } from "../../lib/projects";

export default function MyStack() {
	const [logos, setLogos] = useState([...tags]); // Duplicate the logos for looping
	const animationDuration = 15;
	return (
		<div className="absolute top-0 left-0 flex flex-col items-center h-full bg-light">
			<h1>My Stack</h1>
			<div className="flex w-[200vw] my-8 h-28 justify-around relative">
				<motion.div
					className="absolute flex justify-around h-fit w-[100vw]"
					initial={{ x: "0vw" }}
					animate={{ x: "100vw" }}
					transition={{
						duration: animationDuration,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{logos
						.filter((logo) => logo.logo)
						.map((tag, index) => {
							return (
								<div key={"first" + index} className="flex items-center w-20">
									<Image src={tag.logo} alt="stackLogo"></Image>
								</div>
							);
						})}
				</motion.div>
				<motion.div
					className=" absolute flex justify-around w-[100vw] h-fit "
					initial={{ x: "-100vw" }}
					animate={{ x: "0vw" }}
					transition={{
						duration: animationDuration,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{logos
						.filter((logo) => logo.logo)
						.map((tag, index) => {
							return (
								<div key={index} className="flex items-center w-20">
									<Image src={tag.logo} alt="stackLogo"></Image>
								</div>
							);
						})}
				</motion.div>
			</div>
		</div>
	);
}

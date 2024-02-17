"use client";

import Image from "next/image";
import React, { useState, useContext } from "react";
import { InitialContext, GlobalContext } from "../../context/GlobalContext";
import { logos } from "../../lib/logos";
import { tags } from "../../lib/projects";
import { cn } from "../../lib/utils";

// TODO:
// 1. make carisale endlessly spin - Done
// 2. add all other logos
// 3. pasue scroll on hover - Done
// 4. add tooltips on each logo?

const Carousel = () => {
	const [logosArr, setLogosArr] = useState([...tags]);
	const { darkMode } = useContext(GlobalContext) as InitialContext;

	return (
		<div className="self-center w-full my-10">
			<div
				className={cn(
					!darkMode ? "rounded-none w-full" : "rounded-none w-full",
					"relative flex items-center justify-center mx-auto  h-auto py-4 my-4 overflow-hidden  shadow-accent/50 shadow-[0_0_20px_0]  bg-light/80"
				)}
			>
				<div className="flex justify-around w-full animation-pause">
					<div className="relative flex items-center justify-around w-full animate-marquee whitespace-nowrap">
						{logosArr &&
							logosArr
								.filter((logo) => logo.logo)
								.map((logo) => {
									return (
										<div key={logo.name} className="w-[80px] h-auto">
											<Image
												width="100"
												height="50"
												src={logo.logo}
												alt={logo.name}
											/>
										</div>
									);
								})}
					</div>
					<div className="absolute flex items-center justify-around w-full animate-marquee2 whitespace-nowrap animation-pause">
						{logosArr &&
							logosArr
								.filter((logo) => logo.logo)
								.map((logo) => {
									return (
										<div key={logo.name} className="w-[80px] h-auto">
											<Image
												key={logo.name}
												width="100"
												height="50"
												src={logo.logo}
												alt={logo.name}
											/>
										</div>
									);
								})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;

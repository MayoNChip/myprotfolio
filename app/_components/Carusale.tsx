"use client";

import Image from "next/image";
import React, { useState, useContext } from "react";
import { InitialContext, GlobalContext } from "../../context/GlobalContext";
import useScreenSize from "../../hooks/useScreenSize";
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
	const { width } = useScreenSize();

	return (
		<div className="self-center w-full my-10">
			<div
				className={cn(
					!darkMode ? "rounded-none w-full" : "rounded-none w-full",
					"relative flex items-center justify-center mx-auto h-auto  py-4 my-4 overflow-hidden  shadow-accent/50 shadow-[0_0_20px_0]  bg-light/80"
				)}
			>
				<div className="flex justify-around w-full space-x-4 animation-pause">
					<div className="relative flex items-center justify-around w-full h-full space-x-4 animate-marquee whitespace-nowrap">
						{logosArr &&
							logosArr
								.filter((logo) => logo.logo)
								.map((logo) => {
									return (
										<div key={logo.name}>
											<Image
												width={width && width > 768 ? "100" : "200"}
												src={logo.logo}
												alt={logo.name}
											/>
										</div>
									);
								})}
					</div>
					<div className="absolute flex items-center justify-around w-full space-x-4 animate-marquee2 whitespace-nowrap animation-pause">
						{logosArr &&
							logosArr
								.filter((logo) => logo.logo)
								.map((logo) => {
									return (
										<div key={logo.name}>
											<Image
												key={logo.name}
												width={width && width > 768 ? "100" : "200"}
												// fill
												// height="50"
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

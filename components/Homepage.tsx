"use client";
import React, { useContext } from "react";
import { GlobalContext, InitialContext } from "../context/GlobalContext";
import Bio from "./Bio";
import Carousel from "./Carusale";
import Divider from "./Divider";
import Hero from "./Hero";

function Homepage() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;

	return (
		<div
			className={`${
				darkMode ? "bg-black-1" : "bg-light"
			} flex flex-col items-center w-full`}
		>
			<Hero />
			<Divider schema={darkMode ? "dark" : "light"} />
			<Bio />
			<Divider schema={darkMode ? "dark" : "light"} />
			<Carousel />
		</div>
	);
}

export default Homepage;

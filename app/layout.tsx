"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import ThemeProvider from "../context/GlobalContext";
import "../styles/globals.css";
import Inner from "./_components/Layout/Inner";
import { Navbar } from "./_components/Navbar";
import NewMenu from "./_components/NewMenu";

interface Props {
	children: React.ReactNode;
}

function layout({ children }: Props) {
	return (
		<html lang="en">
			<head />
			<body className="relative flex flex-col items-center w-screen h-screen overflow-x-hidden scroll-smooth bg-dark">
				<ThemeProvider>
					{/* <AnimatePresence mode="wait" initial={false}> */}
					<Navbar />
					{children}
					<p className="z-10 font-extralight text-light">
						Ido Cohen 2024. this website was created using Next.JS
					</p>
					{/* </AnimatePresence> */}
				</ThemeProvider>
			</body>
		</html>
	);
}

export default layout;

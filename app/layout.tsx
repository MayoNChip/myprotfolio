"use client";
import React from "react";
import ThemeProvider from "../context/GlobalContext";
import "../styles/globals.css";
import { Navbar } from "./_components/Navbar";

interface Props {
	children: React.ReactNode;
}

function layout({ children }: Props) {
	return (
		<html lang="en">
			<head />
			<body className="relative flex flex-col items-center w-screen h-screen overflow-x-hidden scroll-smooth bg-dark">
				<ThemeProvider>
					<Navbar />
					{children}
					<p className="z-10 font-extralight text-light">
						Ido Cohen 2024. this website was created using Next.JS
					</p>
				</ThemeProvider>
			</body>
		</html>
	);
}

export default layout;

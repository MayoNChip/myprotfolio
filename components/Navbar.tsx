"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { InitialContext, GlobalContext } from "../context/GlobalContext";
import logo from "../public/logoFinal.png";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import HamburgerMenu from "./HamburgerMenu";
import { cn } from "../lib/utils";
import Bio from "./Bio";

// TODO:
// 1. Responsivness

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { darkMode, setDarkMode } = useContext(GlobalContext) as InitialContext;

	const handleThemeChange = () => {
		setDarkMode(darkMode ? false : true);
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<div
				className={cn(
					darkMode ? " bg-black-2" : "bg-light",
					"relative flex items-center w-full"
				)}
			>
				<div
					className={cn(
						"flex items-center w-full px-4 py-4 mx-auto my-auto h-5/6 shadow-middle justify-between transition-all"
					)}
				>
					<div className="flex items-center h-6">
						<Link
							className="text-light text-semibold hover:text-accent active:text-secondary"
							href="/"
						>
							<div className="w-10">
								<Image src={logo} alt="logo"></Image>
							</div>
						</Link>
					</div>

					<div className="relative flex items-center gap-6 px-4 w-fit">
						<button className="text-white" onClick={handleThemeChange}>
							{!darkMode ? (
								<MdDarkMode className="text-black" />
							) : (
								<MdLightMode />
							)}
						</button>

						<Link
							className={cn(
								"active:text-main-dark hidden text-semibold md:block hover:text-secondary",
								darkMode ? "text-semi-light " : " text-black-2"
							)}
							href="/aboutme"
						>
							About Me
						</Link>
						<Link
							className={cn(
								"active:text-main-dark hidden text-semibold md:block hover:text-secondary",
								darkMode ? "text-semi-light " : " text-black-2"
							)}
							href="/projects"
						>
							Projects
						</Link>
						<Link
							className={cn(
								" px-4 py-2 my-auto rounded-lg md:inline-block text-semibold ",
								darkMode
									? "hover:bg-main/40 bg-secondary text-semi-light"
									: "hover:bg-main-dark bg-main  text-semi-light"
							)}
							href="/contactme"
						>
							Contact
						</Link>
						<div className="md:hidden" onClick={toggleMenu}>
							<HamburgerMenu isOpen={menuOpen} />
						</div>
					</div>
				</div>
			</div>
			<div
				className={cn(
					menuOpen
						? "animate-slideDown opacity-100"
						: "animate-slideUp opacity-0 hidden",

					darkMode ? " bg-black-2" : "bg-light",
					"absolute md:hidden w-full top-16 z-20 transition-transform p-4 py-8 justify-center"
				)}
			>
				<div className="flex flex-col items-center justify-center mx-auto space-y-12 text-xl w-fit">
					<Link
						className={cn(
							"active:text-main-dark text-semibold md:block hover:text-secondary",
							darkMode ? "text-semi-light " : " text-black-2"
						)}
						href="/aboutme"
						onClick={toggleMenu}
					>
						About Me
					</Link>
					<Link
						className={cn(
							"active:text-main-dark text-semibold md:block hover:text-secondary",
							darkMode ? "text-semi-light " : " text-black-2"
						)}
						href="/projects"
						onClick={toggleMenu}
					>
						Projects
					</Link>
				</div>
			</div>
		</>
	);
}

export default Navbar;

"use client";

import React from "react";
import { cn } from "../lib/utils";

function HamburgerMenu({ isOpen }: { isOpen: boolean }) {
	return (
		<div className="relative w-10 h-10 text-gray-500 bg-transparent focus:outline-none">
			<div className="absolute block w-2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
				{/* block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open } */}
				<span
					aria-hidden="true"
					className={cn(
						isOpen ? "rotate-45" : "-translate-y-1.5",
						"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
					)}
				></span>
				<span
					aria-hidden="true"
					className={cn(
						isOpen && "opacity-0",
						"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
					)}
				></span>
				<span
					aria-hidden="true"
					className={cn(
						isOpen ? "-rotate-45" : "translate-y-1.5",
						"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
					)}
				></span>
				{/* <span aria-hidden="true" className="block absolute  h-0.5 w-5   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
            <span aria-hidden="true" className="block absolute  h-0.5 w-5  transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span> */}
			</div>
		</div>
	);
}

export default HamburgerMenu;

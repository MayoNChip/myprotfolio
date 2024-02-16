"use client";

import React, { useContext } from "react";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import { cn } from "../../lib/utils";

function ThankYou() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	return (
		<div
			className={cn(
				darkMode && "bg-dark",
				"flex flex-col items-center justify-center w-full h-full  "
			)}
		>
			<div className="flex flex-col justify-between px-4 py-8 space-y-4 rounded-md bg-secondary">
				<h1
					className={cn(
						darkMode ? " text-accent" : "text-dark",
						"font-semibold text-4xl"
					)}
				>
					Email Sent!
				</h1>
				<h1
					className={cn(
						darkMode ? " text-black/70" : "text-dark",
						"font-semibold text-xl"
					)}
				>
					Thank you!
				</h1>
			</div>
		</div>
	);
}

export default ThankYou;

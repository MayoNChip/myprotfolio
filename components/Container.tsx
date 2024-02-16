"use client";

import React, { ReactNode, useContext } from "react";
import { GlobalContext, InitialContext } from "../context/GlobalContext";
import { cn } from "../lib/utils";

function Container({ children }: { children: ReactNode }) {
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	return (
		<div
			className={cn(
				darkMode ? "bg-dark" : "bg-accent",
				"flex flex-col w-full h-full m-auto transition-transform"
			)}
		>
			{children}
		</div>
	);
}

export default Container;

"use client";

import React, { ReactNode, useContext } from "react";
import { GlobalContext, InitialContext } from "../context/GlobalContext";
import { cn } from "../lib/utils";

function Container({ children }: { children: ReactNode }) {
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	return (
		<>
			<div
				className={cn(darkMode ? "bg-dark-1" : "bg-light", "w-screen")}
			></div>
			<div className="flex w-10/12 m-auto">{children}</div>
		</>
	);
}

export default Container;

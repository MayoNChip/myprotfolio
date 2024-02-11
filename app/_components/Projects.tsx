"use client";

import React, { useContext } from "react";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import { cn } from "../../lib/utils";
import { projects } from "../../lib/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;

	return (
		<div
			className={cn(
				darkMode ? "bg-black-1" : "bg-light",
				"flex flex-col self-center w-full h-screen items-center p-10"
			)}
		>
			<div className="flex items-center justify-around w-full h-full">
				{projects &&
					projects.map((project) => {
						return <ProjectCard key={project.id} {...project}></ProjectCard>;
					})}
			</div>
		</div>
	);
}

export default Projects;

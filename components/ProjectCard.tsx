"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ContextType, useContext } from "react";
import { GlobalContext, InitialContext } from "../context/GlobalContext";
import { project } from "../lib/projects";
import { cn } from "../lib/utils";

function ProjectCard(project: project) {
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	return (
		<div
			className={cn(
				darkMode ? "bg-accent" : "bg-secondary/60",
				"flex flex-col transition-transform duration-300 min-h-[400px]  rounded-md shadow-md hover:scale-[101%] w-full"
			)}
		>
			<div className="flex w-fit h-fit">
				<Image src={project.image} alt="guru Supermarket Image" />
			</div>
			<div className="flex items-center justify-between w-full h-full px-4 py-4">
				<div className="flex flex-col w-full h-full">
					<h1
						className={cn(
							darkMode ? " text-black-2/80" : "text-secondary/70",
							"text-2xl font-black h-1/4"
						)}
					>
						{project.title}
					</h1>
					<div className="flex items-center justify-between w-full h-3/4">
						<h1
							className={cn(
								darkMode ? "text-black-2" : "text-light",
								"text-xl font-light "
							)}
						>
							{project.description}
						</h1>
						<div className="flex flex-col justify-around h-full">
							{project.isLive && (
								<Link
									href={project.app_url}
									target="_blank"
									className={cn(
										"self-end px-6 py-2 font-medium transition-colors rounded text-md ",
										darkMode
											? "text-light hover:text-black/50 bg-main hover:bg-main-dark"
											: "text-secondary/90 hover:text-secondary/90 bg-accent hover:bg-secondary/30"
									)}
								>
									Visit
								</Link>
							)}
							<Link
								href={project.repository_url}
								target="_blank"
								className={cn(
									"self-end px-6 py-2 font-medium transition-colors rounded text-md ",
									darkMode
										? "text-light hover:text-black/50 bg-main hover:bg-main-dark"
										: "text-black/40 hover:text-secondary/90 bg-bg-secondary/30 hover:bg-secondary/60"
								)}
							>
								Repository
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;

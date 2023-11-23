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
				darkMode ? "bg-accent" : "bg-secondary/30",
				"flex flex-col transition-transform duration-300 h-fit  rounded-md shadow-md hover:scale-[101%] w-full"
			)}
		>
			<div className="w-full h-fit">
				<Image className="rounded-t" src={project.image} alt={project.title} />
			</div>
			<div className="flex items-center justify-between w-full px-4 py-4">
				<div className="flex flex-col w-full ">
					<h1
						className={cn(
							darkMode ? " text-black-2/80" : "text-secondary",
							"text-2xl font-black h-1/4"
						)}
					>
						{project.title}
					</h1>

					<div className="flex flex-col items-center  w-full min-h-[200px]">
						<div className="min-h-[100px]">
							<h1
								className={cn(
									darkMode ? "text-black-2" : "text-black-1",
									"text-xl font-light "
								)}
							>
								{project.description}
							</h1>
						</div>
						<div
							className={cn(
								!project.app_url || !project.repository_url
									? "justify-center"
									: "justify-between",
								"flex w-full"
							)}
						>
							{project.repository_url && (
								<Link
									href={project.repository_url}
									target="_blank"
									className={cn(
										"self-end px-6 py-2 font-medium transition-colors rounded text-md ",
										darkMode
											? "text-light hover:text-black/50 bg-secondary/60 hover:bg-secondary"
											: "text-black/40 hover:text-secondary/90 bg-bg-secondary/30 hover:bg-secondary/60"
									)}
								>
									Repository
								</Link>
							)}
							{project.app_url && (
								<Link
									href={project.app_url}
									target="_blank"
									className={cn(
										"self-end px-6 py-2 font-medium transition-colors rounded text-md ",
										darkMode
											? "text-light hover:text-black/50 bg-main hover:bg-main-dark"
											: "text-accent hover:text-accent/40 bg-main hover:bg-secondary"
									)}
								>
									Visit
								</Link>
							)}
						</div>
						{/* TAGS */}
						<div className="grid grid-cols-3 gap-2 mt-6">
							{project.tags.map((tag) => {
								return (
									<div
										key={tag}
										className={cn(
											darkMode ? " bg-secondary/30" : "bg-main-dark/50",
											"flex items-center justify-center px-1 py-1 rounded cursor-default"
										)}
									>
										<p className=" text-light whitespace-nowrap w-fit">{tag}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;

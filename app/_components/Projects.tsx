"use client";

import React, { useContext, useEffect, useState } from "react";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import { Project, projects } from "../../lib/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	const [projectList, setProjectList] = useState<Project[]>();

	useEffect(() => {
		setProjectList(projects);
	}, [projects]);

	return (
		<div className="flex flex-col items-center self-center w-full min-h-screen p-10 bg-dark">
			{/* <div className="flex items-center justify-around w-full h-full">
				{projects.map((project) => {
					return <ProjectCard key={project.id} {...project}></ProjectCard>;
				})}
			</div> */}
			<h1>My Work</h1>
			<div className="flex justify-around w-full h-full overflow-hidden">
				{projectList?.map((project) => {
					return <ProjectCard key={project.id} {...project}></ProjectCard>;
				})}
			</div>
		</div>
	);
}

export default Projects;

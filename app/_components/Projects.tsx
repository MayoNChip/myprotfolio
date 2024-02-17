"use client";

import React, { useEffect, useState } from "react";
import { Project, projects } from "../../lib/projects";
import ProjectCard from "./ProjectCard";

//TODO: style projects title

function Projects() {
	const [projectList, setProjectList] = useState<Project[]>();

	useEffect(() => {
		setProjectList(projects);
	}, [projects]);

	return (
		<div className="flex flex-col items-center self-center w-full min-h-screen p-10 bg-dark">
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

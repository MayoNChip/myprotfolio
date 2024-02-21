"use client";

import React, { useEffect, useRef, useState } from "react";
import { Project, projects } from "../../lib/projects";
import ProjectCard from "./ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";

//TODO: style projects title

function Projects() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0.5 start", "start end"],
	});

	const titleParallex = useTransform(scrollYProgress, [0, 1], [-200, 200]);
	return (
		<div
			className="relative flex flex-col items-center self-center w-full mt-28 bg-dark"
			ref={ref}
		>
			<motion.h1
				className="absolute self-start font-semibold text-accent/30 text-9xl -top-16 left-16"
				style={{ y: titleParallex }}
				// whileInView={{ opacity: [0, 1], x: [-100, 0] }}
				transition={{ duration: 1.4, type: "spring" }}
			>
				My Work
			</motion.h1>
			<div className="flex justify-around w-full h-full p-10 overflow-hidden">
				{projects?.map((project) => {
					return <ProjectCard key={project.id} {...project}></ProjectCard>;
				})}
			</div>
		</div>
	);
}

export default Projects;

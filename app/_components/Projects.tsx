"use client";

import React, { useRef } from "react";
import { projects } from "../../lib/projects";
import ProjectCard from "./ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";

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
        className="absolute self-start font-semibold -top-48 text-accent/30 text-9xl md:-top-16 left-16 "
        style={{ y: titleParallex }}
        transition={{ duration: 1.4, type: "spring" }}
      >
        My Work
      </motion.h1>
      <div className="grid justify-around w-full h-full grid-rows-1 gap-4 p-4 my-10 md:overflow-hidden md:p-10 md:flex md:flex-row">
        {projects?.map((project, index) => {
          return (
            <ProjectCard key={project.id} project={project} index={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

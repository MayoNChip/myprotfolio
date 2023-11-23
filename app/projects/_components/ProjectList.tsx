"use client";

import React, { useContext, useState } from "react";
import { projects } from "../../../lib/projects";
import ProjectCard from "../../../components/ProjectCard";
import { GlobalContext, InitialContext } from "../../../context/GlobalContext";
import { cn } from "../../../lib/utils";

function ProjectList() {
  const { darkMode } = useContext(GlobalContext) as InitialContext;
  //   const [displayingLiveProjects, setDisplayingLiveProjects] = useState(true);
  return (
    <div
      className={`${
        darkMode ? "bg-black-1" : "bg-light"
      } flex flex-col self-center w-full items-center pt-10`}
    >
      {/* <div className="my-6">
        <button
          className={cn(
            "px-6 py-2  rounded-l-xl",
            !displayingLiveProjects
              ? "bg-main-dark text-light"
              : "bg-gray-500 text-gray-800"
          )}
          onClick={() => setDisplayingLiveProjects(false)}
        >
          Code
        </button>
        <button
          className={cn(
            "px-6 py-2  rounded-r-xl",
            displayingLiveProjects
              ? "bg-main-dark text-light"
              : "bg-gray-500 text-gray-800"
          )}
          onClick={() => setDisplayingLiveProjects(true)}
        >
          Live
        </button>
      </div> */}
      <div className="grid w-10/12 h-screen grid-flow-row grid-cols-4 grid-rows-4 gap-4">
        {projects
          //   .filter((project) => project.isLive === displayingLiveProjects)
          .map((project) => {
            return <ProjectCard key={project.title} {...project}></ProjectCard>;
          })}
      </div>
    </div>
  );
}

export default ProjectList;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import guruImage from "../../public/guru.png";
import { projects } from "../lib/projects";
import { GlobalContext, InitialContext } from "../context/GlobalContext";
import ProjectCard from "../components/ProjectCard";

//TODO:
// - Tags

function Projects({ id }: { id: string }) {
  const { darkMode } = useContext(GlobalContext) as InitialContext;

  return (
    <div className={`${darkMode ? "bg-black-1" : "bg-light"} w-full`} id={id}>
      <div className="flex flex-col self-center w-11/12 my-10">
        {projects.map((project) => {
          return <ProjectCard {...project}></ProjectCard>;
        })}
      </div>
    </div>
  );
}

export default Projects;

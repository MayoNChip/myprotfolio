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
              {" "}
              <h1
                className={cn(
                  darkMode ? "text-black-2" : "text-black-1",
                  "text-xl font-light "
                )}
              >
                {project.description}
              </h1>
            </div>
            <div className="flex justify-between w-full">
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
              {project.isLive && (
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
            <div className="flex w-full flex-wrap space-x-2 space-y-2 my-2 items-center align-middle justify-center">
              {project.tags.map((tag) => {
                return (
                  <div
                    key={tag}
                    className="bg-secondary text-accent w-fit px-1 py-4 flex rounded align-bottom"
                  >
                    {tag}
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

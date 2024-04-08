"use client";

import React, { useContext } from "react";
import { Project } from "../../lib/projects";
import { cn } from "../../lib/utils";
import Image from "next/image";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  openedTabs: number[];
  setOpenedTabs: React.Dispatch<React.SetStateAction<number[]>>;
  project: Project;
  projectTags: { name: string; logo?: any }[];
};

function ProjectTab({
  openedTabs,
  setOpenedTabs,
  project,
  projectTags,
}: Props) {
  const { darkMode } = useContext(GlobalContext) as InitialContext;

  const toggleTab = (projectId: number) => {
    setOpenedTabs((currentTabs) => {
      if (currentTabs.includes(projectId)) {
        return currentTabs.filter((id) => id !== projectId);
      } else {
        return [...currentTabs, projectId];
      }
    });
  };

  return (
    <>
      <div
        className="w-auto my-4 rounded"
        onClick={() => toggleTab(project.id)}
      >
        <div className="w-full">
          <Image
            className="img rounded-t "
            src={project.image}
            alt={project.title}
          />
        </div>
        <div className="w-full flex p-4 bg-accent/70 rounded-b text-white">
          <h1
            className={cn(
              darkMode ? " text-light" : "text-secondary",
              "text-3xl font-extralight"
            )}
          >
            {project.title}
          </h1>
        </div>
      </div>
      <div className="w-full relative">
        <motion.div
          className={cn(
            openedTabs.includes(project.id) ? "scale-y-100" : " scale-y-0 ",
            "bg-dark border-accent border-2 p-4 rounded origin-top transition-all absolute z-20 "
          )}
        >
          <div className="flex flex-col items-center w-full ">
            <div>
              <h1
                className={cn(
                  darkMode ? "text-light" : "text-dark",
                  "text-xl font-light my-4 p-2"
                )}
              >
                {project.description}
              </h1>
              {project.hosting && (
                <section className="py-4 text-light">
                  <h1 className="md:text-2xl">Hosting:</h1>
                  <h3 className="md:text-md font-extralight">
                    frontend: {project.hosting.frontend}
                  </h3>
                  {project.hosting.backend && (
                    <h3 className="md:text-md font-extralight">
                      backend: {project.hosting.backend}
                    </h3>
                  )}
                </section>
              )}
            </div>
            {project.example_user && (
              <div className="h-fit">
                <h1
                  className={cn(
                    darkMode ? "text-light" : "text-dark",
                    "text-md font-extralight "
                  )}
                >
                  Test user: {project.example_user}
                </h1>
              </div>
            )}
            <div
              className={cn(
                !project.app_url || !project.repository_url
                  ? "justify-center"
                  : "justify-between",
                "flex w-full items-center"
              )}
            >
              {project.repository_url ? (
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  whileTap={{ scale: 0.95, rotateZ: -2 }}
                >
                  <Link
                    href={project.repository_url}
                    target="_blank"
                    className={cn(
                      "self-end px-6 py-2 font-medium transition-colors rounded text-md ",
                      darkMode
                        ? "text-light hover:text-dark/80 bg-stone-500 hover:bg-accent"
                        : "text-black/40 hover:text-secondary/90 bg-bg-secondary/30 hover:bg-secondary/60"
                    )}
                  >
                    Repository
                  </Link>
                </motion.div>
              ) : null}
              <button
                className="self-end px-6 py-1 font-medium transition-colors rounded text-md text-light hover:text-dark/80 bg-stone-500 hover:bg-accent"
                onClick={() => toggleTab(project.id)}
              >
                Close
              </button>
              {project.app_url && (
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  whileTap={{ scale: 0.95, rotateZ: -2 }}
                >
                  <Link
                    href={project.app_url}
                    target="_blank"
                    className={cn(
                      "self-end px-6 py-2 font-medium transition-colors rounded text-md ",
                      darkMode
                        ? "text-stone-200 hover:text-stone-500 bg-orange-800 hover:bg-stone-300"
                        : "text-accent hover:text-accent/40 bg-main hover:bg-secondary"
                    )}
                  >
                    Visit
                  </Link>
                </motion.div>
              )}
            </div>
            <div className="flex mt-6 space-x-2 rounded-full bg-stone-200">
              {projectTags &&
                projectTags.map((tag, index) => {
                  return (
                    <div
                      key={project.title + index}
                      className="flex items-center justify-center px-1 py-1 text-xs rounded-full cursor-default font-extralight"
                    >
                      {!tag.logo ? (
                        <span className="bg-accent/20 p-1 rounded-full text-stone-600 border-[1px] border-accent/40">
                          {tag.name}
                        </span>
                      ) : (
                        <Image src={tag.logo} alt={tag.name} width={30}></Image>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectTab;

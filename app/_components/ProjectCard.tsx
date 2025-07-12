"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectTags, Project } from "../../lib/projects";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import { cn } from "../../lib/utils";
import useScreenSize from "../../hooks/useScreenSize";
import ProjectTab from "./ProjectTab";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { darkMode } = useContext(GlobalContext) as InitialContext;
  const { width } = useScreenSize();
  const [isProjectHover, setProjectCardHovered] = useState<{
    id?: number;
    hovered?: boolean;
  }>({});
  const [openedTabs, setOpenedTabs] = useState<number[]>([]);

  const [projectTags, setProjectTags] = useState<
    { name: string; logo?: any }[]
  >([]);

  useEffect(() => {
    const projectTags = getProjectTags(project);
    setProjectTags(projectTags);
  }, [project]);

  if (width && width < 768) {
    return (
      <div className="w-full h-full rounded-xl">
        <ProjectTab
          projectTags={projectTags}
          openedTabs={openedTabs}
          setOpenedTabs={setOpenedTabs}
          project={project}
        />
      </div>
    );
  } else {
    return (
      <motion.div
        style={{ flex: "1 1 0%" }}
        onHoverStart={() =>
          setProjectCardHovered({ id: project.id, hovered: true })
        }
        onHoverEnd={() =>
          setProjectCardHovered({ ...isProjectHover, hovered: false })
        }
        initial={{
          opacity: 0.5,
          filter: "grayscale(0.7)",
        }}
        whileHover={{ flexGrow: 4, opacity: 1, filter: "grayscale(0)" }}
        transition={{ duration: 0.2 }}
        className="relative flex flex-col w-full h-screen hover:border-dark hover:border-[10px]"
      >
        <div className="w-full h-full">
          <Image
            className="img"
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <motion.div></motion.div>
        <AnimatePresence mode="wait">
          {isProjectHover.id === project.id && isProjectHover.hovered && (
            <motion.div
              key={project.id}
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 500, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.85, 0, 0.15, 1] }}
              className="z-10 flex items-center self-center justify-between w-full px-4 py-4 shadow-md bg-dark h-fit"
            >
              <div className="relative flex flex-col w-full h-fit">
                <div className="relative w-fit">
                  <motion.h1
                    className={cn(
                      darkMode ? " text-light" : "text-secondary",
                      "text-6xl font-extralight h-1/4 w-fit"
                    )}
                  >
                    {project.title}
                  </motion.h1>
                </div>

                <div className="flex flex-col items-center w-full min-h-[200px]">
                  <div className="min-h-[100px]">
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
                      "flex w-full"
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
                              <Image
                                src={tag.logo}
                                alt={tag.name}
                                width={30}
                              ></Image>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
}

export default ProjectCard;

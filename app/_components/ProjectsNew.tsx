"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, Project } from "../../lib/projects";
import ProjectCardNew from "./ProjectCardNew";
import ProjectDialog from "./ProjectDialog";

function ProjectsNew() {
  const ref = useRef(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 start", "start end"],
  });

  const titleParallex = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation to complete
  };

  return (
    <>
      <div
        className="relative flex flex-col items-center self-center w-full py-20 bg-dark"
        ref={ref}
      >
        {/* Background title */}
        <motion.h1
          className="absolute font-semibold text-accent/20 text-6xl md:text-9xl -top-16 md:-top-24 left-8 md:left-16 pointer-events-none select-none"
          style={{ y: titleParallex }}
          transition={{ duration: 1.4, type: "spring" }}
        >
          My Work
        </motion.h1>
        
        {/* Section title */}
        <div className="relative z-10 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-light mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-light/70 text-lg max-w-2xl mx-auto px-4"
          >
            A collection of projects I&apos;ve worked on, showcasing different technologies and approaches to problem-solving.
          </motion.p>
        </div>
        
        {/* Projects grid */}
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCardNew
                key={project.id}
                project={project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
      </div>
      
      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </>
  );
}

export default ProjectsNew;
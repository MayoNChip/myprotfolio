"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoClose, IoOpen, IoLogoGithub } from "react-icons/io5";
import { Project, getProjectTags } from "../../lib/projects";
import { cn } from "../../lib/utils";

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  // Prevent background scrolling when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  const projectTags = getProjectTags(project);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed inset-6 md:inset-12 lg:inset-20 xl:inset-20 xl:w-1/2 xl:mx-auto bg-light rounded-2xl shadow-2xl z-50 flex flex-col max-h-[calc(100vh-3rem)] md:max-h-[calc(100vh-6rem)] lg:max-h-[calc(100vh-10rem)] xl:max-h-[calc(100vh-8rem)]"
          >
            {/* Header */}
            <div className="relative h-40 md:h-48 lg:h-56 flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <IoClose size={24} />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {project.title}
                </h1>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 overflow-y-auto">
              <div className="max-w-4xl mx-auto">
                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-dark mb-4">
                    About this project
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Responsibilities */}
                {project.responsibilities && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-dark mb-4">
                      My Responsibilities
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {project.responsibilities}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-dark mb-4">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {projectTags.map((tag, index) => (
                      <div
                        key={`${project.id}-${index}`}
                        className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full hover:bg-accent/20 transition-colors"
                      >
                        {tag.logo && (
                          <Image
                            src={tag.logo}
                            alt={tag.name}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        )}
                        <span className="text-sm font-medium text-accent">
                          {tag.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hosting info */}
                {project.hosting && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-dark mb-4">
                      Hosting
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-dark mb-1">Frontend</h3>
                        <p className="text-gray-600">
                          {project.hosting.frontend}
                        </p>
                      </div>
                      {project.hosting.backend && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-dark mb-1">
                            Backend
                          </h3>
                          <p className="text-gray-600">
                            {project.hosting.backend}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Test user */}
                {project.example_user && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-dark mb-4">
                      Test Account
                    </h2>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-800">
                        <span className="font-medium">Email:</span>{" "}
                        {project.example_user}
                      </p>
                      <p className="text-blue-600 text-sm mt-1">
                        Use any password (6+ characters) for testing
                      </p>
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  {project.app_url && (
                    <Link
                      href={project.app_url}
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-light rounded-lg hover:bg-accent/90 transition-colors font-medium"
                    >
                      <IoOpen size={20} />
                      Visit Live Site
                    </Link>
                  )}

                  {project.repository_url && (
                    <Link
                      href={project.repository_url}
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-dark rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      <IoLogoGithub size={20} />
                      View Repository
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDialog;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoOpen, IoLogoGithub } from "react-icons/io5";
import { Project, getProjectTags } from "../../lib/projects";

interface ProjectCardNewProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCardNew: React.FC<ProjectCardNewProps> = ({ project, index, onClick }) => {
  const projectTags = getProjectTags(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-light rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden rounded-t-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick action buttons - shown on hover */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.app_url && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.app_url, '_blank');
              }}
              className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm"
            >
              <IoOpen size={16} className="text-accent" />
            </motion.button>
          )}
          
          {project.repository_url && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.repository_url, '_blank');
              }}
              className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm"
            >
              <IoLogoGithub size={16} className="text-dark" />
            </motion.button>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {projectTags.slice(0, 4).map((tag, tagIndex) => (
            <div
              key={`${project.id}-tag-${tagIndex}`}
              className="flex items-center gap-1 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-medium text-accent hover:bg-accent/20 transition-colors"
            >
              {tag.logo && (
                <Image
                  src={tag.logo}
                  alt={tag.name}
                  width={14}
                  height={14}
                  className="object-contain"
                />
              )}
              <span>{tag.name}</span>
            </div>
          ))}
          
          {projectTags.length > 4 && (
            <div className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-medium text-gray-500">
              +{projectTags.length - 4} more
            </div>
          )}
        </div>
        
        {/* Hosting badges */}
        {project.hosting && (
          <div className="flex gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
              {project.hosting.frontend}
            </span>
            {project.hosting.backend && (
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                {project.hosting.backend}
              </span>
            )}
          </div>
        )}
        
        {/* Click to view more indicator */}
        <div className="text-center">
          <span className="text-xs text-gray-400 group-hover:text-accent transition-colors duration-300">
            Click to view details
          </span>
        </div>
      </div>
      
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCardNew;
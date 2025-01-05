"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, ChevronRight, Minimize2, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MyProjects from '@/app/data/projects.json';

interface Project {
  title: string;
  description: string;
  image: string;
  techUsed: string | string[];
  features: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectImage: React.FC<{ src: string; alt: string; isExpanded: boolean }> = ({ src, alt, isExpanded }) => (
  <motion.div 
    layout="position"
    className="relative aspect-video w-full overflow-hidden rounded-lg group"
  >
    <Image 
      src={src} 
      alt={alt} 
      layout="fill" 
      objectFit="cover" 
      className={`will-change-transform transition-transform duration-500 ease-out ${isExpanded ? 'scale-100' : 'group-hover:scale-105'}`}
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
    {!isExpanded && (
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-white text-sm font-medium bg-indigo-600/80 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
          View Details
        </span>
      </div>
    )}
  </motion.div>
);

const TechBadge: React.FC<{ tech: string }> = ({ tech }) => (
  <Badge 
    variant="secondary" 
    className="bg-indigo-950/60 text-indigo-200 hover:bg-indigo-900/60 text-xs px-2 py-0.5 rounded-full border border-indigo-500/30 backdrop-blur-sm transition-all duration-200 hover:scale-105"
  >
    {tech}
  </Badge>
);

const FeatureItem: React.FC<{ feature: string; index: number }> = ({ feature, index }) => (
  <motion.li 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.2, delay: index * 0.05 }}
    className="flex items-start gap-2 text-indigo-100/90 text-xs group cursor-default"
  >
    <Code2 size={14} className="mt-0.5 flex-shrink-0 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200" />
    <span className="group-hover:text-white transition-colors duration-200">{feature}</span>
  </motion.li>
);

const ProjectButton: React.FC<{ href: string; icon: React.ElementType; label: string; primary?: boolean }> = ({ href, icon: Icon, label, primary = false }) => (
  <Button
    variant={primary ? "default" : "outline"}
    size="sm"
    asChild
    className={`group transition-all duration-200 text-xs ${
      primary 
        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5' 
        : 'border-indigo-600/30 hover:border-indigo-400/60 text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600/20 hover:-translate-y-0.5'
    }`}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5"
    >
      <Icon size={14} className="transition-transform duration-200 group-hover:scale-110" />
      <span className="relative">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-200 group-hover:w-full opacity-70" />
      </span>
    </a>
  </Button>
);

const ProjectCard: React.FC<{ project: Project; isExpanded: boolean; onToggle: () => void }> = ({ project, isExpanded, onToggle }) => (
  <motion.div
    layout="position"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    style={{
      gridColumn: isExpanded ? "span 2" : "span 1",
      height: "100%",
      minHeight: isExpanded ? "400px" : "auto", // Reduced from 480px to 400px
      maxHeight: isExpanded ? "600px" : "none" // Added max-height for expanded state
    }}
    className={`relative bg-gradient-to-br from-indigo-950/90 to-slate-900/90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
      isExpanded ? 'cursor-default' : 'cursor-pointer hover:ring-1 hover:ring-indigo-500/30'
    }`}
    onClick={!isExpanded ? onToggle : undefined}
  >
    <motion.div layout="position" className="p-4 space-y-3 h-full flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
          {project.title}
        </h3>
        {isExpanded && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={(e) => { e.stopPropagation(); onToggle(); }}
            className="h-7 w-7 text-indigo-300 hover:text-indigo-100 hover:bg-indigo-500/20"
          >
            <Minimize2 size={16} />
          </Button>
        )}
      </div>

      <ProjectImage src={project.image} alt={project.title} isExpanded={isExpanded} />

      <p className="text-indigo-100/90 text-xs leading-relaxed">
        {isExpanded ? project.description : `${project.description.slice(0, 100)}...`}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {(Array.isArray(project.techUsed) ? project.techUsed : project.techUsed.split(', '))
          .slice(0, isExpanded ? undefined : 3)
          .map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        {!isExpanded && (Array.isArray(project.techUsed) ? project.techUsed : project.techUsed.split(', ')).length > 3 && (
          <Badge variant="secondary" className="bg-indigo-950/60 text-indigo-200 text-xs px-2 py-0.5 rounded-full border border-indigo-500/30">
            +{(Array.isArray(project.techUsed) ? project.techUsed : project.techUsed.split(', ')).length - 3}
          </Badge>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-2 mt-2 flex-grow overflow-y-auto" // Added overflow-y-auto
          >
            <h4 className="text-sm font-medium text-indigo-300 flex items-center gap-2">
              Key Features
              <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent" />
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} index={index} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between gap-3 pt-3 mt-auto">
        <ProjectButton
          href={project.liveLink}
          icon={ExternalLink}
          label="Live Demo"
          primary
        />
        <ProjectButton
          href={project.githubLink}
          icon={Github}
          label="Source Code"
        />
      </div>
    </motion.div>
  </motion.div>
);

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const handleToggle = (projectTitle: string) => {
    setExpandedProject(prev => prev === projectTitle ? null : projectTitle);
  };

  return (
    <section id="projects" className="min-h-screen py-16 md:py-24 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-3 mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-indigo-200/80 max-w-2xl mx-auto text-sm">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        <motion.div 
          layout="position"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {MyProjects.map((project) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                isExpanded={expandedProject === project.title}
                onToggle={() => handleToggle(project.title)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


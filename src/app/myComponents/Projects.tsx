"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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

const ProjectImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative aspect-[16/9] w-full overflow-hidden group">
    <Image 
      src={src} 
      alt={alt} 
      layout="fill" 
      objectFit="cover" 
      className="transition-all duration-700 ease-out group-hover:scale-105" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
  </div>
);

const TechBadge: React.FC<{ tech: string }> = ({ tech }) => (
  <Badge 
    variant="secondary" 
    className="bg-indigo-950/60 text-indigo-200 hover:bg-indigo-900/60 text-xs px-3 py-1 rounded-full border border-indigo-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
  >
    {tech}
  </Badge>
);

const FeatureItem: React.FC<{ feature: string }> = ({ feature }) => (
  <li className="flex items-start gap-3 text-indigo-100/90 text-sm group cursor-default">
    <Code2 size={16} className="mt-0.5 flex-shrink-0 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
    <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
  </li>
);

const ProjectButton: React.FC<{ href: string; icon: React.ElementType; label: string; primary?: boolean }> = ({ href, icon: Icon, label, primary = false }) => (
  <Button
    variant={primary ? "default" : "outline"}
    size="sm"
    asChild
    className={`group transition-all duration-300 ${
      primary 
        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:translate-y-[-2px]' 
        : 'border-indigo-600/30 hover:border-indigo-400/60 text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600/20 hover:translate-y-[-2px]'
    }`}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2"
    >
      <Icon size={16} className="transition-transform duration-300 group-hover:scale-110" />
      <span className="relative">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  </Button>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="group relative bg-gradient-to-br from-indigo-950/90 to-slate-900/90 border-indigo-800/30 overflow-hidden rounded-xl hover:border-indigo-700/40 transition-all duration-500 hover:translate-y-[-4px]">
    <ProjectImage src={project.image} alt={project.title} />
    <CardHeader className="relative pt-6">
      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
        {project.title}
        <ArrowRight size={20} className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <p className="text-indigo-100/90 text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {(Array.isArray(project.techUsed) ? project.techUsed : project.techUsed.split(', ')).map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
      <div className="space-y-3">
        <h4 className="text-base font-semibold text-indigo-300 flex items-center gap-2">
          Key Features
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </h4>
        <ul className="space-y-3">
          {project.features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </ul>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between gap-4 border-t border-indigo-800/30 mt-6 pt-6">
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
    </CardFooter>
  </Card>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-20 md:py-28 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-indigo-200/80 max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {MyProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


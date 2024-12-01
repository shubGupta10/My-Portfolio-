"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
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
  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
    <Image 
      src={src} 
      alt={alt} 
      layout="fill" 
      objectFit="cover" 
      className="transition-transform duration-300 ease-in-out group-hover:scale-105" 
    />
  </div>
);

const TechBadge: React.FC<{ tech: string }> = ({ tech }) => (
  <Badge variant="secondary" className="bg-blue-900/50 text-blue-200 hover:bg-blue-800 text-xs">
    {tech}
  </Badge>
);

const FeatureItem: React.FC<{ feature: string }> = ({ feature }) => (
  <li className="flex items-start gap-2 text-blue-100 text-sm">
    <Code2 size={14} className="mt-1 flex-shrink-0 text-blue-400" />
    <span>{feature}</span>
  </li>
);

const ProjectButton: React.FC<{ href: string; icon: React.ElementType; label: string; primary?: boolean }> = ({ href, icon: Icon, label, primary = false }) => (
  <Button
    variant={primary ? "default" : "outline"}
    size="sm"
    asChild
    className={`transition-colors duration-300 text-xs ${
      primary 
        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
        : 'border-blue-600/50 hover:bg-blue-800/20 text-blue-200 hover:text-blue-100'
    }`}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1"
    >
      <Icon size={14} />
      <span>{label}</span>
    </a>
  </Button>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="bg-blue-950/30 border-blue-800/30 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <ProjectImage src={project.image} alt={project.title} />
    <CardHeader>
      <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
        {project.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-blue-100 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {(Array.isArray(project.techUsed) ? project.techUsed : project.techUsed.split(', ')).map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
      <div>
        <h4 className="text-base font-semibold text-blue-200 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {project.features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </ul>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
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
    <section id="projects" className="py-12 md:py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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


import React from 'react';
import MyProjects from '@/app/data/projects.json';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Projects = () => {
    
    const words = `Here's a glimpse of the stuff I've been building.
Check out what I've been up to!`

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-5xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-center mb-12 leading-tight">
                Check out my Projects
            </h1>
            <div className="w-full h-[40px] text-center relative">
               <TextGenerateEffect duration={1} words={words}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MyProjects.map((project, index) => (
                    <CardContainer key={index} className="w-full">
                        <CardBody className="bg-gradient-to-br from-gray-900 via-black to-blue-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-2xl font-bold text-white mb-4"
                            >
                                {project.title}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full h-60 relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </CardItem>
                            <CardItem
                                translateZ="60"
                                className="text-sm text-gray-300 mb-4 mt-4"
                            >
                                {project.description}
                            </CardItem>
                            <CardItem
                                translateZ="50"
                                className="flex flex-wrap gap-2 mb-4"
                            >
                                {project.techUsed.split(', ').map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-2 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </CardItem>
                            <CardItem
                                translateZ="50"
                                className="flex items-center justify-between mt-4"
                            >
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 mr-5 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold flex items-center space-x-2 hover:bg-blue-600 transition duration-300"
                                >
                                    <ExternalLink size={16} />
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-full bg-gray-700 text-white text-sm font-semibold flex items-center space-x-2 hover:bg-gray-600 transition duration-300"
                                >
                                    <Github size={16} />
                                    <span>GitHub</span>
                                </a>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
};

export default Projects;
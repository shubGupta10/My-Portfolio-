import React from 'react';
import MyProjects from '@/app/data/projects.json';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useTheme } from 'next-themes';

const Projects = () => {
 const {resolvedTheme} = useTheme();
    
    const words = `Here's a glimpse of the stuff I've been building.
Check out what I've been up to!`

    return (
        <div className={`${resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
            <div className="container mx-auto px-4 py-16">
                <h1 id='projects' className="text-5xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-center mb-12 leading-tight">
                    Check out my Projects
                </h1>
                <div className={`w-full text-center relative ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                   <TextGenerateEffect duration={1} words={words}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {MyProjects.map((project, index) => (
                        <CardContainer key={index} className="w-full">
                            <CardBody className={`relative group/card border ${
                                resolvedTheme === 'dark' 
                                    ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black border-gray-700 hover:border-gray-600' 
                                    : 'bg-white border-gray-200 hover:border-gray-300'
                                } w-full h-full rounded-xl p-6 transition-colors duration-300`}>
                                <CardItem
                                    translateZ="50"
                                    className={`text-2xl font-bold mb-4 ${
                                        resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}
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
                                    className={`text-sm mb-4 mt-4 ${
                                        resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}
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
                                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                                resolvedTheme === 'dark' 
                                                    ? 'text-blue-300 bg-blue-500/10 border border-blue-500/20' 
                                                    : 'text-blue-600 bg-blue-100 border border-blue-200'
                                            }`}
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
                                        className={`px-4 mr-5 py-2 rounded-full text-white text-sm font-semibold flex items-center space-x-2 transition duration-300 ${
                                            resolvedTheme === 'dark' 
                                                ? 'bg-blue-600 hover:bg-blue-700' 
                                                : 'bg-blue-500 hover:bg-blue-600'
                                        }`}
                                    >
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center space-x-2 transition duration-300 ${
                                            resolvedTheme === 'dark' 
                                                ? 'bg-gray-700 hover:bg-gray-600' 
                                                : 'bg-gray-800 hover:bg-gray-700'
                                        }`}
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
        </div>
    );
};

export default Projects;
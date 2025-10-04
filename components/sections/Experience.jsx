import React from 'react';
import ReviewOnScroll from '../ReviewOnScroll';
import { Briefcase, Link as LinkIcon } from 'lucide-react';

function Experience() {
    const experiences = [
        {
            id: 1,
            position: "Product Engineer",
            company: "HUZL.IN",
            duration: "June 2025 - Present",
            status: "Current",
            description: "Working as a Product Engineer, contributing across both frontend and backend. Building new features, improving the landing page, and enhancing the platform experience for freelancers to share gigs and connect.",
            technologies: ["Next.js", "React.js", "Node.js", "AWS"],
            liveUrl: "https://huzl.in",
        },
        {
            id: 2,
            position: "Freelance Full Stack Developer",
            company: "DIGNIFY A GIRL LTD",
            duration: "Nov 2024 - June 2025",
            status: "Completed",
            description: "Worked with the founder of Dignify a Girl to develop BuildMyCV, a resume builder using Next.js, Node.js, TypeScript, and Firebase. Integrated LangChain and Gemini AI for resume creation and job analysis.",
            technologies: ["Next.js", "Node.js", "TypeScript", "Firebase", "LangChain", "Gemini AI"],
        },
        {
            id: 3,
            position: "Freelance Full Stack Developer",
            company: "Biostrive Energies",
            duration: "May 2024 - Nov 2024",
            status: "Completed",
            description: "Developed a full-stack platform for BioStrive Energies using Next.js, Node.js, and MongoDB. Built an admin panel with role-based access, a real-time notice system, secure JWT authentication, and optimized SEO with caching and efficient asset loading.",
            technologies: ["Next.js", "Node.js", "MongoDB", "JWT", "Admin Panel", "SEO"],
        }
    ];

    return (
        <ReviewOnScroll>
            <section id='experience' className='py-20 sm:py-24'>
                <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='mb-12'>
                        <h2 className='text-2xl font-bold text-white'>Work Experience</h2>
                    </div>

                    <div className='relative'>
                        <div className='absolute left-4 w-0.5 h-full bg-white/10 md:left-1/2 md:-translate-x-1/2' aria-hidden="true"></div>

                        <div className='space-y-12'>
                            {experiences.map((exp, index) => (
                                <div key={exp.id} className='relative pl-10 md:grid md:grid-cols-2 md:gap-x-12 md:pl-0'>

                                    <div className='absolute top-0 left-4 -translate-x-1/2 bg-gray-900 p-1.5 rounded-full md:left-1/2'>
                                        <div className='w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-400/30 flex items-center justify-center'>
                                            <Briefcase className='w-4 h-4 text-cyan-300' />
                                        </div>
                                    </div>

                                    <div className={`space-y-1 ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}>
                                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300">
                                            <span
                                                className={`absolute top-4 right-4 py-1 px-3 rounded-full text-xs font-medium border
                                                ${exp.status === 'Current'
                                                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                                                        : 'bg-green-500/20 text-green-300 border-green-500/30'
                                                    }`}
                                            >
                                                {exp.status}
                                            </span>

                                            <h3 className='text-xl font-bold text-white mb-1'>{exp.position}</h3>

                                            {/* This div is now the same for all cards */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <a
                                                    href={exp.liveUrl}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='text-cyan-400 font-semibold hover:underline'
                                                >
                                                    {exp.company}
                                                </a>
                                                {exp.liveUrl && <LinkIcon className='w-3 h-3 text-cyan-400' />}
                                            </div>

                                            <p className='text-gray-400 text-sm mb-4'>{exp.duration}</p>
                                            <p className='text-gray-300 text-sm leading-relaxed mb-6'>{exp.description}</p>

                                            <div className='flex flex-wrap gap-2'>
                                                {exp.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className='bg-white/10 backdrop-blur-sm text-gray-200 py-1.5 px-3 rounded-lg text-xs font-medium border border-white/20'
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </ReviewOnScroll>
    );
}

export default Experience;
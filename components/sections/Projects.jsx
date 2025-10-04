import React from 'react'
import ReviewOnScroll from '../ReviewOnScroll'
import { ArrowBigRight, PlayCircle, Github } from 'lucide-react'

function Projects() {
    const projects = [
        {
            title: "PostMyGig - Freelance Gig Sharing Platform",
            description: "A platform where freelancers can post excess gigs they can’t handle, allowing other freelancers to pick them up. It features real-time chat, gig discovery, and a feedback system.",
            technologies: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Redis", "Socket.IO", "MongoDB"],
            image: "https://postmygig.xyz/og-image.png",
            liveLink: "https://postmygig.xyz",
            githubLink: "https://github.com/shubGupta10/postmygig"
        },
        {
            title: "CodeX - Cloud IDE",
            description: "A flexible cloud-powered IDE similar to Replit, using Monaco Editor, AI-powered code tools, a code converter, and seamless file control powered by Supabase.",
            technologies: ["Next.js", "TypeScript", "Monaco Editor", "Piston API", "Supabase", "LangChain", "Tailwind CSS", "Redis"],
            image: "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2Fx-codex-pic.avif?alt=media",
            liveLink: "https://x-codex.vercel.app",
            githubLink: "https://github.com/shubGupta10/CodeX-Editor"
        },
        {
            title: "BuildMyCV - AI Resume Builder",
            description: "An AI-powered resume builder with ATS support, role-based suggestions, job analysis, and smart recommendations to help job seekers create strong resumes.",
            technologies: ["Next.js", "TypeScript", "Firebase", "LangChain", "Gemini AI", "Shadcn", "Tailwind CSS", "Clerk"],
            image: "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2Fbuildmycv-new-img.png?alt=media",
            liveLink: "https://buildmycv.ai",
            githubLink: "#"
        },
        {
            title: "TechHunt – Curated Tech Job Board",
            description: "A curated job board for Indian tech professionals with remote filters, category-based search, and updated listings every four days for quick job discovery.",
            technologies: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Redis", "Web Scraping", "Express", "GitHub Actions"],
            image: "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2Ftechunt.png?alt=media",
            liveLink: "https://tech-hunt-jobs.vercel.app",
            githubLink: "https://github.com/shubGupta10/tech-hunt-client"
        },
        {
            title: "Interview Buddy - AI Interview Prep",
            description: "An AI-driven interview preparation tool with role-specific questions, difficulty control, detailed answers, and language-based practice for multiple interview rounds.",
            technologies: ["Next.js", "TypeScript", "LangChain", "Gemini AI", "Tailwind CSS", "Shadcn"],
            image: "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2Finterview-buddy-launch-1.png?alt=media",
            liveLink: "https://interviewbuddy-platform.vercel.app",
            githubLink: "https://github.com/shubGupta10/interview-buddy"
        }
    ];

    return (
        <ReviewOnScroll>
            <section
                id='projects'
                className='py-20 sm:py-24'
            >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='mb-12'>
                        <h2 className='text-2xl font-bold text-white'>Featured Projects</h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className='bg-white/5 rounded-2xl border border-white/10 flex flex-col hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)] transition-all duration-300 overflow-hidden'
                            >
                                <div className='relative overflow-hidden'>
                                    <img
                                        src={project.image}
                                        alt={`Screenshot of the ${project.title} project`}
                                        className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                                </div>

                                <div className='p-6 flex flex-col flex-grow'>
                                    <h3 className='text-xl font-bold mb-2 text-white'>{project.title}</h3>
                                    <p className='text-gray-300 text-sm mb-4 leading-relaxed flex-grow'>
                                        {project.description}
                                    </p>
                                    <div className='flex flex-wrap gap-2 mb-6'>
                                        {project.technologies.slice(0, 4).map((tech, techIndex) => ( 
                                            <span
                                                key={techIndex}
                                                className='bg-blue-500/10 text-blue-300 py-1 px-3 rounded-md text-xs border border-blue-500/20'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className='flex gap-4 mt-auto'>
                                        <a
                                            href={project.liveLink}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            className='flex-1 inline-flex items-center justify-center gap-2 bg-blue-500/20 text-blue-300 py-2.5 px-4 rounded-lg text-center text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 hover:text-white transition-all duration-200'
                                        >
                                            <PlayCircle className='w-4 h-4' />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            className={`flex-1 inline-flex items-center justify-center gap-2 bg-gray-500/20 text-gray-300 py-2.5 px-4 rounded-lg text-center text-sm font-medium border border-gray-500/30 hover:bg-gray-500/30 hover:text-white transition-all duration-200 ${project.githubLink === '#' ? 'cursor-not-allowed opacity-50' : ''}`}
                                        >
                                            <Github className='w-4 h-4' />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='text-center mt-16'>
                        <a
                            href="https://github.com/shubGupta10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 bg-white/5 text-blue-300 py-3 px-6 rounded-lg font-medium border border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1'
                        >
                            View More on GitHub
                            <ArrowBigRight className='w-5 h-5' />
                        </a>
                    </div>
                </div>
            </section>
        </ReviewOnScroll>
    )
}

export default Projects
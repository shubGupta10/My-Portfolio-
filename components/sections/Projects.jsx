import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { ArrowBigRight, PlayCircle, Github } from "lucide-react";

function Projects() {
    const projects = [
        {
            title: "PostMyGig - Freelance Gig Sharing Platform",
            description:
                "A platform where freelancers can post excess gigs they can’t handle, allowing other freelancers to pick them up. It features real-time chat, gig discovery, and a feedback system.",
            technologies: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Redis", "Socket.IO", "MongoDB"],
            image: "https://postmygig.xyz/og-image.png",
            liveLink: "https://postmygig.xyz",
            githubLink: "https://github.com/shubGupta10/postmygig",
        },
        {
            title: "CodeX - Cloud IDE",
            description:
                "A flexible cloud-powered IDE similar to Replit, using Monaco Editor, AI-powered code tools, a code converter, and seamless file control powered by Supabase.",
            technologies: ["Next.js", "TypeScript", "Monaco Editor", "Piston API", "Supabase", "LangChain", "Tailwind CSS", "Redis"],
            image: "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2Fx-codex-pic.avif?alt=media",
            liveLink: "https://x-codex.vercel.app",
            githubLink: "https://github.com/shubGupta10/CodeX-Editor",
        },
        {
            title: "BuildMyCV - AI Resume Builder",
            description:
                "An AI-powered resume builder with ATS support, role-based suggestions, job analysis, and smart recommendations to help job seekers create strong resumes.",
            technologies: ["Next.js", "TypeScript", "Firebase", "LangChain", "Gemini AI", "Shadcn", "Tailwind CSS", "Clerk"],
            image: "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2Fbuildmycv-new-img.png?alt=media",
            liveLink: "https://buildmycv.ai",
            githubLink: "#",
        },
        {
            title: "TechHunt – Curated Tech Job Board",
            description:
                "A curated job board for Indian tech professionals with remote filters, category-based search, and updated listings every four days for quick job discovery.",
            technologies: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Redis", "Express", "Web Scraping", "GitHub Actions"],
            image: "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2Ftechunt.png?alt=media",
            liveLink: "https://tech-hunt-jobs.vercel.app",
            githubLink: "https://github.com/shubGupta10/tech-hunt-client",
        },
        {
            title: "Interview Buddy - AI Interview Prep",
            description:
                "An AI-driven interview preparation tool with role-specific questions, difficulty control, detailed answers, and language-based practice for multiple interview rounds.",
            technologies: ["Next.js", "TypeScript", "LangChain", "Gemini AI", "Tailwind CSS", "Shadcn"],
            image: "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2Finterview-buddy-launch-1.png?alt=media",
            liveLink: "https://interviewbuddy-platform.vercel.app",
            githubLink: "https://github.com/shubGupta10/interview-buddy",
        },
    ];

    return (
        <ReviewOnScroll>
            <Section id="projects">
                <Container>
                    <h2 className="section-title mb-16">Featured Projects</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="glass-card hover-lift rounded-2xl flex flex-col 
                                           border-white/10 overflow-hidden 
                                           w-full min-h-[420px] sm:min-h-[450px]"
                            >
                                {/* Image Section */}
                                <div className="relative overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover group-hover:scale-105 
                                                   transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t 
                                                    from-black/60 via-black/0 to-transparent" />
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold mb-2 text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.slice(0, 4).map((tech, t_i) => (
                                            <span key={t_i} className="badge-skill text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mt-auto">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary flex justify-center items-center gap-2 text-sm py-2"
                                        >
                                            <PlayCircle className="w-4 h-4" /> Live Demo
                                        </a>

                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`btn-secondary flex justify-center items-center gap-2 text-sm py-2 ${
                                                project.githubLink === "#" ? "cursor-not-allowed opacity-50 pointer-events-none" : ""
                                            }`}
                                        >
                                            <Github className="w-4 h-4" /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <a
                            href="https://github.com/shubGupta10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center gap-2"
                        >
                            View More on GitHub
                            <ArrowBigRight className="w-5 h-5" />
                        </a>
                    </div>
                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

export default Projects;

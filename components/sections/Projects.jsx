import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { ArrowUpRight, Globe, Github, FolderGit2 } from "lucide-react";
import { useRouter } from "next/navigation";
import projectsData from "../../lib/data/project.json";

function Projects() {
    const router = useRouter();

    return (
        <Section id="projects">
            <div className="relative z-10 w-full">

                <ReviewOnScroll>
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-6 text-left flex items-center gap-2">
                        Projects <span className="text-[0.85em]">🚀</span>
                    </h2>
                </ReviewOnScroll>

                <div className="flex flex-col">
                    {projectsData.map((project, index) => (
                        <ReviewOnScroll key={index} threshold={0.1}>
                            <div className="py-5 sm:py-6 border-b border-border/50 group block">
                                
                                {/* Header: Title and Links */}
                                <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 mb-0.5">
                                    <div
                                        onClick={() => router.push(`/project-details/${project.slug}`)}
                                        className="inline-flex items-center gap-1.5 sm:gap-2 cursor-pointer group/title w-fit truncate"
                                    >
                                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground underline decoration-foreground/40 group-hover/title:decoration-foreground group-hover/title:translate-x-1 transition-all duration-300 underline-offset-4 truncate">
                                            {project.title.split(" - ")[0]}
                                        </h3>
                                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground group-hover/title:text-foreground group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                                    </div>

                                    {/* Persistent Links (Right aligned on mobile too) */}
                                    <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
                                        {project.liveLink && project.liveLink !== "#" && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
                                            >
                                                <Globe className="w-4 h-4" />
                                                <span className="underline decoration-transparent group-hover/link:decoration-foreground underline-offset-4 transition-colors">
                                                    Live
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Description (Concise, 2-3 lines max) */}
                                <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed max-w-3xl mb-5 mt-4">
                                    {project.description[0]}
                                </p>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary border border-border/50 text-muted-foreground text-[11px] sm:text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </ReviewOnScroll>
                    ))}
                </div>

            </div>
        </Section>
    );
}

export default Projects;
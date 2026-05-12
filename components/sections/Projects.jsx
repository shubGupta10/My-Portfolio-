import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import HoverGlow from "../ui/HoverGlow";

function Projects() {
    const router = useRouter();
    const projects = [
        {
            title: "PostMyGig - Freelance Gig Sharing Platform",
            description:
                "A platform where freelancers can post excess gigs they can’t handle, allowing other freelancers to pick them up. It features real-time chat, gig discovery, and a feedback system.",
            image: "https://postmygig.xyz/og-image.png",
            link: "/project-details/postmygig",
        },
        {
            title: "CodeX - Cloud IDE",
            description:
                "A flexible cloud-powered IDE similar to Replit, using Monaco Editor, AI-powered code tools, a code converter, and seamless file control powered by Supabase.",
            image: "/x-codex-pic.avif",
            link: "/project-details/codex",
        },
        {
            title: "BuildMyCV - AI Resume Builder",
            description:
                "An AI-powered resume builder with ATS support, role-based suggestions, job analysis, and smart recommendations to help job seekers create strong resumes.",
            image: "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2Fbuildmycv-new-img.png?alt=media",
            link: "/project-details/buildmycv",
        },
        {
            title: "Interview Buddy - AI Interview Prep",
            description: "An AI-driven interview preparation tool with role-specific questions, difficulty control, detailed answers, and language-based practice for multiple interview rounds.",
            image: "/interviewbuddy.png",
            link: "/project-details/interviewbuddy",
            slug: "interviewbuddy"
        }
    ];

    return (
        <ReviewOnScroll>
            <Section id="projects">
                <Container className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    
                    <h2 className="text-3xl font-bold text-foreground mb-12 text-center lg:text-left">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => router.push(project.link)}
                                className="group relative flex flex-col w-full rounded-2xl bg-card border border-border overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 active:scale-[0.98] transition-all duration-300"
                            >
                                <HoverGlow />
                                {/* ── Image Section ── */}
                                <div className="relative w-full h-64 overflow-hidden border-b border-border">
                                    <div className="absolute inset-0 bg-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                                        loading="lazy"
                                    />
                                </div>

                                {/* ── Content Section ── */}
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow font-light line-clamp-3">
                                        {Array.isArray(project.description) ? project.description.join(" ") : project.description}
                                    </p>

                                    {/* ── Subtle Action Link ── */}
                                    <div className="mt-auto pt-5 flex items-center justify-between border-t border-border transition-colors duration-300">
                                        <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                            Open Project
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-secondary flex flex-col items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-muted-foreground">
                                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

export default Projects;
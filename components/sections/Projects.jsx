import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

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
            <Section id="projects" className="py-20 lg:py-24">
                <Container className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
                    
                    {/* Aligned with the exact left-aligned spacing structure established in About/Hero */}
                    <h2 className="section-title mb-16 text-center lg:text-left">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => router.push(project.link)}
                                className="group relative flex flex-col w-full rounded-2xl bg-[#111111]/60 border border-white/[0.08] overflow-hidden cursor-pointer hover:bg-[#161616] hover:border-white/20 active:scale-[0.98] transition-all duration-500 shadow-2xl"
                            >
                                {/* ── Image Section ── */}
                                <div className="relative w-full h-64 overflow-hidden border-b border-white/[0.05]">
                                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                        loading="lazy"
                                    />
                                </div>

                                {/* ── Content Section ── */}
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <h3 className="text-2xl font-bold text-gray-100 mb-3 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-base leading-relaxed mb-10 flex-grow font-light">
                                        {project.description}
                                    </p>

                                    {/* ── Subtle Action Link (Vercel Style) ── */}
                                    <div className="mt-auto pt-5 flex items-center justify-between border-t border-white/[0.04] group-hover:border-white/10 transition-colors duration-300">
                                        <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                                            Open Project
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex flex-col items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-300 text-gray-400">
                                            {/* Diagonal arrow rotates to straight right on hover to signal entry */}
                                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
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
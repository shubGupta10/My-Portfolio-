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
            <Section id="projects">
                <Container>
                    <h2 className="section-title mb-16">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="glass-card hover-lift rounded-2xl flex flex-col 
                                           border-white/10 overflow-hidden 
                                           w-full"
                            >
                                {/* Image Section */}
                                <div className="relative overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-105 
                                                   transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t 
                                                   from-black/80 via-black/20 to-transparent"
                                    />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto pt-4">
                                        <button
                                            onClick={() => router.push(project.link)}
                                            className="btn-secondary w-full flex justify-center items-center gap-2 py-3 group cursor-pointer"
                                        >
                                            View Details
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
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
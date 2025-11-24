import React from 'react';
import ReviewOnScroll from '../ReviewOnScroll';
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Briefcase, Link as LinkIcon } from 'lucide-react';

function Experience() {
    const experiences = [
        {
            id: 1,
            position: "Full Stack Engineer",
            company: "HUZL.IN",
            duration: "June 2025 - Present",
            status: "Current",
            description:
                "Building and maintaining full-stack features for a freelancer platform. Responsible for frontend interfaces with Next.js and backend APIs with Node.js, plus cloud deployment on AWS.",
            technologies: ["Next.js", "React.js", "Node.js", "AWS", "MongoDB"],
            liveUrl: "https://huzl.in",
        },
        {
            id: 2,
            position: "Freelance Full Stack Developer",
            company: "DIGNIFY A GIRL LTD",
            duration: "Nov 2024 - June 2025",
            status: "Completed",
            description:
                "Worked with the founder to develop BuildMyCV — a Next.js & Firebase-based AI-powered resume builder with LangChain + Gemini AI.",
            technologies: ["Next.js", "Node.js", "TypeScript", "Firebase", "LangChain", "Gemini AI"],
        },
        {
            id: 3,
            position: "Freelance Full Stack Developer",
            company: "Biostrive Energies",
            duration: "May 2024 - Nov 2024",
            status: "Completed",
            description:
                "Developed web platform using Next.js and MongoDB. Built secure authentication, SEO optimization, caching, and a dynamic admin panel.",
            technologies: ["Next.js", "Node.js", "MongoDB", "JWT", "Admin Panel", "SEO"],
        }
    ];

    return (
        <ReviewOnScroll>
            <Section id="experience">
                <Container>
                    <h2 className="section-title mb-16">Work Experience</h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div
                            className="absolute left-6 w-0.5 h-full bg-white/10 md:left-1/2 md:-translate-x-1/2"
                            aria-hidden="true"
                        />

                        <div className="space-y-16">
                            {experiences.map((exp, index) => (
                                <div
                                    key={exp.id}
                                    className={`relative pl-12 md:grid md:grid-cols-2 md:gap-14 md:pl-0`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute top-0 left-6 -translate-x-1/2 bg-gray-900 p-1.5 rounded-full md:left-1/2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-400/30 flex items-center justify-center">
                                            <Briefcase className="w-4 h-4 text-cyan-300" />
                                        </div>
                                    </div>

                                    {/* Experience Card */}
                                    <div
                                        className={`glass-card hover-lift p-8 md:p-10 relative
                                                ${index % 2 !== 0
                                                ? "md:col-start-2"
                                                : "md:col-start-1 md:row-start-1"
                                            }`}
                                    >
                                        {/* Status Badge */}
                                        <span
                                            className={`badge-status absolute top-4 right-4 z-20
                                                    ${exp.status === "Current"
                                                    ? "badge-status-current"
                                                    : "badge-status-done"
                                                }`}
                                        >
                                            {exp.status}
                                        </span>


                                        <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>

                                        <div className="flex items-center gap-2 mb-2">
                                            <a
                                                href={exp.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-cyan-400 font-semibold hover:underline"
                                            >
                                                {exp.company}
                                            </a>
                                            {exp.liveUrl && <LinkIcon className="w-3 h-3 text-cyan-400" />}
                                        </div>

                                        <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                                        <p className="text-gray-300 text-base leading-relaxed mb-6">{exp.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className="badge-skill text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

export default Experience;

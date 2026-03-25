import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import {
    Code2,
    Server,
    Wrench,
    Database,
    Building2,
    Calendar,
    Award,
} from "lucide-react";

function About() {
    const frontendSkills = [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "Supabase",
        "Appwrite",
        "Framer Motion",
    ];

    const backendSkills = [
        "Node.js",
        "Go",
        "Express",
        "REST APIs",
        "GraphQL",
        "LangChain",
        "WebSockets",
    ];

    const devopsSkills = [
        "Docker",
        "Docker Hub",
        "AWS",
        "Git",
        "GitHub Actions",
        "Vercel",
        "Netlify",
    ];

    const databaseSkills = [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Firebase",
    ];

    const skillCategories = [
        { title: "Frontend", skills: frontendSkills, Icon: Code2 },
        { title: "Backend", skills: backendSkills, Icon: Server },
        { title: "DevOps and Tools", skills: devopsSkills, Icon: Wrench },
        { title: "Database", skills: databaseSkills, Icon: Database },
    ];

    const educationData = [
        {
            title: "Bachelor of Computer Applications",
            institute: "Babu Banarasi Das University",
            year: "2021 - 2024",
            cgpa: "8.4/10",
        },
        {
            title: "Masters of Computer Applications",
            institute: "Chandigarh University",
            year: "2024 - Present",
            cgpa: "8.8/10",
        },
    ];

    return (
        <ReviewOnScroll>
            <Section id="about" className="py-20 lg:py-24">
                <Container className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
                    
                    <h2 className="section-title mb-16 text-center lg:text-left">About Me</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                        
                        {/* ── LEFT: Bio Text ── */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5">
                                Full stack developer who ships real products
                            </h3>

                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg font-light">
                                I am a full stack developer with 1+ year of experience working on production apps in both full time and freelance roles. I enjoy building SaaS tools, AI powered features, and real time user experiences.
                            </p>
                            
                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg font-light">
                                I like taking ideas to a complete product. I focus on clean UI, smooth flows, and code that stays simple to maintain.
                            </p>
                        </div>

                        {/* ── RIGHT: Education Timeline ── */}
                        <div className="relative border-l border-white/10 pl-8 ml-4 lg:ml-0 flex flex-col justify-center gap-14 py-4 order-1 lg:order-2 w-full max-w-lg mx-auto lg:mx-0">
                            {educationData.map((edu, i) => (
                                <div key={i} className="relative group text-left">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-blue-500"></div>
                                    
                                    <div className="flex flex-col mb-3">
                                        <h4 className="text-xl font-bold text-white leading-tight mb-2">
                                            {edu.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
                                            <Calendar className="w-4 h-4" />
                                            {edu.year}
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 mb-4 text-gray-400">
                                        <Building2 className="w-4 h-4" />
                                        <span className="text-base font-medium">{edu.institute}</span>
                                    </div>
                                    
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
                                        <Award className="w-4 h-4" />
                                        CGPA: {edu.cgpa}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── BOTTOM: Tech Stack ── */}
                    <div className="mt-20">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center lg:text-left">
                            My Tech Stack
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {skillCategories.map((category, idx) => {
                                const Icon = category.Icon;
                                return (
                                    <div key={idx} className="flex flex-col space-y-5 items-center lg:items-start text-center lg:text-left">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-white/5">
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-white">
                                                {category.title}
                                            </h4>
                                        </div>

                                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                            {category.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

export default About;

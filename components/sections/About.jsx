import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import {
    Code2,
    Server,
    Wrench,
    Database,
    GraduationCap,
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

    const mySkills = [
        ...frontendSkills,
        ...backendSkills,
        ...devopsSkills,
        ...databaseSkills,
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
            <Section id="about">
                <Container>
                    <h2 className="section-title mb-10 text-center">About Me</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 mb-20 items-start">
                        <div className="glass-card hover-lift p-8 lg:p-10 h-full flex flex-col justify-center">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5">
                                Full stack developer who ships real products
                            </h3>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                                I am a full stack developer with 1+ year of experience working on production apps in both full time and freelance roles. I enjoy building SaaS tools, AI powered features, and real time user experiences.
                            </p>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                I like taking ideas to a complete product. I focus on clean UI, smooth flows, and code that stays simple to maintain.
                            </p>

                        </div>

                        <div className="flex flex-col gap-6">
                            {educationData.map((edu, i) => (
                                <div
                                    key={i}
                                    className="glass-card hover-lift p-6 relative overflow-hidden group"
                                >
                                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                        <GraduationCap className="w-28 h-28 text-white -rotate-12" />
                                    </div>

                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <div>
                                            <h4 className="text-lg font-bold text-white leading-tight">
                                                {edu.title}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-2 text-gray-400">
                                                <Building2 className="w-4 h-4" />
                                                <span className="text-sm">{edu.institute}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30 bg-blue-500/10 text-blue-400 whitespace-nowrap">
                                            <Calendar className="w-3 h-3" />
                                            {edu.year}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 w-fit relative z-10">
                                        <Award className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm font-medium text-gray-300">
                                            CGPA:
                                        </span>
                                        <span className="text-sm font-bold text-blue-400">
                                            {edu.cgpa}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <h2 className="section-title mb-6 text-center">Technical Skills</h2> */}

                    <div className="glass-card hover-lift p-6 md:p-8 mt-20">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
                            My Tech Stack
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                            {skillCategories.map((category, idx) => {
                                const Icon = category.Icon;
                                return (
                                    <div key={idx} className="space-y-4">
                                        {/* Category Header with better visual separation */}
                                        <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                                            <div className="p-2 rounded-lg bg-white/5">
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-white">
                                                {category.title}
                                            </h4>
                                        </div>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
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

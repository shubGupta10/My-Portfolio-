import React from 'react';
import ReviewOnScroll from '../ReviewOnScroll';
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Code2, Server, Wrench, Database, GraduationCap, Building2, Calendar, Award } from 'lucide-react';

function About() {
    const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Supabase", "Appwrite", "Framer Motion"];
    const backendSkills = ["Node.js", "Go", "Express", "REST APIs", "GraphQL", "LangChain", "WebSockets"];
    const devopsSkills = ["Docker", "Docker Hub", "AWS", "Git", "GitHub Actions", "Vercel", "Netlify"];
    const databaseSkills = ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"];

    const skillCategories = [
        { title: "Frontend", skills: frontendSkills, Icon: Code2 },
        { title: "Backend", skills: backendSkills, Icon: Server },
        { title: "DevOps & Tools", skills: devopsSkills, Icon: Wrench },
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
            <Section id="about">
                <Container>
                    <h2 className="section-title mb-16">About Me</h2>

                    {/* About + Education Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">

                        {/* Left Column: About Text */}
                        <div className="glass-card hover-lift p-8 h-full flex flex-col justify-center">
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                                I am a full stack developer with 1+ year of experience working on production apps in both full time and freelance roles. I enjoy building SaaS tools, AI powered features, and real time user experiences.
                            </p>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                I like taking ideas to a complete product. I focus on clean UI, smooth flows, and code that stays simple to maintain. I enjoy improving things over time and learning new ways to build better software.
                            </p>
                        </div>

                        {/* Right Column: Education Timeline */}
                        <div className="flex flex-col gap-6">
                            {educationData.map((edu, i) => (
                                <div key={i} className="glass-card hover-lift p-6 relative overflow-hidden group">

                                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                        <GraduationCap className="w-32 h-32 text-white transform -rotate-12" />
                                    </div>

                                    {/* Top Row: Title & Year */}
                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <div>
                                            <h4 className="text-xl font-bold text-white leading-tight max-w-[80%]">
                                                {edu.title}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-2 text-gray-400">
                                                <Building2 className="w-4 h-4" />
                                                <span className="text-sm">{edu.institute}</span>
                                            </div>
                                        </div>

                                        {/* Year Badge (Uniform Blue Theme) */}
                                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30 bg-blue-500/10 text-blue-400 whitespace-nowrap">
                                            <Calendar className="w-3 h-3" />
                                            {edu.year}
                                        </div>
                                    </div>

                                    {/* Bottom Row: CGPA */}
                                    <div className="flex items-center gap-4 mt-2 relative z-10">
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                                            <Award className="w-4 h-4 text-blue-400" />
                                            <span className="text-gray-300 text-sm font-medium">CGPA:</span>
                                            <span className="text-sm font-bold text-blue-400">{edu.cgpa}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <h2 className="section-title mb-12">Technical Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category) => (
                            <div key={category.title} className="glass-card hover-lift p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                        <category.Icon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white">{category.title}</h4>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((tech) => (
                                        <span key={tech} className="badge-skill">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

export default About;
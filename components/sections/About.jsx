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
    Download,
    User,
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
            <Section id="about">
                <Container className="relative z-10 w-full">
                    
                    <h2 className="text-2xl sm:text-[28px] font-medium tracking-tight text-foreground mb-6 text-left flex items-center gap-2">
                        About Me <span className="text-[0.85em]">👋</span>
                    </h2>

                    <div className="flex flex-col gap-10 sm:gap-16 items-start mb-12 sm:mb-20">
                        {/* Bio Section */}
                        <div className="flex flex-col items-start text-left w-full">
                            <h3 className="text-2xl sm:text-[28px] font-medium text-foreground mb-6 tracking-tight">
                                Full stack developer who ships real products
                            </h3>

                            <p className="text-[15px] sm:text-[16px] text-foreground leading-relaxed mb-6 w-full">
                                I am a full stack developer with experience working on production apps in both full-time and freelance roles. I enjoy building SaaS tools, AI-powered features, and real-time user experiences.
                            </p>
                            
                            <p className="text-[15px] sm:text-[16px] text-foreground leading-relaxed w-full">
                                I like taking ideas to a complete product. I focus on clean UI, smooth flows, and code that stays simple to maintain.
                            </p>

                            <a 
                                href="/Shubham_New_Resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold text-sm rounded-lg hover:opacity-90 transition-opacity"
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </a>
                        </div>

                        {/* Education Section */}
                        <div className="flex flex-col w-full">
                            <h3 className="text-[14px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                                Education
                            </h3>
                            <div className="flex flex-col gap-10">
                                {educationData.map((edu, i) => (
                                    <div key={i} className="pl-6 border-l-2 border-border text-left">
                                        
                                        <div className="flex flex-col mb-3">
                                            <h4 className="text-lg sm:text-xl font-semibold text-foreground leading-tight mb-2">
                                                {edu.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-[14px] font-medium text-primary">
                                                <Calendar className="w-4 h-4" />
                                                {edu.year}
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-[16px] font-medium">{edu.institute}</span>
                                        </div>
                                        
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-[14px] font-medium border border-border">
                                            <Award className="w-4 h-4" />
                                            CGPA: {edu.cgpa}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <hr className="border-border my-10 sm:my-16" />

                    {/* Tech Stack Section */}
                    <div>
                        <h3 className="text-2xl sm:text-[28px] font-medium text-foreground mb-6 text-left tracking-tight">
                            My Tech Stack
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                            {skillCategories.map((category, idx) => (
                                <div key={idx} className="flex flex-col items-start text-left">
                                    <h4 className="text-[14px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                                        {category.title}
                                    </h4>

                                    <div className="flex flex-wrap gap-2 justify-start">
                                        {category.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 text-[12px] font-medium border border-border bg-transparent text-muted-foreground rounded-md"
                                            >
                                                {skill}
                                            </span>
                                        ))}
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

export default About;

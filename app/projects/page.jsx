import React from "react";
import ProjectCard from "../../components/ui/ProjectCard";
import Section from "../../components/ui/Section";
import Container from "../../components/ui/Container";
import projectsData from "@/lib/data/project.json";

export const metadata = {
  title: "Portfolio Projects | Shubham Gupta",
  description: "A showcase of my recent full-stack web development projects, including SaaS applications, APIs, and AI integrations built with Next.js, React, and Node.js.",
  alternates: {
    canonical: "https://www.shubhamgupta.online/projects",
  },
  openGraph: {
    title: "Portfolio Projects | Shubham Gupta",
    description: "A showcase of my recent full-stack web development projects, including SaaS applications, APIs, and AI integrations built with Next.js, React, and Node.js.",
    url: "https://www.shubhamgupta.online/projects",
  },
  twitter: {
    title: "Portfolio Projects | Shubham Gupta",
    description: "A showcase of my recent full-stack web development projects.",
  },
};

export default function ProjectsPage() {
  return (
    <Container>
      <Section className="!pt-12 sm:!pt-20 pb-12">
        <div className="flex flex-col items-start text-left mb-8">
          <h1 className="typo-h1 mb-4 flex items-center gap-2">
            Projects <span className="text-[0.85em]">🚀</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.slug}
              title={project.title}
              description={project.description[0]}
              tags={project.technologies.slice(0, 3)}
              demoLink={project.liveLink}
              slug={project.slug}
              image={project.image || "/og-image.png"}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}

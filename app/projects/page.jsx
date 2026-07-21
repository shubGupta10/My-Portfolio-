import React from "react";
import ProjectCard from "../../components/ui/ProjectCard";
import Section from "../../components/ui/Section";
import Container from "../../components/ui/Container";
import projectsData from "@/lib/data/project.json";

export const metadata = {
  title: "Projects | Shubham",
  description: "A showcase of my recent full-stack web development projects.",
};

export default function ProjectsPage() {
  return (
    <Container>
      <Section className="!pt-12 sm:!pt-20 pb-12">
        <div className="flex flex-col items-start text-left mb-12">
          <h1 className="text-3xl sm:text-[36px] font-medium tracking-tight text-foreground mb-4">
            Projects
          </h1>
          <p className="text-[16px] text-muted-foreground leading-relaxed max-w-2xl font-normal">
            A collection of web applications, AI integrations, and tools I've built. Focusing on performance, modern design, and robust architectures.
          </p>
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

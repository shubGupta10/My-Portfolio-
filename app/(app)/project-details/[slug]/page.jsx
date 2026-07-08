"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import ReviewOnScroll from "@/components/ReviewOnScroll";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { ArrowLeft, Github, ExternalLink, Globe } from "lucide-react";
import projectsData from "@/lib/data/project.json";
import GoBackButton from "@/components/GoBack";

function ProjectDetails() {
  const { slug } = useParams();
  const router = useRouter();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div
        className="relative min-h-screen bg-black text-gray-100"
        style={{ backgroundImage: "url('/backgroundImage2.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative z-10 w-full">
          <Section className="!pt-6 md:!pt-8">
            <Container>
              <div className="py-20">
                <div className="mb-6">
                  <GoBackButton label="Return to Portfolio" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-6">
                  Project Not Found
                </h2>
              </div>
            </Container>
          </Section>
        </main>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen bg-black text-gray-100"
      style={{ backgroundImage: "url('/backgroundImage2.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <main className="relative z-10 w-full">
        <Section id="project-details" className="!pt-6 md:!pt-8">
          <Container>
            <ReviewOnScroll>
              {/* Back Button */}
              <div className="mb-6">
                <GoBackButton label="Back to Projects" />
              </div>

              {/* Header */}
              <div className="mb-12">
                <h1 className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight mb-4">
                  {project.title}
                </h1>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-bold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="underline decoration-border hover:decoration-foreground underline-offset-4 transition-colors">
                      Live Demo
                    </span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {project.githubLink && project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-bold text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="underline decoration-border hover:decoration-foreground underline-offset-4 transition-colors">
                        Source Code
                      </span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Image */}
              {project.image && (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12 border border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <hr className="border-border mb-12" />

              {/* Description */}
              <div className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight mb-6">
                  About the Project
                </h2>

                {Array.isArray(project.description) ? (
                  <ul className="space-y-4">
                    {project.description.map((sentence, index) => (
                      <li
                        key={index}
                        className="text-[16px] text-muted-foreground leading-relaxed pl-4 border-l-2 border-border"
                      >
                        {sentence}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[16px] text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight mb-6">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-[12px] font-medium border border-border bg-transparent text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ReviewOnScroll>
          </Container>
        </Section>
      </main>
    </div>
  );
}

export default ProjectDetails;
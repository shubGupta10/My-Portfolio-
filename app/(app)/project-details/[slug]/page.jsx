"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import ReviewOnScroll from "@/components/ReviewOnScroll";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { ArrowLeft, Github, ExternalLink, Globe, Layers } from "lucide-react";
import projectsData from "@/lib/data/project.json";

function ProjectDetails() {
  const { slug } = useParams();
  const router = useRouter();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Section className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
            <button
              onClick={() => router.back()}
              className="text-gray-400 hover:text-white flex items-center justify-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Portfolio
            </button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <ReviewOnScroll>
      <Section id="project-details" className="pt-32 pb-24">
        <Container className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* 1. Header Navigation */}
          <button
            onClick={() => router.back()}
            className="mb-12 text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors text-sm uppercase tracking-wider font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </button>

          {/* 2. Blog-Style Header */}
          <div className="max-w-4xl mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {project.title}
            </h1>
          </div>

          {/* 3. Hero Image (Wide & Clean) */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border mb-16 bg-card relative shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 4. Content Grid (Article + Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Main Article Content (Spans 8 cols) */}
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                 <Layers className="w-6 h-6 text-primary" />
                 About the Project
              </h3>
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 bg-card p-8 rounded-[2rem] border border-border">
                  {Array.isArray(project.description) ? (
                    <ul className="list-disc pl-5 space-y-4">
                      {project.description.map((sentence, index) => (
                        <li key={index} className="text-muted-foreground">
                          {sentence}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{project.description}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar Metadata (Spans 4 cols) - Sticky on Desktop */}
            <div className="lg:col-span-4 space-y-10">
              
              {/* Links Box */}
              <div className="p-6 rounded-[2rem] border border-border bg-card">
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
                  Project Links
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-4 rounded-xl group bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                  >
                    <span className="flex items-center gap-3">
                      <Globe className="w-5 h-5" />
                      Live Demo
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between w-full p-4 rounded-xl group bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-colors ${
                        project.githubLink === "#" ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Github className="w-5 h-5" />
                      Source Code
                    </span>
                    <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Tech Stack List */}
              <div className="p-6 rounded-[2rem] border border-border bg-card">
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </Container>
      </Section>
    </ReviewOnScroll>
  );
}

export default ProjectDetails;
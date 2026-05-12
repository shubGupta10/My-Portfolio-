"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import ReviewOnScroll from "@/components/ReviewOnScroll";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { ArrowLeft, Building2, Calendar, CheckCircle2, Globe, Layers, Briefcase } from "lucide-react";
import experienceData from "@/lib/data/experience.json";

function ExperienceDetails() {
  const params = useParams();
  const router = useRouter();

  const experienceId = parseInt(params.id, 10);
  const exp = experienceData.find((e) => e.id === experienceId);

  if (!exp) {
    return (
      <Section className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Experience Not Found</h2>
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
      <Section id="experience-details" className="pt-32 pb-24">
        <Container className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* 1. Header Navigation */}
          <button
            onClick={() => router.back()}
            className="mb-12 text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors text-sm uppercase tracking-wider font-bold cursor-pointer active:scale-95 p-2 -ml-2 rounded-lg hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Experience
          </button>

          {/* 2. Blog-Style Header */}
          <div className="max-w-4xl mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border ${exp.status === "Current"
                  ? "border-primary/30 bg-primary/10 text-primary shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                  : "border-border bg-secondary text-muted-foreground"
                }`}>
                {exp.status}
              </span>
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                {exp.type === "fulltime" ? "Full-Time" : "Freelance"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              {exp.position}
            </h1>
            <p className="text-xl text-muted-foreground font-light flex items-center gap-2">
              At <span className="text-foreground font-semibold">{exp.company}</span>
            </p>
          </div>

          {/* 3. Content Grid (Article + Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Main Article Content (Spans 8 cols) */}
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                Overview & Responsibilities
              </h3>
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 bg-card p-8 rounded-[2rem] border border-border shadow-sm">
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc pl-5 space-y-4">
                      {exp.description.map((sentence, index) => (
                        <li key={index} className="text-muted-foreground">
                          {sentence}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar Metadata (Spans 4 cols) - Sticky on Desktop */}
            <div className="lg:col-span-4 space-y-8 sticky top-32 self-start">

              {/* Quick Info Box */}
              <div className="p-8 rounded-[2rem] bg-card border border-border shadow-sm">
                <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-8">
                  Role Details
                </h4>

                <div className="flex flex-col gap-8">
                  {/* Company */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-secondary flex-shrink-0 border border-border shadow-inner">
                      <Building2 className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">Company</p>
                      <p className="text-foreground font-semibold text-base">{exp.company}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-secondary flex-shrink-0 border border-border shadow-inner">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">Timeline</p>
                      <p className="text-foreground font-medium text-sm">{exp.duration}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-secondary flex-shrink-0 border border-border shadow-inner">
                      <CheckCircle2 className={`w-5 h-5 ${exp.status === "Current" ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">Status</p>
                      <p className={`${exp.status === "Current" ? "text-primary" : "text-muted-foreground"} font-medium text-sm`}>{exp.status}</p>
                    </div>
                  </div>
                </div>

                {/* External Link if exists */}
                {exp.liveUrl && (
                  <div className="mt-10 pt-8 border-t border-border">
                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full group py-4 rounded-xl flex items-center justify-center gap-3 font-bold bg-primary text-primary-foreground hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase tracking-wider"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live URL</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Tech Stack List */}
              <div className="p-8 rounded-[2rem] bg-card border border-border shadow-sm">
                <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
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

export default ExperienceDetails;

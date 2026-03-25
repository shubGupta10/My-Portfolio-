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
        <Container className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* 1. Header Navigation */}
          <button
            onClick={() => router.back()}
            className="mb-12 text-gray-400 hover:text-blue-400 flex items-center gap-2 transition-colors text-sm uppercase tracking-wider font-bold cursor-pointer active:scale-95 p-2 -ml-2 rounded-lg hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Experience
          </button>

          {/* 2. Blog-Style Header */}
          <div className="max-w-4xl mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border ${exp.status === "Current"
                  ? "border-green-500/50 bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                  : "border-white/10 bg-white/5 text-gray-400"
                }`}>
                {exp.status}
              </span>
              <span className="text-xs font-bold text-blue-400 tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                {exp.type === "fulltime" ? "Full-Time" : "Freelance"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              {exp.position}
            </h1>
            <p className="text-xl text-gray-400 font-light flex items-center gap-2">
              At <span className="text-white font-semibold">{exp.company}</span>
            </p>
          </div>

          {/* 3. Content Grid (Article + Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Main Article Content (Spans 8 cols) */}
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-cyan-400" />
                Overview & Responsibilities
              </h3>
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 bg-[#111111]/60 p-8 rounded-[2rem] border border-white/[0.08] shadow-2xl">
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc pl-5 space-y-4">
                      {exp.description.map((sentence, index) => (
                        <li key={index} className="text-gray-300">
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
              <div className="p-8 rounded-[2rem] bg-[#111111]/80 border border-white/[0.08] shadow-2xl">
                <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">
                  Role Details
                </h4>

                <div className="flex flex-col gap-8">
                  {/* Company */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-white/5 flex-shrink-0 border border-white/10 shadow-inner">
                      <Building2 className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Company</p>
                      <p className="text-gray-200 font-semibold text-base">{exp.company}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-white/5 flex-shrink-0 border border-white/10 shadow-inner">
                      <Calendar className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Timeline</p>
                      <p className="text-gray-200 font-medium text-sm">{exp.duration}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-white/5 flex-shrink-0 border border-white/10 shadow-inner">
                      <CheckCircle2 className={`w-5 h-5 ${exp.status === "Current" ? "text-green-400" : "text-gray-300"}`} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Status</p>
                      <p className={`${exp.status === "Current" ? "text-green-400" : "text-gray-300"} font-medium text-sm`}>{exp.status}</p>
                    </div>
                  </div>
                </div>

                {/* External Link if exists */}
                {exp.liveUrl && (
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full group py-4 rounded-xl flex items-center justify-center gap-3 font-bold bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase tracking-wider"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live URL</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Tech Stack List */}
              <div className="p-8 rounded-[2rem] bg-[#111111]/80 border border-white/[0.08] shadow-2xl">
                <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-gray-400" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-bold tracking-wide hover:bg-white/10 hover:border-cyan-500/40 transition-colors cursor-default"
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

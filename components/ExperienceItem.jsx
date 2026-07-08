"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ExperienceItem({ exp, isExpanded, onToggle }) {
  const router = useRouter();

  const previewText = Array.isArray(exp.description)
    ? exp.description[0]
    : exp.description;

  return (
    <div
      onClick={onToggle}
      className="group flex gap-3 sm:gap-4 md:gap-6 py-3 sm:py-5 md:py-6 cursor-pointer border-b border-border/40 last:border-0 hover:bg-secondary/10 transition-colors px-3 sm:px-4 md:px-4 rounded-xl -mx-3 sm:-mx-4 md:-mx-4"
    >
      <div className="flex flex-col w-full min-w-0">
        <div className="flex flex-row justify-between items-start gap-2 sm:gap-4">
          <div className="flex flex-col gap-0 sm:gap-0.5">
            <div className="flex items-center gap-1.5 sm:gap-2">
               <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight leading-tight transform group-hover:translate-x-1 transition-transform duration-300">
                {exp.company}
              </h3>
              <ChevronDown
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground transition-all duration-300 ${
                  isExpanded
                    ? "rotate-180 opacity-100"
                    : "opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                }`}
              />
            </div>
            <p className="text-foreground/80 text-[13px] sm:text-[16px] font-medium leading-tight mt-0.5">
              {exp.position}
            </p>
          </div>
          <div className="text-[11px] sm:text-[13px] text-muted-foreground whitespace-nowrap mt-0.5 sm:mt-1 font-medium text-right flex-shrink-0">
            {exp.duration}
          </div>
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <p className="text-muted-foreground text-[16px] leading-relaxed mb-5 font-normal">
              {previewText}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary border border-border/50 text-muted-foreground text-[11px] sm:text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/experience-details/${exp.id}`);
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer group/btn"
              >
                Know more
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

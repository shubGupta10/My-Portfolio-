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
      className="py-6 sm:py-8 border-b border-border group block cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex flex-col w-full min-w-0">
        <div className="flex flex-row justify-between items-start gap-2 sm:gap-4">
          <div className="flex flex-col gap-0 sm:gap-0.5">
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h3 className="typo-h3 transform group-hover:translate-x-1 transition-transform duration-300">
                  {exp.company}
                </h3>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${isExpanded ? "rotate-180" : "rotate-0"
                    }`}
                />
              </div>
              <span className="typo-meta capitalize border border-border px-1.5 py-0.5 rounded-sm">
                {exp.type === "fulltime" ? "Full Time" : "Freelance"}
              </span>
            </div>
            <p className="typo-support mt-1 !text-foreground font-medium">
              {exp.position}
            </p>
          </div>
          <div className="flex flex-col items-end flex-shrink-0">
            <div className="typo-meta whitespace-nowrap mt-0.5 sm:mt-1 text-right">
              {exp.duration}
            </div>
            {exp.status && (
              <div className={`typo-meta capitalize mt-1 ${exp.status === "Current" || exp.status === "Ongoing"
                  ? "text-green-500"
                  : exp.status === "Active Maintenance"
                    ? "text-blue-500"
                    : "text-muted-foreground"
                }`}>
                {exp.status}
              </div>
            )}
          </div>
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <p className="typo-body max-w-3xl mb-5 mt-2">
              {previewText}
            </p>

            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex flex-wrap gap-2 flex-1">
                {exp.technologies.slice(0, 5).map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary border border-border typo-meta !font-medium ${index >= 3 ? "hidden sm:inline-flex items-center" : "inline-flex items-center"
                      }`}
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
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer group/btn flex-shrink-0"
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

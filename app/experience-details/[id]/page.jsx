"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import ReviewOnScroll from "@/components/ReviewOnScroll";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Globe, ExternalLink } from "lucide-react";
import experienceData from "@/lib/data/experience.json";
import GoBackButton from "@/components/GoBack";

function ExperienceDetails() {
  const params = useParams();
  const router = useRouter();

  const experienceId = parseInt(params.id, 10);
  const exp = experienceData.find((e) => e.id === experienceId);

  if (!exp) {
    return (
      <div className="w-full">
        <main className="relative z-10 w-full">
          <Section className="!pt-6 md:!pt-8">
            <Container>
              <div className="py-20">
                <div className="mb-6">
                  <GoBackButton label="Return to Portfolio" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-6">
                  Experience Not Found
                </h2>
              </div>
            </Container>
          </Section>
        </main>
      </div>
    );
  }

  return (
    <div className="w-full">

      <main className="relative z-10 w-full">
        <Section id="experience-details" className="!pt-6 md:!pt-8">
          <Container>
            <ReviewOnScroll>
              {/* Back Button */}
              <div className="mb-6">
                <GoBackButton label="Back to Experience" />
              </div>

              {/* Header */}
              <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tight mb-4">
                  {exp.position}
                </h1>

                <div className="flex flex-wrap items-center gap-2 text-[14px] font-medium text-muted-foreground mb-6">
                  <span className="text-foreground">{exp.company}</span>
                  <span>·</span>
                  <span>{exp.duration}</span>
                  <span>·</span>
                  <span>{exp.type === "fulltime" ? "Full-Time" : "Freelance"}</span>
                  <span>·</span>
                  <span className={exp.status === "Current" ? "text-green-500" : ""}>
                    {exp.status}
                  </span>
                </div>

                {exp.liveUrl && (
                  <a
                    href={exp.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-bold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="underline decoration-border hover:decoration-foreground underline-offset-4 transition-colors">
                      Visit Website
                    </span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <hr className="border-border mb-12" />

              {/* Description */}
              <div className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight mb-6">
                  Overview & Responsibilities
                </h2>

                {Array.isArray(exp.description) ? (
                  <ul className="space-y-4">
                    {exp.description.map((sentence, index) => (
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
                    {exp.description}
                  </p>
                )}
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight mb-6">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
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

export default ExperienceDetails;

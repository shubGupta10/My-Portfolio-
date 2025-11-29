"use client";

import React, { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import experiencesData from "../../lib/data/experience.json";
import ExperienceCard from "../ExperienceCard";

export default function Experience() {
    const [activeTab, setActiveTab] = useState("fulltime");

    const filteredExperiences = experiencesData.filter(
        (exp) => exp.type === activeTab
    );

    return (
        <ReviewOnScroll>
            <Section id="experience">
                <Container>
                    <h2 className="section-title mb-12 text-center">
                        Work Experience
                    </h2>

                    {/* Tabs */}
                    <div className="flex justify-end gap-3 mb-14">
                        {["fulltime", "freelance"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer
                  ${activeTab === tab
                                        ? "bg-blue-900 text-white"
                                        : "bg-white/5 text-gray-300 border border-white/10"
                                    }
                `}
                            >
                                {tab === "fulltime" ? "Full-Time" : "Freelance"}
                            </button>
                        ))}
                    </div>

                    {/* Vertical Line */}
                    <div className="relative">
                        <div className="absolute left-6 w-0.5 h-full bg-white/10 md:left-1/2 md:-translate-x-1/2" />

                        {/* Timeline Cards */}
                        <div className="space-y-16">
                            {filteredExperiences.map((exp, index) => (
                                <ExperienceCard key={exp.id} exp={exp} index={index} />
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

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
            {/* Unified 24py margin alignment */}
            <Section id="experience" className="py-20 lg:py-24">
                {/* Unified max-w-7xl alignment container */}
                <Container className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
                    
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16">
                        {/* Unified mb-0 since parent has mb-16 vertical rhythm spacing */}
                        <h2 className="section-title text-center lg:text-left mb-6 lg:mb-0">
                            Work Experience
                        </h2>

                        {/* Vercel-style sleek tabs */}
                        <div className="flex bg-[#111111]/80 border border-white/10 p-1.5 rounded-xl shadow-lg">
                            {["fulltime", "freelance"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer active:scale-95 ${
                                        activeTab === tab
                                            ? "bg-white text-black shadow-md"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {tab === "fulltime" ? "Full-Time" : "Freelance"}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Vercel styled grid mirroring Projects.jsx strictly */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
                        {filteredExperiences.map((exp) => (
                            <ExperienceCard key={exp.id} exp={exp} />
                        ))}
                    </div>

                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

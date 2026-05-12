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
                <Container className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12">
                        <h2 className="text-3xl font-bold text-foreground text-center lg:text-left mb-6 lg:mb-0">
                            Work Experience
                        </h2>

                        <div className="flex bg-secondary border border-border p-1 rounded-xl">
                            {["fulltime", "freelance"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer active:scale-95 ${
                                        activeTab === tab
                                            ? "bg-background text-foreground shadow-sm border border-border"
                                            : "text-muted-foreground hover:text-foreground border border-transparent"
                                    }`}
                                >
                                    {tab === "fulltime" ? "Full-Time" : "Freelance"}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 w-full">
                        {filteredExperiences.map((exp) => (
                            <ExperienceCard key={exp.id} exp={exp} />
                        ))}
                    </div>

                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

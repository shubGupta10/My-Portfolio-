"use client";

import React, { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Briefcase } from "lucide-react";
import experiencesData from "../../lib/data/experience.json";
import ExperienceItem from "../ExperienceItem";

export default function Experience() {
    const [activeTab, setActiveTab] = useState("fulltime");
    const [expandedId, setExpandedId] = useState(null);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setExpandedId(null);
    };

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const filteredExperiences = experiencesData.filter(
        (exp) => exp.type === activeTab
    );

    return (
        <ReviewOnScroll>
            <Section id="experience">
                <div className="relative z-10 w-full">

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6">
                        <div className="mb-6 sm:mb-0">
                            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground text-left flex items-center gap-2">
                                Work Experience <span className="text-[0.85em]">💼</span>
                            </h2>
                        </div>

                        <div className="flex w-full sm:w-auto bg-secondary border border-border p-1 rounded-xl">
                            {["fulltime", "freelance"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => handleTabChange(tab)}
                                    className={`flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer active:scale-95 ${activeTab === tab
                                        ? "bg-foreground text-background shadow-sm border border-border"
                                        : "text-muted-foreground hover:text-foreground border border-transparent"
                                        }`}
                                >
                                    {tab === "fulltime" ? "Full-Time" : "Freelance"}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        {filteredExperiences.map((exp) => (
                            <ExperienceItem
                                key={exp.id}
                                exp={exp}
                                isExpanded={expandedId === exp.id}
                                onToggle={() => toggleExpand(exp.id)}
                            />
                        ))}
                    </div>

                </div>
            </Section>
        </ReviewOnScroll>
    );
}

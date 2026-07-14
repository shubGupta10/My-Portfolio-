"use client";

import React, { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Briefcase } from "lucide-react";
import experiencesData from "../../lib/data/experience.json";
import ExperienceItem from "../ExperienceItem";

export default function Experience() {
    const [expandedIds, setExpandedIds] = useState(experiencesData.map(exp => exp.id));

    const toggleExpand = (id) => {
        setExpandedIds(prev => 
            prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
        );
    };

    return (
        <ReviewOnScroll>
            <Section id="experience">
                <div className="relative z-10 w-full">

                    <h2 className="text-2xl sm:text-[28px] font-medium tracking-tight text-foreground mb-6 text-left flex items-center gap-2">
                        Work Experience <span className="text-[0.85em]">💼</span>
                    </h2>

                    <div className="flex flex-col w-full">
                        {experiencesData.map((exp) => (
                            <ExperienceItem
                                key={exp.id}
                                exp={exp}
                                isExpanded={expandedIds.includes(exp.id)}
                                onToggle={() => toggleExpand(exp.id)}
                            />
                        ))}
                    </div>

                </div>
            </Section>
        </ReviewOnScroll>
    );
}

"use client";

import React, { useEffect } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Mail, ArrowRight, Github, Linkedin, Twitter, Loader2 } from "lucide-react";
import { Peerlist } from "@/lib/icon";
import { useRouter } from "next/navigation";

function Contact() {
    const router = useRouter();

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/shubGupta10", icon: <Github className="w-5 h-5" /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/shubhamgupta-codes", icon: <Linkedin className="w-5 h-5" /> },
        { name: "Twitter", url: "https://x.com/buildwithshub", icon: <Twitter className="w-5 h-5" /> },
        { name: "Peerlist", url: "https://peerlist.io/shubham10", icon: <Peerlist className="w-5 h-5" /> },
    ];

    return (
        <Section id="contact" className="!pt-2 sm:!pt-4">
            <div className="relative z-10 w-full">

                <ReviewOnScroll>
                    <div className="flex flex-col text-left">

                        <h2 className="typo-h1 mb-8 text-left flex items-center gap-2">
                            Contact <span className="text-[0.85em]">✉️</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {/* Email Path */}
                            <div className="flex flex-col items-start p-6 sm:p-8 rounded-2xl border border-border bg-secondary/50">
                                <h3 className="typo-h3 mb-3 font-semibold text-foreground">
                                    Send an Email
                                </h3>
                                <p className="typo-support mb-8">
                                    Best for quick questions, freelance inquiries, or simple introductions.
                                </p>
                                <div className="mt-auto flex flex-col gap-4 w-full">
                                    <a
                                        href="mailto:shubhamkgupta720@gmail.com"
                                        className="flex items-center gap-2 text-foreground font-medium text-[15px] group transition-colors w-fit"
                                    >
                                        <Mail className="w-[18px] h-[18px]" />
                                        <span className="underline decoration-border group-hover:decoration-primary underline-offset-4 transition-colors">
                                            shubhamkgupta720@gmail.com
                                        </span>
                                    </a>
                                    <button
                                        onClick={() => router.push('/contact')}
                                        className="w-fit text-[14px] font-medium text-muted-foreground hover:text-foreground underline decoration-transparent hover:decoration-border underline-offset-4 transition-all"
                                    >
                                        Or use a contact form
                                    </button>
                                </div>
                            </div>

                            {/* Meeting Path */}
                            <div className="flex flex-col items-start p-6 sm:p-8 rounded-2xl border border-border bg-secondary/50">
                                <h3 className="typo-h3 mb-3 font-semibold text-foreground">
                                    Book a Call
                                </h3>
                                <p className="typo-support mb-8">
                                    Best for discussing project requirements, technical details, and timelines.
                                </p>
                                <a
                                    href="https://calendar.app.google/zHFHaC97WvQrXr5W7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium bg-foreground text-background hover:scale-[1.03] transition-transform mt-auto w-fit text-[14.5px]"
                                >
                                    <span>Schedule a meeting</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 sm:mt-20 flex flex-wrap justify-start items-center gap-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                    </div>
                </ReviewOnScroll>

            </div>
        </Section>
    );
}

export default Contact;

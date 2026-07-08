"use client";

import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Mail, ArrowRight, Github, Linkedin, Twitter, Loader2 } from "lucide-react";
import { Peerlist } from "@/lib/icon";
import { useRouter } from "next/navigation";

function Contact() {
    const router = useRouter();

    useEffect(() => {
        const scheduleCall = async () => {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#ffffff" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        };
        scheduleCall();
    }, []);

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/shubGupta10", icon: <Github className="w-5 h-5" /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/shubhamgupta-codes", icon: <Linkedin className="w-5 h-5" /> },
        { name: "Twitter", url: "https://x.com/buildwithshub", icon: <Twitter className="w-5 h-5" /> },
        { name: "Peerlist", url: "https://peerlist.io/shubham10", icon: <Peerlist className="w-5 h-5" /> },
    ];

    return (
        <Section id="contact">
            <div className="relative z-10 w-full">
                
                <ReviewOnScroll>
                    <div className="flex flex-col text-left">
                        
                        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-6 text-left flex items-center gap-2">
                            Contact <span className="text-[0.85em]">✉️</span>
                        </h2>
                        
                        <p className="text-muted-foreground text-[17px] sm:text-[19px] leading-relaxed mb-6 font-normal">
                            Feel free to reach out to me via email:
                        </p>
                        
                        <a 
                            href="mailto:shubhamkgupta720@gmail.com" 
                            className="flex items-center gap-3 w-fit text-foreground font-medium text-[17px] sm:text-[19px] group transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span className="underline decoration-border group-hover:decoration-primary underline-offset-4 transition-colors">
                                shubhamkgupta720@gmail.com
                            </span>
                        </a>

                        <button 
                            onClick={() => router.push('/contact')}
                            className="mt-6 w-fit text-[15px] font-medium text-muted-foreground hover:text-foreground underline decoration-border hover:decoration-foreground underline-offset-4 transition-all"
                        >
                            Prefer to use a contact form?
                        </button>

                        <hr className="border-border my-8 sm:my-12" />

                        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-6">
                            Want to chat? Schedule a 1:1 with me!
                        </h2>
                        
                        <p className="text-muted-foreground text-[17px] sm:text-[19px] leading-relaxed mb-8 font-normal">
                            Book a time that works for you directly:
                        </p>
                        
                        <button
                            data-cal-link="shubham-gupta-1012/30min"
                            data-cal-config='{"layout":"month_view"}'
                            className="w-fit flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-foreground text-background hover:scale-105 transition-transform cursor-pointer"
                        >
                            <span>Schedule a meeting</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>

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

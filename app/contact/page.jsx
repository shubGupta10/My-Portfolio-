"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { getCalApi } from "@calcom/embed-react";

export default function ContactPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                toast.success("Message Sent Successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => toast.error("Something went wrong, Please try again."))
            .finally(() => setIsSubmitting(false));
    };

    return (
        <div className="w-full">
            
            <main className="relative z-10 w-full pb-12">
                <Section id="contact-form">
                    <Container>
                        
                        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-6">
                            Let's talk.
                        </h1>
                        
                        <p className="text-muted-foreground text-[16px] sm:text-[18px] mb-12 font-normal leading-relaxed">
                            You can reach me directly at{" "}
                            <a 
                                href="mailto:shubhamkgupta720@gmail.com" 
                                className="text-foreground underline decoration-border hover:decoration-primary underline-offset-4 transition-colors"
                            >
                                shubhamkgupta720@gmail.com
                            </a>
                            , book a{" "}
                            <button
                                data-cal-link="shubham-gupta-1012/30min"
                                data-cal-config='{"layout":"month_view"}'
                                className="text-foreground underline decoration-border hover:decoration-primary underline-offset-4 transition-colors cursor-pointer"
                            >
                                1:1 meeting
                            </button>
                            {" "}to discuss a project, or simply fill out the form below and I'll get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground"
                                    placeholder="What should I call you?"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground"
                                    placeholder="Where can I reach you?"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground resize-none"
                                    placeholder="Tell me more about your project or just say hi..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 mt-4 rounded-xl flex items-center justify-center gap-3 text-[16px] font-bold bg-foreground text-background hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                        </form>
                        
                    </Container>
                </Section>
            </main>
        </div>
    );
}

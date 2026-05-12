"use client";

import React, { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail, Twitter, MapPin, Send, Calendar, Clock } from "lucide-react";
import { Peerlist } from "@/lib/icon";

function Contact() {

    useEffect(() => {
        const scheduleCall = async () => {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "ffffff"}},
                hideEventTypeDetails: false,
                layout: "month_view"
            })
        }
        scheduleCall()
    },[])

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                toast.success("Message Sent Successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => toast.error("Something went wrong, Please try again."));
    };

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/shubGupta10", icon: <Github className="w-5 h-5" /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/shubhamgupta-codes", icon: <Linkedin className="w-5 h-5" /> },
        { name: "Twitter", url: "https://x.com/buildwithshub", icon: <Twitter className="w-5 h-5" /> },
        { name: "Peerlist", url: "https://peerlist.io/shubham10", icon: <Peerlist className="w-5 h-5" /> },
    ];

    return (
        <ReviewOnScroll>
            <Section id="contact">
                <Container className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    
                    <h2 className="text-3xl font-bold text-foreground mb-12 text-center lg:text-left">Let's Connect</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* ── LEFT SIDE: CLEAN INFO (UNBOXED) ── */}
                        <div className="lg:col-span-12 lg:hidden flex flex-col justify-start">
                            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-md font-light text-center">
                                I'm always interested in new opportunities and exciting collaborations.
                                Reach out anytime — I usually reply within a day!
                            </p>
                        </div>
                        
                        <div className="lg:col-span-5 flex flex-col justify-start mt-8 lg:mt-0">
                            
                            <p className="hidden lg:block text-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-md font-light">
                                I'm always interested in new opportunities and exciting collaborations.
                                Reach out anytime — I usually reply within a day!
                            </p>

                            <div className="mb-10">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold block mb-4">Book a meeting</span>
                                <div className="flex flex-col gap-4">
                                    <button
                                        data-cal-link="shubham-gupta-1012/30min"
                                        data-cal-config='{"layout":"month_view"}'
                                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all cursor-pointer"
                                    >
                                        <Clock className="w-5 h-5 text-muted-foreground" />
                                        <span>30 min Call</span>
                                    </button>
                                    <button
                                        data-cal-link="shubham-gupta-1012/60min"
                                        data-cal-config='{"layout":"month_view"}'
                                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-primary text-primary-foreground hover:opacity-90 transition-all cursor-pointer"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        <span>60 min Call</span>
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-8 mb-10">
                                {/* Email Row */}
                                <div className="flex items-center gap-4 group">
                                    <Mail className="w-6 h-6 text-primary group-hover:opacity-80 transition-opacity" />
                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Email</span>
                                        <span className="text-base font-medium text-foreground">shubhamkgupta720@gmail.com</span>
                                    </div>
                                </div>

                                {/* Location Row */}
                                <div className="flex items-center gap-4 group">
                                    <MapPin className="w-6 h-6 text-primary group-hover:opacity-80 transition-opacity" />
                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Location</span>
                                        <span className="text-base font-medium text-foreground">India, Earth</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links Row */}
                            <div>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold block mb-4">Socials</span>
                                <div className="flex items-center gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 active:scale-95 transition-all"
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT SIDE: PREMIUM FORM CARD ── */}
                        <div className="lg:col-span-7 flex flex-col justify-center">
                            <div className="rounded-2xl bg-card border border-border p-8 transition-all duration-300 w-full h-full flex flex-col">
                                <h3 className="text-lg font-bold text-foreground mb-6 uppercase tracking-widest">Send a Message</h3>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-grow">
                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
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
                                            className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
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
                                            rows={5}
                                            required
                                            className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground resize-none"
                                            placeholder="Tell me more about your project or just say hi..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl flex items-center justify-center gap-3 text-base font-bold bg-primary text-primary-foreground hover:opacity-90 active:scale-95 transition-all cursor-pointer mt-auto"
                                    >
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        <span>Send Message</span>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

export default Contact;

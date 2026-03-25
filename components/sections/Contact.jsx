"use client";

import React, { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail, Twitter, MapPin, Send } from "lucide-react";
import { Peerlist } from "@/lib/icon";

function Contact() {
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
        { name: "LinkedIn", url: "https://www.linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
        { name: "Twitter", url: "https://x.com/buildwithshub", icon: <Twitter className="w-5 h-5" /> },
        { name: "Peerlist", url: "https://peerlist.io", icon: <Peerlist className="w-5 h-5" /> },
    ];

    return (
        <ReviewOnScroll>
            <Section id="contact" className="py-20 lg:py-24">
                <Container className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
                    
                    <h2 className="section-title mb-16 text-center lg:text-left text-gray-100">Get In Touch</h2>

                    {/* Clean 2-column grid: 5 cols for Info, 7 cols for Form (standard premium split) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
                        
                        {/* ── LEFT SIDE: CLEAN INFO (UNBOXED) ── */}
                        <div className="lg:col-span-5 flex flex-col justify-start">
                            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Let's Connect</h3>
                            
                            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-md font-light">
                                I'm always interested in new opportunities and exciting collaborations.
                                Reach out anytime — I usually reply within a day!
                            </p>

                            <div className="space-y-10 mb-12">
                                {/* Email Row: Icon perfectly flush left */}
                                <div className="flex items-center gap-5 group">
                                    <Mail className="w-6 h-6 text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Email</span>
                                        <span className="text-lg font-medium text-gray-200">shubhamkgupta720@gmail.com</span>
                                    </div>
                                </div>

                                {/* Location Row: Icon perfectly flush left */}
                                <div className="flex items-center gap-5 group">
                                    <MapPin className="w-6 h-6 text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Location</span>
                                        <span className="text-lg font-medium text-gray-200">India, Earth</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links Row: Perfectly aligned with the info above */}
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block mb-6">Socials</span>
                                <div className="flex items-center gap-6">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 active:scale-90 transition-all"
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT SIDE: PREMIUM FORM CARD ── */}
                        <div className="lg:col-span-7">
                            <div className="rounded-2xl bg-[#111111]/60 border border-white/[0.08] p-8 lg:p-12 shadow-2xl transition-all duration-500 hover:border-white/20">
                                <h3 className="text-xl font-bold text-gray-100 mb-8 tracking-tight uppercase tracking-[0.1em]">Send a Message</h3>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                    {/* Name Field */}
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all placeholder:text-gray-500"
                                            placeholder="What should I call you?"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all placeholder:text-gray-500"
                                            placeholder="Where can I reach you?"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            required
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all placeholder:text-gray-500 resize-none"
                                            placeholder="Tell me more about your project or just say hi..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full group py-5 rounded-xl flex items-center justify-center gap-3 text-lg font-bold bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
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

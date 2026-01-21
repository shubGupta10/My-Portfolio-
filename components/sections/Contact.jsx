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
        { name: "GitHub", url: "https://github.com/shubGupta10", icon: <Github /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/shubhamgupta-codes", icon: <Linkedin /> },
        { name: "Twitter", url: "https://x.com/buildwithshub", icon: <Twitter /> },
        { name: "Peerlist", url: "https://peerlist.io/shubham10", icon: <Peerlist /> },
    ];

    return (
        <ReviewOnScroll>
            <Section id="contact">
                <Container>
                    <h2 className="section-title mb-16">Get In Touch</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
                                <p className="text-gray-300 text-base leading-relaxed mb-6">
                                    I'm always interested in new opportunities and exciting collaborations.
                                    Reach out anytime — I usually reply within a day!
                                </p>

                                <div className="space-y-5">
                                    {/* Location */}
                                    <div className="flex gap-4 items-center">
                                        <div className="icon-box border-blue-500/30 bg-blue-500/10">
                                            <MapPin className="icon" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Location</p>
                                            <p className="text-gray-400 text-sm">India, Earth</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-4 items-center">
                                        <div className="icon-box border-cyan-500/30 bg-cyan-500/10">
                                            <Mail className="icon" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Email</p>
                                            <p className="text-gray-400 text-sm">shubhamkgupta720@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={social.name}
                                            className="icon-button"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="glass-card p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="input-field"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="input-field"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />

                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    className="input-field resize-none"
                                    placeholder="Tell me about your project or just say hello..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />

                                <button type="submit" className="btn-primary w-full gap-3">
                                    <Send className="w-4 h-4" /> Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

export default Contact;

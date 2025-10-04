import React, { useState } from 'react';
import ReviewOnScroll from '../ReviewOnScroll';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';
import { Github, Linkedin, Mail, Twitter, MapPin, Send } from 'lucide-react';
import { Peerlist } from '@/lib/icon';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            toast.success("Message Sent Successfully!");
            setFormData({ name: "", email: "", message: "" });
        }).catch(() => toast.error("Something went wrong, Please try again."));
    };

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/shubGupta10", icon: <Github /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/shubhamgupta-codes", icon: <Linkedin /> },
        { name: "Twitter", url: "https://x.com/i_m_shubham45", icon: <Twitter /> },
        { name: "Peerlist", url: "https://peerlist.io/shubham10", icon: <Peerlist /> }
    ];

    return (
        <ReviewOnScroll>
            <section
                id='contact'
                className='py-20 sm:py-24'
            >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
                    <div className='mb-12'>
                        <h3 className='text-2xl font-bold text-white'>Get In Touch</h3>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        {/* Contact Info & Socials */}
                        <div className='space-y-8'>
                            <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                                <h3 className='text-xl font-bold mb-4 text-white'>Let's Connect</h3>
                                <p className='text-gray-300 text-base leading-relaxed mb-6'>
                                    I'm always interested in hearing about new opportunities and projects. Feel free to reach out—I typically respond within 24 hours!
                                </p>

                                <div className='space-y-4'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20'>
                                            <MapPin className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className='text-white font-medium'>Location</p>
                                            <p className='text-gray-400 text-sm'>India, Earth</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-4'>
                                        <div className='w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20'>
                                            <Mail className="w-5 h-5 text-cyan-400" />
                                        </div>
                                        <div>
                                            <p className='text-white font-medium'>Email</p>
                                            <p className='text-gray-400 text-sm'>shubhamkgupta720@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                                <h3 className='text-xl font-bold mb-4 text-white'>Follow Me</h3>
                                <div className='flex gap-4'>
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 border border-white/10 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1'
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className='bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10'>
                            <h3 className='text-xl font-bold mb-6 text-white'>Send a Message</h3>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <input
                                    type='text'
                                    name='name'
                                    required
                                    className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400'
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder='Your Name'
                                />
                                <input
                                    type='email'
                                    name='email'
                                    required
                                    className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 placeholder-gray-400'
                                    value={formData.email}
                                    placeholder='your.email@example.com'
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <textarea
                                    name='message'
                                    required
                                    rows={5}
                                    className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400 resize-none'
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder='Tell me about your project or just say hello...'
                                />
                                <button
                                    className='w-full inline-flex items-center justify-center gap-2 bg-blue-500/20 text-blue-300 py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-blue-500/30 hover:bg-blue-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.3)]'
                                    type='submit'
                                >
                                    <Send className='w-4 h-4' />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </ReviewOnScroll>
    )
}

export default Contact;
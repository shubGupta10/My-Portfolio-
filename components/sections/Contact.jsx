import React, { useState } from 'react'
import ReviewOnScroll from '../ReviewOnScroll'
import emailjs from 'emailjs-com'
import { toast } from 'sonner'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Peerlist } from '@/lib/icon'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            toast.success("Message Sent")
            setFormData({ name: "", email: "", message: "" })
        }).catch(() => toast.error("Something went wrong, Please try again."))
    }

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/shubGupta10",
            icon: (
                <Github/>
            )
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/shubhamgupta-codes",
            icon: (
                <Linkedin/>
            )
        },
        {
            name: "Twitter",
            url: "https://x.com/i_m_shubham45",
            icon: (
                <Twitter/>
            )
        },
        {
            name: "Peerlist",
            url: "https://peerlist.io/shubham10",
            icon: (
                <Peerlist/>
            )
        }
    ]

    return (
        <ReviewOnScroll>
            <section 
                id='contact' 
                className='min-h-[60vh] flex items-center justify-center py-12 sm:py-16 lg:py-20'
            >
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                        Get In Touch
                    </h2>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                        {/* Contact Info */}
                        <div className='space-y-6'>
                            <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                                <h3 className='text-xl font-bold mb-4 text-white'>Let's Connect</h3>
                                <p className='text-gray-300 text-base leading-relaxed mb-6'>
                                    I'm always interested in hearing about new opportunities, projects, or just having a chat about technology. Feel free to reach out!
                                </p>
                                
                                <div className='space-y-4'>
                                    <div className='flex items-center'>
                                        <div className='w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4'>
                                            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-white font-medium'>Location</p>
                                            <p className='text-gray-400 text-sm'>India, Earth</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center'>
                                        <div className='w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4'>
                                            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-white font-medium'>Email</p>
                                            <p className='text-gray-400 text-sm'>shubhamkgupta720@gmail.com</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Social Links */}
                            <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                                <h3 className='text-xl font-bold mb-4 text-white'>Follow Me</h3>
                                <div className='flex gap-4'>
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:text-white transition-all duration-200 hover:-translate-y-1'
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className='bg-white/5 rounded-xl p-6 sm:p-8 border border-white/10'>
                            <h3 className='text-xl font-bold mb-6 text-white'>Send Message</h3>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='relative'>
                                    <input 
                                        type='text' 
                                        id='name' 
                                        name='name' 
                                        required 
                                        className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400'
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder='Your Name'
                                    />
                                </div>

                                <div className='relative'>
                                    <input 
                                        type='email' 
                                        id='email' 
                                        name='email' 
                                        required 
                                        className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 placeholder-gray-400'
                                        value={formData.email}
                                        placeholder='your.email@example.com'
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className='relative'>
                                    <textarea 
                                        id='message' 
                                        name='message' 
                                        required 
                                        rows={5} 
                                        className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-400 resize-none'
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder='Tell me about your project or just say hello...'
                                    />
                                </div>

                                <button 
                                    className='w-full bg-blue-500/20 text-blue-300 py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-blue-500/30 hover:bg-blue-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.3)]' 
                                    type='submit'
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Response Time Note */}
                    <div className='text-center mt-8'>
                        <p className='text-gray-400 text-sm'>
                            I typically respond within 24 hours. Looking forward to hearing from you!
                        </p>
                    </div>
                </div>
            </section>
        </ReviewOnScroll>
    )
}

export default Contact
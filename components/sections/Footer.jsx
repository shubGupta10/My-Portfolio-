"use client"

import React from 'react'
import { ArrowUp, Heart, Code, Coffee } from 'lucide-react'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" }
    ]

    return (
        <footer className='bg-transparent backdrop-blur-sm'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                {/* Tech Stack & Scroll to Top */}
                <div className='flex flex-col sm:flex-row items-center justify-between'>
                    <div className='flex items-center space-x-4 mb-4 sm:mb-0'>
                        <div className='flex items-center space-x-2'>
                            <Code className='w-4 h-4 text-blue-400' />
                            <span className='text-gray-400 text-sm'>Built with Next.js</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Coffee className='w-4 h-4 text-cyan-400' />
                            <span className='text-gray-400 text-sm'>Powered by coffee</span>
                        </div>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className='w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-1'
                        title="Back to top"
                    >
                        <ArrowUp className='w-5 h-5' />
                    </button>
                </div>

                {/* Bottom Copyright */}
                <div className='mt-8 pt-6 border-t border-white/10 text-center'>
                    <p className='text-gray-400 text-sm flex items-center justify-center space-x-1'>
                        <span>&copy; {new Date().getFullYear()}  Made with</span>
                        <Heart className='w-4 h-4 text-red-400 fill-current' />
                        <span>by Shubham Gupta</span>
                    </p>
                    <p className='text-gray-500 text-xs mt-2'>
                        All rights reserved. Thanks for visiting!
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
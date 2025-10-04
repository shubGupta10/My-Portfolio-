import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

function Navbar({ menuOpen, setMenuOpen }) {
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveLink(sectionId);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className='fixed top-0 w-full z-50 bg-gray-950/50 backdrop-blur-md border-b border-white/10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>

                    <a className='font-mono text-xl bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent' href="/">
                        SHUBHAM
                    </a>

                    <div className='hidden md:flex items-center space-x-2'>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveLink(link.href.substring(1))}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
                  ${activeLink === link.href.substring(1)
                                        ? 'text-white bg-white/10'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className='hidden md:flex items-center gap-3'>
                        <Link
                            href="/login"
                            className='px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300'
                        >
                            Login
                        </Link>
                    </div>

                    <div className='md:hidden'>
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {menuOpen ? <X className='block h-6 w-6' /> : <Menu className='block h-6 w-6' />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
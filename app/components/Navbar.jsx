"use client";

import { Github, Linkedin, MenuIcon, X, Twitter } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#cta' },
  ];

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`w-full sticky py-4 top-0 z-50 text-lg transition-all duration-300 ease-in-out border-b ${scrolled || mobileMenuOpen
        ? 'bg-[var(--background)] backdrop-blur-lg border-[var(--muted)] py-3'
        : 'bg-transparent py-5 border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2 relative z-10 transition-all duration-300 hover:scale-105"
          onClick={() => window.location.href = "/"}>
          <div className="flex items-center">
            {/* Optional: Add an icon that represents your field */}
            <svg
              className="w-6 h-6 mr-2 text-[var(--primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4">
              </path>
            </svg>

            <h1 className="font-bold text-xl text-[var(--foreground)] tracking-wider">
              <span className="hover:text-[var(--primary)] transition-colors duration-300">S</span>
              <span className="hover:text-[var(--primary)] transition-colors duration-300">h</span>
              <span className="hover:text-[var(--primary)] transition-colors duration-300">u</span>
              <span className="hover:text-[var(--primary)] transition-colors duration-300">b</span>
              <span className="hover:text-[var(--primary)] transition-colors duration-300">h</span>
              <span className="hover:text-[var(--primary)] transition-colors duration-300">a</span>
              <span className="hover:text-[var(--primary)] transition-colors duration-300">m</span>
              <span className="text-[var(--primary)] font-extrabold">.</span>
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="scroll-smooth p-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--primary)] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4 relative z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute text-center border-b-4 border-[var(--primary)] rounded-b-2xl top-full left-0 w-full bg-[var(--muted)] backdrop-blur-lg z-[60] transition-all duration-300 ease-in-out ${mobileMenuOpen
            ? 'opacity-100 translate-y-0 max-h-[80vh]'
            : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <nav className="mb-8">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200 text-lg font-medium block"
                      onClick={handleMenuItemClick}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
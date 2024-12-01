"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Twitter, Linkedin, Menu, X, Code2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NavMenu = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shubGupta10', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/i_m_shubham45', label: 'Twitter (X)' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shubham-kumar-gupta-30a916234', label: 'LinkedIn' }
  ];

  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 ${
        isScrolled ? 'bg-blue-950/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <motion.div
            onClick={handleHome}
            className="cursor-pointer flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 className="w-8 h-8 text-pink-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.div>

          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            {navItems.map(({ id, label }) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`
                  px-4 py-2 mx-2 text-sm font-medium rounded-lg
                  transition-all duration-200
                  ${activeSection === id 
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-200 hover:text-white hover:bg-blue-600/20'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors duration-200 text-blue-300 hover:text-white hover:bg-blue-600/20"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-blue-300 hover:text-white"
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 absolute top-20 left-0 right-0 bg-blue-950/90 backdrop-blur-sm shadow-lg"
            >
              <div className="flex flex-col space-y-2 px-6">
                {navItems.map(({ id, label }) => (
                  <motion.button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`
                      px-4 py-2 text-sm font-medium rounded-lg
                      transition-all duration-200
                      ${activeSection === id 
                        ? 'bg-blue-600 text-white'
                        : 'text-blue-200 hover:text-white hover:bg-blue-600/20'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.button>
                ))}
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-blue-800/50">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full transition-colors duration-200 text-blue-300 hover:text-white hover:bg-blue-600/20"
                      aria-label={label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default NavMenu;


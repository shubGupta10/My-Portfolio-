"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Globe, Twitter, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-blue-500/10 to-blue-800/10 rounded-full blur-3xl transform -rotate-12" />
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-blue-800/10 to-blue-900/10 rounded-full blur-3xl transform rotate-12" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <Header />
          <AboutContent />
          <ResumeAndSocial />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-blue-400/60" />
      </motion.div>
    </section>
  );
};

const Header = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center space-y-4"
  >
    <motion.h1 
      className="text-4xl sm:text-6xl font-bold tracking-tight"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      Hey, I'm{' '}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">
        Shubham
      </span>
    </motion.h1>
    <motion.p 
      className="text-xl text-blue-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      Full-stack Developer | Tech Enthusiast
    </motion.p>
  </motion.div>
);

const AboutContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    className="space-y-6 text-blue-100"
  >
    <div className="bg-blue-900/10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
      <p className="text-lg leading-relaxed">
        I'm a passionate full-stack developer with a keen eye for creating exceptional digital experiences. My journey in tech started with curiosity and has evolved into a dedicated pursuit of building innovative web solutions.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div 
        className="bg-blue-900/10 backdrop-blur-lg rounded-xl p-6 shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <h3 className="text-xl font-semibold mb-2 text-blue-300">Expertise</h3>
        <p className="text-blue-100">
          I specialize in crafting scalable applications that combine clean design with robust functionality. Whether it's frontend or backend, I ensure every project delivers outstanding user experiences.
        </p>
      </motion.div>
      <motion.div 
        className="bg-blue-900/10 backdrop-blur-lg rounded-xl p-6 shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <h3 className="text-xl font-semibold mb-2 text-blue-300">Passion</h3>
        <p className="text-blue-100">
          When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm always excited about taking on new challenges and pushing the boundaries of what's possible on the web.
        </p>
      </motion.div>
    </div>
  </motion.div>
);

const ResumeAndSocial = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/shubham-kumar-gupta-30a916234", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/shubGupta10", icon: Github, label: "GitHub" },
    { href: "https://shubgupta.vercel.app", icon: Globe, label: "Portfolio" },
    { href: "https://x.com/i_m_shubham45", icon: Twitter, label: "Twitter" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="flex flex-col items-center space-y-8"
    >
      <Button
        variant="outline"
        size="lg"
        className="group bg-blue-900/10 border-blue-400 hover:bg-blue-800 hover:border-blue-300 text-blue-100 hover:text-white transition-all duration-300"
        onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
      >
        <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
        Download Resume
      </Button>

      <div className="flex justify-center space-x-6">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-blue-300 hover:text-blue-100 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutSection;


"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Globe, Twitter, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen pt-36 py-16 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#0B1120] text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-blue-500/5 to-blue-800/5 rounded-full blur-3xl transform -rotate-12 animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-blue-800/5 to-blue-900/5 rounded-full blur-3xl transform rotate-12 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto space-y-12">
          <Header />
          <AboutContent />
          <ResumeAndSocial />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:text-blue-400 transition-colors duration-300"
      >
        <ChevronDown className="w-6 h-6 text-blue-400/60" />
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
      className="text-5xl sm:text-5xl font-bold tracking-tight leading-tight"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      Hey, I'm{' '}
      <span className="relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
          Shubham
        </span>
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </span>
    </motion.h1>
    <motion.p 
      className="text-xl text-blue-200/90 font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      Full-stack Developer | Backend Developer
    </motion.p>
  </motion.div>
);

const AboutContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    className="space-y-6"
  >
    <motion.div 
      className="bg-blue-950/20 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <p className="text-lg leading-loose text-blue-100/90">
        As a Full stack Developer and Backend Developer, I have a passion for creating and developing web applications. I have experience in building full stack applications using React, Next.js, Node.js, Express.js, and MongoDB. I am always eager to learn new technologies and improve my skills. I am a quick learner and a team player who is always ready to take on new challenges. I am currently looking for opportunities to work on exciting projects and grow as a developer.
      </p>
    </motion.div>
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
        className="group relative bg-blue-950/30 border-blue-400/30 hover:bg-blue-900/40 hover:border-blue-300/50 text-blue-100 hover:text-white transition-all duration-300 px-6 py-3 text-base rounded-lg overflow-hidden shadow-lg hover:shadow-blue-900/20"
        onClick={() => window.open('https://drive.google.com/file/d/1xbJeBsvNpl-cXpbSFz68nhiGEECy2dBi/view?usp=sharing', '_blank')}
        >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <Download className="mr-2 h-5 w-5 group-hover:animate-bounce transition-transform duration-300" />
        Download Resume
      </Button>

      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative p-3 bg-blue-950/30 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-900/20"
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="w-6 h-6 text-blue-300 group-hover:text-blue-100 transition-colors duration-300" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              {label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutSection;


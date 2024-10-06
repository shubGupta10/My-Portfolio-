'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FlipWords } from '@/components/ui/flip-words';
import { FloatingDock } from '@/components/ui/floating-dock';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { SparklesCore } from '@/components/ui/sparkles';
import {
  IconBrandGithub,
  IconBrandX,
  IconDownload,
  IconBrandLinkedin,
  IconLink,
  IconBrandInstagram,
} from '@tabler/icons-react';

const HeroSection = () => {
  const [showSparkles, setShowSparkles] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setShowSparkles(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const links = [
    { title: 'Portfolio', icon: <IconLink />, href: 'https://my-portfolio-10.vercel.app' },
    { title: 'GitHub', icon: <IconBrandGithub />, href: 'https://github.com/shubGupta10' },
    { title: 'LinkedIn', icon: <IconBrandLinkedin />, href: 'https://www.linkedin.com/in/shubham-kumar-gupta-30a916234/' },
    { title: 'Twitter', icon: <IconBrandX />, href: 'https://x.com/i_m_shubham45' },
    { title: 'Instagram', icon: <IconBrandInstagram />, href: 'https://www.instagram.com/' },
  ];

  const skills = ['Full Stack Developer', 'Problem Solver', 'Frontend Developer', 'Backend Developer'];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-20 px-4">
      {showSparkles && (
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="absolute inset-0 w-full h-full"
          particleColor="#FFFFFF"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-12 max-w-5xl z-10 space-y-10"
      >
        <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-text-shine">
          Hi, I'm Shubham
        </h1>
        <div
          className={`text-4xl md:text-6xl font-light ${
            resolvedTheme === 'light' ? 'text-neutral-800' : 'text-neutral-200'
          }`}
        >
          I'm a{' '}
          <FlipWords words={skills} duration={2000} className="font-semibold text-blue-400" />
        </div>
        <p
          className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
            resolvedTheme === 'light' ? 'text-gray-800' : 'text-neutral-300'
          }`}
        >
          I enjoy building apps that are easy to use and get the job done. Whether it’s the front or back end, I’m
          focused on creating things that work well and make a difference.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <HoverBorderGradient
            containerClassName="rounded-full group"
            className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 px-8 py-4 text-lg transition-all duration-300 ease-in-out"
          >
            <IconDownload className="w-6 h-6 group-hover:animate-bounce" />
            <a href="https://drive.google.com">Download Resume</a>
          </HoverBorderGradient>
          <HoverBorderGradient
            containerClassName="rounded-full group"
            className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 px-8 py-4 text-lg transition-all duration-300 ease-in-out"
          >
            <IconBrandGithub className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <a href="https://github.com/shubGupta10">View Projects</a>
          </HoverBorderGradient>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:block max-w-5xl mt-20 z-10"
      >
        <FloatingDock items={links} />
      </motion.div>
    </div>
  );
};

export default HeroSection;

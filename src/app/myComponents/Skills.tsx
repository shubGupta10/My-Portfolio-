'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import skillsData from '@/app/data/Skills.json';
import { useTheme } from 'next-themes';

const SkillCard: React.FC<{
  skill: { name: string; image: string };
  index: number;
  isDark: boolean;
}> = ({ skill, index, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
    className={`group flex flex-col items-center w-24 transition-all duration-300`}
  >
    <div 
      className={`relative w-16 h-16 rounded-xl ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } p-2.5 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Image
        src={skill.image}
        alt={skill.name}
        fill
        className="object-contain p-1.5 drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <span className={`mt-2 text-xs font-medium text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-500 transition-colors duration-300`}>
      {skill.name}
    </span>
  </motion.div>
);

const Skills: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <section className={`relative py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300 overflow-hidden`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'} transition-colors duration-300`}>
            Skills & Expertise
          </h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isDark={isDark} />
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-0 w-72 h-72 ${isDark ? 'bg-blue-500' : 'bg-blue-200'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob transition-colors duration-300`} />
        <div className={`absolute top-1/3 right-0 w-72 h-72 ${isDark ? 'bg-purple-500' : 'bg-purple-200'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 transition-colors duration-300`} />
        <div className={`absolute bottom-0 left-1/2 w-72 h-72 ${isDark ? 'bg-pink-500' : 'bg-pink-200'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 transition-colors duration-300`} />
      </div>
    </section>
  );
};

export default Skills;
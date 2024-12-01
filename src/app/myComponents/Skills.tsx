"use client";

import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '@/app/data/Skills.json';

const SkillCard: React.FC<{
  skill: { name: string; image: string };
  index: number;
}> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
    className="group flex flex-col items-center w-24 transition-all duration-300"
  >
    <motion.div 
      className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-blue-100 p-2.5 shadow-lg transition-all duration-300 group-hover:shadow-2xl overflow-hidden"
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <img
        src={skill.image}
        alt={skill.name}
        className="object-contain p-1.5 drop-shadow-sm transition-transform duration-300 group-hover:scale-110 w-full h-full"
      />
    </motion.div>
    <span className="mt-2 text-xs font-medium text-center text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
      {skill.name}
    </span>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-blue-950 to-black transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

export default Skills;


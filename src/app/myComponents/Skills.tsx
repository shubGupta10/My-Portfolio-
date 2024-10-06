'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import skillsData from '@/app/data/Skills.json';
import { useTheme } from 'next-themes';

const Skills: React.FC = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`w-full py-12 ${resolvedTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.map((skill: { name: string; image: string }, index: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className={`rounded-full p-2 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out 
                ${resolvedTheme === 'dark'
                  ? 'bg-gray-800 shadow-lg shadow-gray-700/50 hover:shadow-gray-900 transform hover:scale-105'
                  : 'bg-white shadow-lg shadow-gray-200/50 hover:shadow-gray-300 transform hover:scale-105'
                }`}
            >
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

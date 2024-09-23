'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import skillsData from '@/app/data/Skills.json'; 

const Skills: React.FC = () => {
  return (
    <div className="mt-40 md:mt-0 min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 relative flex items-center justify-center">
      <section id="skills" className="py-10 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            My Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {skillsData.map((skill: { name: string; image: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className=" bg-gradient-to-br from-blue-700 via-gray-800 to-gray-600 shadow-lg rounded-full flex flex-col items-center justify-center w-28 h-28 transition-transform transform hover:scale-110 hover:shadow-2xl p-4"
              >
                <div className="relative w-20 h-20 mb-2">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full" 
                  />
                </div>
                <h3 className="text-sm font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

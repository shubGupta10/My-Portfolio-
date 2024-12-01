"use client";

import React from 'react';
import { motion } from 'framer-motion';
import experience from '@/app/data/experience.json';
import { Calendar, Building2 } from 'lucide-react';

interface ExperienceItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ year, title, company, description }) => {
  const bulletPoints = description.split('\n').filter(point => point.trim() !== '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 p-8 rounded-xl border border-blue-600/30 bg-gradient-to-br from-black via-blue-950 to-black text-white   transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-6 mb-6 border-b border-blue-800/20 pb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-800/20 text-blue-300 px-4 py-2 rounded-full">
            <Calendar size={18} />
            <span className="font-semibold">{year}</span>
          </div>
          <div className="flex items-center gap-2 text-blue-300">
            <Building2 size={18} />
            <span className="font-medium text-lg">{company}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-blue-100">
          {title}
        </h3>
      </div>
      <ul className="space-y-4">
        {bulletPoints.map((point, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-4"
          >
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
            <p className="text-blue-200 text-base leading-relaxed">
              {point.replace('• ', '')}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-blue-950 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


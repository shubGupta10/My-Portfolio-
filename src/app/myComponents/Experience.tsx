'use client';

import React, { useEffect, useState } from 'react';
import experience from '@/app/data/experience.json';
import { useTheme } from 'next-themes';
import { Calendar, Building2 } from 'lucide-react';

interface ExperienceItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ year, title, company, description }) => {
  const { resolvedTheme } = useTheme();
  const bulletPoints = description.split('\n').filter(point => point.trim() !== '');
  const isDark = resolvedTheme === 'dark';
  
  return (
    <div className={`mb-12 p-8 rounded-xl border ${
      isDark 
        ? 'bg-gray-800/40 hover:bg-gray-800/60 border-gray-700/30' 
        : 'bg-white hover:bg-gray-50 border-gray-200'
    } transition-all duration-300 backdrop-blur-sm`}>
      {/* Header Section */}
      <div className="flex flex-col gap-6 mb-6 border-b border-gray-700/20 pb-6">
        {/* Year and Company */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2 bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full">
            <Calendar size={18} />
            <span className="font-semibold">{year}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <Building2 size={18} />
            <span className="font-medium text-lg">{company}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-bold ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
      </div>

      {/* Description List */}
      <ul className="space-y-4">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex gap-4">
            <span className={`mt-2 w-2 h-2 rounded-full shrink-0 ${
              isDark ? 'bg-blue-400' : 'bg-blue-500'
            }`} />
            <p className={`${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } text-base leading-relaxed`}>
              {point.replace('• ', '')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section 
      id='experience' 
      className={`py-20 md:mt-0 ${
        resolvedTheme === 'dark' 
          ? 'bg-gradient-to-b from-[#111626] via-[#1a2138] to-[#222c4a]' 
          : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 mt-10 text-center">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
        
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
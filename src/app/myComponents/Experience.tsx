'use client';

import experience from '@/app/data/experience.json';
import { useTheme } from 'next-themes';

interface ExperienceItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ year, title, company, description }) => {
  const {resolvedTheme} = useTheme()
  const bulletPoints = description.split('\n').filter(point => point.trim() !== '');

  return (
    <div className="mb-12 border-l-4 border-blue-500 pl-6">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
        <h3   className={`text-2xl font-bold mb-2 sm:mb-0 ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <span className="text-white font-semibold bg-blue-900 py-1 px-3 rounded-full text-sm">
          {year}
        </span>
      </div>
      <p className={`text-lg mb-4 italic ${resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        {company}
      </p>
      <ul className="space-y-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">•</span>
            <span className={`${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {point.replace('• ', '')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {

  const {resolvedTheme} = useTheme()
  return (
    <section id='experience' className={`py-20 md:mt-0 ${resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r bg-clip-text text-transparent from-blue-400 via-purple-500 to-pink-500 leading-tight">
          My Experience
        </h2>
        <div className={`${resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl p-8 max-w-4xl mx-auto`}>
          {experience.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
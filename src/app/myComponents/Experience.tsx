import React from 'react';
import experience from '@/app/data/experience.json';

interface ExperienceItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ year, title, company, description }) => {
  const bulletPoints = description.split('\n').filter(point => point.trim() !== '');

  return (
    <div className="mb-12 border-l-4 border-blue-500 pl-6">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white mb-2 sm:mb-0">{title}</h3>
        <span className="text-white font-semibold bg-blue-900 py-1 px-3 rounded-full text-sm">
          {year}
        </span>
      </div>
      <p className="text-lg text-gray-400 mb-4 italic">{company}</p>
      <ul className="space-y-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">•</span>
            <span className="text-gray-300">{point.replace('• ', '')}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="py-20 mt-40 md:mt-0 bg-gradient-to-b from-gray-900 via-black to-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r bg-clip-text text-transparent from-blue-400 via-purple-500 to-pink-500 leading-tight">
          My Experience
        </h2>
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
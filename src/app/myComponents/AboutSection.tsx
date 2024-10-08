'use client';

import React from 'react';
import Image from 'next/image';
import { BackgroundLines } from '@/components/ui/background-lines';
import { useTheme } from 'next-themes'; // Import useTheme hook for theme reactivity
import profile from '@/assets/profile.jpg';

const AboutSection = () => {
  const { resolvedTheme } = useTheme(); 

  return (
    <BackgroundLines
      svgOptions={{ duration: 10 }}
      className="min-h-[80vh] bg-gradient-to-br relative"
    >
      <section id="about" className="py-10 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl sm:mt-0 md:mt-10 leading-tight font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="flex flex-col-reverse md:flex-row gap-16 md:gap-8 items-center">
            <div className="md:w-2/3 space-y-6">
              <p
                className={`${
                  resolvedTheme === 'dark' ? 'text-white' : 'text-black'
                } mymd:text-[1.3rem] md:text-[1.5rem] mynew:text-[1.3rem] mysm:text-[1rem] leading-relaxed`}
              >
                Hi there! I'm Shubham Kumar Gupta, a passionate Full Stack Developer with a knack for creating efficient and scalable web applications. With several years of experience in the tech industry, I've honed my skills in both front-end and back-end development.
              </p>

              <p
                className={`${
                  resolvedTheme === 'dark' ? 'text-white' : 'text-black'
                } md:text-[1.5rem] mymd:text-[1.3rem] mynew:text-[1.3rem] mysm:text-[1rem] leading-relaxed`}
              >
                My journey in software development started with a curiosity to understand how things work behind the scenes. This curiosity has driven me to continuously learn and adapt to new technologies and best practices in the ever-evolving world of web development.
              </p>
            </div>

            <div className="hidden desktop:block md:w-1/3 justify-center">
              <div className="relative w-80 h-80 overflow-hidden rounded-lg shadow-lg border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <Image
                  src={profile}
                  alt="Profile Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundLines>
  );
};

export default AboutSection;

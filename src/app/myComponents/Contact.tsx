'use client';

import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Mail, Instagram, Github, Twitter, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`min-h-screen flex flex-col py-8 px-4 sm:py-16 sm:px-6 lg:px-8 ${resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8 lg:mb-16">
        {/* Left side - Contact Info */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold mb-8">
            Get in Touch
          </h1>

          <div className={`backdrop-blur-sm rounded-lg p-6 sm:p-8 ${resolvedTheme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'} transition-colors duration-300`}>
            <h2 className={`text-xl sm:text-2xl font-semibold mb-6 ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              Connect with Me
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <MapPin className={`mr-3 flex-shrink-0 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`} size={18} />
                <span className={`${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>Planet Earth 🌍</span>
              </div>
              <div className="flex items-center">
                <Mail className={`mr-3 flex-shrink-0 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`} size={18} />
                <a 
                  href="mailto:shubhamkgupta720@gmail.com" 
                  className={`hover:underline break-all ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}
                >
                  shubhamkgupta720@gmail.com
                </a>
              </div>
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Instagram, href: "https://www.instagram.com" },
                { icon: Github, href: "https://github.com/shubGupta10" },
                { icon: Twitter, href: "https://x.com/i_m_shubham45" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-kumar-gupta-30a916234" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform"
                >
                  <social.icon 
                    className={`transition-colors hover:text-pink-500 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} 
                    size={20} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2">
          <div className={`w-full backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg ${resolvedTheme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'} transition-colors duration-300`}>
            <form
              ref={formRef}
              action="https://formspree.io/f/mleqwkjy"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'First Name', type: 'text' },
                  { label: 'Last Name', type: 'text' },
                ].map((field, index) => (
                  <div key={index}>
                    <label 
                      className={`text-sm block mb-2 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}
                      htmlFor={field.label.toLowerCase().replace(' ', '')}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.label.toLowerCase().replace(' ', '')}
                      name={field.label.toLowerCase().replace(' ', '')}
                      className={`w-full px-4 py-2 rounded-lg border outline-none transition-colors ${
                        resolvedTheme === 'dark' 
                          ? 'bg-gray-700 text-white border-gray-600 focus:border-pink-500' 
                          : 'bg-white text-gray-900 border-gray-300 focus:border-blue-500'
                      }`}
                      required
                    />
                  </div>
                ))}
              </div>
              
              <div>
                <label className={`text-sm block mb-2 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`} htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-2 rounded-lg border outline-none transition-colors ${
                    resolvedTheme === 'dark' 
                      ? 'bg-gray-700 text-white border-gray-600 focus:border-pink-500' 
                      : 'bg-white text-gray-900 border-gray-300 focus:border-blue-500'
                  }`}
                  required
                />
              </div>

              <div>
                <label className={`text-sm block mb-2 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border outline-none transition-colors resize-none ${
                    resolvedTheme === 'dark' 
                      ? 'bg-gray-700 text-white border-gray-600 focus:border-pink-500' 
                      : 'bg-white text-gray-900 border-gray-300 focus:border-blue-500'
                  }`}
                  required
                />
              </div>

              <button
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
"use client";

import React, { useRef, useState } from'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulated success (replace with actual form submission logic)
    setIsSubmitting(false);
    setSubmitStatus('success');
    if (formRef.current) formRef.current.reset();
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:sticky lg:top-24"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-bold mb-8">
              Get in Touch
            </h1>

            <div className="backdrop-blur-sm rounded-lg p-8 bg-blue-950/50 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-blue-100">
                Connect with Me
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="mr-3 flex-shrink-0 text-blue-300" size={18} />
                  <span className="text-blue-200">Planet Earth 🌍</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 flex-shrink-0 text-blue-300" size={18} />
                  <a 
                    href="mailto:shubhamkgupta720@gmail.com" 
                    className="hover:underline text-blue-200"
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
                  <motion.a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-100 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="w-full backdrop-blur-sm rounded-lg p-8 shadow-xl bg-blue-950/50">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: 'First Name', type: 'text' },
                    { label: 'Last Name', type: 'text' },
                  ].map((field, index) => (
                    <div key={index}>
                      <label 
                        className="text-sm block mb-2 text-blue-200"
                        htmlFor={field.label.toLowerCase().replace(' ', '')}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.label.toLowerCase().replace(' ', '')}
                        name={field.label.toLowerCase().replace(' ', '')}
                        className="w-full px-4 py-2 rounded-lg border bg-blue-900/50 border-blue-700 text-blue-100 placeholder-blue-400 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        required
                      />
                    </div>
                  ))}
                </div>
                
                <div>
                  <label className="text-sm block mb-2 text-blue-200" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border bg-blue-900/50 border-blue-700 text-blue-100 placeholder-blue-400 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm block mb-2 text-blue-200" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border bg-blue-900/50 border-blue-700 text-blue-100 placeholder-blue-400 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 resize-none"
                    required
                  />
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 disabled:opacity-50"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-400 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-red-400 text-center"
                >
                  An error occurred. Please try again.
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


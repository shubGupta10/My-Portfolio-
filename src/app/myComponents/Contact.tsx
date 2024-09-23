import React, { FormEvent, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Github, Twitter, Linkedin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex flex-col-reverse sm:flex-row bg-gradient-to-br from-gray-900 via-black to-blue-800 py-16 sm:px-8 px-4">
      <div className="sm:w-1/2 flex flex-col justify-center sm:pr-8">
        <motion.div
        className='ml-0 md:ml-20'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold mb-12">
            Get in Touch
          </h1>

          <div className=" backdrop-blur-sm rounded-lg p-8 mb-12 text-left sm:text-left">
            <h2 className="text-2xl text-white font-semibold mb-4">Connect with Me</h2>
            <div className="flex items-center mb-3">
              <MapPin className="text-white mr-3" size={18} />
              <span className="text-white">Planet Earth 🌍</span>
            </div>
            <div className="flex items-center mb-3">
              <Mail className="text-white mr-3" size={18} />
              <a href="mailto:shubhamkgupta720@gmail.com" className="text-white hover:underline">
                shubhamkgupta720@gmail.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-white hover:text-pink-500 transition" size={18} />
              </a>
              <a href="https://github.com/shubGupta10" target="_blank" rel="noopener noreferrer">
                <Github className="text-white hover:text-pink-500 transition" size={18} />
              </a>
              <a href="https://x.com/i_m_shubham45" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-white hover:text-pink-500 transition" size={18} />
              </a>
              <a href="https://www.linkedin.com/in/shubham-kumar-gupta-30a916234" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-white hover:text-pink-500 transition" size={18} />
              </a>
            </div>
            </div>
        </motion.div>
      </div>
      <div className="sm:w-1/2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 shadow-lg sm:max-w-lg"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {['First Name', 'Last Name', 'Email Address'].map((label, index) => (
              <div className="relative" key={index}>
                <motion.label
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className="text-sm text-gray-300 block mb-2"
                  htmlFor={label.toLowerCase().replace(' ', '')}
                >
                  {label}
                </motion.label>
                <motion.input
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  type={label === 'Email Address' ? 'email' : 'text'}
                  id={label.toLowerCase().replace(' ', '')}
                  name={label.toLowerCase().replace(' ', '')}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/20 text-white border border-gray-400 focus:border-pink-500 outline-none"
                  required
                />
              </div>
            ))}
            <div className="relative">
              <motion.label
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                htmlFor="message"
                className="text-sm text-gray-300 block mb-2"
              >
                Message
              </motion.label>
              <motion.textarea
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-900/20 text-white border border-gray-400 focus:border-pink-500 outline-none"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
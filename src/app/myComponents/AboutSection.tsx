'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Github, Globe, Twitter, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

const AboutSection = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    setIsVisible(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen flex flex-col justify-between ${
        isDark ? 'bg-gradient-to-b from-[#111626] via-[#1a2138] to-[#222c4a] text-white' : 'bg-gray-50 text-gray-900'
      } p-8 md:p-12 lg:p-16 overflow-hidden transition-colors duration-300`}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-8 max-w-4xl lg:mt-20"
          >
            <h1 className="text-4xl mt-20 md:mt-0 lg:mt-0 md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Hey, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                Shubham
              </span>
            </h1>
            
            <IntroText isDark={isDark} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 flex flex-col md:flex-row ml-10 md:ml-10 lg:ml-10  items-start md:items-center lg:items-center justify-between space-y-8 md:space-y-0"
      >
        <ResumeButton />
        <SocialIcons />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
      </motion.div>
    </motion.section>
  )
}

function IntroText({ isDark }: any) {
  return (
    <div className={`space-y-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-xl md:text-2xl leading-relaxed`}>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I'm a <span className="text-blue-400 font-semibold">full-stack developer</span> who thrives on building web applications that are as functional as they are visually appealing. My approach combines clean, intuitive design with robust backend solutions to create seamless user experiences that leave an impression.
      </motion.p>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        My work is driven by a commitment to <span className="text-purple-400 font-semibold">continual learning</span> and adaptability. I stay attuned to industry trends and emerging technologies, ensuring that my projects not only meet today's standards but also anticipate tomorrow's needs. From concept to execution, I'm dedicated to delivering products that are impactful and forward-thinking.
      </motion.p>
    </div>
  )
}

function ResumeButton() {
  return (
    <Button 
      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 rounded-full text-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
      onClick={() => window.open('https://drive.google.com/file/d/1xbJeBsvNpl-cXpbSFz68nhiGEECy2dBi/view?usp=drivesdk', '_blank')}
    >
      Download My Resume
    </Button>
  )
}

interface SocialIconProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialIcon({ href, icon: Icon, label }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 hover:text-white transition-colors duration-300"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-8 h-8" />
    </motion.a>
  )
}

function SocialIcons() {
  return (
    <div className="flex space-x-8">
      <SocialIcon href="https://www.linkedin.com/in/shubham-kumar-gupta-30a916234" icon={Linkedin} label="LinkedIn" />
      <SocialIcon href="https://github.com/shubGupta10" icon={Github} label="GitHub" />
      <SocialIcon href="https://shubgupta.vercel.app" icon={Globe} label="Portfolio" />
      <SocialIcon href="https://x.com/i_m_shubham45" icon={Twitter} label="Twitter" />
    </div>
  )
}

export default AboutSection
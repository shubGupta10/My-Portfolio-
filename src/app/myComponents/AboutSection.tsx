'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Globe, Twitter, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const AboutSection = () => {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen] bg-gradient-to-br from-[#111626] via-[#111827] to-[#222c4a] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          <Header />
          <AboutContent />
          <ResumeAndSocial />
        </div>
      </div>
    </main>
  )
}

const Header = () => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center mt-20 space-y-4"
  >
    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
      Hey, I'm{' '}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
        Shubham
      </span>
    </h1>
    <p className="text-lg text-gray-300">
      Full-stack Developer | Tech Enthusiast
    </p>
  </motion.div>
)

const AboutContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="space-y-6 text-gray-300"
  >
    <p className="text-lg leading-relaxed">
      I'm a passionate full-stack developer with a keen eye for creating exceptional digital experiences. My journey in tech started with curiosity and has evolved into a dedicated pursuit of building innovative web solutions.
    </p>
    
    <p className="text-lg leading-relaxed">
      I specialize in crafting scalable applications that combine clean design with robust functionality. Whether it's frontend or backend, I ensure every project I work on delivers outstanding user experiences.
    </p>

    <p className="text-lg leading-relaxed">
      When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm always excited about taking on new challenges and pushing the boundaries of what's possible on the web.
    </p>
  </motion.div>
)

const ResumeAndSocial = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/shubham-kumar-gupta-30a916234", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/shubGupta10", icon: Github, label: "GitHub" },
    { href: "https://shubgupta.vercel.app", icon: Globe, label: "Portfolio" },
    { href: "https://x.com/i_m_shubham45", icon: Twitter, label: "Twitter" }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex flex-col items-center space-y-8"
    >
      <Button 
        variant="outline"
        size="lg"
        className="group bg-transparent border-gray-500 hover:bg-gray-800 hover:border-gray-400 text-gray-300 hover:text-white"
        onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
      >
        <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
        Download Resume
      </Button>

      <div className="flex justify-center space-x-8">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

export default AboutSection
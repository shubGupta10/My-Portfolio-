"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const Hero = () => {
  const socialLinks = [
    { icon: "github", url: "https://github.com/shubGupta10", label: "GitHub" },
    { icon: "twitter", url: "https://x.com/i_m_shubham45", label: "Twitter" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/shubhamgupta-codes", label: "LinkedIn" },
    { icon: "mail", url: "mailto:shubhamgupta720@gmail.com", label: "Email" },
  ]

  // Ref for the animated text
  const textRef = useRef(null)
  
  // Ref for the section
  const sectionRef = useRef(null)

  // Text animation effect
  useEffect(() => {
    const roles = ["Full Stack Developer", "Backend Developer", "Freelance Developer", "Open Source Contributor"]
    let currentIndex = 0
    let currentText = ""
    let isDeleting = false

    const typeEffect = () => {
      const currentRole = roles[currentIndex]

      if (isDeleting) {
        currentText = currentRole.substring(0, currentText.length - 1)
      } else {
        currentText = currentRole.substring(0, currentText.length + 1)
      }

      if (textRef.current) {
        textRef.current.textContent = currentText
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && currentText === currentRole) {
        typeSpeed = 2000 
        isDeleting = true
      } else if (isDeleting && currentText === "") {
        isDeleting = false
        currentIndex = (currentIndex + 1) % roles.length
        typeSpeed = 500 
      }

      setTimeout(typeEffect, typeSpeed)
    }

    const timeout = setTimeout(typeEffect, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden"
      id="home"
    >
      
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor"/>
            </pattern>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: 'var(--primary)', stopOpacity: 0.1}} />
              <stop offset="100%" style={{stopColor: 'var(--primary)', stopOpacity: 0.05}} />
            </linearGradient>
          </defs>
          
          {/* Grid pattern */}
          <rect width="100%" height="100%" fill="url(#grid)" className="text-white/20"/>
          
          {/* Dot pattern overlay */}
          <rect width="100%" height="100%" fill="url(#dots)" className="text-white/10"/>
          
          {/* Geometric shapes */}
          <g className="text-white/10">
            <polygon points="100,50 150,150 50,150" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="850" cy="150" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="750" y="750" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 780 780)"/>
            <polygon points="200,800 250,750 300,800 250,850" fill="none" stroke="currentColor" strokeWidth="2"/>
          </g>
          
          {/* Flowing lines */}
          <g className="text-white/5">
            <path d="M0,300 Q250,200 500,300 T1000,300" fill="none" stroke="currentColor" strokeWidth="3"/>
            <path d="M0,600 Q250,500 500,600 T1000,600" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M0,150 Q250,50 500,150 T1000,150" fill="none" stroke="currentColor" strokeWidth="1"/>
          </g>
        </svg>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-[var(--primary)]/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          style={{ top: "10%", left: "20%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-[var(--primary)]/5 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      {/* Main container */}
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Text Content Side */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 sm:space-y-8">
              
              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="text-[var(--primary)]">Hey ✌️ I'm </span>
                <motion.span
                  className="text-[var(--foreground)] relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Shubham
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1.5 bg-[var(--primary)]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </motion.span>
              </h1>

              {/* Animated role text */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[var(--foreground)]">
                  I'm a{" "}
                  <span ref={textRef} className="text-[var(--primary)]">
                    Full Stack Developer
                  </span>
                  <span className="text-[var(--primary)] animate-pulse">|</span>
                </p>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-[var(--foreground)]/80 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                I enjoy building full-stack apps with{" "}
                <span className="text-[var(--primary)] font-bold">Next.js</span>,{" "}
                <span className="text-[var(--primary)] font-bold">Node.js</span>, and{" "}
                <span className="text-[var(--primary)] font-bold">TypeScript</span>. Lately, I've been exploring{" "}
                <span className="text-[var(--primary)] font-bold">AI</span> 🤖 and always try to learn something new through hands-on projects.
              </motion.p>

              {/* Action buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.a
                  href="/Shubham_Gupta_Resume.pdf"
                  download
                  className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl font-bold bg-[var(--primary)] text-[#08131f] shadow-[0_0_15px_rgba(0,191,255,0.3)] flex items-center justify-center gap-2 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(0,191,255,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 16L12 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 13L12 16L15 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 20H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="/about-me"
                  className="cursor-pointer px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl font-bold border-2 border-[var(--primary)] text-[var(--primary)] flex items-center justify-center gap-2 transition-all duration-300"
                  whileHover={{ 
                    backgroundColor: "rgba(0,191,255,0.1)",
                    scale: 1.05 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know About Me
                </motion.a>
              </motion.div>

              {/* Social links */}
              <motion.div 
                className="flex gap-4 pt-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 rounded-full bg-[var(--muted)]/50 text-[var(--foreground)] hover:text-[var(--primary)] border border-[var(--muted)] transition-all duration-300"
                    whileHover={{ 
                      y: -3, 
                      color: "var(--primary)", 
                      borderColor: "var(--primary)",
                      backgroundColor: "rgba(0,191,255,0.1)"
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <SocialIcon name={social.icon} size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Image Side - Now properly responsive */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image container - responsive sizing */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]">
                
                {/* Orbital rings - responsive */}
                <motion.div
                  className="absolute -inset-6 sm:-inset-8 lg:-inset-10 border-2 border-dashed border-[var(--primary)]/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute -inset-3 sm:-inset-4 lg:-inset-5 border-2 border-dashed border-[var(--primary)]/10 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Enhanced glow effect */}
                <div className="absolute -inset-8 sm:-inset-10 lg:-inset-12 rounded-full bg-gradient-to-r from-[var(--primary)]/20 via-[var(--primary)]/10 to-[var(--primary)]/5 blur-2xl"></div>
                
                {/* Secondary glow */}
                <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 rounded-full bg-[var(--primary)]/10 blur-xl"></div>

                {/* Photo container with enhanced styling */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--primary)]/40 shadow-2xl z-10 bg-gradient-to-br from-[var(--primary)]/5 to-transparent"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "var(--primary)"
                  }}
                  drag
                  dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
                  dragElastic={0.1}
                >
                  {/* Enhanced background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--muted)] via-[var(--background)] to-[var(--muted)]"></div>
                  
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/shubham_pic.jpg"
                      alt="Shubham's Photo"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full transition-all duration-500 hover:scale-105"
                      priority
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, (max-width: 1280px) 384px, 420px"
                    />
                  </div>

                  {/* Overlay gradient for better contrast */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[var(--background)]/20 via-transparent to-transparent"></div>
                </motion.div>

                {/* Floating particles */}
                <motion.div
                  className="absolute -top-4 -right-4 w-3 h-3 bg-[var(--primary)] rounded-full opacity-60"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 0.2, 0.6]
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-2 h-2 bg-[var(--primary)] rounded-full opacity-40"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.4, 0.1, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const SocialIcon = ({ name, size = 20 }) => {
  switch (name) {
    case "github":
      return <Github size={size} />
    case "twitter":
      return <Twitter size={size} />
    case "linkedin":
      return <Linkedin size={size} />
    case "mail":
      return <Mail size={size} />
    default:
      return null
  }
}

export default Hero
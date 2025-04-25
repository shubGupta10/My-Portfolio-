"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
  
  // Setup scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })
  
  // Transform scrollYProgress to x position values
  const leftXPos = useTransform(scrollYProgress, [0, 0.5], [0, -500])
  const rightXPos = useTransform(scrollYProgress, [0, 0.5], [0, 500])
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Text animation effect
  useEffect(() => {
    const roles = ["Full Stack Developer", "Backend Developer", "Freelance Developer", "Open Source Contributor",]
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
      className="min-h-[100vh] w-full flex items-start sm:items-center justify-center p-6 pt-16 sm:pt-20 lg:pt-24 sm:px-8 lg:px-12 bg-[var(--background)] relative overflow-hidden"
      id="home">
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
      <div className="container max-w-7xl mx-auto relative z-10 pt-8 lg:mt-4 sm:pt-0">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Text Content Side - Full width on mobile/tablet */}
          <motion.div
            className="w-full lg:w-3/5 text-left"
            style={{ 
              x: leftXPos, 
              opacity: opacityValue 
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -500, }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >

              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="text-[var(--primary)]">Hey ✌️ I'm </span>
                <motion.span
                  className="text-[var(--foreground)] relative inline-block"
                  initial={{ opacity: 0, x: -500 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Shubham
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1.5 bg-[var(--primary)]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </motion.span>
              </h1>

              <div className="flex items-center justify-start space-x-4">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--foreground)]">
                  I'm a{" "}
                  <span ref={textRef} className="text-[var(--primary)]">
                    Full Stack Developer
                  </span>
                  <span className="text-[var(--primary)] animate-pulse">|</span>
                </p>
              </div>

              <p className="text-xl sm:text-2xl text-[var(--foreground)]/80 max-w-2xl leading-relaxed font-medium">
                I enjoy building full-stack apps with{" "}
                <span className="text-[var(--primary)] font-bold">Next.js</span>,{" "}
                <span className="text-[var(--primary)] font-bold">Node.js</span>, and{" "}
                <span className="text-[var(--primary)] font-bold">TypeScript</span>. Lately, I've been exploring{" "}
                <span className="text-[var(--primary)] font-bold">AI</span> 🤖 and always try to learn something new through hands-on projects.
              </p>
              <div className="flex flex-wrap gap-4 pt-6 justify-start">
                <motion.a
                  href="/Shubham_Gupta_Resume.pdf"
                  download
                  className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-md text-lg sm:text-xl font-bold bg-[var(--primary)] text-[#08131f] shadow-[0_0_15px_rgba(0,191,255,0.3)] flex items-center gap-2"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(0,191,255,0.5)",
                  }}
                  whileTap={{ scale: 0.97 }}
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
                  className="cursor-pointer px-6 py-3.5 sm:px-8 sm:py-4 rounded-md text-lg sm:text-xl font-bold border-2 border-[var(--primary)] text-[var(--primary)] flex items-center gap-2"
                  whileHover={{ backgroundColor: "rgba(0,191,255,0.1)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Know About Me
                </motion.a>
              </div>

              {/* Social links */}
              <div className="flex gap-4 pt-2 justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 rounded-full bg-[var(--muted)]/50 text-[var(--foreground)] hover:text-[var(--primary)] border border-[var(--muted)] transition-all duration-300"
                    whileHover={{ y: -3, color: "var(--primary)", borderColor: "var(--primary)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <SocialIcon name={social.icon} size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Side - ONLY VISIBLE ON LARGE SCREENS (lg and up) */}
          <motion.div
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            className="hidden lg:flex w-full lg:w-2/5 justify-center items-center"
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
              x: rightXPos, 
              opacity: opacityValue 
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-80 h-80">
              {/* Orbital rings */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-[var(--primary)]/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-dashed border-[var(--primary)]/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 blur-xl"></div>

              {/* Photo container with subtle border */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-[var(--primary)]/30 z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
              >
                {/* Photo placeholder with nice gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--muted)] to-[var(--background)]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-[var(--foreground)]">
                  <Image
                    src="/shubham_pic.jpg"
                    alt="Shubham's Photo"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                  />
                </div>
              </motion.div>
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
"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const Hero = () => {
  const socialLinks = [
    { icon: "github", url: "https://github.com/shubGupta10", label: "GitHub" },
    { icon: "twitter", url: "https://x.com/i_m_shubham45", label: "Twitter" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/shubhamgupta-codes", label: "LinkedIn" },
    { icon: "mail", url: "mailto:shubhamgupta720@gmail.com", label: "Email" },
  ]

  const textRef = useRef(null)

  // Optimized typing effect
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
      className="min-h-[90vh] w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden"
      id="home"
    >
      {/* Enhanced background pattern with animated gradient */}
      <div className="absolute inset-0 w-full h-full opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Subtle animated gradient blobs */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[var(--primary)]/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[var(--primary)]/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1/4 h-1/4 bg-[var(--primary)]/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Main container */}
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Text Content */}
          <motion.div
            className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main heading with enhanced animation */}
            <div className="space-y-2">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="text-[var(--primary)] inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Hey ✌️ I'm{" "}
                </motion.span>
                <motion.span
                  className="text-[var(--foreground)] relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Shubham
                  <motion.div
                    className="absolute -bottom-1 left-0 h-1.5 bg-[var(--primary)] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </motion.span>
              </motion.h1>

              {/* Animated role text with improved styling */}
              <motion.div
                className="flex items-center justify-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-[var(--foreground)]">
                  I'm a{" "}
                  <span className="relative">
                    <span ref={textRef} className="text-[var(--primary)]">
                      Full Stack Developer
                    </span>
                    <span className="text-[var(--primary)] animate-pulse ml-0.5">|</span>
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Description with enhanced styling */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-[var(--foreground)]/80 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              I enjoy building full-stack apps with <span className="text-[var(--primary)] font-bold">Next.js</span>,{" "}
              <span className="text-[var(--primary)] font-bold">Node.js</span>, and{" "}
              <span className="text-[var(--primary)] font-bold">TypeScript</span>. Lately, I've been exploring{" "}
              <span className="text-[var(--primary)] font-bold">AI</span> 🤖 and always try to learn something new
              through hands-on projects.
            </motion.p>

            {/* Action buttons with improved styling */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 pt-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="/Shubham_Gupta_Resume.pdf"
                download
                className="px-8 py-4 rounded-lg text-lg font-bold bg-[var(--primary)] text-[#08131f] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 transform-gpu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 16L12 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 13L12 16L15 13"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 20H16"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="/about-me"
                className="cursor-pointer px-8 py-4 rounded-lg text-lg font-bold border-2 border-[var(--primary)] text-[var(--primary)] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[var(--primary)]/10 transform-gpu"
                whileHover={{
                  backgroundColor: "rgba(0,191,255,0.1)",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Know About Me
              </motion.a>
            </motion.div>

            {/* Social links with improved styling */}
            <motion.div
              className="flex gap-4 pt-8 justify-center"
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
                  className="p-3.5 rounded-full bg-[var(--muted)]/50 text-[var(--foreground)] hover:text-[var(--primary)] border border-[var(--muted)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 hover:shadow-md"
                  whileHover={{ y: -4, scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <SocialIcon name={social.icon} size={22} />
                </motion.a>
              ))}
            </motion.div>
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

const style = `
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
`

export default Hero

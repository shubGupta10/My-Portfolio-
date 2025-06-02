"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, ArrowUp, Code2 } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Experience", url: "/#experience" },
    { name: "Skills", url: "/#skills" },
    { name: "Projects", url: "/#projects" },
    { name: "Contact", url: "/#cta" },
  ]

  const socialLinks = [
    { name: "Email", url: "mailto:shubhamkgupta720@gmail.com" },
    { name: "Twitter", url: "https://x.com/i_m_shubham45" },
    { name: "GitHub", url: "https://github.com/shubGupta10" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer ref={sectionRef} className="w-full bg-[var(--background)] relative border-t border-[var(--border)]">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--primary)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[var(--primary)]/15 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" className="text-[var(--primary)]" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Link href="/" className="inline-flex items-center gap-2 group">
                <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-all duration-300">
                  <Code2 size={24} />
                </div>
                <span className="text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  Portfolio
                </span>
              </Link>
              <p className="text-[var(--foreground)]/70 leading-relaxed max-w-sm">
                Full-stack developer passionate about creating innovative solutions and bringing ideas to life through
                code.
              </p>
            </motion.div>

            {/* Navigation Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Navigation</h3>
              <nav>
                <ul className="space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.li key={index} variants={itemVariants} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <Link
                        href={link.url}
                        className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <div className="w-1 h-1 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Contact & Social */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Connect</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.div key={index} variants={itemVariants} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <a
                      href={social.url}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                      className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {social.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent mb-8"
          />

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[var(--foreground)]/60 text-sm">© {currentYear} Shubham Gupta. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <motion.p
                className="text-[var(--foreground)]/60 text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Made with{" "}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart size={14} className="text-red-500" fill="currentColor" />
                </motion.span>{" "}
                by Shubham
              </motion.p>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-all duration-300 group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

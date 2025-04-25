"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Twitter, ArrowRight } from "lucide-react"

const CTA = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredLink, setHoveredLink] = useState(null)

  const DATA = {
    contact: {
      email: "shubhamkgupta720@gmail.com",
      social: {
        X: { url: "https://x.com/i_m_shubham45" }
      }
    }
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="cta" 
      className="w-full py-20 px-4 sm:px-8 bg-transparent relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10" style={{ zIndex: -1 }}>
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl"
          animate={{
            top: mousePosition.y / 10,
            left: mousePosition.x / 10,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            background: "var(--primary)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          animate={{
            bottom: mousePosition.y / 15,
            right: mousePosition.x / 15,
            scale: [1, 0.9, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            background: "var(--primary)",
            transform: "translate(50%, 50%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl relative">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 relative">
            <motion.div 
              className="flex justify-center mb-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="px-4 py-1.5 text-sm font-medium rounded-full text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                Contact
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-[var(--foreground)] inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Let&apos;s <span className="text-[var(--primary)]">Connect</span>
            </motion.h2>
            <motion.div 
              className="h-1 bg-[var(--primary)] mt-4 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
          </div>

          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>

          {/* Contact cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* Email card */}
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="group block"
              onMouseEnter={() => setHoveredLink("email")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <motion.div
                className="relative p-6 rounded-lg backdrop-blur-sm overflow-hidden group-hover:shadow-lg h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: "rgba(31, 31, 46, 0.3)",
                  border: "1px solid rgba(0, 191, 255, 0.15)",
                }}
              >
                {/* Shimmering effect on hover */}
                <div
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(45deg, transparent 25%, rgba(0, 191, 255, 0.5) 50%, transparent 75%)",
                    backgroundSize: "200% 200%",
                    animation: "shimmer 1.5s infinite linear",
                  }}
                />

                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className="p-4 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      background: "var(--muted)",
                      border: "1px solid var(--primary)",
                    }}
                  >
                    <Mail size={26} className="text-[var(--primary)]" />
                  </motion.div>
                  <h3 className="text-xl font-medium">Email Me</h3>
                  <p className="text-muted-foreground">{DATA.contact.email}</p>
                  <span className="inline-flex items-center text-sm font-medium text-[var(--primary)]">
                    Send a Message
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight size={16} className="ml-1" />
                    </motion.div>
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Twitter Card */}
            <a
              href={DATA.contact.social.X.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              onMouseEnter={() => setHoveredLink("twitter")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <motion.div
                className="relative p-6 rounded-lg backdrop-blur-sm overflow-hidden group-hover:shadow-lg h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: "rgba(31, 31, 46, 0.3)",
                  border: "1px solid rgba(0, 191, 255, 0.15)",
                }}
              >
                {/* Shimmering effect on hover */}
                <div
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(45deg, transparent 25%, rgba(0, 191, 255, 0.5) 50%, transparent 75%)",
                    backgroundSize: "200% 200%",
                    animation: "shimmer 1.5s infinite linear",
                  }}
                />

                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className="p-4 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      background: "var(--muted)",
                      border: "1px solid var(--primary)",
                    }}
                  >
                    <Twitter size={26} className="text-[var(--primary)]" />
                  </motion.div>
                  <h3 className="text-xl font-medium">DM Me</h3>
                  <p className="text-muted-foreground">@i_m_shubham45</p>
                  <span className="inline-flex items-center text-sm font-medium text-[var(--primary)]">
                    Connect on X
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight size={16} className="ml-1" />
                    </motion.div>
                  </span>
                </div>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </motion.section>
  )
}

export default CTA
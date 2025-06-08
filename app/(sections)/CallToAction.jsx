"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Mail, Twitter, ArrowRight, MessageCircle, Send } from "lucide-react"

const CTA = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const DATA = {
    contact: {
      email: "shubhamkgupta720@gmail.com",
      social: {
        X: { url: "https://x.com/i_m_shubham45" },
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={sectionRef} id="cta" className="w-full bg-[var(--background)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div className="mb-20 text-center" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4 border border-[var(--primary)]/20"
              variants={itemVariants}
            >
              <MessageCircle size={16} />
              Get In Touch
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mb-6">
              Let's <span className="text-[var(--primary)]">Connect</span>
            </h2>

            <motion.p
              className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto mt-6 leading-relaxed"
              variants={itemVariants}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" variants={itemVariants}>
            {/* Email Card */}
            <motion.div variants={itemVariants}>
              <Link href={`mailto:${DATA.contact.email}`} className="group block h-full">
                <div className="bg-[var(--card)] backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary)]/10 transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-all duration-300">
                      <Mail size={32} />
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                      Email Me
                    </h3>
                    <p className="text-[var(--foreground)]/70 text-lg">{DATA.contact.email}</p>
                    <p className="text-[var(--foreground)]/60 leading-relaxed">
                      Send me an email for project inquiries, collaborations, or just to say hello!
                    </p>

                    <div className="pt-4">
                      <div className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold group-hover:gap-3 transition-all duration-300">
                        <Send size={18} />
                        Send Message
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Twitter/X Card */}
            <motion.div variants={itemVariants}>
              <a
                href={DATA.contact.social.X.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="bg-[var(--card)] backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary)]/10 transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-all duration-300">
                      <Twitter size={32} />
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                      Follow on X
                    </h3>
                    <p className="text-[var(--foreground)]/70 text-lg">@i_m_shubham45</p>
                    <p className="text-[var(--foreground)]/60 leading-relaxed">
                      Follow me on X for updates, tech insights, and behind-the-scenes content!
                    </p>

                    <div className="pt-4">
                      <div className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold group-hover:gap-3 transition-all duration-300">
                        <Twitter size={18} />
                        Connect on X
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Additional CTA */}
          <motion.div className="text-center mt-16" variants={itemVariants}>
            <div className="bg-[var(--muted)]/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Ready to Start a Project?</h3>
              <p className="text-[var(--foreground)]/70 mb-6 leading-relaxed">
                Whether you have a clear vision or just an idea, I'd love to help bring it to life. Let's discuss how we
                can work together.
              </p>
              <Link
                href={`mailto:${DATA.contact.email}?subject=Project Inquiry`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full font-semibold text-lg shadow-lg shadow-[var(--primary)]/25 hover:shadow-xl hover:shadow-[var(--primary)]/40 hover:bg-[var(--primary)]/90 transition-all duration-300 hover:scale-105"
              >
                Start a Conversation
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
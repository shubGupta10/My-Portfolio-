"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Building, Calendar, MapPin, Users, ExternalLink, ChevronDown, ChevronUp, Briefcase } from "lucide-react"
import Link from "next/link"

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const experiences = [
    {
      company: "DIGNIFY A GIRL LTD",
      role: "Freelance Full Stack Developer",
      period: "Nov 2024 - Present",
      location: "London Area, United Kingdom · Remote",
      type: "Freelance",
      description:
        "Worked with the founder of Dignify a Girl to build BuildMyCV, a resume builder with AI-powered features. The app was developed using Next.js, Node.js, TypeScript, and Firebase. AI tools were integrated using LangChain and Gemini AI to help users with resume generation and job analysis.",
      points: [
        "Developed the BuildMyCV app using Next.js, Node.js, TypeScript, and Firebase.",
        "Integrated LangChain and Gemini AI for resume generation and job matching.",
        "Configured Stripe for subscription plans, discounts, and lifetime access.",
        "Implemented authentication and user management using Clerk.",
        "Designed a responsive UI using Tailwind CSS and Shadcn.",
        "Deployed app on Vercel with performance and SEO optimizations.",
      ],
      skills: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Firebase",
        "Stripe",
        "Clerk",
        "LangChain",
        "Gemini AI",
        "Tailwind CSS",
        "Shadcn",
      ],
      link: "https://www.buildmycv.ai",
      current: true,
    },
    {
      company: "BioStrive Energies Pvt. Ltd.",
      role: "Freelance Full Stack Developer",
      period: "June 2024 - Feb 2025",
      location: "Remote",
      type: "Freelance",
      description:
        "Built a full-stack energy platform with Next.js, Node.js, and MongoDB featuring admin control, real-time notices, JWT auth, and SEO optimizations.",
      points: [
        "Developed a responsive and high-performance website for BioStrive Energies using Next.js, Node.js, TypeScript, and MongoDB.",
        "Built an admin panel with role-based access control, enabling dynamic content and user management.",
        "Created a notice system with CRUD operations using Appwrite Storage for real-time announcements.",
        "Optimized website performance and SEO by implementing Redis caching, browser caching, and efficient asset loading.",
        "Used Framer Motion to enhance UI with smooth animations and interactive elements.",
        "Implemented secure JWT authentication with refresh tokens for seamless user sessions.",
      ],
      skills: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Appwrite", "Framer Motion", "Redis", "JWT Auth"],
      link: "https://biostriveenergies.in",
      current: false,
    },
  ]

  const togglePoints = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
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
    <section ref={sectionRef} id="experience" className="w-full bg-[var(--background)] relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-10 w-80 h-80 bg-[var(--primary)]/15 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="experience-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#experience-grid)" className="text-[var(--primary)]" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div className="relative mb-20 text-center" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4 border border-[var(--primary)]/20"
              variants={itemVariants}
            >
              <Briefcase size={16} />
              Professional Journey
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mb-6">
              Work <span className="text-[var(--primary)]">Experience</span>
            </h2>

            <motion.div
              className="h-1.5 bg-[var(--primary)] mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: "120px" } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto mt-6 leading-relaxed"
              variants={itemVariants}
            >
              My professional experience building innovative solutions and working with cutting-edge technologies.
            </motion.p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border)] hidden md:block" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-[var(--primary)] rounded-full border-4 border-[var(--background)] z-10 hidden md:block" />

                  {/* Current indicator */}
                  {experience.current && (
                    <div className="absolute left-5 top-7 w-6 h-6 bg-[var(--primary)]/20 rounded-full animate-pulse hidden md:block" />
                  )}

                  <div className="md:ml-16">
                    <div className="bg-[var(--card)] backdrop-blur-sm border border-[var(--border)] rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary)]/10 transition-all duration-300">
                      {/* Current badge */}
                      {experience.current && (
                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold rounded-full">
                          Current
                        </div>
                      )}

                      {/* Company header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                          <Building size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">{experience.company}</h3>
                          <p className="text-xl text-[var(--primary)] font-semibold mb-3">{experience.role}</p>

                          {/* Meta information */}
                          <div className="flex flex-wrap gap-4 text-sm text-[var(--foreground)]/70">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-[var(--primary)]" />
                              {experience.period}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-[var(--primary)]" />
                              {experience.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users size={16} className="text-[var(--primary)]" />
                              {experience.type}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[var(--foreground)]/80 mb-6 leading-relaxed">{experience.description}</p>

                      {/* Key contributions toggle */}
                      <button
                        onClick={() => togglePoints(index)}
                        className="flex items-center gap-2 text-[var(--primary)] font-semibold mb-6 hover:gap-3 transition-all duration-300"
                      >
                        {expandedIndex === index ? "Hide Key Contributions" : "View Key Contributions"}
                        {expandedIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>

                      {/* Expandable contributions */}
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 overflow-hidden"
                          >
                            <div className="bg-[var(--muted)]/30 rounded-xl p-6 border border-[var(--border)]">
                              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-4">Key Contributions</h4>
                              <ul className="space-y-3">
                                {experience.points.map((point, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-3 text-[var(--foreground)]/80"
                                  >
                                    <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0" />
                                    {point}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[var(--foreground)]/70 mb-3 uppercase tracking-wider">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 text-sm font-medium rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 hover:bg-[var(--primary)]/20 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Visit website link */}
                      <Link
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full font-semibold hover:bg-[var(--primary)]/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--primary)]/25"
                      >
                        Visit Website
                        <ExternalLink size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

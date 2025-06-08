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
    <section ref={sectionRef} id="experience" className="w-full bg-[var(--background)] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div className="relative mb-12 sm:mb-16 md:mb-20 text-center" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-[var(--primary)]/20"
              variants={itemVariants}
            >
              <Briefcase size={14} className="sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Professional Journey</span>
            </motion.div>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mb-4 sm:mb-6 leading-tight px-2">
              Work <span className="text-[var(--primary)]">Experience</span>
            </h2>

            <motion.div
              className="h-1 sm:h-1.5 bg-[var(--primary)] mx-auto sm:w-[120px]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "80px" } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/70 max-w-xl md:max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed px-4"
              variants={itemVariants}
            >
              My professional experience building innovative solutions and working with cutting-edge technologies.
            </motion.p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-[var(--border)] hidden lg:block" />

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((experience, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-6 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-[var(--primary)] rounded-full border-2 sm:border-4 border-[var(--background)] z-10 hidden lg:block" />

                  {/* Current indicator */}
                  {experience.current && (
                    <div className="absolute left-3 sm:left-5 top-5 sm:top-7 w-5 h-5 sm:w-6 sm:h-6 bg-[var(--primary)]/20 rounded-full animate-pulse hidden lg:block" />
                  )}

                  <div className="lg:ml-12 xl:ml-16">
                    <div className="bg-[var(--card)] backdrop-blur-sm border border-[var(--border)] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300">
                      {/* Current badge */}
                      {experience.current && (
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold rounded-full">
                          Current
                        </div>
                      )}

                      {/* Company header */}
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 flex-shrink-0">
                          <Building size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 w-full">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--foreground)] mb-1 pr-16 sm:pr-0">
                            {experience.company}
                          </h3>
                          <p className="text-base sm:text-lg md:text-xl text-[var(--primary)] font-semibold mb-2 sm:mb-3">
                            {experience.role}
                          </p>

                          {/* Meta information */}
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-[var(--foreground)]/70">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <Calendar size={14} className="text-[var(--primary)] flex-shrink-0" />
                              <span className="truncate">{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <MapPin size={14} className="text-[var(--primary)] flex-shrink-0" />
                              <span className="truncate">{experience.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <Users size={14} className="text-[var(--primary)] flex-shrink-0" />
                              <span>{experience.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[var(--foreground)]/80 mb-4 sm:mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Key contributions toggle */}
                      <button
                        onClick={() => togglePoints(index)}
                        className="flex items-center gap-1.5 sm:gap-2 text-[var(--primary)] font-semibold mb-4 sm:mb-6 hover:gap-2 sm:hover:gap-3 transition-all duration-300 text-sm sm:text-base"
                      >
                        <span className="hidden sm:inline">
                          {expandedIndex === index ? "Hide Key Contributions" : "View Key Contributions"}
                        </span>
                        <span className="sm:hidden">
                          {expandedIndex === index ? "Hide Details" : "View Details"}
                        </span>
                        {expandedIndex === index ? (
                          <ChevronUp size={16} className="sm:w-[18px] sm:h-[18px]" />
                        ) : (
                          <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />
                        )}
                      </button>

                      {/* Expandable contributions */}
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4 sm:mb-6 overflow-hidden"
                          >
                            <div className="bg-[var(--muted)]/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-[var(--border)]">
                              <h4 className="text-base sm:text-lg font-semibold text-[var(--foreground)] mb-3 sm:mb-4">
                                Key Contributions
                              </h4>
                              <ul className="space-y-2 sm:space-y-3">
                                {experience.points.map((point, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-[var(--foreground)]/80"
                                  >
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--primary)] rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                                    <span className="leading-relaxed">{point}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Technologies */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-[var(--foreground)]/70 mb-2 sm:mb-3 uppercase tracking-wider">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {experience.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 hover:bg-[var(--primary)]/20 transition-colors whitespace-nowrap"
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
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full font-semibold hover:bg-[var(--primary)]/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--primary)]/25 text-sm sm:text-base"
                      >
                        <span className="hidden sm:inline">Visit Website</span>
                        <span className="sm:hidden">Visit Site</span>
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
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
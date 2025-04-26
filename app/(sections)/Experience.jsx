"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Building, Calendar, MapPin, Users, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const Experience = () => {
  const [showPoints, setShowPoints] = useState(false)

  const experience = {
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
  }

  const togglePoints = () => {
    setShowPoints(!showPoints)
  }

  return (
    <motion.section
      id="experience"
      className="py-12 sm:py-20 px-4 sm:px-8 bg-[var(--background)]"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{
        amount: 0.1 
      }}
      transition={{
        duration: 1.5, // Slower animation (increased from 0.8)
        ease: "easeOut" // Smoother easing function
      }}
    >
      <div className="mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-14 relative"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.2, 
            ease: "easeInOut",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] inline-block">
            Work <span className="text-[var(--primary)]">Experience</span>
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-[var(--primary)] mt-3 sm:mt-4"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        {/* Experience Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2
          }}
          className="bg-[var(--muted)]/10 rounded-xl p-4 sm:p-6 border border-[var(--muted)]/30 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--muted)]/50 flex items-center justify-center border border-[var(--primary)]/20">
                <Building size={20} className="text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">{experience.company}</h3>
                <p className="text-lg sm:text-xl text-[var(--primary)] font-medium">{experience.role}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-6 my-4 sm:my-6 ml-0 sm:ml-14">
              <div className="flex items-center text-[var(--foreground)]/70 text-sm">
                <Calendar size={16} className="mr-2 text-[var(--primary)]" />
                {experience.period}
              </div>

              <div className="flex items-center text-[var(--foreground)]/70 text-sm">
                <MapPin size={16} className="mr-2 text-[var(--primary)]" />
                {experience.location}
              </div>

              <div className="flex items-center text-[var(--foreground)]/70 text-sm">
                <Users size={16} className="mr-2 text-[var(--primary)]" />
                {experience.type}
              </div>
            </div>

            <div className="ml-0 sm:ml-14">
              <p className="text-[var(--foreground)]/80 mb-4 leading-relaxed text-sm sm:text-base">{experience.description}</p>

              {/* View Key Contributions Button */}
              <button
                onClick={togglePoints}
                className="mb-4 text-[var(--primary)] font-medium flex items-center gap-1 hover:gap-2 transition-all cursor-pointer text-sm sm:text-base"
              >
                {showPoints ? "Hide Key Contributions" : "View Key Contributions"}
                {showPoints ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {/* Expandable Points */}
              {showPoints && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.8 }} // Slowed this animation too
                  className="mb-6"
                >
                  <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-[var(--foreground)]/80 text-sm sm:text-base">
                    {experience.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <div className="mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-[var(--foreground)]/70 mb-2 sm:mb-3">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-[var(--muted)]/50 text-[var(--primary)] border border-[var(--primary)]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                className="flex gap-4"
              >
                <Link href={experience.link} legacyBehavior>
                  <motion.a
                    target="_blank"
                    className="text-[var(--primary)] cursor-pointer text-xs sm:text-sm font-medium border py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg border-[var(--primary)] inline-flex items-center gap-1 sm:gap-2"
                    whileHover={{
                      backgroundColor: "rgba(0,191,255,0.15)",
                      boxShadow: "0 0 10px rgba(0,191,255,0.3)",
                      borderColor: "rgba(0,191,255,0.6)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Visit Website
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink size={14} className="sm:size-auto lg:size-4 md:size-auto" />
                    </motion.span>
                  </motion.a>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience
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
    <section id="experience" className="py-20 px-4 sm:px-8 bg-[var(--background)]">
      <div className="mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-14 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[var(--foreground)] inline-block">
            Work <span className="text-[var(--primary)]">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-[var(--primary)] mt-4"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        {/* Experience Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--muted)]/10 rounded-xl p-6 border border-[var(--muted)]/30 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-12 h-12 rounded-lg bg-[var(--muted)]/50 flex items-center justify-center border border-[var(--primary)]/20">
                <Building size={24} className="text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">{experience.company}</h3>
                <p className="text-xl text-[var(--primary)] font-medium">{experience.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 my-6 ml-14">
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

            <div className="ml-14">
              <p className="text-[var(--foreground)]/80 mb-4 leading-relaxed">{experience.description}</p>

              {/* View Key Contributions Button */}
              <button
                onClick={togglePoints}
                className="mb-4 text-[var(--primary)] font-medium flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
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
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <ul className="list-disc pl-5 space-y-2 text-[var(--foreground)]/80">
                    {experience.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <div className="mb-6">
                <h4 className="text-sm font-medium text-[var(--foreground)]/70 mb-3">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--muted)]/50 text-[var(--primary)] border border-[var(--primary)]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Link href={experience.link} legacyBehavior>
                  <motion.a
                    className="text-[var(--primary)] cursor-pointer text-sm font-medium border py-2 px-4 rounded-lg border-[var(--primary)] inline-flex items-center gap-2"
                    whileHover={{ backgroundColor: "rgba(0,191,255,0.1)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Visit Website
                    <ExternalLink size={16} />
                  </motion.a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
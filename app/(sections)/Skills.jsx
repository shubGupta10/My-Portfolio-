"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Code2, Server, Database, Settings } from "lucide-react"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const categoryIcons = {
    Frontend: <Code2 className="w-5 h-5" />,
    Backend: <Server className="w-5 h-5" />,
    Databases: <Database className="w-5 h-5" />,
    DevOps: <Settings className="w-5 h-5" />,
  }

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "Prisma", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Supabase", level: 82 },
        { name: "Appwrite", level: 75 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 78 },
        { name: "Redis", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Supabase", level: 82 },
        { name: "Appwrite", level: 75 },
      ],
    },
    {
      name: "DevOps",
      skills: [
        { name: "Docker", level: 70 },
        { name: "Git", level: 90 },
        { name: "GitHub Actions", level: 65 },
        { name: "Vercel", level: 88 },
      ],
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section ref={sectionRef} id="skills" className="w-full bg-[var(--background)] relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-[var(--primary)]/15 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skills-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skills-grid)" className="text-[var(--primary)]" />
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
              <Code2 size={16} />
              Technical Expertise
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mb-6">
              My <span className="text-[var(--primary)]">Skills</span>
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
              A comprehensive overview of my technical skills and expertise across different areas of software
              development.
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div className="flex flex-wrap justify-center mb-12 gap-2" variants={itemVariants}>
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.name
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/25"
                      : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--muted)]/80"
                  }`}
                >
                  {categoryIcons[category.name]}
                  {category.name}
                </button>
              )
            })}
          </motion.div>

          {/* Skills Content */}
          <motion.div className="min-h-[400px]" variants={itemVariants}>
            <AnimatePresence mode="wait">
              {skillCategories.map((category) => {
                if (category.name !== activeCategory) return null

                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[var(--card)] backdrop-blur-sm border border-[var(--border)] rounded-2xl p-8 shadow-xl"
                  >
                    <div className="flex items-center mb-8">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                          {categoryIcons[category.name]}
                        </div>
                        <h3 className="text-2xl font-bold text-[var(--foreground)]">{category.name} Technologies</h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={skillVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: index * 0.1 }}
                          className="group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                              {skill.name}
                            </h4>
                            {/* <span className="text-sm text-[var(--foreground)]/60 font-medium">{skill.level}%</span> */}
                          </div>
                          <div className="w-full bg-[var(--muted)] rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/80 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1,
                                delay: index * 0.1 + 0.3,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

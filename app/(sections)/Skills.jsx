"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Server, Database, Settings } from "lucide-react"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const categoryIcons = {
    Frontend: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />,
    Backend: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
    Databases: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    DevOps: <Settings className="w-4 h-4 sm:w-5 sm:h-5" />,
  }

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Prisma",
        "Firebase",
        "Supabase",
        "Appwrite",
        "GraphQL",
      ],
    },
    {
      name: "Databases",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Firebase",
        "Supabase",
        "Appwrite",
      ],
    },
    {
      name: "DevOps",
      skills: [
        "Docker",
        "Git",
        "GitHub Actions",
        "Vercel",
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
        staggerChildren: 0.08,
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
    <section ref={sectionRef} id="skills" className="w-full bg-[var(--background)] relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          
          {/* Section Header */}
          <motion.div className="relative mb-12 sm:mb-16 md:mb-20 text-center" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4 border border-[var(--primary)]/20"
              variants={itemVariants}
            >
              <Code2 size={16} />
              <span>Technical Expertise</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--foreground)] mb-4 sm:mb-6 leading-tight">
              My <span className="text-[var(--primary)]">Skills</span>
            </h2>

            <motion.div
              className="h-1 sm:h-1.5 bg-[var(--primary)] mx-auto w-20 sm:w-24 md:w-28"
              initial={{ width: 0 }}
              animate={isInView ? { width: "5rem" } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/70 max-w-xl md:max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed"
              variants={itemVariants}
            >
              A comprehensive overview of my technical skills and expertise across different areas of software development.
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-3" variants={itemVariants}>
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.name
              return (
                <motion.button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium sm:font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/25"
                      : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--muted)]/80"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {categoryIcons[category.name]}
                  <span>{category.name}</span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Skills Content */}
          <motion.div className="min-h-[300px] sm:min-h-[400px]" variants={itemVariants}>
            {skillCategories.map((category) => {
              if (category.name !== activeCategory) return null

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--card)] backdrop-blur-sm border border-[var(--border)] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="flex items-center gap-3">
                      <div className="p-2 sm:p-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                        {categoryIcons[category.name]}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
                        {category.name} Technologies
                      </h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.05 
                        }}
                        whileHover={{ 
                          scale: 1.03,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ 
                          scale: 0.98,
                          transition: { duration: 0.1 }
                        }}
                        className="group cursor-pointer"
                      >
                        <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-[var(--muted)] to-[var(--muted)]/80 hover:from-[var(--primary)]/10 hover:to-[var(--primary)]/5 border border-[var(--border)] hover:border-[var(--primary)]/30 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[var(--primary)]/10 text-center">
                          <span className="text-[var(--foreground)] group-hover:text-[var(--primary)] font-medium text-sm sm:text-base transition-colors duration-300 whitespace-nowrap block">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
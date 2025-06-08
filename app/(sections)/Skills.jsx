"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Server, Database, Settings, ArrowRight, CheckCircle } from "lucide-react"

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
      description: "Modern web interfaces & user experiences",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Backend",
      description: "Server-side development & APIs",
      skills: ["Node.js", "Express", "Prisma", "Firebase", "Supabase", "Appwrite", "GraphQL"],
    },
    {
      name: "Databases",
      description: "Data storage & management solutions",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "Appwrite"],
    },
    {
      name: "DevOps",
      description: "Development operations & deployment",
      skills: ["Docker", "Git", "GitHub Actions", "Vercel"],
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full bg-[var(--background)] relative py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div className="relative mb-16 text-center" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6 border border-[var(--primary)]/20"
              variants={itemVariants}
            >
              <Code2 size={16} />
              <span>Technical Skills</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
             Tech I <span className="text-[var(--primary)]">Work With</span>
            </h2>

            <motion.p
              className="text-base sm:text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Things I use to ship functional and clean web projects.
            </motion.p>
          </motion.div>

          {/* Skills Container */}
          <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-3">
              {skillCategories.map((category) => {
                const isActive = activeCategory === category.name
                return (
                  <motion.button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/25"
                        : "bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)] border border-[var(--border)]"
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        isActive
                          ? "bg-[var(--primary-foreground)]/20"
                          : "bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20"
                      }`}
                    >
                      {categoryIcons[category.name]}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{category.name}</div>
                      <div
                        className={`text-xs opacity-70 ${isActive ? "text-[var(--primary-foreground)]" : "text-[var(--muted-foreground)]"}`}
                      >
                        {skillCategories.find((cat) => cat.name === category.name)?.skills.length} skills
                      </div>
                    </div>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-[var(--primary)]"
                        layoutId="activeCategory"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* Skills Display */}
            <div className="bg-[var(--card)] rounded-3xl p-8 shadow-xl">
              {skillCategories.map((category) => {
                if (category.name !== activeCategory) return null

                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          variants={skillVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1,
                          }}
                          whileHover={{
                            scale: 1.03,
                            y: -4,
                            transition: { duration: 0.2 },
                          }}
                          className="group relative p-6 bg-[var(--muted)]/50 rounded-2xl hover:bg-[var(--muted)]/70 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-colors duration-300">
                                <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                              </div>
                              <h4 className="font-semibold text-[var(--foreground)] text-lg group-hover:text-[var(--primary)] transition-colors duration-300">
                                {skill}
                              </h4>
                            </div>
                            <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                          </div>

                          {/* Hover Effect */}
                        </motion.div>
                      ))}
                    </div>

                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

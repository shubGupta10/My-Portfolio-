"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Server, Database, Settings } from "lucide-react"

// React Icons imports
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiAppwrite,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGithubactions,
  SiVercel,
} from "react-icons/si"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const categoryIcons = {
    Frontend: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />,
    Backend: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
    Databases: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    DevOps: <Settings className="w-4 h-4 sm:w-5 sm:h-5" />,
  }

  const skillIcons = {
    React: <FaReact className="w-5 h-5 sm:w-6 sm:h-6 text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--foreground)]" />,
    TypeScript: <SiTypescript className="w-5 h-5 sm:w-6 sm:h-6 text-[#3178C6]" />,
    JavaScript: <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7DF1E]" />,
    "Tailwind CSS": <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 text-[#06B6D4]" />,
    "Framer Motion": <SiFramer className="w-5 h-5 sm:w-6 sm:h-6 text-[#0055FF]" />,
    "Node.js": <FaNodeJs className="w-5 h-5 sm:w-6 sm:h-6 text-[#339933]" />,
    Express: <SiExpress className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--foreground)]" />,
    Prisma: <SiPrisma className="w-5 h-5 sm:w-6 sm:h-6 text-[#2D3748]" />,
    Firebase: <SiFirebase className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFCA28]" />,
    Supabase: <SiSupabase className="w-5 h-5 sm:w-6 sm:h-6 text-[#3ECF8E]" />,
    Appwrite: <SiAppwrite className="w-5 h-5 sm:w-6 sm:h-6 text-[#FD366E]" />,
    GraphQL: <SiGraphql className="w-5 h-5 sm:w-6 sm:h-6 text-[#E10098]" />,
    MongoDB: <SiMongodb className="w-5 h-5 sm:w-6 sm:h-6 text-[#47A248]" />,
    PostgreSQL: <SiPostgresql className="w-5 h-5 sm:w-6 sm:h-6 text-[#4169E1]" />,
    MySQL: <SiMysql className="w-5 h-5 sm:w-6 sm:h-6 text-[#4479A1]" />,
    Redis: <SiRedis className="w-5 h-5 sm:w-6 sm:h-6 text-[#DC382D]" />,
    Docker: <FaDocker className="w-5 h-5 sm:w-6 sm:h-6 text-[#2496ED]" />,
    Git: <FaGitAlt className="w-5 h-5 sm:w-6 sm:h-6 text-[#F05032]" />,
    Vercel: <SiVercel className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--foreground)]" />,
  }

  const skillCategories = [
    {
      name: "Frontend",
      description: "Modern web interfaces & user experiences",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10",
    },
    {
      name: "Backend",
      description: "Server-side development & APIs",
      skills: ["Node.js", "Express", "Prisma", "Firebase", "Supabase", "Appwrite", "GraphQL"],
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/10",
    },
    {
      name: "Databases",
      description: "Data storage & management solutions",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "Appwrite"],
      color: "from-purple-500/20 to-violet-500/20",
      iconBg: "bg-purple-500/10",
    },
    {
      name: "DevOps",
      description: "Development operations & deployment",
      skills: ["Docker", "Git", "Vercel"],
      color: "from-orange-500/20 to-red-500/20",
      iconBg: "bg-orange-500/10",
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
      className="w-full bg-[var(--background)] relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div className="relative mb-8 sm:mb-12 md:mb-16 text-center" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8 border border-[var(--primary)]/20"
              variants={itemVariants}
            >
              <Code2 size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <span>Technical Arsenal</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--foreground)] mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
              Technologies I <span className="text-[var(--primary)]">Work With</span>
            </h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-[var(--foreground)]/70 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              A curated collection of cutting-edge technologies I use to craft exceptional digital experiences.
            </motion.p>
          </motion.div>

          {/* Skills Container */}
          <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center mb-8 sm:mb-12 md:mb-16 gap-2 sm:gap-3 md:gap-4 px-2">
              {skillCategories.map((category) => {
                const isActive = activeCategory === category.name
                return (
                  <motion.button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`group relative flex items-center gap-2 sm:gap-3 md:gap-4 px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 rounded-2xl sm:rounded-3xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-500 border ${
                      isActive
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg sm:shadow-xl md:shadow-2xl shadow-[var(--primary)]/30 border-[var(--primary)]"
                        : "bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)] hover:shadow-md sm:hover:shadow-lg border-[var(--border)] hover:border-[var(--primary)]/30"
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-[var(--primary-foreground)]/20 shadow-sm sm:shadow-md md:shadow-lg"
                          : "bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 group-hover:shadow-sm md:group-hover:shadow-md"
                      }`}
                    >
                      {categoryIcons[category.name]}
                    </div>
                    <div className="text-left hidden sm:block">
                      <div className="font-bold text-sm sm:text-base md:text-lg">{category.name}</div>
                      <div
                        className={`text-xs sm:text-sm opacity-80 ${isActive ? "text-[var(--primary-foreground)]" : "text-[var(--muted-foreground)]"}`}
                      >
                        {category.skills.length} technologies
                      </div>
                    </div>
                    {/* Mobile: Show only category name below icon */}
                    <div className="text-center sm:hidden">
                      <div className="font-bold text-xs">{category.name}</div>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Skills Display */}
            <div className="space-y-6">
              {skillCategories.map((category) => {
                if (category.name !== activeCategory) return null

                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          variants={skillVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -8,
                            transition: { duration: 0.3 },
                          }}
                          className="group relative"
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="relative p-4 sm:p-6 bg-[var(--card)] rounded-xl sm:rounded-2xl hover:bg-[var(--card)]/80 transition-all duration-300 cursor-pointer border border-[var(--border)]/50 hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/10">
                            {/* Content */}
                            <div className="flex flex-col items-center text-center space-y-3">
                              <div className="p-3 sm:p-4 rounded-xl bg-[var(--background)]/50 group-hover:bg-[var(--primary)]/10 group-hover:scale-110 transition-all duration-300 shadow-sm border border-[var(--border)]/30">
                                {skillIcons[skill] || <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)]" />}
                              </div>

                              <h4 className="font-semibold text-[var(--foreground)] text-sm sm:text-base group-hover:text-[var(--primary)] transition-colors duration-300 leading-tight">
                                {skill}
                              </h4>

                              {/* Skill level indicator */}
                              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-1 h-1 rounded-full ${
                                      i < 4 ? "bg-[var(--primary)]" : "bg-[var(--muted)]"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>


                            {/* Active skill highlight */}
                            {hoveredSkill === skill && (
                              <motion.div
                                className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-[var(--primary)]/50"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                              />
                            )}
                          </div>
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

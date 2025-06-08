"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Code2,
  Server,
  Database,
  Settings,
  Globe,
  Layers,
  Zap,
  Box,
  GitBranch,
  Cloud,
  Palette,
  Terminal,
  FileCode,
  Cpu,
} from "lucide-react"

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

  // Skill icons mapping
  const skillIcons = {
    React: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />,
    "Next.js": <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
    TypeScript: <FileCode className="w-4 h-4 sm:w-5 sm:h-5" />,
    JavaScript: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
    "Tailwind CSS": <Palette className="w-4 h-4 sm:w-5 sm:h-5" />,
    "Framer Motion": <Layers className="w-4 h-4 sm:w-5 sm:h-5" />,
    "Node.js": <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
    Express: <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />,
    Prisma: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    Firebase: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />,
    Supabase: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    Appwrite: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />,
    GraphQL: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />,
    MongoDB: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    PostgreSQL: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    MySQL: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    Redis: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />,
    Docker: <Box className="w-4 h-4 sm:w-5 sm:h-5" />,
    Git: <GitBranch className="w-4 h-4 sm:w-5 sm:h-5" />,
    "GitHub Actions": <Settings className="w-4 h-4 sm:w-5 sm:h-5" />,
    Vercel: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />,
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
      skills: ["Docker", "Git", "GitHub Actions", "Vercel"],
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
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8"
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
                    className={`group relative flex items-center gap-2 sm:gap-3 md:gap-4 px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 rounded-2xl sm:rounded-3xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-500 ${
                      isActive
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg sm:shadow-xl md:shadow-2xl shadow-[var(--primary)]/30"
                        : "bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)] hover:shadow-md sm:hover:shadow-lg"
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
                        {category.skills.length} tech
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
            <div className="bg-[var(--card)] rounded-2xl sm:rounded-3xl md:rounded-[2rem] p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg sm:shadow-xl md:shadow-2xl">
              {skillCategories.map((category) => {
                if (category.name !== activeCategory) return null

                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 sm:space-y-8 md:space-y-10"
                  >

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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
                            scale: 1.03,
                            y: -4,
                            transition: { duration: 0.3 },
                          }}
                          className="group relative"
                        >
                          <div className="relative p-3 sm:p-4 md:p-6 lg:p-8 bg-[var(--muted)]/30 rounded-2xl sm:rounded-3xl hover:bg-[var(--muted)]/50 transition-all duration-500 cursor-pointer overflow-hidden border border-[var(--muted)]">
                            {/* Background Pattern */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center text-center space-y-2 sm:space-y-3 md:space-y-4">
                              <div className="p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 group-hover:scale-110 transition-all duration-300 shadow-sm sm:shadow-md md:shadow-lg">
                                <div className="text-[var(--primary)] group-hover:text-[var(--primary)] transition-colors duration-300">
                                  {skillIcons[skill] || <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                                </div>
                              </div>

                              <h4 className="font-bold text-[var(--foreground)] text-sm sm:text-base md:text-lg lg:text-xl group-hover:text-[var(--primary)] transition-colors duration-300 leading-tight">
                                {skill}
                              </h4>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

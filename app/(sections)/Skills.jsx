"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1, threshold: 0 })

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "Tailwind", level: "Expert" },
        { name: "Framer Motion", level: "Expert" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Express", level: "Advanced" },
        { name: "Prisma", level: "Advanced" },
        { name: "Firebase", level: "Intermediate" },
        { name: "Supabase", level: "Expert" },
        { name: "Appwrite", level: "Expert" },
        { name: "GraphQL", level: "Advanced" },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MongoDB", level: "Expert" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "Redis", level: "Intermediate" },
        { name: "Firebase", level: "Intermediate" },
        { name: "Supabase", level: "Expert" },
        { name: "Appwrite", level: "Expert" },
      ],
    },
    {
      name: "DevOps",
      skills: [
        { name: "Docker", level: "Advanced" },
        { name: "Git", level: "Expert" },
      ],
    },
  ]

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "var(--primary)"
      case "Advanced":
        return "#4CD964"
      case "Intermediate":
        return "#FF9500"
      default:
        return "var(--primary)"
    }
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.07
      }
    }
  }

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const tabVariants = {
    hidden: {
      opacity: 0,
      y: 8
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.01
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.15
      }
    }
  }

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    }
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full py-16 px-4 sm:px-8 bg-transparent relative overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="mb-16"
          variants={headingVariants}
        >
          <h2 className="text-4xl font-bold text-[var(--foreground)] inline-block">
            Technical <span className="text-[var(--primary)]">Skills</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-[var(--primary)] mt-4 relative"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.05,
              ease: "easeOut"
            }}
          />
        </motion.div>

        <motion.div
          className="flex mb-6 border-b border-gray-700/30"
          variants={tabVariants}
        >
          {skillCategories.map((category, index) => {
            const isActive = activeCategory === category.name
            return (
              <motion.button
                key={`tab-${index}`}
                whileHover={{ y: -2 }}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-8 py-4 relative text-lg font-bold transition-all duration-300 ${isActive ? "text-[var(--primary)]" : "text-[var(--foreground)] opacity-70 hover:opacity-100"
                  }`}
              >
                {category.name}

                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--primary)]"
                    transition={{ duration: 0.15 }}
                  />
                )}
              </motion.button>
            )
          })}
        </motion.div>

        <div className="mt-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            {skillCategories.map((category) => {
              if (category.name !== activeCategory) return null

              return (
                <motion.div
                  key={`content-${category.name}`}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-[rgba(31,31,46,0.4)] backdrop-blur-sm border border-gray-700/20 rounded-xl p-8 shadow-lg"
                >
                  <motion.h3
                    className="text-xl font-bold text-[var(--primary)] mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                  >
                    {category.name} Technologies
                  </motion.h3>

                  <motion.div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={`skill-${skill.name}`}
                        variants={skillVariants}
                        whileHover="hover"
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div
                          className="px-6 py-3 rounded-full transition-all duration-300"
                          style={{
                            background: hoveredSkill === skill.name
                              ? `rgba(var(--primary-rgb), 0.15)`
                              : "rgba(31, 31, 46, 0.5)",
                            border: hoveredSkill === skill.name
                              ? `2px solid ${getLevelColor(skill.level)}`
                              : "2px solid rgba(224, 224, 224, 0.1)",
                          }}
                        >
                          <p
                            className="text-xl transition-all duration-300"
                            style={{
                              fontWeight: "700",
                              color: hoveredSkill === skill.name
                                ? getLevelColor(skill.level)
                                : "var(--foreground)"
                            }}
                          >
                            {skill.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
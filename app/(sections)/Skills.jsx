"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1, threshold: 0 })

  // SVG Icons for each category
  const categoryIcons = {
    Frontend: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    Backend: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    Databases: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    DevOps: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  }

  const skillCategories = [
    {
      name: "Frontend",
      icon: "💻",
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Tailwind" },
        { name: "Framer Motion" },
      ],
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "Prisma" },
        { name: "Firebase" },
        { name: "Supabase" },
        { name: "Appwrite" },
        { name: "GraphQL" },
      ],
    },
    {
      name: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "Redis" },
        { name: "Firebase" },
        { name: "Supabase" },
        { name: "Appwrite" },
      ],
    },
    {
      name: "DevOps",
      icon: "🔁",
      skills: [
        { name: "Docker" },
        { name: "Git" },
      ],
    },
  ]

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
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
        staggerChildren: 0.04
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
      y: 10
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
          className="mb-12 text-center"
          variants={headingVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] inline-block">
            Technical <span className="text-[var(--primary)]">Skills</span>
          </h2>
          <div className="flex justify-center">
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
          </div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            My technical expertise spans various domains. Each skill represents years of practice and real-world application.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center mb-10 gap-2 sm:gap-0"
          variants={tabVariants}
        >
          {skillCategories.map((category, index) => {
            const isActive = activeCategory === category.name
            return (
              <motion.button
                key={`tab-${index}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-3 sm:px-6 py-3 relative text-base sm:text-lg font-bold transition-all duration-300 rounded-full mb-2 sm:mb-0 
                  ${isActive 
                    ? "text-[var(--primary)] bg-[rgba(var(--primary-rgb),0.1)] shadow-lg" 
                    : "text-[var(--foreground)] opacity-70 hover:opacity-100"}`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full border-2 border-[var(--primary)]"
                    transition={{ duration: 0.15 }}
                  />
                )}
              </motion.button>
            )
          })}
        </motion.div>

        <div className="mt-10 min-h-[350px]">
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
                  className="bg-[rgba(31,31,46,0.4)] backdrop-blur-sm border border-gray-700/20 rounded-2xl p-6 sm:p-8 shadow-xl"
                >
                  <motion.div 
                    className="flex items-center mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{category.icon}</span>
                      <h3 className="text-2xl font-bold text-[var(--primary)]">
                        {category.name} Technologies
                      </h3>
                    </div>
                  </motion.div>

                  <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={`skill-${skill.name}`}
                        variants={skillVariants}
                        className="relative"
                        whileHover={{
                          scale: 1.03,
                          transition: { duration: 0.2 }
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div
                          className="p-5 rounded-xl transition-all duration-300 h-full border-2 border-gray-700/30 flex items-center justify-center"
                          style={{
                            background: "rgba(31, 31, 46, 0.6)",
                            boxShadow: hoveredSkill === skill.name ? "0 8px 20px rgba(0, 0, 0, 0.2)" : "none",
                          }}
                        >
                          <h4
                            className="text-xl font-bold transition-all duration-300 text-center"
                            style={{
                              color: hoveredSkill === skill.name
                                ? "var(--primary)"
                                : "var(--foreground)"
                            }}
                          >
                            {skill.name}
                          </h4>
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
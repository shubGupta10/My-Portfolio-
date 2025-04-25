"use client"

import { useState, useEffect, useRef } from "react"
import { Server, Database, Terminal, Layout } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Create a ref for the section element
  const sectionRef = useRef(null)
  // Use the useInView hook to detect when the section is in view
  // Note: 'once' is set to false to repeat animations every time the section comes into view
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const skillCategories = [
    {
      name: "Frontend",
      icon: <Layout size={24} />,
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", level: "Expert" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", level: "Advanced" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", level: "Expert" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", level: "Expert" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: "Expert" },
        { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", level: "Expert" },
      ],
    },
    {
      name: "Backend",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg", level: "Expert" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", level: "Advanced" },
        { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", level: "Advanced" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", level: "Intermediate" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", level: "Expert" },
        { name: "Appwrite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg", level: "Expert" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", level: "Advanced" },
      ],
    },
    {
      name: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg", level: "Expert" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", level: "Advanced" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", level: "Advanced" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", level: "Intermediate" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", level: "Intermediate" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", level: "Expert" },
        { name: "Appwrite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg", level: "Expert" },
      ],
    },
    {
      name: "DevOps",
      icon: <Terminal size={24} />,
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", level: "Advanced" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", level: "Expert" },
      ],
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Reset animations when component goes out of view and comes back in
  useEffect(() => {
    if (!isInView) {
      setIsAnimating(true)
      
      const timeout = setTimeout(() => {
        setIsAnimating(false)
      }, 100)
      
      return () => clearTimeout(timeout)
    }
  }, [isInView])

  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveCategory(category)
        setTimeout(() => {
          setIsAnimating(false)
        }, 150)
      }, 300)
    }
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

  const activeCategorySkills = skillCategories.find((cat) => cat.name === activeCategory).skills

  // Main container slide-in animation
  const containerVariants = {
    hidden: { 
      opacity: 0,
      x: "-100%" 
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  // Heading animation
  const headingVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Tab animation
  const tabVariants = {
    hidden: { 
      opacity: 0,
      y: 30 
    },
    visible: i => ({ 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  }

  // Skill card animation
  const skillVariants = {
    hidden: i => ({ 
      opacity: 0,
      y: 20,
      scale: 0.8
    }),
    visible: i => ({ 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.05,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -8,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  // Background animation
  const backgroundVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 0.1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="w-full py-10 px-4 sm:px-8 bg-transparent relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <motion.div 
        className="absolute inset-0" 
        style={{ zIndex: -1 }}
        variants={backgroundVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        key={`bg-${isInView}`} 
      >
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "var(--primary)",
            opacity: 0.3,
            top: mousePosition.y / 10,
            left: mousePosition.x / 10,
            transform: "translate(-50%, -50%)",
            transition: "top 0.8s ease-out, left 0.8s ease-out",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "var(--primary)",
            opacity: 0.1,
            bottom: mousePosition.y / 15,
            right: mousePosition.x / 15,
            transform: "translate(50%, 50%)",
            transition: "bottom 1.2s ease-out, right 1.2s ease-out",
          }}
        />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        key={`container-${isInView}`} 
      >
        {/* Section Header */}
        <motion.div 
          className="mb-16 relative"
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
              duration: 0.8, 
              delay: 0.5,
              ease: "easeOut"
            }}
            key={`underline-${isInView}`} 
          >
            <div className="absolute h-1 w-12 bg-[var(--primary)] opacity-50 blur-sm -top-1"></div>
          </motion.div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        {/* Improved category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => {
            const isActive = activeCategory === category.name
            return (
              <motion.button
                key={`tab-${index}-${isInView}`} // Force re-render of animation
                custom={index}
                variants={tabVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onClick={() => handleCategoryChange(category.name)}
                className={`cursor-pointer relative px-5 py-3 rounded-lg transition-all duration-300 overflow-hidden group ${
                  isActive ? "shadow-lg" : ""
                }`}
                style={{
                  background: isActive ? "rgba(var(--primary-rgb), 0.1)" : "rgba(31, 31, 46, 0.3)",
                  border: isActive ? "1px solid var(--primary)" : "1px solid rgba(224, 224, 224, 0.1)",
                  transform: isActive ? "translateY(-2px)" : "translateY(0px)",
                }}
              >
                {/* Enhanced shimmering effect */}
                <div
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(45deg, transparent 25%, rgba(0, 191, 255, 0.5) 50%, transparent 75%)",
                    backgroundSize: "200% 200%",
                    animation: "shimmer 1.5s infinite linear",
                  }}
                />

                <div className="flex items-center justify-center">
                  <span
                    className="mr-2 transition-colors duration-300"
                    style={{ color: isActive ? "var(--primary)" : "var(--foreground)" }}
                  >
                    {category.icon}
                  </span>
                  <span
                    className="font-medium transition-colors duration-300"
                    style={{ color: isActive ? "var(--primary)" : "var(--foreground)" }}
                  >
                    {category.name}
                  </span>
                </div>

                {/* Enhanced animated underline */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    key={`underline-tab-${index}-${isInView}`} 
                    style={{
                      background: "var(--primary)",
                      boxShadow: "0 0 8px 1px var(--primary)",
                    }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Skills grid with staggered animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`skills-${activeCategory}-${isInView}`} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-start justify-center"
          >
            {activeCategorySkills.map((skill, index) => (
              <motion.div
                key={`skill-${skill.name}-${isInView}-${index}`} // Force re-render of animation
                custom={index}
                variants={skillVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Modernized skill card */}
                <div
                  className="p-4 rounded-lg backdrop-blur-sm transition-all duration-300 h-full flex flex-col items-center justify-between"
                  style={{
                    background: hoveredSkill === skill.name ? "rgba(31, 31, 46, 0.5)" : "rgba(31, 31, 46, 0.3)",
                    border: hoveredSkill === skill.name 
                      ? `1px solid ${getLevelColor(skill.level)}` 
                      : "1px solid rgba(224, 224, 224, 0.1)",
                    boxShadow: hoveredSkill === skill.name ? `0 4px 12px rgba(0, 191, 255, 0.1)` : "none",
                  }}
                >
                  {/* Skill icon */}
                  <div className="relative w-full flex justify-center mb-3">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                      
                      {/* Enhanced glow effect on hover */}
                      {hoveredSkill === skill.name && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 0.4, scale: 1.2 }}
                          className="absolute inset-0 -z-10 blur-md rounded-full"
                          style={{ backgroundColor: getLevelColor(skill.level) }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Skill name */}
                  <h3 className="font-medium text-center text-sm text-[var(--foreground)]">{skill.name}</h3>
                  
                  {/* Subtle level indicator */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: hoveredSkill === skill.name ? "60%" : "40%" }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 mt-2 rounded-full"
                    style={{ 
                      background: getLevelColor(skill.level),
                      opacity: hoveredSkill === skill.name ? 1 : 0.5
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}

export default Skills
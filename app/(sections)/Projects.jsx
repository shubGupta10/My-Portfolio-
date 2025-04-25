"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const projects = [
    {
      id: 1,
      slug: "codex",
      title: "CodeX - Cloud IDE",
      description:
        "A powerful cloud-based IDE like Replit, featuring Monaco Editor, AI code assistant, code converter, and real-time file management with Supabase.",
      image: "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2Fx-codex-pic.avif?alt=media",
      technologies: ["Next.js", "TypeScript", "Monaco Editor", "Piston API", "Supabase", "LangChain", "Tailwind CSS", "Redis"],
      liveUrl: "https://x-codex.vercel.app",
      githubUrl: "",
    },
    {
      id: 2,
      slug: "buildmycv",
      title: "BuildMyCV - AI Resume Builder",
      description:
        "BuildMyCV is my first SaaS application built for a client — an intelligent resume builder with ATS support, AI job analysis, role-based suggestions, and personalized job recommendations to help job seekers improve their chances.",
      image: "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2FScreenshot%202025-04-05%20192226.png?alt=media",
      technologies: ["Next.js", "TypeScript", "Firebase", "LangChain", "Gemini AI", "Shadcn", "Tailwind CSS", "Clerk"],
      liveUrl: "https://buildmycv.ai",
      githubUrl: "",
    },
    {
      id: 3,
      slug: "interviewbuddy",
      title: "Interview Buddy - AI Interview Prep",
      description:
        "AI-powered platform for personalized interview questions with adjustable difficulty, deep explanations, multiple interview rounds, and language-specific practice.",
      image: "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2Finterview-buddy-launch-1.png?alt=media",
      technologies: ["Next.js", "TypeScript", "LangChain", "Gemini AI", "Tailwind CSS", "Shadcn"],
      liveUrl: "https://interviewbuddy-platform.vercel.app/",
      githubUrl: "",
    },
    {
      id: 4,
      slug: "opensox",
      title: "OpenSox - Discover Open Source Projects",
      description:
        "A curated directory of open source projects, filterable by stars, difficulty, language, and more. Helps developers find ideal contributions.",
      image: "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2Fopensox.png?alt=media",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Supabase"],
      liveUrl: "https://open-sox.vercel.app",
      githubUrl: "https://github.com/shubGupta10/OpenSox",
    },
    {
      id: 5,
      slug: "blogger",
      title: "AI Powered Blog App - Blogger App",
      description:
        "An AI-enhanced blogging platform that streamlines content creation and summarization, making it easy for users to craft and manage engaging blog posts.",
      image: "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2FScreenshot%202024-11-06%20151539.png?alt=media",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://goblogerly.vercel.app/",
      githubUrl: "https://github.com/shubGupta10/blogger",
    },
    {
      id: 6,
      slug: "anonymous-feedback",
      title: "Anonymous Feedback Platform",
      description:
        "A platform inspired by NGL for collecting anonymous feedback securely with JWT auth, built using modern stack and beautiful UI components.",
      image: "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2FScreenshot%202024-11-06%20151608.png?alt=media",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Zod", "Shadcn", "Framer Motion"],
      liveUrl: "https://anonmssg.vercel.app/",
      githubUrl: "https://github.com/shubGupta10/Anonymous_Messages",
    },
  ];

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const technologyVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: index => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.4
      }
    })
  }

  const floatingBlobVariants = {
    animate: {
      x: [0, 15, 0, -15, 0],
      y: [0, -15, 0, 15, 0],
      scale: [1, 1.05, 1, 0.95, 1],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="projects" 
      className="w-full py-20 px-4 sm:px-8 bg-[var(--background)] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background animated blobs */}
      <motion.div
        variants={floatingBlobVariants}
        animate="animate"
        className="absolute top-20 right-20 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        variants={floatingBlobVariants}
        animate="animate"
        className="absolute bottom-20 left-20 w-72 h-72 bg-[var(--primary)]/8 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="mb-16 relative"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            className="text-4xl font-bold text-[var(--foreground)] inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured <motion.span 
              className="text-[var(--primary)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >Projects</motion.span>
          </motion.h2>
          <motion.div 
            className="h-1 w-0 bg-[var(--primary)] mt-4"
            animate={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="rounded-xl overflow-hidden border border-[var(--muted)]/30 bg-[var(--muted)]/10 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent z-10"
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 0.7 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="w-full h-full"
                    animate={{
                      scale: hoveredProject === project.id ? 1.08 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Overlay with links on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[var(--background)]/80 flex items-center justify-center gap-4 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[var(--primary)] text-[var(--background)] hover:scale-110 transition-transform"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: hoveredProject === project.id ? 1 : 0.8,
                          opacity: hoveredProject === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        whileHover={{ 
                          scale: 1.15,
                          boxShadow: "0 0 15px rgba(var(--primary-rgb), 0.5)"
                        }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[var(--muted)] text-[var(--foreground)] hover:scale-110 transition-transform"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: hoveredProject === project.id ? 1 : 0.8,
                          opacity: hoveredProject === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        whileHover={{ 
                          scale: 1.15,
                          boxShadow: "0 0 15px rgba(var(--foreground-rgb), 0.3)"
                        }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3 
                    className="text-xl font-bold text-[var(--foreground)] mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[var(--foreground)]/70 mb-4 flex-grow"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          custom={idx}
                          variants={technologyVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: "var(--muted)",
                            color: "var(--foreground)",
                            transition: { duration: 0.2 }
                          }}
                          className="px-2 py-1 text-xs rounded-full bg-[var(--muted)]/50 text-[var(--foreground)]/80"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <motion.span 
                          custom={4}
                          variants={technologyVariants}
                          initial="hidden"
                          animate="visible"
                          className="px-2 py-1 text-xs rounded-full bg-[var(--muted)]/50 text-[var(--foreground)]/80"
                        >
                          +{project.technologies.length - 4} more
                        </motion.span>
                      )}
                    </div>
                  </motion.div>

                  {/* View Details Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-[var(--primary)] font-medium flex items-center gap-1 hover:gap-2 transition-all group"
                    >
                      View Project Details
                      <motion.div
                        animate={{ 
                          x: hoveredProject === project.id ? 4 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight size={16} className="transition-transform" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects
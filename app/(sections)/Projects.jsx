"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight, Star, Code2, Zap } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const projects = [
    {
      id: 1,
      slug: "codex",
      title: "CodeX - Cloud IDE",
      description:
        "A powerful cloud-based IDE like Replit, featuring Monaco Editor, AI code assistant, code converter, and real-time file management with Supabase.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2Fx-codex-pic.avif?alt=media",
      technologies: [
        "Next.js",
        "TypeScript",
        "Monaco Editor",
        "Piston API",
        "Supabase",
        "LangChain",
        "Tailwind CSS",
        "Redis",
      ],
      liveUrl: "https://x-codex.vercel.app",
      githubUrl: "",
      category: "Full Stack",
      featured: true,
    },
    {
      id: 2,
      slug: "buildmycv",
      title: "BuildMyCV - AI Resume Builder",
      description:
        "BuildMyCV is my first SaaS application built for a client — an intelligent resume builder with ATS support, AI job analysis, role-based suggestions, and personalized job recommendations to help job seekers improve their chances.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2Fbuildmycv-new-img.png?alt=media",
      technologies: ["Next.js", "TypeScript", "Firebase", "LangChain", "Gemini AI", "Shadcn", "Tailwind CSS", "Clerk"],
      liveUrl: "https://buildmycv.ai",
      githubUrl: "",
      category: "SaaS",
      featured: true,
    },
    {
      id: 3,
      slug: "techhunt",
      title: "TechHunt – Curated Tech Job Board",
      description:
        "TechHunt is a specialized job board tailored for tech professionals in India. It aggregates high-quality, entry-to-mid level tech roles across domains like Full Stack, Frontend, Backend, and Data Science. With features like fresh listings every 4 days, remote-friendly filters, and category-based search.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2Ftechunt.png?alt=media",
      technologies: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "Redis",
        "Web Scraping",
        "Express",
        "GitHub Actions"
      ],
      liveUrl: "https://tech-hunt-jobs.vercel.app",
      githubUrl: "https://github.com/shubGupta10/tech-hunt-client",
      category: "Web App",
    },
    {
      id: 4,
      slug: "interviewbuddy",
      title: "Interview Buddy - AI Interview Prep",
      description:
        "AI-powered platform for personalized interview questions with adjustable difficulty, deep explanations, multiple interview rounds, and language-specific practice.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2Finterview-buddy-launch-1.png?alt=media",
      technologies: ["Next.js", "TypeScript", "LangChain", "Gemini AI", "Tailwind CSS", "Shadcn"],
      liveUrl: "https://interviewbuddy-platform.vercel.app/",
      githubUrl: "",
      category: "AI Tool",
    },
    {
      id: 5,
      slug: "openfindr",
      title: "OpenFindr - Discover Open Source Projects",
      description:
        "A curated directory of open source projects, filterable by stars, difficulty, language, and more. Helps developers find ideal contributions.",
      image: "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2Fopensox.png?alt=media",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Supabase"],
      liveUrl: "https://open-findr.vercel.app",
      githubUrl: "https://github.com/shubGupta10/OpenFindr",
      category: "Developer Tool",
    },
    {
      id: 7,
      slug: "anonymous-feedback",
      title: "Anonymous Feedback Platform",
      description:
        "A platform inspired by NGL for collecting anonymous feedback securely with JWT auth, built using modern stack and beautiful UI components.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2FScreenshot%202024-11-06%20151608.png?alt=media",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Zod", "Shadcn", "Framer Motion"],
      liveUrl: "https://anonmssg.vercel.app/",
      githubUrl: "https://github.com/shubGupta10/Anonymous_Messages",
      category: "Web App",
    },
  ]

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="w-full bg-[var(--background)] relative py-24 overflow-hidden"
    >
      {/* Background elements using app variables */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-80 h-80 bg-[var(--primary)]/15 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Geometric background patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="project-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#project-grid)" className="text-[var(--primary)]"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="relative mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4 border border-[var(--primary)]/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Code2 size={16} />
            Portfolio Showcase
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mb-6">
            Featured{" "}
            <span className="text-[var(--primary)]">
              Projects
            </span>
          </h2>
          
          <motion.div
            className="h-1.5 bg-[var(--primary)] mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A collection of projects that showcase my expertise in full-stack development, 
            AI integration, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, hoveredProject, setHoveredProject }) => {
  const isHovered = hoveredProject === project.id
  const isEven = index % 2 === 0

  // Card variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
        duration: 0.8
      }
    }
  }

  const imageVariants = {
    hover: { 
      scale: 1.1, 
      rotateY: isEven ? 2 : -2,
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      className={`group relative bg-[var(--card)] backdrop-blur-sm border border-[var(--border)] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[var(--primary)]/10 transition-all duration-500 ${project.featured ? 'md:col-span-1 xl:col-span-1' : ''}`}
      variants={cardVariants}
      whileHover={{ 
        y: -12,
        rotateY: isEven ? 1 : -1,
      }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Featured badge */}
      {project.featured && (
        <motion.div
          className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1.5 bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold rounded-full shadow-lg"
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <Star size={12} fill="currentColor" />
          Featured
        </motion.div>
      )}

      {/* Category badge */}
      <motion.div
        className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--muted)] text-[var(--muted-foreground)] backdrop-blur-md border border-[var(--border)]"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {project.category}
      </motion.div>

      {/* Project Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <motion.div
          className="h-full w-full"
          variants={imageVariants}
          whileHover="hover"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-500 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-[var(--background)]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-[var(--background)]/50 to-transparent flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <div className="text-center space-y-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full font-semibold hover:bg-[var(--primary)]/90 transition-colors shadow-lg"
            >
              <Zap size={16} />
              View Details
            </Link>
            <div className="flex gap-3 justify-center">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--muted)]/80 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--muted)]/80 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow relative">
        {/* Decorative element */}
        <div className="absolute top-0 left-6 w-12 h-1 rounded-full bg-[var(--primary)]" />

        <motion.h3
          className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-3 mt-2 group-hover:text-[var(--primary)] transition-colors"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-[var(--foreground)]/80 text-sm sm:text-base mb-6 flex-grow leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.description.length > 140
            ? `${project.description.substring(0, 140)}...`
            : project.description}
        </motion.p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <motion.span
                key={idx}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 hover:bg-[var(--primary)]/20 transition-all duration-300"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <motion.span
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                +{project.technologies.length - 3}
              </motion.span>
            )}
          </div>
        </div>

        {/* Links section */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--foreground)] text-sm font-medium hover:text-[var(--primary)] transition-colors group/link"
            whileHover={{ x: 4 }}
          >
            <span>View Live</span>
            <motion.div 
              className="group-hover/link:translate-x-1 transition-transform"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.a>

          <div className="flex gap-2">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight, Star, Code2 } from "lucide-react"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="w-full bg-[var(--background)] relative py-16 sm:py-20 lg:py-24"
    >
 

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="relative mb-16 sm:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6">
            Featured{" "}
            <span className="text-[var(--primary)]">Projects</span>
          </h2>
          
          <motion.div
            className="h-1 bg-[var(--primary)] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="text-lg sm:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto mt-6 leading-relaxed"
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.6
      }
    }
  }

  return (
    <motion.div
      className="group relative bg-[var(--card)] backdrop-blur-sm border border-[var(--border)] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-300"
      variants={cardVariants}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Featured badge */}
      {project.featured && (
        <motion.div
          className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold rounded-full shadow-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <Star size={10} fill="currentColor" />
          Featured
        </motion.div>
      )}

      {/* Category badge */}
      <motion.div
        className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--muted)]/80 text-[var(--muted-foreground)] backdrop-blur-sm border border-[var(--border)]"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {project.category}
      </motion.div>

      {/* Project Image */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-300 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Hover overlay */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-[var(--background)]/50 to-transparent flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-center space-y-3">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full text-sm font-semibold hover:bg-[var(--primary)]/90 transition-colors shadow-md"
              >
                View Details
              </Link>
              <div className="flex gap-2 justify-center">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[var(--muted)]/80 text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors"
                    whileHover={{ scale: 1.1 }}
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
                    className="p-2.5 rounded-full bg-[var(--muted)]/80 text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow relative">
        {/* Decorative element */}
        <div className="absolute top-0 left-4 sm:left-6 w-10 h-0.5 rounded-full bg-[var(--primary)]" />

        <motion.h3
          className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-3 mt-1 group-hover:text-[var(--primary)] transition-colors line-clamp-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-[var(--foreground)]/80 text-sm sm:text-base mb-4 flex-grow leading-relaxed line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.description.length > 120
            ? `${project.description.substring(0, 120)}...`
            : project.description}
        </motion.p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <motion.span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 hover:bg-[var(--primary)]/20 transition-all duration-200"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + (idx * 0.05) }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <motion.span
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                +{project.technologies.length - 3}
              </motion.span>
            )}
          </div>
        </div>

        {/* Links section */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--foreground)] text-sm font-medium hover:text-[var(--primary)] transition-colors group/link"
              whileHover={{ x: 2 }}
            >
              <span>View Live</span>
              <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </motion.a>
          )}

          <div className="flex gap-2">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={14} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
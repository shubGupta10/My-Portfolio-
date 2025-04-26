"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

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
      color: "#0f1826",
    },
    {
      id: 2,
      slug: "buildmycv",
      title: "BuildMyCV - AI Resume Builder",
      description:
        "BuildMyCV is my first SaaS application built for a client — an intelligent resume builder with ATS support, AI job analysis, role-based suggestions, and personalized job recommendations to help job seekers improve their chances.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2FScreenshot%202025-04-05%20192226.png?alt=media",
      technologies: ["Next.js", "TypeScript", "Firebase", "LangChain", "Gemini AI", "Shadcn", "Tailwind CSS", "Clerk"],
      liveUrl: "https://buildmycv.ai",
      githubUrl: "",
      color: "#0f1826",
    },
    {
      id: 3,
      slug: "interviewbuddy",
      title: "Interview Buddy - AI Interview Prep",
      description:
        "AI-powered platform for personalized interview questions with adjustable difficulty, deep explanations, multiple interview rounds, and language-specific practice.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2Finterview-buddy-launch-1.png?alt=media",
      technologies: ["Next.js", "TypeScript", "LangChain", "Gemini AI", "Tailwind CSS", "Shadcn"],
      liveUrl: "https://interviewbuddy-platform.vercel.app/",
      githubUrl: "",
      color: "#0f1826",
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
      color: "#0f1826",
    },
    {
      id: 5,
      slug: "blogger",
      title: "AI Powered Blog App - Blogger App",
      description:
        "An AI-enhanced blogging platform that streamlines content creation and summarization, making it easy for users to craft and manage engaging blog posts.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2FScreenshot%202024-11-06%20151539.png?alt=media",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://goblogerly.vercel.app/",
      githubUrl: "https://github.com/shubGupta10/blogger",
      color: "#0f1826",
    },
    {
      id: 6,
      slug: "anonymous-feedback",
      title: "Anonymous Feedback Platform",
      description:
        "A platform inspired by NGL for collecting anonymous feedback securely with JWT auth, built using modern stack and beautiful UI components.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2FScreenshot%202024-11-06%20151608.png?alt=media",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Zod", "Shadcn", "Framer Motion"],
      liveUrl: "https://anonmssg.vercel.app/",
      githubUrl: "https://github.com/shubGupta10/Anonymous_Messages",
      color: "#0f1826",
    },
  ]

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section id="projects" className="w-full bg-[var(--background)] relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[var(--primary)]/8 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="relative mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[var(--foreground)] inline-block">
            Featured <span className="text-[var(--primary)]">Projects</span>
          </h2>
          <motion.div 
            className="h-1 w-20 bg-[var(--primary)] mt-2 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
  // Alternate entrance direction based on index
  const direction = index % 2 === 0 ? -100 : 100
  
  // Card variants for animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: direction,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 80
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 191, 255, 0.1), 0 10px 10px -5px rgba(0, 191, 255, 0.04)",
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  }

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  }

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.3 + (i * 0.05),
        duration: 0.2
      }
    })
  }

  return (
    <motion.div
      className="flex flex-col bg-[#0f1826] rounded-xl overflow-hidden shadow-lg h-full"
      variants={cardVariants}
      whileHover="hover"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      style={{ 
        boxShadow: "0 4px 6px -1px rgba(0, 191, 255, 0.05), 0 2px 4px -1px rgba(0, 191, 255, 0.03)"
      }}
    >
      {/* Project Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <motion.div
          className="h-full w-full"
          variants={imageVariants}
          whileHover="hover"
        >
          <Image 
            src={project.image || "/placeholder.svg"} 
            alt={project.title} 
            fill 
            className="object-cover" 
          />
        </motion.div>
        
        {/* Image Overlay on Hover */}
        <motion.div 
          className="absolute inset-0 bg-black/70 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="px-5 py-2.5 bg-[#00bfff] text-black rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            View Details
          </Link>
        </motion.div>
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <motion.h3 
          className="text-xl font-bold text-[#00bfff] mb-3"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-white/80 text-sm mb-5 flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {project.description.length > 120 
            ? `${project.description.substring(0, 120)}...` 
            : project.description}
        </motion.p>
        
        {/* Technologies */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <motion.span
                key={idx}
                custom={idx}
                variants={tagVariants}
                initial="hidden"
                animate="visible"
                className="px-2.5 py-1 text-xs rounded-full bg-[#00bfff]/10 text-[#00bfff] hover:bg-[#00bfff]/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <motion.span 
                custom={4}
                variants={tagVariants}
                initial="hidden"
                animate="visible"
                className="px-2.5 py-1 text-xs rounded-full bg-[#00bfff]/10 text-[#00bfff]"
              >
                +{project.technologies.length - 4}
              </motion.span>
            )}
          </div>
        </div>
        
        {/* Links */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white text-sm hover:text-[#00bfff] transition-colors"
            whileHover={{ x: 4 }}
          >
            <span>View Live</span>
            <motion.div whileHover={{ x: 2 }} transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.6 }}>
              <ArrowRight size={14} />
            </motion.div>
          </motion.a>
          
          <div className="flex gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-[#00bfff]/10 text-white hover:bg-[#00bfff]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink size={14} />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-[#00bfff]/10 text-white hover:bg-[#00bfff]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
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
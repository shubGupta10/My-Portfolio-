"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

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
      color: "#0f1826"
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
      color: "#0f1826"
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
      color: "#0f1826"
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
      color: "#0f1826"
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
      color: "#0f1826"
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
      color: "#0f1826"
    },
  ];

  return (
    <section 
      id="projects" 
      className="w-full bg-[var(--background)] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[var(--primary)]/8 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto py-12">
        {/* Section Header */}
        <motion.div 
          className=" relative px-4 sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[var(--foreground)] inline-block">
            Featured <span className="text-[var(--primary)]">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-[var(--primary)] mt-2" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Projects Container */}
        <div 
          ref={containerRef}
          className=" sticky" 
          style={{ height: `${projects.length * 90}vh` }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              scrollYProgress={scrollYProgress}
              totalProjects={projects.length}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, scrollYProgress, totalProjects, hoveredProject, setHoveredProject }) => {
  const cardRef = useRef(null);
  const cardScrollProgress = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  // Calculate the progress range for each card
  const startProgress = index / totalProjects;
  const endProgress = (index + 1) / totalProjects;
  
  // Create individual scroll progress for each card
  const progress = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [0, 1]
  );

  // Calculate transformation values
  const y = useTransform(
    progress,
    [0, 0.5],
    [1, -500] 
  );

  const scale = useTransform(
    progress,
   [0, 0.5 , 1],
    [1, 1.05, 1] 
  );

  const imageScale = useTransform(
    cardScrollProgress.scrollYProgress,
    [0, 1],
    [1.2, 1]
  );

  return (
    <div 
      ref={cardRef}
      className="h-screen w-full flex items-center justify-center sticky top-0"
    >
      <motion.div 
        className="w-full border-[#01a9e3] border max-w-5xl mx-4 sm:mx-8 rounded-3xl overflow-hidden shadow-xl"
        style={{ 
          backgroundColor: project.color || 'var(--background)',
          scale,
          y,
          top: `${index * 15}px`,
          transformOrigin: "center"
        }}
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00bfff] text-center mb-8">{project.title}</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Description Side */}
            <div className="lg:w-2/5 flex flex-col justify-center">
              <div className="text-white/90 mb-6 text-base sm:text-lg">
                <p className="first-letter:text-3xl first-letter:font-bold first-letter:mr-1">
                  {project.description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 text-white hover:bg-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:underline"
                    whileHover={{ x: 4 }}
                  >
                    <span>See more</span>
                    <ArrowRight size={18} />
                  </motion.a>
                )}
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="lg:w-3/5 rounded-xl overflow-hidden relative h-64 sm:h-80 lg:h-96">
              <motion.div
                className="w-full h-full relative"
                style={{ scale: imageScale }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </motion.div>
              
              {/* Overlay with links on hover */}
              <div
                className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link 
                  href={`/projects/${project.slug}`}
                  className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-opacity-90 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
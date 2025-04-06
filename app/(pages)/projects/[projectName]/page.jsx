"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const ProjectDetails = () => {
  const params = useParams()
  const projectName = params.projectName
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  const projects = [
    {
      id: 1,
      slug: "codex",
      title: "CodeX - Cloud Code Editor",
      description:
        "A cloud-based Code Editor like Replit, featuring Monaco Editor, AI code assistant, code converter, and real-time file management with Supabase.",
      image: "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2Fx-codex-pic.avif?alt=media",
      technologies: ["Next.js", "TypeScript", "Monaco Editor", "Piston API", "Supabase", "LangChain", "Tailwind CSS", "Redis"],
      liveUrl: "https://x-codex.vercel.app",
      githubUrl: "",
      longDescription: "CodeX is a cloud-based Code Editor designed to provide developers with a seamless coding experience similar to platforms like Replit. Built with modern technologies, CodeX offers a comprehensive set of features that enhance productivity and collaboration in software development.",
      keyFeatures: [
        "Advanced code editor powered by Monaco Editor with syntax highlighting and code completion",
        "AI-powered code assistant to help with debugging and offering coding suggestions",
        "Seamlessly convert code from one programming language to another while preserving logic and functionality.",
        "Multiple language support with the Piston API for code execution",
        "Real-time file management and collaboration using Supabase",
        "Login system using NextAuth with role-based access, ensuring data privacy and account security.",
      ],
      challenges: "One of the key challenges was ensuring smooth integration of the Monaco Editor while keeping the app lightweight and fast. We also faced difficulties in handling file management and execution flows cleanly across different languages using the Piston API.",
      outcome: "CodeX has attracted over 100+ active users, 5000+ unique visitors, and 300+ registered users. The feedback has been positive, and the platform continues to grow steadily among developers exploring online code editing tools."
    },
    {
      id: 2,
      slug: "buildmycv",
      title: "BuildMyCV - AI Resume Builder",
      description:
        "An intelligent resume builder with ATS support, AI job analysis, role-based suggestions, and job recommendations. Built for job seekers to enhance their chances.",
      image: "https://firebasestorage.googleapis.com/v0/b/fir-31914.appspot.com/o/ContactImages%2FScreenshot%202025-04-05%20192226.png?alt=media",
      technologies: ["Next.js", "TypeScript", "Firebase", "LangChain", "Gemini AI", "Stripe", "PostgreSql", "Shadcn", "Tailwind CSS", "Clerk Authentication"],
      liveUrl: "https://buildmycv.ai",
      githubUrl: "",
      longDescription: "BuildMyCV is an AI-powered resume builder designed to help users craft professional, ATS-friendly resumes. It provides tailored resume suggestions, analyzes job descriptions, and offers tools like job recommendations and AI assistants to improve resume content and relevance.",
      keyFeatures: [
        "ATS-ready resume builder with AI assistance",
        "Job description analyzer that extracts key skills and phrases",
        "AI resume assistant that improves bullet points and summaries",
        "Multiple modern templates with easy customization",
        "Integrated Stripe for payment processing",
        "Personalized job recommendations based on skills and experience",
        "AI-based job assessment to help users identify suitable roles",
        "Export in PDF and DOCX and plain text formats"
      ],
      challenges: "Building accurate AI tools that provide genuinely helpful suggestions was a major challenge. We had to carefully tune the job analysis and resume assistant to ensure relevance. Integrating these features with a clean, real-time editing experience also required a lot of iteration.",
      outcome: "BuildMyCV recently launched and has started gaining traction among job seekers. Early users have reported a smoother resume-building experience and improved clarity in targeting the right roles."
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
      longDescription: "Interview Buddy is an AI-driven interview preparation platform that helps users practice for technical, behavioral, and system design interviews. It generates personalized questions based on the selected role, experience level, and interview round, offering detailed explanations to guide users through the preparation process.",
      keyFeatures: [
        "AI-generated questions tailored to role, experience level, and round type",
        "Covers multiple interview rounds including technical, behavioral, and system design",
        "Adjustable difficulty levels from beginner to expert",
        "Programming language-specific questions (e.g., Python, JavaScript, C++)",
        "Detailed explanations with structured breakdowns and key takeaways",
        "Save questions for later review and practice"
      ],
      challenges: "Designing dynamic question generation based on different roles, experience levels, and round types was a key challenge. Ensuring the AI provided high-quality, relevant, and non-repetitive content required careful prompt engineering and iterative refinement.",
      outcome: "Interview Buddy recently launched and is actively being used by early adopters to prepare for interviews. Initial users have found the tailored questions and in-depth explanations helpful in structuring their preparation and boosting confidence."
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
      longDescription: "OpenSox is a web platform designed to help developers discover open source projects tailored to their skill levels and tech stack. It features categorized listings of GitHub projects with filtering by language, level, and topic, making it easier for beginners and contributors to find relevant repositories.",
      keyFeatures: [
        "Filter projects by programming language, stars, difficulty level, and tags",
        "Beginner-friendly listings with 'good first issue' and 'help wanted' tags",
        "Project pages show stars, forks, description, and GitHub activity at a glance",
        "Minimalist and responsive UI built with Next.js and Tailwind",
        "Client-side search and filter for fast performance",
        "Plans to add GitHub OAuth for personalized recommendations"
      ],
      challenges: "Creating an intuitive and fast filtering experience while working with real-time GitHub data was challenging. We had to balance performance with relevant project discovery, especially when handling large datasets through the GitHub API.",
      outcome:"OpenSox is live and being explored by early users. It currently lists hundreds of open source projects with categorized filters, and aims to grow into a go-to place for beginners and contributors looking for curated OSS opportunities."
    },
    {
      id: 5,
      slug: "eduhub",
      title: "AI Powered Blog App - Blogger App",
      description:
        "An AI-enhanced blogging platform that streamlines content creation and summarization, making it easy for users to craft and manage engaging blog posts.",
      image: "https://firebasestorage.googleapis.com/v0/b/eduhub-15130.appspot.com/o/MyItems%2FScreenshot%202024-11-06%20151539.png?alt=media",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://goblogerly.vercel.app/",
      githubUrl: "https://github.com/shubGupta10/blogger",
      longDescription: "Blogger App is a modern blogging platform built to make publishing and managing content simple and intuitive. It allows users to create, edit, and delete blog posts with a clean writing interface and a smooth user experience. The platform also integrates basic AI tools to help users improve their writing and organize content.",
      keyFeatures: [
        "Clean and minimal Markdown-supported editor",
        "CRUD functionality for creating, editing, and deleting blog posts",
        "Authentication and user-specific blog management",
        "AI integration to generate blog and summaries",
        "Responsive design with dark mode support",
        "SEO-friendly blog URLs and meta tags"
      ],
      challenges: "The main challenge was building a user-friendly editor and managing blog post state cleanly across components. Integrating basic AI features like title generation while keeping performance fast was also tricky due to asynchronous processing.",
      outcome: "The Blogger App was actively used by early users after launch and has been stable in production for over 6 months. While it currently has low active usage, it serves as a solid foundation for future improvements or new use cases."
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
      longDescription:  "The Anonymous Feedback Platform is a secure and intuitive tool that enables users to receive honest, anonymous feedback. Inspired by apps like NGL, it allows users to create personalized links that others can use to send anonymous messages, while ensuring basic safety and moderation mechanisms are in place.",
      keyFeatures: [
        "Anonymous messaging via shareable feedback links",
        "JWT authentication for secure user login and session management",
        "Basic content moderation to reduce spam and inappropriate messages",
        "Responsive UI built with Tailwind for seamless mobile and desktop experience",
        "User dashboard to manage and respond to received feedback"
      ],
      challenges:"The main challenge was balancing true anonymity with safety. Preventing spam and abuse without storing sender information required implementing lightweight but effective content filtering and throttling mechanisms.",
      outcome:"Since launch, the platform has handled thousands of anonymous messages and has been positively received by early adopters, particularly among students and small communities looking for honest, unfiltered feedback."
    },
  ];

  useEffect(() => {
    if (projectName) {
      const foundProject = projects.find(p => p.slug === projectName)
      if (foundProject) {
        setProject(foundProject)
        setLoading(false)
      } else {
        setLoading(false)
      }
    }
  }, [projectName])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-t-[var(--primary)] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Project Not Found</h1>
        <p className="text-[var(--foreground)]/70 text-center max-w-md">The project you're looking for doesn't exist or has been removed.</p>
        <a href="/" className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline">
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </a>
      </div>
    )
  }

  return (
    <div className="bg-[var(--background)] min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline mb-8">
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)]">{project.title}</h1>
          <div className="h-1 w-24 bg-[var(--primary)] mt-4 mb-8"></div>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Image and Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="rounded-xl overflow-hidden border border-[var(--muted)]/30 bg-[var(--muted)]/10 shadow-lg">
              {/* Project Image */}
              <div className="relative h-56 sm:h-72">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quick Links */}
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[var(--primary)] text-[var(--background)] transition-all hover:opacity-90"
                    >
                      <ExternalLink size={18} />
                      <span>View Live Project</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[var(--muted)] text-[var(--foreground)] transition-all hover:opacity-90"
                    >
                      <Github size={18} />
                      <span>View Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm rounded-full bg-[var(--muted)]/50 text-[var(--foreground)]/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            {/* About Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">About Project</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed mb-6">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[var(--foreground)]/80">
                    <div className="min-w-4 h-4 rounded-full bg-[var(--primary)] mt-1.5"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges and Outcome */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Challenges</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Outcome</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import MyProjects from '@/app/data/projects.json'

interface Project {
  title: string
  description: string
  image: string
  techUsed: string
  liveLink: string
  githubLink: string
}

const ProjectImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      priority
      className="transition-transform duration-500 ease-out hover:scale-105"
    />
  </div>
)

const TechBadge: React.FC<{ tech: string }> = ({ tech }) => (
  <span className="inline-flex px-2 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full">
    {tech}
  </span>
)

const ProjectButton: React.FC<{ href: string; icon: React.ElementType; label: string; primary?: boolean }> = ({ href, icon: Icon, label, primary = false }) => (
  <Button
    variant={primary ? "default" : "outline"}
    size="sm"
    asChild
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2"
    >
      <Icon size={16} />
      <span>{label}</span>
    </a>
  </Button>
)

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentProject = useMemo(() => MyProjects[currentIndex], [currentIndex])

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? MyProjects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === MyProjects.length - 1 ? 0 : prev + 1))
  }

  const techStack = useMemo(() => 
    currentProject.techUsed.split(', '), 
    [currentProject.techUsed]
  )

  return (
    <section id='projects' className="py-20 lg:py-30 bg-gradient-to-b from-[#222c4a] to-[#111626]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 lg:mb-24 text-white">
          Featured Projects
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1a2138] rounded-xl shadow-xl p-8 lg:p-12 mb-12 lg:mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <ProjectImage src={currentProject.image} alt={currentProject.title} />

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white">
                    {currentProject.title}
                  </h3>

                  <p className="text-gray-300 text-lg lg:text-xl mb-6 lg:mb-8">
                    {currentProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
                    {techStack.map(tech => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <ProjectButton
                    href={currentProject.liveLink}
                    icon={ExternalLink}
                    label="Live Demo"
                    primary
                  />
                  <ProjectButton
                    href={currentProject.githubLink}
                    icon={Github}
                    label="Source Code"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-6">
          <Button
            variant="outline"
            size="lg"
            onClick={handlePrevious}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </Button>

          <div className="text-white text-lg">
            {currentIndex + 1} / {MyProjects.length}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={handleNext}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
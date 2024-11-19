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
  features: string[]
  liveLink: string
  githubLink: string
}

const ProjectImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      priority
      className="transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
)

const TechBadge: React.FC<{ tech: string }> = ({ tech }) => (
  <span className="inline-flex px-2 py-1 text-xs md:text-sm font-medium text-blue-300 bg-blue-500/20 rounded-full">
    {tech}
  </span>
)

const FeatureItem: React.FC<{ feature: string }> = ({ feature }) => (
  <li className="flex items-start gap-1 md:gap-2 text-gray-300 text-xs md:text-sm">
    <ChevronRight size={12} className="text-blue-400 flex-shrink-0 mt-1" />
    <span>{feature}</span>
  </li>
)

const ProjectButton: React.FC<{ href: string; icon: React.ElementType; label: string; primary?: boolean }> = ({ href, icon: Icon, label, primary = false }) => (
  <Button
    variant={primary ? "default" : "outline"}
    size="sm"
    asChild
    className={`text-xs md:text-sm transition-colors duration-300 ${primary ? 'bg-blue-500 hover:bg-blue-600' : 'border-blue-500/50 hover:bg-blue-500/10'}`}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 md:gap-2"
    >
      <Icon size={14} />
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
    <section id='projects' className="py-8 md:py-16 bg-gradient-to-b from-[#222c4a] to-[#111626]">
      <div className="container mx-auto mb-20 px-4 max-w-2xl md:max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-white">
          Featured Projects
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a2138] rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6 border border-blue-500/30"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="md:w-1/2">
                  <ProjectImage src={currentProject.image} alt={currentProject.title} />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent mb-4">
                      {currentProject.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm mb-3">
                      {currentProject.description}
                    </p>
                    <div className="flex flex-wrap gap-1 md:py-2 md:gap-2 mb-3">
                      {techStack.map(tech => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm md:text-xl py-2 font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="list-none space-y-2  mb-3">
                      {currentProject.features.map((feature, index) => (
                        <FeatureItem key={index} feature={feature} />
                      ))}
                    </ul>
                  </div>
                  <div className="flex md:py-2 gap-2 md:gap-3">
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

          <div className="flex justify-between items-center mt-2 md:mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              aria-label="Previous project"
              className="w-10 h-10 md:w-12 md:h-10 rounded-full border-blue-500/50 hover:bg-blue-500/10"
            >
              <ChevronLeft size={16} className="md:w-8 md:h-8" />
            </Button>

            <div className="text-white text-lg md:text-lg font-medium">
              {currentIndex + 1} / {MyProjects.length}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              aria-label="Next project"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-blue-500/50 hover:bg-blue-500/10"
            >
              <ChevronRight size={16} className="md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
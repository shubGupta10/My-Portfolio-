'use client'

import React from 'react'
import HeroSection from "./myComponents/HeroSection"
import AboutSection from './myComponents/AboutSection'
import Experience from './myComponents/Experience'
import Skills from './myComponents/Skills'
import Projects from './myComponents/Projects'
import Contact from './myComponents/Contact'
import Footer from './myComponents/Footer'
import Github from '@/app/myComponents/Github'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <Skills/>
      <Experience/>
      <Github/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
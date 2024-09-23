'use client'

import React from 'react'
import HeroSection from "./myComponents/HeroSection"
import AboutSection from './myComponents/AboutSection'
import Experience from './myComponents/Experience'
import Skills from './myComponents/Skills'
import Projects from './myComponents/Projects'
import Contact from './myComponents/Contact'
import Footer from './myComponents/Footer'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
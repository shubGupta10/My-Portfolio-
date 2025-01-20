'use client'

import React from 'react'
import AboutSection from './myComponents/AboutSection'
import Skills from './myComponents/Skills'
import Projects from './myComponents/Projects'
import Contact from './myComponents/Contact'
import Footer from './myComponents/Footer'

const page = () => {
  return (
    <div>
      <AboutSection/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
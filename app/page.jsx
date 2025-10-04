'use client'

import LoadingScreen from '@/components/LoadingScreen'
import MobileMenu from '@/components/MobileMenu'
import Navbar from '@/components/Navbar'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Experience from '@/components/sections/Experience'
import Home from '@/components/sections/Home'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import React, { useState } from 'react'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}
        style={{ backgroundImage: "url('/backgroundImage2.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Experience/>
        <Projects />
        <Testimonials/>
        <Contact />
      </div>

    </>
  )
}

export default App

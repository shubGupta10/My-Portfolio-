"use client"

import Hero from "./(sections)/Hero"
import Experience from "./(sections)/Experience"
import Skills from "./(sections)/Skills"
import Projects from "./(sections)/Projects"
import CTA from "./(sections)/CallToAction"
import GithubStats from "./components/githubStats"

function Home() {
  return (
    <main className="bg-[var(--background)] max-w-7xl mx-auto">
      {/* Subtle grid background overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0"></div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[var(--muted)] w-full my-4 opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Experience />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[var(--muted)] w-full my-4 opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skills />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[var(--muted)] w-full my-4 opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Projects />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[var(--muted)] w-full my-4 opacity-30"></div>
        </div>

        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GithubStats />
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[var(--muted)] w-full my-4 opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTA />
        </div>
      </div>

    </main>
  )
}

export default Home

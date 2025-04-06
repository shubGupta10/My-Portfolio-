"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Twitter } from "lucide-react"

const CTA = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredLink, setHoveredLink] = useState(null)

  const DATA = {
    contact: {
      email: "shubhamkgupta720@gmail.com",
      social: {
        X: { url: "https://x.com/i_m_shubham45" }
      }
    }
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="cta" className="w-full py-20 px-4 sm:px-8 bg-transparent relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10" style={{ zIndex: -1 }}>
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{
            background: "var(--primary)",
            opacity: 0.3,
            top: mousePosition.y / 10,
            left: mousePosition.x / 10,
            transform: "translate(-50%, -50%)",
            transition: "top 0.8s ease-out, left 0.8s ease-out",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "var(--primary)",
            opacity: 0.1,
            bottom: mousePosition.y / 15,
            right: mousePosition.x / 15,
            transform: "translate(50%, 50%)",
            transition: "bottom 1.2s ease-out, right 1.2s ease-out",
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl relative">
        {/* Section Header */}
        <div className="text-center space-y-8">
          <div className="mb-6 relative">
            <div className="flex justify-center mb-3">
              <span className="px-4 py-1.5 text-sm font-medium rounded-full text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                Contact
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[var(--foreground)] inline-block">
              Let&apos;s <span className="text-[var(--primary)]">Connect</span>
            </h2>
            <div className="h-1 w-20 bg-[var(--primary)] mt-4 mx-auto"></div>
          </div>

          <div className="mt-6 space-y-6">
            <p className="text-lg text-muted-foreground">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {/* Email card */}
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="group block"
                onMouseEnter={() => setHoveredLink("email")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div
                  className="relative p-6 rounded-lg backdrop-blur-sm transition-all duration-300 overflow-hidden group-hover:shadow-lg transform group-hover:-translate-y-2 h-full"
                  style={{
                    background: "rgba(31, 31, 46, 0.3)",
                    border: "1px solid rgba(0, 191, 255, 0.15)",
                  }}
                >
                  {/* Shimmering effect on hover */}
                  <div
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(45deg, transparent 25%, rgba(0, 191, 255, 0.5) 50%, transparent 75%)",
                      backgroundSize: "200% 200%",
                      animation: "shimmer 1.5s infinite linear",
                    }}
                  />

                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className="p-4 rounded-full"
                      style={{
                        background: "var(--muted)",
                        border: "1px solid var(--primary)",
                      }}
                    >
                      <Mail size={26} className="text-[var(--primary)]" />
                    </div>
                    <h3 className="text-xl font-medium">Email Me</h3>
                    <p className="text-muted-foreground">{DATA.contact.email}</p>
                    <span className="inline-flex items-center text-sm font-medium text-[var(--primary)]">
                      Send a Message
                      <svg
                        className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Twitter Card */}
              <a
                href={DATA.contact.social.X.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                onMouseEnter={() => setHoveredLink("twitter")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div
                  className="relative p-6 rounded-lg backdrop-blur-sm transition-all duration-300 overflow-hidden group-hover:shadow-lg transform group-hover:-translate-y-2 h-full"
                  style={{
                    background: "rgba(31, 31, 46, 0.3)",
                    border: "1px solid rgba(0, 191, 255, 0.15)",
                  }}
                >
                  {/* Shimmering effect on hover */}
                  <div
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(45deg, transparent 25%, rgba(0, 191, 255, 0.5) 50%, transparent 75%)",
                      backgroundSize: "200% 200%",
                      animation: "shimmer 1.5s infinite linear",
                    }}
                  />

                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className="p-4 rounded-full"
                      style={{
                        background: "var(--muted)",
                        border: "1px solid var(--primary)",
                      }}
                    >
                      <Twitter size={26} className="text-[var(--primary)]" />
                    </div>
                    <h3 className="text-xl font-medium">DM Me</h3>
                    <p className="text-muted-foreground">@i_m_shubham45</p>
                    <span className="inline-flex items-center text-sm font-medium text-[var(--primary)]">
                      Connect on X
                      <svg
                        className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
}

export default CTA
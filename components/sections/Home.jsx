import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";

function Home() {
  return (
    <ReviewOnScroll>
      {/* Added lg:pt-12 nudge to optically balance the center point of the hero section */}
      <Section id="home" className="min-h-screen flex items-center justify-center relative pb-20 pt-4 lg:pt-12">

        {/* Ambient background (kept clean and restrained) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* 
            Perfect Symmetry Grid:
            - lg:grid-cols-2 enforces exact 50% width for both columns
            - gap-16 (desktop) provides massive breathing room between text and image
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── LEFT COLUMN: Text ── */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 w-full justify-center">

              <div className="flex items-center gap-3 sm:gap-4 mb-8">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
                <span className="text-cyan-400 font-bold tracking-[0.2em] text-base sm:text-lg uppercase">
                  Hi, I am Shubham Gupta
                </span>
              </div>

              <h1 className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold mb-8 leading-[1.1] tracking-tight">
                <span className="text-gray-100 block">Full Stack</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent block pb-2">Developer</span>
              </h1>

              {/* Increased line height (leading-loose) and bottom margin (mb-12) for breathing room */}
              <p className="text-gray-400 text-lg sm:text-xl leading-loose mb-12 max-w-lg font-light">
                I enjoy building full-stack apps with
                <span className="glass-pill px-3 py-1 mx-1.5 rounded-md text-gray-200 text-sm border border-transparent hover:border-cyan-500/50 transition-colors cursor-default">Next.js</span>,
                <span className="glass-pill px-3 py-1 mx-1.5 rounded-md text-gray-200 text-sm border border-transparent hover:border-blue-500/50 transition-colors cursor-default">Node.js</span>,
                and
                <span className="glass-pill px-3 py-1 mx-1.5 rounded-md text-gray-200 text-sm border border-transparent hover:border-cyan-500/50 transition-colors cursor-default">TypeScript</span>.
                Lately, I have been exploring
                <span className="glass-pill px-3 py-1 mx-1.5 rounded-md text-gray-200 text-sm border border-transparent hover:border-purple-500/50 transition-colors cursor-default">AI</span>
                and always try to learn something new.
              </p>

              {/* Button gap increased to gap-6 */}
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <a href="#projects" className="w-full sm:w-auto px-10 py-4 rounded-xl text-center shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-95 text-lg font-bold bg-white text-black hover:bg-gray-100">
                  View Projects
                </a>

                <a
                  href="/Shubham_Gupta_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-xl text-center transition-all bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-95 text-lg text-white font-medium"
                >
                  <span>Download Resume</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Image ── */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-center w-full h-full">

              {/* 
                Clean Rectangular Container:
                aspect-[4/5] gives it a professional portrait ratio that naturally matches the height of the tall text block.
                No heavy blur masks, just a clean edge.
              */}
              <div className="w-full max-w-[420px] lg:ml-auto aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 relative shadow-2xl mt-8 lg:mt-0">

                {/* Subtle inner shadow for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10"></div>

                <img
                  src="/profileImage.png"
                  alt="Shubham Gupta"
                  className="relative z-0 w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

            </div>

          </div>
        </Container>
      </Section>
    </ReviewOnScroll>
  );
}

export default Home;

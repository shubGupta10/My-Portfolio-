import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";

function Home() {
  return (
    <ReviewOnScroll>
      <Section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center relative !py-12 md:!py-0">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        </div>

        <Container className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* 
            Perfect Symmetry Grid:
            - lg:grid-cols-2 enforces exact 50% width for both columns
            - gap-12 provides massive breathing room between text and image
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT COLUMN: Text ── */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 w-full justify-center">

              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary"></span>
                <span className="text-primary font-bold tracking-[0.1em] text-sm sm:text-base uppercase">
                  Hi, I am Shubham Gupta
                </span>
              </div>

              <h1 className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold mb-6 leading-tight tracking-tight text-foreground">
                <span className="block">Full Stack</span>
                <span className="text-muted-foreground block pb-2">Developer</span>
              </h1>

              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-lg font-light">
                I enjoy building full-stack apps with
                <span className="bg-secondary text-secondary-foreground px-2 py-1 mx-1.5 rounded-md text-sm font-medium">Next.js</span>,
                <span className="bg-secondary text-secondary-foreground px-2 py-1 mx-1.5 rounded-md text-sm font-medium">Node.js</span>,
                and
                <span className="bg-secondary text-secondary-foreground px-2 py-1 mx-1.5 rounded-md text-sm font-medium">TypeScript</span>.
                Lately, I have been exploring
                <span className="bg-secondary text-secondary-foreground px-2 py-1 mx-1.5 rounded-md text-sm font-medium">AI</span>
                and always try to learn something new.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl text-center transition-all hover:opacity-90 active:scale-95 text-base font-bold bg-primary text-primary-foreground">
                  View Projects
                </a>

                <a
                  href="/Shubham_New_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl text-center transition-all bg-accent text-accent-foreground hover:bg-accent/80 active:scale-95 text-base font-medium"
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

              <div className="w-full max-w-[420px] lg:ml-auto aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-card relative mt-8 lg:mt-0">
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

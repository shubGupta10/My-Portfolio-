import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";

function Home() {
  return (
    <ReviewOnScroll>
      <Section id="home" className="h-screen flex items-center justify-center relative pb-24">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-blue-500 font-semibold tracking-widest text-sm uppercase">
                  Hi, I am Shubham Gupta
                </span>
              </div>

              <h1 className="hero-heading text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
                <span className="text-gray-100 block">Full Stack</span>
                <span className="text-blue-500 block">Developer</span>
              </h1>

              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg font-light">
                I enjoy building full-stack apps with
                <span className="glass-pill px-2 py-0.5 mx-1 rounded-md text-gray-200 text-sm">Next.js</span>,
                <span className="glass-pill px-2 py-0.5 mx-1 rounded-md text-gray-200 text-sm">Node.js</span>,
                and
                <span className="glass-pill px-2 py-0.5 mx-1 rounded-md text-gray-200 text-sm">TypeScript</span>.
                Lately, I have been exploring
                <span className="glass-pill px-2 py-0.5 mx-1 rounded-md text-gray-200 text-sm">AI</span>
                and always try to learn something new.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="#projects" className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-xl text-center shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
                  View Projects
                </a>

                <a
                  href="/Shubham_Gupta_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto px-8 py-3.5 rounded-xl text-center transition-all hover:bg-gray-800"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-center">
              <div
                className="glass-card relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] flex justify-center items-center p-4"
                style={{
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
                }}
              >
                <div className="absolute w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[60px]"></div>
                <img
                  src="/profileImage.png"
                  alt="Shubham Gupta"
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
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

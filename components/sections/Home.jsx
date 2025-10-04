import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";

function Home() {
  return (
    <ReviewOnScroll>
      <section
        id="home"
        className="min-h-[70vh] md:min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-20 md:pt-24"
      >
        {/* Background gradient blur elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight font-bold tracking-tight">
            Hi, I am Shubham Gupta
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            I enjoy building full-stack apps with Next.js, Node.js, and
            TypeScript. Lately, I've been exploring AI and always try to learn
            something new through hands-on projects.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            {/* Primary Button */}
            <a
              href="#projects"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(59,130,246,0.4)] transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </a>

            {/* Secondary Button (Enhanced Glass Effect) */}
            <a
              href="/Shubham_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-blue-400/30 bg-blue-500/10 text-blue-300 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(59,130,246,0.3)] hover:bg-blue-500/20 hover:border-blue-400/70 hover:text-white backdrop-blur-sm transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>
        </div>
      </section>
    </ReviewOnScroll>
  );
}

export default Home;
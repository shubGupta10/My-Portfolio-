import React from "react";
import Link from "next/link";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import projectsData from "../../lib/data/project.json";

function Home() {
  return (
    <>
      <ReviewOnScroll>
        <Section id="home" className="!pb-6 sm:!pb-8">
          <div className="relative z-10 w-full flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-2xl sm:text-[28px] font-medium text-foreground tracking-tight">
                Hi, I'm Shubham 👋
              </h1>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-green-900 bg-green-950 text-green-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-[12px] font-medium tracking-wide">
                  Available for freelance
                </span>
              </div>
            </div>

            <div className="text-[15px] sm:text-[16px] text-foreground leading-relaxed max-w-2xl font-normal space-y-4">
              <p>
                I'm a Full Stack Web Developer from India, with <span className="font-semibold text-foreground">3+ years of coding and 1+ years of professional freelance experience</span>, building scalable web applications and AI-powered experiences.
              </p>
              <p>
                Want to know more? <Link href="/about" className="font-medium text-foreground transition-colors hover:text-muted-foreground underline underline-offset-4">Read my story</Link> or <Link href="/services" className="font-medium text-foreground transition-colors hover:text-muted-foreground underline underline-offset-4">see how I can help your business</Link>.
              </p>
            </div>
          </div>
        </Section>
      </ReviewOnScroll>

      <hr className="border-border" />

      <ReviewOnScroll>
        <Section className="!pt-6 sm:!pt-8 pb-4 text-left">
          <h2 className="text-2xl sm:text-[28px] font-medium tracking-tight text-foreground mb-4">
            Professional Work
          </h2>
          <div className="text-[15px] sm:text-[16px] text-foreground leading-relaxed max-w-3xl font-normal space-y-4">
            <p>
              I specialize in building custom web applications. Currently, I'm a Full Stack Engineer at
              <a href="https://huzl.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-secondary border border-border text-foreground hover:border-foreground transition-all text-[13px] sm:text-[14px] font-medium mx-1.5 align-middle">
                <img src="https://www.google.com/s2/favicons?domain=huzl.in&sz=128" alt="HUZL.IN" className="w-4 h-4 rounded-sm" />
                HUZL.IN
              </a>
              where I develop backend systems and community platforms.
            </p>
            <p>
              I also work closely with clients as a Freelance Developer. Recently, I've built websites and applications for
              <a href="https://mokominds.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-secondary border border-border text-foreground hover:border-foreground transition-all text-[13px] sm:text-[14px] font-medium mx-1.5 align-middle">
                <img src="https://www.google.com/s2/favicons?domain=mokominds.com&sz=128" alt="Moko Minds" className="w-4 h-4 rounded-sm" />
                Moko Minds
              </a>
              and
              <a href="https://unifix.co.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-secondary border border-border text-foreground hover:border-foreground transition-all text-[13px] sm:text-[14px] font-medium mx-1.5 align-middle">
                <img src="https://www.google.com/s2/favicons?domain=unifix.co.in&sz=128" alt="UNIFIX" className="w-4 h-4 rounded-sm" />
                UNIFIX
              </a>
              , focusing on fast load times, clear design, and better conversions. For more details about my background, check out my <Link href="/experience" className="underline decoration-border hover:decoration-muted-foreground transition-colors font-medium">experience</Link>.
            </p>
          </div>
        </Section>
      </ReviewOnScroll>

      <hr className="border-border" />

      <ReviewOnScroll>
        <Section className="!pt-6 sm:!pt-8 pb-4 text-left">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-[28px] font-medium tracking-tight text-foreground">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.slice(0, 2).map((project) => (
              <ProjectCard 
                key={project.slug}
                title={project.title}
                description={project.description[0]}
                tags={project.technologies.slice(0, 3)}
                demoLink={project.liveLink}
                slug={project.slug}
                image={project.image || "/og-image.png"}
              />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-medium bg-secondary text-secondary-foreground border border-border hover:border-foreground/30 transition-all duration-300 group"
            >
              Explore all projects
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Section>
      </ReviewOnScroll>
    </>
  );
}

export default Home;

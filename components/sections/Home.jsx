import React from "react";
import Link from "next/link";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";

function Home() {
  return (
    <>
      <ReviewOnScroll>
        <Section id="home">
          <div className="relative z-10 w-full flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-2xl sm:text-[28px] font-medium text-foreground tracking-tight">
                Hi, I'm Shubham 👋
              </h1>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-green-900 bg-green-900/20 text-green-400">
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
                I'm a Full Stack Web Developer from India, with 3+ years of coding and 1+ years of professional freelance experience, trying to make the internet a bit cooler one website at a time. You can <Link href="/about" className="font-medium text-foreground transition-colors hover:text-muted-foreground underline underline-offset-4">know more about me</Link>.
              </p>
              <p>
                If you have a project in mind, you can <Link href="/services" className="font-medium text-foreground transition-colors hover:text-muted-foreground underline underline-offset-4">see what I can help with</Link>.
              </p>
            </div>
          </div>
        </Section>
      </ReviewOnScroll>

      <hr className="border-border" />

      <ReviewOnScroll>
        <Section className="!pt-8 sm:!pt-12 text-left">
          <h2 className="text-2xl sm:text-[28px] font-medium tracking-tight text-foreground mb-4">
            Professional Work
          </h2>
          <div className="text-[15px] sm:text-[16px] text-foreground leading-relaxed max-w-3xl font-normal space-y-4">
            <p>
              I specialize in building full-stack web applications and AI-powered experiences. Currently, I'm a Full Stack Engineer at
              <a href="https://huzl.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-secondary border border-border text-foreground hover:border-foreground transition-all text-[13px] sm:text-[14px] font-medium mx-1.5 align-middle">
                HUZL.IN
              </a>
              where I build complex backend features, community platforms, and handle heavy database architectures.
            </p>
            <p>
              I also work closely with clients as a Freelance Developer. Recently, I've designed and developed websites and web apps for
              <a href="https://mokominds.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-secondary border border-border text-foreground hover:border-foreground transition-all text-[13px] sm:text-[14px] font-medium mx-1.5 align-middle">
                Moko Minds
              </a>
              and
              <a href="https://unifix.co.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-secondary border border-border text-foreground hover:border-foreground transition-all text-[13px] sm:text-[14px] font-medium mx-1.5 align-middle">
                UNIFIX
              </a>
              , focusing on high-performance architecture, premium UI, and strong SEO. For more details about my background, check out my <Link href="/experience" className="underline decoration-border hover:decoration-muted-foreground transition-colors font-medium">experience</Link>.
            </p>
          </div>
        </Section>
      </ReviewOnScroll>
    </>
  );
}

export default Home;

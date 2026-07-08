import React from "react";
import Link from "next/link";
import ReviewOnScroll from "../ReviewOnScroll";

function Home() {
  return (
    <ReviewOnScroll>
      <section id="home" className="py-8 relative">

        <div className="relative z-10 w-full flex flex-col items-start text-left">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
              Hi, I'm Shubham 👋
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-900/50 bg-green-900/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[13px] font-medium tracking-wide text-green-500">
                Available for freelance
              </span>
            </div>
          </div>

          <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-relaxed max-w-2xl mb-8 font-normal">
            I'm a Full Stack Web Developer from India, with <strong className="font-medium text-foreground">3+ years of coding and 1+ years of professional freelance experience</strong>, trying to make the internet a bit cooler one website at a time.
          </p>

          <p className="text-[16px] sm:text-[18px] text-muted-foreground">
            Want to know more about me? <Link href="/about" className="text-foreground font-medium underline underline-offset-4 transition-colors">Know more about me</Link>
          </p>

          <p className="text-[16px] sm:text-[18px] text-muted-foreground mt-3">
            Looking for a developer? <Link href="/services" className="text-foreground font-medium underline underline-offset-4 transition-colors">See what I can help with</Link>
          </p>

        </div>
      </section>
    </ReviewOnScroll>
  );
}

export default Home;

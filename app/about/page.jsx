import React from 'react';
import About from '@/components/sections/About';
import Container from '@/components/ui/Container';

export const metadata = {
  title: "About Me | Shubham Gupta",
  description: "Learn more about Shubham Gupta, a Full Stack Developer with experience in React, Next.js, and Node.js. Discover my background, education, and tech stack.",
  alternates: {
    canonical: "https://www.shubhamgupta.online/about",
  },
  openGraph: {
    title: "About Me | Shubham Gupta",
    description: "Learn more about Shubham Gupta, a Full Stack Developer with experience in React, Next.js, and Node.js.",
    url: "https://www.shubhamgupta.online/about",
  },
  twitter: {
    title: "About Me | Shubham Gupta",
    description: "Learn more about Shubham Gupta, a Full Stack Developer with experience in React, Next.js, and Node.js.",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <main className="relative z-10 w-full">
        <About />
      </main>
    </div>
  );
}

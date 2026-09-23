import React from 'react';
import Experience from '@/components/sections/Experience';
import Container from '@/components/ui/Container';

export const metadata = {
  title: "Experience | Shubham Gupta",
  description: "Explore my professional journey as a Full Stack Web Developer. View my past roles, freelance projects, and the impact I've made across various organizations.",
  alternates: {
    canonical: "https://www.shubhamgupta.online/experience",
  },
  openGraph: {
    title: "Experience | Shubham Gupta",
    description: "Explore my professional journey as a Full Stack Web Developer. View my past roles, freelance projects, and the impact I've made across various organizations.",
    url: "https://www.shubhamgupta.online/experience",
  },
  twitter: {
    title: "Experience | Shubham Gupta",
    description: "Explore my professional journey as a Full Stack Web Developer. View my past roles, freelance projects, and the impact I've made across various organizations.",
  },
};

export default function ExperiencePage() {
  return (
    <div className="w-full">
      <main className="relative z-10 w-full">
        <Container>
          <Experience />
        </Container>
      </main>
    </div>
  );
}

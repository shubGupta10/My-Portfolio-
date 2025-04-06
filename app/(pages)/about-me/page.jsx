import React from "react";
import { ArrowLeft } from "lucide-react";

const education = [
  {
    school: "Chandigarh University",
    degree: "Master's of Computer Application",
    start: "2024",
    end: "2026",
  },
  {
    school: "Babu Banarasi Das University",
    degree: "Bachelor's of Computer Application",
    start: "2021",
    end: "2024",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-6 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <a href="/" className="flex items-center text-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors group">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </a>
        </div>

        {/* Header Section */}
        <div className="mb-8 border-b border-[var(--border)] pb-6">
          <h1 className="text-4xl font-bold mb-2 text-[var(--primary)]">About Me</h1>
        </div>

        {/* Bio Section */}
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-6 leading-7 text-lg">
            Hey there! 👋 I'm <strong>Shubham Gupta</strong>, a passionate and curious full-stack developer with a 
            strong foundation in web technologies. Currently, I'm diving deep into the world of software development,
            building cool SaaS products like <strong>CodeX</strong>, <strong>BuildMyCV</strong>, and <strong>Interview Buddy</strong>,
            solving real-world problems, and always exploring new things to level up.
          </p>
          
          <p className="mb-6 leading-7 text-lg">
            I've also built platforms like <strong>Anonymous Feedback</strong> (inspired by NGL).
            These projects have taught me everything from secure authentication with JWT and NextAuth to file handling,
            AI integration, and production optimization using tools like Redis and Supabase.
          </p>
          
          <p className="mb-6 leading-7 text-lg">
            I've worked as a Freelancer at <strong>BioStrive Energies</strong>, where I handled complete website development using 
            Next.js, Node.js, MongoDB, and Tailwind CSS. I designed an admin panel, integrated JWT authentication, built a dynamic notice system,
            and even optimized performance with Redis caching.
          </p>
          
          <p className="mb-6 leading-7 text-lg">
            Beyond that, I've led teams as a MERN Stack Leader at <strong>Balaji Infotech</strong>, solved bugs in team projects,
            completed internships at <strong>Nullclass</strong>, and contributed to major builds like <strong>CodeQuest</strong>.
            I'm constantly learning — recently exploring Docker, GraphQL, Prisma, and Supabase to level up my backend and DevOps skills.
          </p>
          
          <p className="mb-10 leading-7 text-lg">
            My focus right now is on building beautiful, fast, production-ready apps with smooth UX using tools like Shadcn, Tailwind CSS,
            and Framer Motion. I love crafting intuitive UI and integrating smart features like AI Assistants, Code Suggestions,
            and Language Translators to make the user experience next-level.
          </p>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-[var(--primary)]">Education</h2>
          <div className="space-y-5">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-[var(--muted)] p-5 rounded-xl shadow-sm border border-[var(--border)]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-medium">{edu.school}</h3>
                  <span className="text-sm font-medium text-[var(--muted-foreground)] md:text-base">
                    {edu.start} - {edu.end}
                  </span>
                </div>
                <p className="text-[var(--foreground)] mt-2">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
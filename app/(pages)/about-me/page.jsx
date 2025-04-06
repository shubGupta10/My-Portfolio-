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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-6 pb-16 relative overflow-hidden">
      {/* Enhanced animated background similar to Skills section */}
      <div className="absolute inset-0 opacity-10" style={{ zIndex: -1 }}>
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "var(--primary)",
            opacity: 0.3,
            top: '20%',
            left: '10%',
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "var(--primary)",
            opacity: 0.1,
            bottom: '30%',
            right: '15%',
            transform: "translate(50%, 50%)",
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Button */}
        <div className="mb-8">
          <a href="/" className="flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors group">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </a>
        </div>

        {/* Header Section with enhanced styling */}
        <div className="mb-12 relative">
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            About <span className="text-[var(--primary)]">Me</span>
          </h1>
          <div className="h-1 w-24 bg-[var(--primary)] mt-4 relative">
            <div className="absolute h-1 w-12 bg-[var(--primary)] opacity-50 blur-sm -top-1"></div>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* Bio Section */}
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-6 leading-7 text-lg">
            Hey there! 👋 I'm <strong className="text-[var(--primary)]">Shubham Gupta</strong>, a passionate and curious full-stack developer with a 
            strong foundation in web technologies. Currently, I'm diving deep into the world of software development,
            building cool SaaS products like <strong className="text-[var(--primary)]">CodeX</strong>, <strong className="text-[var(--primary)]">BuildMyCV</strong>, and <strong className="text-[var(--primary)]">Interview Buddy</strong>,
            solving real-world problems, and always exploring new things to level up.
          </p>
          
          <p className="mb-6 leading-7 text-lg">
            I've also built platforms like <strong className="text-[var(--primary)]">Anonymous Feedback</strong> (inspired by NGL).
            These projects have taught me everything from secure authentication with JWT and NextAuth to file handling,
            AI integration, and production optimization using tools like Redis and Supabase.
          </p>
          
          <p className="mb-6 leading-7 text-lg">
            I've worked as a Freelancer at <strong className="text-[var(--primary)]">BioStrive Energies</strong>, where I handled complete website development using 
            Next.js, Node.js, MongoDB, and Tailwind CSS. I designed an admin panel, integrated JWT authentication, built a dynamic notice system,
            and even optimized performance with Redis caching.
          </p>
          
          <p className="mb-6 leading-7 text-lg">
            Beyond that, I've led teams as a MERN Stack Leader at <strong className="text-[var(--primary)]">Balaji Infotech</strong>, solved bugs in team projects,
            and even contributed to open-source projects. I love collaborating with others and sharing knowledge.
            I'm constantly learning — recently exploring Docker, GraphQL, Prisma, and Supabase to level up my backend and DevOps skills.
          </p>
          
          <p className="mb-10 leading-7 text-lg">
            My focus right now is on building beautiful, fast, production-ready apps with smooth UX using tools like Shadcn, Tailwind CSS,
            and Framer Motion. I love crafting intuitive UI and integrating smart features like AI Assistants, Code Suggestions,
            and Language Translators to make the user experience next-level.
          </p>
        </div>

        {/* Education Section - Styled consistently with Skills section */}
        <div className="mt-12 relative">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">
            My <span className="text-[var(--primary)]">Education</span>
          </h2>
          <div className="h-1 w-20 bg-[var(--primary)] mt-4 mb-8 relative">
            <div className="absolute h-1 w-10 bg-[var(--primary)] opacity-50 blur-sm -top-1"></div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="space-y-5">
            {education.map((edu, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-lg backdrop-blur-sm transition-all duration-300 border hover:shadow-lg transform hover:-translate-y-1 group"
                style={{
                  background: "rgba(31, 31, 46, 0.3)",
                  border: "1px solid rgba(224, 224, 224, 0.1)",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-medium group-hover:text-[var(--primary)] transition-colors">{edu.school}</h3>
                  <span className="text-sm font-medium text-[var(--muted-foreground)] md:text-base">
                    {edu.start} - {edu.end}
                  </span>
                </div>
                <p className="text-[var(--foreground)]/80 mt-2">{edu.degree}</p>
                
                {/* Add subtle glow effect on hover - matching skills cards */}
                <div 
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"
                  style={{ 
                    background: "var(--primary)",
                    boxShadow: "0 4px 12px rgba(0, 191, 255, 0.1)"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
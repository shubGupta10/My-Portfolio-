import type React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import Markdown from "react-markdown"
import { ResumeCard } from "@/components/resume-card"
import ProjectCard from "@/components/project-card"
import GitHub from "@/components/GitHub"

const SectionHeader = ({
  title,
  subtitle,
  badge,
  className,
}: {
  title: string
  subtitle?: React.ReactNode
  badge?: string
  className?: string
}) => (
  <div className={cn("text-center", className)}>
    {badge && (
      <div className="inline-block rounded-full mb-2 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        {badge}
      </div>
    )}
    <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl mb-2 font-bold tracking-tight text-transparent sm:text-4xl">
      {title}
    </h2>
    {subtitle && <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
  </div>
)

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <section className={cn("border-b border-border/50 bg-background/50 px-4 py-12 backdrop-blur-sm sm:px-8", className)}>
    {children}
  </section>
)

export default function PortfolioPage() {
  return (
    <div className="bg-gradient-to-b from-background via-background/90 to-background">
      <main className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <Section>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="flex-1 space-y-6 text-center sm:text-left">
              <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                Hi, I&apos;m {DATA.name.split(" ")[0]}
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">{DATA.description}</p>
              <button className="rounded-lg bg-gradient-to-r from-white to-gray-50 px-4 py-2 font-medium text-black transition-all duration-300 border-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                <a
                  href="https://drive.google.com/file/d/10d2gv9AV0jFJFX5btGN_SmAKKSnSqFZv/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 animate-pulse bg-gradient-to-r from-primary to-secondary opacity-75 blur-lg" />
              <Avatar className="relative h-48 w-48 border-2 border-background sm:h-56 sm:w-56">
                <AvatarImage src={DATA.avatarUrl} alt={DATA.name} className="object-cover" />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <SectionHeader title="About" />
            <div className="mt-6 prose-lg prose-primary dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section>
          <div className="mx-auto max-w-4xl">
            <SectionHeader title="Experience" />
            <div className="mt-6 grid gap-4">
              {DATA.work.map((work) => (
                <ResumeCard
                  key={work.company}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  points={work.points}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section>
          <div className="mx-auto max-w-4xl">
            <SectionHeader title="Skills" />
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {DATA.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-full px-4 py-1.5 text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Section>

        {/* GitHub Section */}
        <div>
          <GitHub />
        </div>

        {/* Projects Section */}
        <Section>
          <div className="mx-auto flex flex-col gap-12 max-w-full">
            <SectionHeader
              className="p-2"
              badge="My Projects"
              title="Check out my latest work"
              subtitle="I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
            />
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DATA.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section>
          <div className="mx-auto max-w-4xl">
            <SectionHeader title="Education" />
            <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              {DATA.education.map((education) => (
                <ResumeCard
                  key={education.school}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <div className="text-center space-y-8">
              <SectionHeader
                badge="Contact"
                title="Let&apos;s Connect"
                subtitle={
                  <div className="mt-6 space-y-4">
                    <p className="text-lg text-muted-foreground">
                      I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of
                      your visions.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Link
                          href={DATA.contact.social.X.url}
                          className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          Follow on X
                        </Link>

                        <Link
                          href={`mailto:${DATA.contact.email}`}
                          className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          Send Email
                        </Link>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}


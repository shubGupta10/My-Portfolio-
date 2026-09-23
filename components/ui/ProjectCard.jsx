import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ title, description, tags, demoLink, slug, image }) {
  return (
    <div className="group flex flex-col p-4 rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg">
      <div className="relative aspect-video w-full rounded-xl border border-border bg-secondary mb-5 overflow-hidden">
        <Image
          src={image}
          alt={`Screenshot of ${title} project`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col flex-1 px-1">
        <h3 className="typo-h3 mb-2 flex-1 !text-foreground font-semibold">
          {title}
        </h3>
        <p className="typo-support mb-6 flex-1">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, i) => (
              <span key={i} className="typo-meta !text-foreground/70 bg-secondary px-2 py-0.5 rounded-md border border-border">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="typo-meta !font-semibold !text-foreground hover:!text-muted-foreground transition-colors">
              Live Demo
            </a>
          )}
          {slug && (
            <Link href={`/project-details/${slug}`} className="typo-meta !font-semibold !text-foreground hover:!text-muted-foreground transition-colors flex items-center gap-1 group/link">
              Open <span className="transform transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

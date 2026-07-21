import React from "react";
import Link from "next/link";

export default function ProjectCard({ title, description, demoLink, slug, image }) {
  return (
    <div className="group flex flex-col p-4 rounded-2xl border border-border bg-card hover:bg-secondary transition-all duration-300">
      <div className="aspect-video w-full rounded-xl border border-border bg-secondary mb-5 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
        />
      </div>
      
      <div className="flex flex-col flex-1 px-1">
        <h3 className="font-semibold text-foreground text-[18px] tracking-tight mb-2.5">
          {title}
        </h3>
        <p className="text-[14.5px] text-muted-foreground leading-relaxed mb-8 flex-1">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-foreground hover:text-muted-foreground transition-colors">
              Live Demo
            </a>
          )}
          {slug && (
            <Link href={`/project-details/${slug}`} className="text-[14px] font-medium text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1 group/link">
              Open <span className="transform transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

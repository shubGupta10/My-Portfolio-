"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import HoverGlow from "./ui/HoverGlow";

export default function ExperienceCard({ exp }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/experience-details/${exp.id}`)}
      className="group relative flex flex-col w-full h-full rounded-2xl bg-card border border-border overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 active:scale-[0.98] transition-all duration-300 p-8"
    >
      <HoverGlow />
      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-start mb-5">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
            {exp.position}
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-primary font-semibold text-lg">{exp.company}</span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${
                exp.status === "Current"
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border bg-secondary text-muted-foreground"
              }`}
            >
              {exp.status}
            </span>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-6 relative z-10 font-medium">
        {exp.duration}
      </p>

      <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow font-light relative z-10 line-clamp-3">
        {Array.isArray(exp.description) ? exp.description.join(" ") : exp.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {exp.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium hover:bg-secondary/80 transition-colors">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-5 flex items-center justify-between border-t border-border transition-colors duration-300 relative z-10">
        <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          Open
        </span>
        <div className="w-8 h-8 rounded-full bg-secondary flex flex-col items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-muted-foreground">
          <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

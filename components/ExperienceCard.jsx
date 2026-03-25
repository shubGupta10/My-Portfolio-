"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ExperienceCard({ exp }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/experience-details/${exp.id}`)}
      className="group relative flex flex-col w-full h-full rounded-2xl bg-[#111111]/60 border border-white/[0.08] overflow-hidden cursor-pointer hover:bg-[#161616] hover:border-white/20 active:scale-[0.98] transition-all duration-500 shadow-2xl p-8"
    >
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 mix-blend-overlay pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-start mb-5">
        <div>
          <h3 className="text-2xl font-bold text-gray-100 mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
            {exp.position}
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-semibold text-lg">{exp.company}</span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${
                exp.status === "Current"
                  ? "border-green-500/30 bg-green-500/10 text-green-400"
                  : "border-white/10 bg-white/5 text-gray-400"
              }`}
            >
              {exp.status}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-sm mb-6 relative z-10 font-medium">
        {exp.duration}
      </p>

      <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow font-light relative z-10 line-clamp-3">
        {Array.isArray(exp.description) ? exp.description.join(" ") : exp.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {exp.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:bg-white/10 transition-colors">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-5 flex items-center justify-between border-t border-white/[0.04] group-hover:border-white/10 transition-colors duration-300 relative z-10">
        <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
          Open
        </span>
        <div className="w-8 h-8 rounded-full bg-white/5 flex flex-col items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-300 text-gray-400">
          <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
}

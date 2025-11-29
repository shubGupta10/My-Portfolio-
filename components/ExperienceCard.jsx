import { Briefcase, Link as LinkIcon } from "lucide-react";

export default function ExperienceCard({ exp, index }) {
  return (
    <div
      className={`relative pl-12 md:grid md:grid-cols-2 md:gap-14 md:pl-0`}
    >
      {/* Timeline Dot */}
      <div className="absolute top-0 left-6 -translate-x-1/2 md:left-1/2">
        <div className="w-8 h-8 rounded-full p-1.5 flex items-center justify-center bg-gradient-to-r from-blue-500/30 to-cyan-400/30">
          <Briefcase className="w-4 h-4 text-cyan-300" />
        </div>
      </div>

      {/* Experience Card */}
      <div
        className={`glass-card hover-lift p-8 md:p-10 relative
          ${index % 2 !== 0
            ? "md:col-start-2"
            : "md:col-start-1 md:row-start-1"
          }
        `}
      >
        {/* Status Badge */}
        <span
          className={`badge-status absolute top-4 right-4 z-20
            ${exp.status === "Current"
              ? "badge-status-current"
              : "badge-status-done"
            }
          `}
        >
          {exp.status}
        </span>

        <h3 className="text-xl font-bold text-white mb-1">
          {exp.position}
        </h3>

        {/* Company */}
        <div className="flex items-center gap-2 mb-2">
          {exp.liveUrl ? (
            <a
              href={exp.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:underline"
            >
              {exp.company}
            </a>
          ) : (
            <p className="text-cyan-400 font-semibold">
              {exp.company}
            </p>
          )}

          {exp.liveUrl && (
            <LinkIcon className="w-3 h-3 text-cyan-400" />
          )}
        </div>

        <p className="text-gray-400 text-sm mb-4">
          {exp.duration}
        </p>

        <p className="text-gray-300 text-base leading-relaxed mb-6">
          {exp.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span key={tech} className="badge-skill text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

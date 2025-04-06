import { useState, useEffect } from "react";
import { Loader2Icon, CalendarIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";

export const ContributionGraph = ({ username }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [isLoading]);
  
  return (
    <div className="space-y-4 p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-[var(--primary)]" />
          <h3 className="text-lg font-semibold text-[var(--foreground)]">Contribution Activity</h3>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--primary)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1 bg-[var(--muted)] px-3 py-1 rounded-full hover:bg-[var(--muted)]/80"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View on GitHub</span>
          <ExternalLinkIcon className="w-3 h-3 ml-1" />
        </a>
      </div>
      
      <div className="rounded-xl overflow-hidden border border-[var(--muted)] relative">
        <div className="relative w-full overflow-x-auto bg-[var(--background)] scrollbar-thin scrollbar-thumb-[var(--muted)] scrollbar-track-transparent">
          <div className="w-full md:w-full lg:w-full relative">
            {/* Overlay for enhanced appearance */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-10 pointer-events-none z-10"></div>
            
            <div className="w-full overflow-x-auto pb-1">
              <div className="min-w-full lg:min-w-0 w-full">
                <iframe
                  src={`https://ghchart.rshah.org/${encodeURIComponent(username)}`}
                  className="w-full h-40 bg-transparent transition-opacity duration-300"
                  style={{ opacity: isLoading ? 0.5 : 1 }}
                  frameBorder="0"
                  scrolling="no"
                  title="GitHub Contributions Graph"
                  onLoad={() => setIsLoading(false)}
                  onError={() => setIsLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>
        
        {isLoading && (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-[var(--background)]/80 backdrop-blur-sm z-20">
            <Loader2Icon className="w-8 h-8 animate-spin text-[var(--primary)] mb-2" />
            <p className="text-sm text-[var(--foreground)]">Loading contribution data...</p>
          </div>
        )}
        
        <div className="px-4 py-4 flex flex-col sm:flex-row sm:items-center justify-between text-sm text-[var(--foreground)] border-t border-[var(--muted)] bg-[var(--muted)]/30">
          <div className="flex items-center gap-2 mb-3 sm:mb-0">
            <span className="text-xs font-medium uppercase tracking-wider">Contribution Level</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-[#0d1117] dark:bg-[#161b22] rounded-sm border border-[var(--muted)]/30"></span>
              <span>None</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-[#0e4429] dark:bg-[#0e4429] rounded-sm"></span>
              <span>Low</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-[#006d32] dark:bg-[#006d32] rounded-sm"></span>
              <span>Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-[#26a641] dark:bg-[#26a641] rounded-sm"></span>
              <span>High</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-[#39d353] dark:bg-[#39d353] rounded-sm"></span>
              <span>Max</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
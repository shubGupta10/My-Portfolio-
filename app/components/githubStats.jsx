'use client';
import { useEffect, useState } from 'react';
import { Loader2Icon, GitHubIcon, UsersIcon, FolderIcon, UserPlusIcon } from 'lucide-react';
import { ContributionGraph } from './ContributionGraph.jsx';

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

export default function GithubStats() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/fetch-github-data');
        if (!response.ok) throw new Error('Failed to fetch data');
        const githubData = await response.json();
        setData(githubData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 bg-[var(--background)] rounded-xl border border-[var(--muted)]">
        <div className="flex flex-col items-center gap-4">
          <Loader2Icon className="animate-spin w-12 h-12 text-[var(--primary)]" />
          <p className="text-[var(--foreground)] font-medium">Loading GitHub profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[var(--background)] border border-[var(--muted)] rounded-xl p-6 flex items-center gap-4">
        <div className="bg-[var(--muted)] rounded-full p-2">
          <svg className="w-6 h-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-[var(--primary)]">Failed to load GitHub data</h3>
          <p className="text-[var(--foreground)]">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="w-full space-y-6">
      <h2 className="text-3xl font-bold text-[var(--primary)] text-center">
      Check My GitHub Stats
    </h2>
    
      <div className="bg-[var(--background)] rounded-xl border border-[var(--muted)] shadow-lg overflow-hidden">
        {/* Header with profile info */}
        <div className="p-6 pb-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--primary)] rounded-full opacity-20 blur-md"></div>
              <img
                src={data.avatar_url}
                alt={`${data.name}'s profile`}
                className="w-24 h-24 rounded-full border-2 border-[var(--muted)] shadow-md relative z-10"
              />
            </div>
            
            {/* Profile details */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--primary)]">
                {data.name}
              </h2>
              <div className="flex items-center gap-2 text-[var(--foreground)] mb-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <a
                  href={`https://github.com/${data.login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  @{data.login}
                </a>
              </div>
              {data.bio && (
                <p className="text-[var(--foreground)] text-sm mt-1 max-w-2xl">
                  {data.bio}
                </p>
              )}
            </div>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-[var(--background)] rounded-lg border border-[var(--muted)] p-4 flex items-center transition-all hover:shadow-md">
              <div className="bg-[var(--muted)] p-3 rounded-lg mr-4">
                <FolderIcon className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--primary)]">{data.public_repos}</div>
                <div className="text-xs uppercase tracking-wider text-[var(--foreground)] font-medium">Repositories</div>
              </div>
            </div>
            
            <div className="bg-[var(--background)] rounded-lg border border-[var(--muted)] p-4 flex items-center transition-all hover:shadow-md">
              <div className="bg-[var(--muted)] p-3 rounded-lg mr-4">
                <UsersIcon className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--primary)]">{data.followers}</div>
                <div className="text-xs uppercase tracking-wider text-[var(--foreground)] font-medium">Followers</div>
              </div>
            </div>
            
            <div className="bg-[var(--background)] rounded-lg border border-[var(--muted)] p-4 flex items-center transition-all hover:shadow-md">
              <div className="bg-[var(--muted)] p-3 rounded-lg mr-4">
                <UserPlusIcon className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--primary)]">{data.following}</div>
                <div className="text-xs uppercase tracking-wider text-[var(--foreground)] font-medium">Following</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* GitHub Contribution Graph */}
        <div className="bg-[var(--background)] border-t border-[var(--muted)] rounded-b-xl">
          {username && <ContributionGraph username={username} />}
        </div>
      </div>
    </div>
  );
}
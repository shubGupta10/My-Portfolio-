'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Loader2Icon } from 'lucide-react';
import { ContributionGraph } from './ContributionGraph';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME as string;

export default function GitHub() {
  const [data, setData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <div className='flex justify-center items-center h-96'>
        <Loader2Icon className='animate-spin w-10 h-10' />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <Card className="w-full p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <img
            src={data.avatar_url}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-200"
          />
          <div>
            <h2 className="text-2xl font-bold">{data.name}</h2>
            <a 
              href={`https://github.com/${data.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              @{data.login}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 items-center">
          <div className="text-center">
            <div className="text-2xl font-bold">{data.public_repos}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{data.followers}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{data.following}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Following</div>
          </div>
        </div>
      </div>

      {/* GitHub Contribution Graph */}
      <div className="w-full overflow-hidden rounded-lg border">
       <ContributionGraph username={username} />
      </div>
    </Card>
  );
}
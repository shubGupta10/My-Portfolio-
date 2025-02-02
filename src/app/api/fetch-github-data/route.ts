// app/api/fetch-github-data/route.ts
import { NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

async function fetchGitHubData() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const userData = await response.json();
    
    return {
      login: userData.login,
      name: userData.name,
      bio: userData.bio,
      avatar_url: userData.avatar_url,
      followers: userData.followers,
      following: userData.following,
      public_repos: userData.public_repos,
      public_gists: userData.public_gists,
      pined_repos: userData.pined_repos,
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const data = await fetchGitHubData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}
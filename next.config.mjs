/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, 
    domains: [
      'assets.aceternity.com',
      'img.icons8.com', 
      'drive.google.com',
      'www.franciscomoretti.com',
      'avatars.githubusercontent.com',
      'ui.aceternity.com',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', 
};

export default nextConfig;

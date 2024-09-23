import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#030508] text-white py-6 ">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

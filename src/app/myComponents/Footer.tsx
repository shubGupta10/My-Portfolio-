import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#030508] text-white py-6 ">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© Designed by Shubham Kumar Gupta.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/shubGupta10" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shubham-kumar-gupta-30a916234" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
            LinkedIn
          </a>
          <a href="https://x.com/i_m_shubham45" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

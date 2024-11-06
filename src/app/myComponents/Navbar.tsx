'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Github, Twitter, Linkedin, Menu, X, Code2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NavMenu = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const scrollToSection = (sectionId: any) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = ['projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: 'https://github.com/shubGupta10',
      label: 'GitHub'
    },
    { 
      icon: <Twitter className="w-6 h-6" />, 
      href: 'https://x.com/i_m_shubham45',
      label: 'Twitter (X)'
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: 'https://www.linkedin.com/in/shubham-kumar-gupta-30a916234',
      label: 'LinkedIn'
    }
  ];

  const router = useRouter()

  const handleHome = () => {
    router.push('/')
  }

  return (
    <header className='fixed top-0 inset-x-0 z-50 h-20 bg-[#13192a]'>
      <nav className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo/Brand */}
          <div onClick={handleHome} className="cursor-pointer flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
  
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`
                  px-6 py-2.5 mx-2 text-sm lg:text-lg font-medium rounded-lg
                  transition-all duration-200
                  ${activeSection === id 
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-100 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
  
          {/* Right Section - Social Links & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-5">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg transition-colors duration-200 text-gray-100 hover:text-gray-900 hover:bg-gray-100"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg hover:bg-gray-100 hover:text-black"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen 
                ? <X className="w-7 h-7" /> 
                : <Menu className="w-7 h-7" />
              }
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 absolute top-20 left-0 bg-[#13192a] right-0  shadow-lg">
            <div className="flex flex-col space-y-2 px-6">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`
                    px-4 py-3 text-sm font-medium rounded-lg
                    transition-all duration-200
                    ${activeSection === id 
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-100 hover:text-gray-900 hover:bg-gray-100'
                    }
                  `}
                >
                  {label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg transition-colors duration-200 text-gray-100 hover:text-gray-900 hover:bg-gray-100"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavMenu;
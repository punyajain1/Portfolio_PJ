'use client';

import { useState, useEffect } from 'react';
import { Coffee, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCoffeeClick = () => {
    // You can add a link to buy you coffee or any other action
    window.open('https://buymeacoffee.com/yourprofile', '_blank');
  };

  return (
    <>
      {/* Static navbar section */}
      <section className="w-full border-t border-b border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#0d1117] text-black dark:text-[#f0f6fc]">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200 dark:border-[#30363d]">
          <div className="max-w-4xl mx-auto px-8 py-6">
            <div className="flex justify-end items-center gap-4">
              {/* Theme toggle button */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-full bg-gray-100 dark:bg-[#21262d] hover:bg-gray-200 dark:hover:bg-[#30363d] transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-[#f0f6fc]" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-[#f0f6fc]" />
                )}
              </button>

              {/* Coffee button */}
              <button
                onClick={handleCoffeeClick}
                className="p-3 rounded-full bg-gray-100 dark:bg-[#21262d] hover:bg-gray-200 dark:hover:bg-[#30363d] transition-colors duration-200"
                aria-label="Buy me a coffee"
              >
                <Coffee className="w-5 h-5 text-amber-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed pill-shaped navbar that appears on scroll */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex justify-center pt-6">
          <div 
            className={`transition-all duration-500 ease-in-out pointer-events-auto ${
              isScrolled 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-[-20px] pointer-events-none'
            }`}
          >
            <nav className="px-6 py-3 rounded-full bg-white/80 dark:bg-[#21262d]/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-[#30363d]/50">
              <div className="flex items-center gap-6">
                {/* Navigation links */}
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-sm font-medium text-gray-700 dark:text-[#f0f6fc] hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Experience
                </button>
                
                <button
                  onClick={() => scrollToSection('stack')}
                  className="text-sm font-medium text-gray-700 dark:text-[#f0f6fc] hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Skills
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm font-medium text-gray-700 dark:text-[#f0f6fc] hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>

                {/* Divider */}
                <div className="w-px h-4 bg-gray-300 dark:bg-[#30363d]"></div>

                {/* Theme toggle button (smaller) */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#30363d] transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="w-4 h-4 text-gray-700 dark:text-[#f0f6fc]" />
                  ) : (
                    <Moon className="w-4 h-4 text-gray-700 dark:text-[#f0f6fc]" />
                  )}
                </button>

                {/* Coffee button (smaller) */}
                <button
                  onClick={handleCoffeeClick}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#30363d] transition-colors duration-200"
                  aria-label="Buy me a coffee"
                >
                  <Coffee className="w-4 h-4 text-amber-600" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

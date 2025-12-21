'use client';

import { useState, useEffect } from 'react';
import { Coffee, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleCoffeeClick = () => {
    // You can add a link to buy you coffee or any other action
    window.open('https://lightning-dust-053.notion.site/Buy-Me-a-Coffee-The-Lazy-Way-17d72d69c0498008aa42ef7121aff3b6?source=copy_link', '_blank');
  };

  return (
    <>
      <section className="w-full border-b border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#0d1117] text-black dark:text-[#f0f6fc]">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200 dark:border-[#30363d]">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4">
            <div className="flex justify-between items-center">
              {/* Get in Touch button - Hidden on mobile, shown on larger screens */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:block text-sm font-medium text-gray-700 dark:text-[#f0f6fc] hover:text-black dark:hover:text-white transition-all duration-200 relative group"
              >
                Get in Touch
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-200"></span>
              </button>

              {/* Mobile menu button - Only shown on mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="sm:hidden p-2 rounded-full bg-gray-100 dark:bg-[#21262d] hover:bg-gray-200 dark:hover:bg-[#30363d] transition-colors duration-200 flex items-center justify-center"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700 dark:text-[#f0f6fc]" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700 dark:text-[#f0f6fc]" />
                )}
              </button>

              {/* Action buttons */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Theme toggle button */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-[#21262d] hover:bg-gray-200 dark:hover:bg-[#30363d] transition-colors duration-200 flex items-center justify-center"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 dark:text-yellow-400" />
                  ) : (
                    <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-[#f0f6fc]" />
                  )}
                </button>

                {/* Coffee button */}
                <button
                  onClick={handleCoffeeClick}
                  className="p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-[#21262d] hover:bg-gray-200 dark:hover:bg-[#30363d] transition-colors duration-200 flex items-center justify-center"
                  aria-label="Buy me a coffee"
                >
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-[#f0f6fc]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 sm:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-[#0d1117] border-l border-gray-200 dark:border-[#30363d] p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-6 mt-12">
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-lg font-medium text-gray-700 dark:text-[#f0f6fc] hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Experience
              </button>
              
              <button
                onClick={() => scrollToSection('stack')}
                className="text-left text-lg font-medium text-gray-700 dark:text-[#f0f6fc] hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Skills
              </button>
              
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-lg font-medium text-gray-700 dark:text-[#f0f6fc] hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
              
              <button
                onClick={() => scrollToSection('education')}
                className="text-left text-lg font-medium text-gray-700 dark:text-[#f0f6fc] hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Education
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-lg font-medium text-gray-700 dark:text-[#f0f6fc] hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed pill-shaped navbar that appears on scroll */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex justify-center pt-4 sm:pt-6 px-4">
          <div 
            className={`transition-all duration-500 ease-in-out pointer-events-auto ${
              isScrolled 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-[-20px] pointer-events-none'
            }`}
          >
            <nav className="px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-white/80 dark:bg-[#21262d]/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-[#30363d]/50">
              <div className="flex items-center gap-3 sm:gap-6">
                {/* Navigation links - Hidden on mobile */}
                <div className="hidden sm:flex items-center gap-6">
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
                </div>

                {/* Mobile hamburger menu in floating nav */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="sm:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#30363d] transition-colors duration-200 flex items-center justify-center"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="w-4 h-4 text-gray-700 dark:text-[#f0f6fc]" />
                </button>

                {/* Theme toggle button (smaller) */}
                <button
                  onClick={toggleDarkMode}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#30363d] transition-colors duration-200 flex items-center justify-center"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 dark:text-yellow-400" />
                  ) : (
                    <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 dark:text-[#f0f6fc]" />
                  )}
                </button>

                {/* Coffee button (smaller) */}
                <button
                  onClick={handleCoffeeClick}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#30363d] transition-colors duration-200 flex items-center justify-center"
                  aria-label="Buy me a coffee"
                >
                  <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
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

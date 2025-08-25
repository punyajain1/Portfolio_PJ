export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="">
      <div className="max-w-4xl">
        {/* Main content */}
        <div className="text-center space-y-2">
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto"></div>
          
          <div className="font-typewriter text-xs sm:text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase px-4">
            Let&apos;s create something amazing
          </div>
          
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 px-4">
            <button 
              onClick={handleGetInTouch}
              className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium tracking-wide"
            >
              Get in touch
            </button>
            <button 
              onClick={scrollToTop}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 font-medium tracking-wide"
            >
              ↑ Back to top
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
            <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">2025</span>
            <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

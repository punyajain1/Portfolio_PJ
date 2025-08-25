'use client';

import Link from 'next/link';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';
import { useTheme } from '../../context/ThemeContext';

export default function ProjectsPage() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="min-h-full bg-gray-50 dark:bg-[#0d1117] transition-colors duration-200" style={{
      backgroundImage: isDarkMode 
        ? 'radial-gradient(circle, rgba(209, 213, 219, 0.3) 1px, transparent 1px)' 
        : 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
      backgroundSize: '15px 15px',
      backgroundAttachment: 'fixed'
    }}>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header section with background for better visibility */}
          <div className="bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-sm rounded-lg p-6 mb-8 border border-zinc-200 dark:border-[#30363d]">
            {/* Back button */}
            <Link 
              href="/#projects" 
              className="inline-flex items-center text-zinc-600 dark:text-[#8b949e] hover:text-zinc-900 dark:hover:text-[#f0f6fc] mb-6 transition-colors px-3 py-2 border border-zinc-300 dark:border-[#30363d] rounded-lg hover:border-zinc-400 dark:hover:border-[#484f58] hover:bg-zinc-50 dark:hover:bg-[#21262d] bg-white dark:bg-[#161b22]"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to portfolio
            </Link>

            {/* Page header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-[#f0f6fc]">All Projects</h1>
              <p className="text-zinc-600 dark:text-[#8b949e]">
                A collection of my recent work and side projects. Each project represents a unique challenge and learning experience.
              </p>
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail}
                slug={project.slug}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

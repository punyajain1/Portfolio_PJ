'use client';

import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  period: string;
  technologies: string[];
  longDescription: string[];
  features: string[];
  links: {
    visit?: string;
    source?: string;
  };
  images?: string[];
}

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { isDarkMode } = useTheme();

  return (
    <div className="h-full" style={{
        backgroundImage: isDarkMode 
          ? 'radial-gradient(circle, rgba(209, 213, 219, 0.3) 1px, transparent 1px)' 
          : 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '15px 15px',
        backgroundAttachment: 'fixed'
    }}>
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-[#30363d] shadow-lg p-8">
        {/* Back button */}
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-zinc-600 dark:text-[#8b949e] hover:text-zinc-900 dark:hover:text-[#f0f6fc] mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Project header */}
        <div className="mb-8">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
            <Image
              src={project.thumbnail || ""}
              alt={`${project.title} thumbnail`}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-[#f0f6fc]">{project.title}</h1>
              <p className="text-zinc-600 dark:text-[#8b949e]">Period: {project.period}</p>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
              {project.links.visit && (
                <a
                  href={project.links.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.links.source && (
                <a
                  href={project.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-[#30363d] text-gray-700 dark:text-[#f0f6fc] bg-white dark:bg-[#21262d] rounded-lg hover:bg-gray-50 dark:hover:bg-[#30363d] transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project description */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-[#f0f6fc]">About this project</h2>
          <ul className="space-y-3">
            {project.longDescription.map((description, index) => (
              <li key={index} className="text-zinc-700 dark:text-[#8b949e] text-lg leading-relaxed flex items-start">
                <span className="text-zinc-400 dark:text-[#656d76] mr-3 mt-1">•</span>
                <span>{description}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-[#f0f6fc]">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li key={index} className="text-zinc-700 dark:text-[#8b949e] flex items-start">
                <span className="text-lg mr-3">{feature.split(' ')[0]}</span>
                <span>{feature.split(' ').slice(1).join(' ')}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-[#f0f6fc]">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Additional images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-[#f0f6fc]">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

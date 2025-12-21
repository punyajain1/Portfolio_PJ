'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  slug: string;
  technologies: string[];
}

export default function ProjectCard({ title, description, thumbnail, slug, technologies }: ProjectCardProps) {
  const hasImage = thumbnail && thumbnail.trim() !== '';
  
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#0d1117] rounded-lg p-4 hover:border-gray-300 dark:hover:border-[#656d76] hover:shadow-lg transition-all duration-200 cursor-pointer group ${
        hasImage ? 'h-auto' : 'h-fit'
      }`}>
        {hasImage && (
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        
        <h3 className={`text-lg font-semibold mb-2 text-black dark:text-[#f0f6fc] group-hover:text-blue-600 dark:group-hover:text-[#58a6ff] transition-colors ${
          !hasImage ? 'text-xl' : ''
        }`}>
          {title}
        </h3>
        
        <p className={`text-zinc-600 dark:text-[#8b949e] text-sm mb-3 line-clamp-2 ${
          !hasImage ? 'text-base line-clamp-3' : ''
        }`}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {technologies.slice(0, hasImage ? 3 : 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded"
            >
              {tech}
            </span>
          ))}
          {technologies.length > (hasImage ? 3 : 4) && (
            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-[#21262d] text-gray-600 dark:text-[#8b949e] rounded">
              +{technologies.length - (hasImage ? 3 : 4)} more
            </span>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

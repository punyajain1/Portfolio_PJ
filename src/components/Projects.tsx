'use client';

import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const displayedProjects = projects.slice(0, 4);

  return (
    <section className="mb-12">
      <h2 id="projects-heading" className="text-3xl font-serif italic text-black dark:text-white mb-6">
        <span>Projects</span>
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        {displayedProjects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProjectCard
              project={project}
              idx={idx}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center mt-6"
      >
        <Link href="/projects">
          <div className="group relative overflow-hidden rounded-lg 
                    bg-white dark:bg-[#0a0a0a] 
                    border border-neutral-200 dark:border-neutral-800 
                    text-neutral-800 dark:text-neutral-200 text-sm font-medium px-6 py-2.5 
                    transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-900
                    cursor-pointer"
          >
            View All ↗
          </div>
        </Link>
      </motion.div>
    </section>
  );
}


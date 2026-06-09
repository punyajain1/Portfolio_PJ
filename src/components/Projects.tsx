'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data/projects';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function Projects() {
    const displayedProjects = projects.slice(0, 3);
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [expandedProject, setExpandedProject] = useState<string | null>(displayedProjects[0].slug);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Offset the image slightly from the cursor
        mouseX.set(e.clientX + 16);
        mouseY.set(e.clientY + 16);
    };

    return (
        <section className="mb-20">
            <h2 id="projects-heading" className="text-xl font-serif italic mb-8 text-black dark:text-white flex items-center gap-2">
                Proof of Work
            </h2>

            <div className="flex flex-col border-t border-zinc-200 dark:border-zinc-800">
                {displayedProjects.map((project) => (
                    <motion.div
                        key={project.slug}
                        className="group relative border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300 hover:bg-zinc-50 dark:hover:bg-[#0a0a0a]"
                        onMouseEnter={() => setHoveredProject(project.slug)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onMouseMove={handleMouseMove}
                        initial={false}
                    >
                        <div
                            onClick={() => setExpandedProject(expandedProject === project.slug ? null : project.slug)}
                            className="py-5 sm:py-6 px-2 sm:px-4 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                            {/* Header Line */}
                            <div className="flex items-center gap-4">
                                <h3 className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-6 text-zinc-500">
                                <div className="hidden md:flex gap-3">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-[10px] uppercase tracking-widest font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <motion.div
                                    animate={{ rotate: expandedProject === project.slug ? 45 : 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="p-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors"
                                >
                                    <Plus size={16} className="text-zinc-600 dark:text-zinc-400" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence initial={false}>
                            {expandedProject === project.slug && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-2 sm:px-4 pb-6 sm:pb-8 pt-2">
                                        <div className="max-w-2xl">
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6 md:hidden">
                                                {project.technologies.slice(0, 4).map((tech) => (
                                                    <span key={tech} className="px-2 py-1 text-[10px] uppercase tracking-widest font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800/50 rounded-full border border-zinc-200 dark:border-zinc-800">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <Link
                                                href={`/projects?id=${project.slug}`}
                                                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black dark:text-white hover:opacity-70 transition-opacity"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                View Details <ArrowUpRight size={14} strokeWidth={1.5} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Floating Image on Hover (Cursor Following) */}
                        <AnimatePresence>
                            {hoveredProject === project.slug && project.thumbnail && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    style={{ x, y }}
                                    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                                    className="hidden md:block fixed top-0 left-0 w-72 aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200/50 dark:border-zinc-700/50 shadow-2xl z-50 bg-zinc-100 dark:bg-zinc-900 pointer-events-none"
                                >
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="288px"
                                        priority={true}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 px-2 sm:px-4">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                >
                    View all projects <ArrowUpRight size={14} strokeWidth={1.5} />
                </Link>
            </div>
        </section>
    );
}

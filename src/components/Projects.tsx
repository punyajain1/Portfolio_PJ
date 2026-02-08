'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data/projects';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';

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
        <section className="mb-16">
            <h2 className="text-lg font-bold mb-6 text-black dark:text-white flex items-center gap-2">
                Proof of Work <span className="text-zinc-400 font-normal">#</span>
            </h2>

            <div className="flex flex-col">
                {displayedProjects.map((project) => (
                    <motion.div
                        key={project.slug}
                        className="group relative border-b border-zinc-100 dark:border-zinc-800 last:border-0"
                        onMouseEnter={() => setHoveredProject(project.slug)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onMouseMove={handleMouseMove}
                        initial={false}
                    >
                        <div
                            onClick={() => setExpandedProject(expandedProject === project.slug ? null : project.slug)}
                            className="py-4 cursor-pointer flex flex-col gap-4"
                        >
                            {/* Header Line */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <motion.span
                                        animate={{ rotate: expandedProject === project.slug ? 90 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-zinc-400"
                                    >
                                        <ChevronRight size={16} />
                                    </motion.span>
                                    <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                                        {project.title}
                                    </h3>
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
                                        <div className="pl-6 pb-2 pr-4 sm:pr-8 grid grid-cols-1 md:grid-cols-[1fr,200px] gap-6">
                                            <div>
                                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
                                                    {project.technologies.slice(0, 5).map((tech) => (
                                                        <span key={tech} className="text-xs font-mono text-zinc-500 dark:text-zinc-500">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                <Link
                                                    href={`/projects?id=${project.slug}`}
                                                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4"
                                                >
                                                    View Details <ExternalLink size={12} />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Floating Image on Hover (Cursor Following) */}
                        <AnimatePresence>
                            {hoveredProject === project.slug && project.thumbnail && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    style={{ x, y }}
                                    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                                    className="hidden md:block fixed top-0 left-0 w-64 h-36 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-2xl z-50 bg-zinc-900 pointer-events-none"
                                >
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="256px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 pl-6">
                <Link
                    href="/projects"
                    className="inline-block text-sm text-zinc-500 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4"
                >
                    view all projects
                </Link>
            </div>
        </section>
    );
}

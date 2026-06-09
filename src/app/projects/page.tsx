'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { projects, Project } from '../../data/projects';
import { Footer } from '@/components';
import { useTheme } from '@/context/ThemeContext';

import { ArrowUpRight, ChevronDown, ChevronUp, Home, Sun, Moon, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const ProjectItem = ({ project, defaultExpanded }: { project: Project; defaultExpanded?: boolean }) => {
    const { isDarkMode } = useTheme();
    const [isExpanded, setIsExpanded] = useState(defaultExpanded || false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (defaultExpanded && itemRef.current) {
            // Add a small delay to ensure layout is settled
            const timer = setTimeout(() => {
                const yOffset = -100; // Offset for navbar
                const element = itemRef.current;
                if (element) {
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [defaultExpanded]);

    return (
        <motion.div
            ref={itemRef}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`group flex flex-col p-5 sm:p-6 rounded-2xl transition-all duration-300 ${isExpanded
                ? 'bg-zinc-50/50 dark:bg-[#111] border border-zinc-200 dark:border-[#333]'
                : 'bg-white dark:bg-[#0a0a0a] border border-zinc-100 dark:border-[#222] hover:border-zinc-300 dark:hover:border-[#444] shadow-sm hover:shadow-md'
                }`}
        >
            {/* Header: Title and Controls */}
            <div className="flex justify-between items-start mb-4 gap-3">
                <div>
                    <h2 className="text-lg sm:text-xl font-serif text-zinc-900 dark:text-zinc-100 mb-1.5 group-hover:italic transition-all duration-300">
                        {project.title}
                    </h2>
                </div>

                <div className="flex items-center gap-1">
                    {project.links.source && (
                        <Link
                            href={project.links.source}
                            target="_blank"
                            className="p-1.5 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                            aria-label="View Source Code"
                        >
                            <Github size={18} />
                        </Link>
                    )}
                    {project.links.visit && (
                        <Link
                            href={project.links.visit}
                            target="_blank"
                            className="p-1.5 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                            aria-label="Visit Project"
                        >
                            <ArrowUpRight size={18} strokeWidth={1.5} />
                        </Link>
                    )}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="p-1.5 text-zinc-400 hover:text-black dark:hover:text-white transition-colors ml-1 focus:outline-none"
                        aria-label="Toggle Details"
                    >
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                </div>
            </div>

            {/* Image */}
            {project.thumbnail && (
                <div className="relative w-full aspect-[21/9] sm:aspect-[2.5/1] mb-5 rounded-lg overflow-hidden border border-zinc-100 dark:border-[#222] bg-zinc-100 dark:bg-[#111]">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}

            {/* Description */}
            <p className="text-zinc-600 dark:text-[#a1a1a1] leading-relaxed text-xs sm:text-sm mb-5">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
                {(isExpanded ? project.technologies : project.technologies.slice(0, 5)).map((tech) => (
                    <span
                        key={tech}
                        className="px-2.5 py-1 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-zinc-500 bg-zinc-100 dark:bg-[#1a1a1a] rounded-full border border-zinc-200 dark:border-[#333]"
                    >
                        {tech}
                    </span>
                ))}
                {!isExpanded && project.technologies.length > 5 && (
                    <span className="px-2.5 py-1 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-zinc-400 border border-transparent">
                        +{project.technologies.length - 5} more
                    </span>
                )}
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-[#222] space-y-6">
                            {/* About */}
                            <div>
                                <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-black dark:text-white mb-3">
                                    About Project
                                </h3>
                                <div className="space-y-3 text-zinc-600 dark:text-[#a1a1a1] text-xs sm:text-sm leading-relaxed">
                                    {project.longDescription.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            {project.features && project.features.length > 0 && (
                                <div>
                                    <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-black dark:text-white mb-3">
                                        Key Features
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-[#a1a1a1]">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600 flex-shrink-0"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const ProjectsList = () => {
    const searchParams = useSearchParams();
    const activeId = searchParams.get('id');

    return (
        <div className="flex flex-col space-y-8">
            {projects.map((project) => (
                <ProjectItem
                    key={project.slug}
                    project={project}
                    defaultExpanded={activeId === project.slug}
                />
            ))}
        </div>
    );
};

export default function ProjectsPage() {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 select-none">
            <main className="max-w-2xl mx-auto px-4 pb-20 pt-8">
                <div className="flex items-center justify-between mb-12">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full w-10 h-10"
                        asChild
                    >
                        <Link
                            href="/"
                            aria-label="Back to home"
                        >
                            <Home className="size-4" />
                        </Link>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDarkMode}
                        className="rounded-full w-10 h-10"
                        aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
                    >
                        {isDarkMode ? (
                            <Sun className="size-4" />
                        ) : (
                            <Moon className="size-4" />
                        )}
                    </Button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 space-y-2"
                >
                    <h1 className="text-3xl sm:text-4xl font-serif italic text-black dark:text-white">
                        Proof of Work
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
                        A showcase of my work and side projects.
                    </p>
                </motion.div>

                <Suspense fallback={<div className="text-zinc-500">Loading projects...</div>}>
                    <ProjectsList />
                </Suspense>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 pt-8 border-t border-zinc-100 dark:border-[#333]"
                >
                    <Link href="/" className="text-sm text-zinc-500 hover:text-black dark:hover:text-white underline underline-offset-4 transition-colors">
                        ← Back to home
                    </Link>
                </motion.div>

                <Footer />
            </main>
        </div>
    );
}

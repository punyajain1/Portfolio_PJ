'use client';

import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  technologies: string[];
}

export default function ProjectCard({ title, description, slug, technologies }: ProjectCardProps) {
  return (
    <div className="mb-8 group">
        <Link href={`/projects/${slug}`} className="block">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-4 decoration-zinc-400">
                {title}
            </h3>
            
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed max-w-2xl">
                {description}
            </p>
            
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                {technologies.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-zinc-500 dark:text-zinc-500 font-mono">
                        {tech}
                    </span>
                ))}
            </div>
        </Link>
    </div>
  );
}

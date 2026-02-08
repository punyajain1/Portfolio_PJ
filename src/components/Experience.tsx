'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const experiences = [
  {
    company: "Starportal",
    role: "Frontend Developer",
    period: "June 2025 - July 2025",
    description: [
      "Developed smooth, responsive user experiences using React, TypeScript, and Framer Motion.",
      "Implemented reusable components and optimized application performance for better user engagement.",
      "Collaborated closely with the design team to ensure pixel-perfect implementation of UI designs."
    ],
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"]
  },
  {
    company: "Freelancing",
    role: "Backend & Software Developer",
    period: "July 2025 - August 2025",
    description: [
      "Migrated databases to PostgreSQL and optimized backend performance with Node.js and Prisma.",
      "Designed and implemented RESTful APIs to support various frontend features.",
      "Worked on database schema design and normalization to improve data integrity."
    ],
    technologies: ["Node.js", "PostgreSQL", "Prisma", "Express", "REST API"]
  }
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <h2 className="text-lg font-bold mb-6 text-black dark:text-white flex items-center gap-2">
        Experience <span className="text-zinc-400 font-normal">#</span>
      </h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className={`group rounded-lg border transition-colors duration-200 ${isExpanded
                ? 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50'
                : 'border-transparent hover:border-zinc-100 dark:hover:border-zinc-800'
                }`}
            >
              <Button
                variant="ghost"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full h-auto flex flex-col sm:flex-row sm:items-baseline justify-between p-4 text-left cursor-pointer hover:bg-transparent"
              >
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 transform transition-transform duration-200" style={{ rotate: isExpanded ? "90deg" : "0deg" }}>
                    <ChevronDown size={16} />
                  </span>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.role} <span className="text-zinc-500 font-normal">at</span> {exp.company}
                  </h3>
                </div>
                <span className="text-sm text-zinc-500 font-mono mt-1 sm:mt-0 pl-6 sm:pl-0">{exp.period}</span>
              </Button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pl-10">
                      <ul className="list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed marker:text-zinc-300 dark:marker:text-zinc-700 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-md border border-zinc-200 dark:border-zinc-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

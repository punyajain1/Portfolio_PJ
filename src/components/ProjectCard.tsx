'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Github } from "lucide-react";

const ProjectCard = ({
  project,
  idx,
}: {
  project: any;
  idx: number;
}) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = project.thumbnail || '/banner.jpg';

  // These will be revealed behind the thumbnail on hover
  const bgImages = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg"
  ];
  const bgImage = bgImages[idx % bgImages.length];

  return (
    <motion.div
      onClick={() => router.push(`/projects?id=${project.slug}`)}
      className="group relative flex flex-col z-10 h-full w-full cursor-pointer overflow-hidden rounded-[20px] border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#0a0a0a] transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm hover:shadow-xl hover:shadow-black/20"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top Image Section - Responsive height */}
      <div className="relative h-[170px] sm:h-[180px] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800/50 flex-shrink-0">

        {/* Abstract Background - Visible on mobile by default, and on hover for sm screens */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 opacity-60 scale-105 sm:opacity-0 sm:scale-100 sm:group-hover:opacity-70 sm:group-hover:scale-105"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />

        {/* Dark overlay for abstract bg */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40 transition-opacity duration-500 opacity-30 sm:opacity-0 group-hover:opacity-100" />

        {/* Foreground Project Thumbnail */}
        <div
          className="absolute bg-cover bg-top z-10 transition-all duration-500 ease-out
            top-[10px] left-[10px] right-[10px] bottom-[10px] rounded-[10px] shadow-md grayscale-0
            sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:rounded-none sm:shadow-none sm:grayscale
            sm:group-hover:top-[12px] sm:group-hover:left-[12px] sm:group-hover:right-[12px] sm:group-hover:bottom-[12px]
            sm:group-hover:rounded-[10px] sm:group-hover:grayscale-0 sm:group-hover:shadow-[0px_10px_25px_rgba(0,0,0,0.5)]"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
      </div>

      {/* Content Section - Adjusted padding for responsiveness */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">

        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-bold font-sans text-neutral-900 dark:text-white tracking-tight truncate">
            {project.title}
          </h3>
        </div>

        {/* Description - Slightly smaller text */}
        <p className="text-[13px] text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed font-mono">
          {project.description}
        </p>

        {/* Technologies - Tighter spacing */}
        <div className="flex flex-wrap gap-1.5 mt-3 mb-2">
          {project.technologies?.slice(0, 3).map((item: string) => (
            <span
              key={item}
              className="px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 text-[9px] font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-widest bg-neutral-50 dark:bg-neutral-900 leading-none"
            >
              {item}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 text-[9px] font-mono text-neutral-500 dark:text-neutral-500 uppercase tracking-widest bg-transparent leading-none">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Bottom Row: Links & Click to Expand */}
        <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-neutral-100 dark:border-neutral-800/50">
          <div className="flex items-center gap-3">
            {project.links?.visit && (
              <Globe
                size={15}
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                onClick={(e) => { e.stopPropagation(); window.open(project.links.visit, "_blank"); }}
              />
            )}
            {project.links?.source && (
              <Github
                size={15}
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                onClick={(e) => { e.stopPropagation(); window.open(project.links.source, "_blank"); }}
              />
            )}
          </div>

          <div className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
            <span>Click to expand</span>
            <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

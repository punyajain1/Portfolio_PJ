import Image from 'next/image';
import Link from 'next/link';

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
      <div className={`border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer group ${
        hasImage ? 'h-auto' : 'h-fit'
      }`}>
        {hasImage && (
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        )}
        
        <h3 className={`text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors ${
          !hasImage ? 'text-xl' : ''
        }`}>
          {title}
        </h3>
        
        <p className={`text-zinc-600 text-sm mb-3 line-clamp-2 ${
          !hasImage ? 'text-base line-clamp-3' : ''
        }`}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {technologies.slice(0, hasImage ? 3 : 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded"
            >
              {tech}
            </span>
          ))}
          {technologies.length > (hasImage ? 3 : 4) && (
            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
              +{technologies.length - (hasImage ? 3 : 4)} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

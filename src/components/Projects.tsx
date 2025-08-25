import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const displayedProjects = projects.slice(0, 2);

  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-xl font-bold mb-4 sm:mb-6 text-black dark:text-[#f0f6fc]">Projects({projects.length})</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail? project.thumbnail:""}
            slug={project.slug}
            technologies={project.technologies}
          />
        ))}
      </div>
      
      {projects.length > 2 && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <Link
            href="/projects"
            className="px-4 sm:px-6 py-2 bg-gray-100 text-gray-800 dark:bg-[#21262d] dark:text-[#f0f6fc] rounded-lg hover:bg-gray-200 dark:hover:bg-[#30363d] transition-colors font-medium text-sm sm:text-base"
          >
            View All Projects ({projects.length})
          </Link>
        </div>
      )}
    </section>
  );
}

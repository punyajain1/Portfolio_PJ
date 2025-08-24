import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const displayedProjects = projects.slice(0, 2);

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6">Projects({projects.length})</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            View All Projects ({projects.length})
          </Link>
        </div>
      )}
    </section>
  );
}

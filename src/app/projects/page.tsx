import Link from 'next/link';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back button */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-zinc-600 hover:text-zinc-900 mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to portfolio
        </Link>

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Projects</h1>
          <p className="text-zinc-600">
            A collection of my recent work and side projects. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              slug={project.slug}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

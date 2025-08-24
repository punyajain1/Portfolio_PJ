const programmingLanguages = [
  { name: "C++", url: "https://isocpp.org/" },
  { name: "Python", url: "https://www.python.org/" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { name: "Java", url: "https://www.java.com/" },
];

const frameworksAndLibraries = [
  { name: "React", url: "https://react.dev/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "LangChain", url: "https://js.langchain.com/" },
  { name: "OpenAI SDK", url: "https://platform.openai.com/docs/libraries" },
  { name: "Anthropic SDK", url: "https://docs.anthropic.com/claude/reference/client-sdks" },
  { name: "Gemini SDK", url: "https://ai.google.dev/gemini-api/docs" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/" },
  { name: "shadcn/ui", url: "https://ui.shadcn.com/" },
  { name: "Radix UI", url: "https://www.radix-ui.com/" },
  { name: "Zod", url: "https://zod.dev/" },
  
];

const toolsAndTechnologies = [
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "Vite", url: "https://vitejs.dev/" },
  { name: "Git", url: "https://git-scm.com/" },
  { name: "GitHub", url: "https://github.com/" },
  { name: "Prisma", url: "https://www.prisma.io/" },
  { name: "Mongoose", url: "https://mongoosejs.com/" },
  { name: "Bcrypt", url: "https://www.npmjs.com/package/bcrypt" },
  { name: "Figma", url: "https://www.figma.com/" }
];

const databases = [
  { name: "MongoDB", url: "https://www.mongodb.com/" },
  { name: "PostgreSQL", url: "https://www.postgresql.org/" },
  { name: "MySQL", url: "https://www.mysql.com/" },
  { name: "Supabase", url: "https://supabase.com/" },
];

export default function Stack() {
  const renderTechSection = (title: string, technologies: { name: string; url: string }[]) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-[#f0f6fc]">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-[#21262d] dark:hover:bg-[#30363d] dark:text-[#f0f6fc] rounded-full transition-colors"
          >
            {tech.name}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6 text-black dark:text-[#f0f6fc]">Stack</h2>
      
      {renderTechSection("Programming Languages", programmingLanguages)}
      {renderTechSection("Frameworks & Libraries", frameworksAndLibraries)}
      {renderTechSection("Databases", databases)}
      {renderTechSection("Tools & Technologies", toolsAndTechnologies)}
    </section>
  );
}

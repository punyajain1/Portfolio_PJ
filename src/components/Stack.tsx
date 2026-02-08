'use client';

const skills = [
  "TypeScript", "JavaScript", "Python", "C++", "C",
  "React", "Next.js", "Node.js", "Express", "Tailwind CSS",
  "Framer Motion", "LangChain",
  "MongoDB", "PostgreSQL", "MySQL", "Prisma ORM", "Mongoose",
  "OpenAI SDK", "Gemini SDK", "LLM", "AI Agents",
  "Git", "RESTful APIs", "DSA", "RAG", ".....Many More"
];

export default function Stack() {
  return (
    <section className="mb-16" id="stack">
      <h2 className="text-lg font-bold mb-6 text-black dark:text-white flex items-center gap-2">
        Skills <span className="text-zinc-400 font-normal">#</span>
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

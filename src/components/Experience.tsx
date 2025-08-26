const experiences = [
  {
    company: "Starportal",
    positions: [
      {
        title: "Frontend Developer Intern",
        type: "Freelance",
        period: "May 2025—June 2025",
        current: false,
        description: [
          "Developed the frontend for a fast-paced startup using React, TypeScript, and Framer Motion to deliver a smooth, responsive user experience",
          "Implemented interactive UI components, micro-animations, and dynamic layouts to enhance user engagement",
          "Worked closely with the CEO and design team to build pixel-perfect, performant interfaces aligned with the brand vision",
          "Redesigned the entire frontend architecture to improve user experience and performance"
        ],
        technologies: [
          "Next.js", "shadcn/ui", "TypeScript", "Tailwind CSS", "Framer Motion",  "GitHub"
        ]
      }
    ]
  },{
    company: "Anonymous",
    positions: [
      {
        title: "Backend Developer",
        type: "Freelance",
        period: "June 2025— June 2025",
        current: false,
        description: [
  "Migrated backend database from MongoDB with Mongoose to PostgreSQL",
  "Utilized Prisma ORM for schema definition and database management",
  "Ensured data integrity and safety during migration process",
  "Maintained schema consistency across different environments",
  "Optimized queries and relations for PostgreSQL performance",
  "Implemented safety checks to prevent data loss or corruption"
],
        technologies: [
          "PostgreSQL", "Node.js", "TypeScript", "Prisma", "MongoDB","Mongoose" , "Express"
        ]
      }
    ]
  },
  {
    company: "Anonymous",
    positions: [
      {
        title: "Software Developer",
        type: "Freelance",
        period: "June 2025 — June 2025",
        current: false,
        description: [
  "Implemented AI-powered chatbot for customer interaction",
  "Integrated OpenAI API to handle product-related queries",
  "Enabled chatbot to schedule customer support callbacks",
  "Added functionality to track customer orders through chatbot",
  "Improved user experience by providing instant and automated responses"
],
        technologies: [

        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-xl font-bold mb-4 sm:mb-6 text-black dark:text-[#f0f6fc]">Experience</h2>
      
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="space-y-3 sm:space-y-4">
            <h3 className="text-lg font-semibold text-black dark:text-[#f0f6fc]">{exp.company}</h3>
            {exp.positions.map((position, index) => (
              <div key={index} className="ml-2 sm:ml-4 border-l-2 border-gray-200 dark:border-[#30363d] pl-3 sm:pl-4 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h4 className="font-medium text-black dark:text-[#f0f6fc]">{position.title}</h4>
                  {position.current && (
                    <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full w-fit">
                      Current
                    </span>
                  )}
                </div>
                <div className="text-sm text-zinc-600 dark:text-[#8b949e] space-y-1">
                  <p><strong>Employment Type:</strong> {position.type}</p>
                  <p><strong>Employment Period:</strong> {position.period}</p>
                </div>
                
                {position.description.length > 0 && (
                  <ul className="text-sm text-zinc-700 dark:text-[#8b949e] space-y-1 list-disc list-inside pl-2 sm:pl-0">
                    {position.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                
                {position.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {position.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

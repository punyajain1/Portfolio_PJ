'use client';

const education = [
  {
    institution: "JSS Academy of Technical Education",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "2023 — 2027",
    details: [
      "CGPA: 8.00",
      "Coursework: Data Structures, Algorithms, DBMS, Operating Systems"
    ]
  }
];

export default function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-lg font-bold mb-6 text-black dark:text-white flex items-center gap-2">
        Education <span className="text-zinc-400 font-normal">#</span>
      </h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="group rounded-lg border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 transition-colors duration-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between p-4 pb-2">
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  at <span className="text-zinc-700 dark:text-zinc-300 font-medium">{edu.institution}</span>
                </p>
              </div>
              <span className="text-sm text-zinc-500 font-mono mt-2 sm:mt-0 flex-shrink-0">
                {edu.period}
              </span>
            </div>

            <div className="px-4 pb-4">
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-600 dark:text-zinc-400 marker:text-zinc-300 dark:marker:text-zinc-700">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

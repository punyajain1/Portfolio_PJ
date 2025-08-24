const education = [
  {
    institution: "JSS Academy of Technical Education",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "2023—2027",
    expectedGraduation: "Expected Aug 2027",
    cgpa: "8.00",
    location: "Noida, Uttar Pradesh"
  }
];

export default function Education() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="ml-4 border-l-2 border-gray-100 pl-4 space-y-2">
            <h4 className="font-bold text-lg">{edu.institution}</h4>
            <p className="text-md font-medium text-zinc-900">{edu.degree}</p>
            <div className="text-sm text-zinc-600 space-y-1">
              <p><strong>Period:</strong> {edu.period}</p>
              <p><strong>Expected Graduation:</strong> {edu.expectedGraduation}</p>
              <p><strong>CGPA:</strong> {edu.cgpa}</p>
              <p><strong>Location:</strong> {edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

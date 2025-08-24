export default function Resume() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6">Resume</h2>
      
      <div className="border border-gray-200 rounded-lg p-6">
        <p className="text-zinc-700 mb-6">
          Download or view my latest resume to learn more about my experience and skills.
        </p>
        
        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

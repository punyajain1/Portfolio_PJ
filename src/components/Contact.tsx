export default function Contact() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6 text-black dark:text-[#f0f6fc]">Have an Idea?</h2>
      
      <div className="border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#0d1117] rounded-lg p-6">
        <p className="text-zinc-700 dark:text-[#8b949e] mb-6">
          Got a project in mind you'd like to see come to life? I'm always excited to
          explore new ideas.
        </p>
        
        <div className="flex gap-4">
          <a
            href="https://x.com/punyajain"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-[#238636] dark:hover:bg-[#2ea043] transition-colors"
          >
            Message on X
          </a>
          <a
            href="https://cal.com/punya/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 dark:border-[#30363d] text-gray-700 dark:text-[#f0f6fc] rounded-lg hover:bg-gray-50 dark:hover:bg-[#21262d] transition-colors"
          >
            Schedule Call
          </a>
        </div>
      </div>
    </section>
  );
}

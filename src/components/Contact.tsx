export default function Contact() {
  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-xl font-bold mb-4 sm:mb-6 text-black dark:text-[#f0f6fc]">Have an Idea?</h2>
      
      <div className="border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#0d1117] rounded-lg p-4 sm:p-6">
        <p className="text-zinc-700 dark:text-[#8b949e] mb-4 sm:mb-6 text-sm sm:text-base">
          Got a project in mind you&apos;d like to see come to life? I&apos;m always excited to
          explore new ideas.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <a
            href="mailto:punya01155@gmail.com"
            className="px-4 py-3 border border-red-200 dark:border-red-800/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-center font-medium text-sm sm:text-base"
          >
            Send Email
          </a>
          <a
            href="https://wa.me/918882488639"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 border border-green-200 dark:border-green-800/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-center font-medium text-sm sm:text-base"
          >
            WhatsApp
          </a>
          <a
            href="https://x.com/PunyaJain01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 border border-black dark:border-white/30 text-black dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-center font-medium text-sm sm:text-base"
          >
            Message on X
          </a>
          <a
            href="https://cal.com/punya-jain/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 border border-blue-200 dark:border-blue-800/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center font-medium text-sm sm:text-base"
          >
            Schedule Call
          </a>
        </div>
      </div>
    </section>
  );
}

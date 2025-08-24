export default function Contact() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6">Have an Idea?</h2>
      
      <div className="border border-gray-200 rounded-lg p-6">
        <p className="text-zinc-700 mb-6">
          Got a project in mind you'd like to see come to life? I'm always excited to
          explore new ideas.
        </p>
        
        <div className="flex gap-4">
          <a
            href="https://x.com/punyajain"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Message on X
          </a>
          <a
            href="https://cal.com/punya/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Schedule Call
          </a>
        </div>
      </div>
    </section>
  );
}

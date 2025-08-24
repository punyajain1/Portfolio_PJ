import { GitHubDark } from '../../icons/github';
import { LinkedinLight,LinkedinDark } from '../../icons/linkedin';
import { Xdark } from '../../icons/x';

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/punyajain",
    icon: <LinkedinDark />,
    username: "/punyajain"
  },
  {
    name: "GitHub", 
    url: "https://github.com/punyajain",
    icon: <GitHubDark />,
    username: "/punyajain"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/punyajain", 
    icon: <Xdark />,
    username: "/punyajain"
  }
];

export default function Header() {
  return (
    <header className="mb-12">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
          <img src="/punya.jpg" alt="Punya" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">Hi!! Punya Here</h1>
          <p className="text-zinc-600 mb-3">20-year-old software developer from India 🇮🇳</p>
          <p className="text-zinc-600 text-sm leading-relaxed mb-4">
            I craft full-stack apps, blend AI with the web, and build tools that empower people.
            From AI-powered profile analyzers to intelligent agents, I enjoy coding things that feel like magic ✨
          </p>
          
          {/* Available to work indicator & Resume */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              Available to work
            </div>
            
            {/* Resume Link */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-800 text-white text-sm font-medium rounded-full hover:scale-105 transition-all duration-200 flex items-center gap-2"
              title="View Resume"
            >
              <svg 
                className="w-3 h-3 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              View Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="flex flex-wrap gap-3 items-center">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-100 hover:bg-slate-200 rounded-lg hover:scale-105 transition-all duration-200 px-3 py-2 border border-slate-200 group"
            title={link.name}
          >
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
              {link.icon}
            </div>
            <span className="text-sm text-slate-700 font-medium group-hover:text-slate-900">
              {link.username}
            </span>
          </a>
        ))}
      </div>
    </header>
  );
}
export interface Project {
  title: string;
  slug: string;
  period: string;
  description: string;
  longDescription: string[];
  features: string[];
  technologies: string[];
  thumbnail?: string;
  images?: string[];
  links: {
    visit?: string;
    source?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Intelliguide – AI-Powered Codeforces Profile Analyzer",
    slug: "intelliguide",
    period: "January, 2025 - ∞",
    description: "A Smart AI powered Codeforces profile analyzer.",
    longDescription: ["Over 600 usages and 400+ new users in 48 hours.","Integrated Codeforces and OpenAI APIs to generate personalized skill enhancement strategies and automated","performance insights, streamlining manual analysis tasks by 90%","Developed full-stack platform with Next.js, MongoDB, and Tailwind CSS, delivering cross-device responsive design and seamless","user experience for competitive programmers worldwide","Empowered competitive programmers by identifying weaknesses and enhancing problem-solving skills."],
    features: [
      "Codeforces API integration for real-time profile data",
      "AI-powered personalized skill enhancement strategies",
      "Automated performance insights and analytics",
      "Cross-device responsive design",
      "MongoDB database for user data persistence",
      "600+ usages and 400+ new users in first 48 hours"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS" , "Node.js", "Express", "MongoDB" ,"CodeForces API" ,"OpenAI" ],
    thumbnail: "/thumbnails/Intelliguide.png",
    links: {
      visit: "https://intelliguide.vercel.app/",
      source: "https://github.com/punyajain1/Intelliguide"
    }
  },
  {
    title: "AI Mail Agent",
    slug: "ai-mail-agent",
    period: "June, 2025 - ∞",
    description: "An AI Agent that reads important mails and writes the suitable replies while saving summary of mails in a csv file.",
    longDescription: ["Developed an intelligent email assistant using Node.js and TypeScript to automate email management.","Integrated with Gmail API to securely access and scan incoming messages.","Utilized OpenAI's language models to generate context-aware reply drafts for important emails.","Implemented logic to identify relevant emails based on context and sender.","Streamlined email workflow, reducing time spent on repetitive responses and ensuring timely communication."],
    features: [
      "Gmail API integration for secure email access",
      "AI-powered context-aware reply generation",
      "Intelligent email filtering and prioritization",
      "Automated email summary generation to CSV",
      "Context and sender-based email identification",
      "Automated workflow for repetitive responses"
    ],
    technologies: ["Node.js", "TypeScript", "OpenAI", "Gmail API", "LangChain"],
    thumbnail: "/thumbnails/AI_GMAIL_AGENT.png",
    links: {
      visit: "https://www.youtube.com/watch?v=0GxjRceqKSc",
      source: "https://github.com/punyajain1/AI_Gmail_Agent"
    }
  },
  {
    title: "AI Rag Agent",
    slug: "ai-rag-agent",
    period: "May, 2025 - ∞",
    description: "A research assistant tool that leverages AI to help users to ask any question and get answer to it from any of users uploaded documents.",
    longDescription: ["Developed a Retrieval-Augmented Generation (RAG) AI agent using LangChain to enable efficient querying of legal","documents and research papers.","Implemented parsing and chunking of PDF and TXT files to optimize document retrieval processes.","Utilized in-memory storage solutions to ensure fast access to document chunks during query processing.","Implemented query handling and answer generation to deliver accurate, contextually relevant responses based","solely on uploaded document content."],
    features: [
      "PDF and TXT document parsing and processing",
      "Intelligent document chunking for optimized retrieval",
      "In-memory storage for fast query access",
      "RAG-based contextual question answering",
      "Support for legal documents and research papers",
      "Accurate responses based solely on uploaded content"
    ],
    technologies: ["Python" , "LangChain","PyPDF2" , "OpenAI"],
    thumbnail: "/thumbnails/AI_RAG_AGENT.png",
    links: {
      visit: "https://gpt-neural-visualizer.vercel.app/",
      source: "https://github.com/punyajain/GraphGPT"
    }
  },
  {
    title: "Job Scraper Automation System",
    slug: "job-scraper",
    period: "2025",
    description: "Developed an automated job aggregation tool that scrapes listings from 8+ job boards (Indeed, LinkedIn, Naukri, Internshala, etc.) and delivers results via email using n8n workflow automation.",
    longDescription: [
      "An intelligent job scraping automation system that aggregates job postings from multiple platforms simultaneously and delivers them directly to email.",
      "The tool scrapes positions from 8 different job boards including global platforms (Indeed, LinkedIn, Glassdoor) and India-specific sites (Naukri, Internshala), processes the data, and sends formatted CSV reports via SMTP integration with n8n workflow automation.",
      "Optimized for entry-level positions with multi-site concurrent scraping and configurable search parameters including location, job type, and remote filter options.",
      "Implemented SSL/TLS handling for macOS compatibility and local JSON backup system for data persistence.",
      "Integrated n8n webhook automation for seamless workflow orchestration and SMTP email delivery with CSV attachments."
    ],
    features: [
      "Multi-platform concurrent job scraping (8+ job boards)",
      "n8n webhook integration for workflow automation",
      "SMTP email delivery with CSV attachments",
      "Configurable search parameters (location, job type, remote filter)",
      "SSL/TLS handling for macOS compatibility",
      "Local JSON backup system"
    ],
    technologies: ["n8n", "Python", "BeautifulSoup4", "TLS-client", "JobSpy", "Pandas", "NumPy", "Requests", "urllib3", "SMTP", "Pydantic", "python-dotenv"],
    thumbnail: "/thumbnails/job-scraper.png",
    links: {
      visit: "",
      source: "https://github.com/punyajain1/JOB_SCRAPPER"
    }
  },
  {
    title: "Brainly",
    slug: "brainly",
    period: "December 2024",
    description: "A Full Stack web application helps user to save any important link or content at one place for easy access.",
    longDescription: ["Brainly is a fully-fledged web application that helps users save and revisit their favorite content across platforms.","This application allows users to save YouTube videos, Twitter links, and expands to include Spotify and LinkedIn","posts so that they can easily view them later.","It has a secure login and signup system for user authentication and data privacy.","I used Zod for input validation and bcrypt for password hashing on the server-side."],
    features: [
      "Multi-platform content saving (YouTube, Twitter, Spotify, LinkedIn)",
      "Secure user authentication and signup system",
      "Zod-based input validation",
      "Bcrypt password hashing for security",
      "Centralized content management dashboard",
      "Easy content access and organization"
    ],
    technologies: [
      "MongoDB" , "Express.js" , "React.js" , "Node.js" , "Zod", "Jsonwebtoken" , "Mongoose" ,"Bcrypt"
    ],
    thumbnail: "/thumbnails/Brainly.png",
    links: {
      visit: "https://www.youtube.com/watch?v=CCVkD4rmuv8",
      source: "https://github.com/punyajain1/brainly-frontend"
    }
  },
  {
    title: "Chess",
    slug: "chess",
    period: "December 2024",
    description: "Full Stack Chess Game",
    longDescription: ["Real-Time Multiplayer: Supports live chess matches with real-time communication using WebSockets.","Game Logic with Chess.js: Utilizes Chess.js for robust move validation and chessboard state management.","Modern Frontend with React: Built with React for a responsive and interactive user interface.","Type-Safe Backend: Developed in Node.js with TypeScript, ensuring scalability and maintainability.","Seamless Synchronization: Moves are instantly reflected on both players' boards for a smooth gaming experience."],
    features: [
      "Real-time multiplayer chess matches",
      "WebSocket-based live communication",
      "Chess.js for move validation and game logic",
      "Instant move synchronization across players",
      "Type-safe backend with TypeScript",
      "Responsive and interactive React UI"
    ],
    technologies: [
      "WebSockets" , "Node.js" , "Typescript" , "React.js" , "Chess.js"
    ],
    thumbnail: "/thumbnails/chess.png",
    links: {
      visit: "https://youtu.be/q7MOLYCAPR0",
      source: ""
    }
  },
  {
    title: "ChatSphere",
    slug: "chat-sphere",
    period: "November 2024",
    description: "",
    longDescription: ["Enables smooth communication with instant message delivery and a user-friendly interface, making it interactive.","The backend efficiently manages connections and message routing.","Frontend powered by React ensures smooth, dynamic user interactions.","It is an ongoing project with plans for implementing end-to-end encryption and a secure login system for complete privacy and functionality.","A simple chat application with a tremendous scope for development and evolution."],
    features: [
      "Real-time instant message delivery",
      "WebSocket-based communication",
      "Efficient connection and message routing",
      "User-friendly interactive interface",
      "Dynamic React-powered frontend",
      "Planned: End-to-end encryption and secure authentication"
    ],
    technologies: [
      "WebSockets", "Express", "Node.js", "React"
    ],
      thumbnail: "/thumbnails/chatsphere.png",
      links: {
        visit: "https://youtu.be/MFDYUBucMAM",
        source: ""
      }
    },
    {
      title: "Bolt Clone",
    slug: "bolt-clone",
    period: "February 2024",
    description: "An AI-powered website builder that generates fully functional websites based on user prompts.",
    longDescription: ["An AI-powered website builder that generates fully functional websites based on user prompts.","Utilizes OpenAI’s API and custom prompting techniques to create tailored website designs and content.","React and TypeScript ensure a dynamic, interactive frontend, while Express and Node.js handle backend processing.","Designed for scalability, allowing users to generate anything from landing pages to full-fledged applications."],
    features: [
      "AI-powered website generation from prompts",
      "OpenAI API integration with custom prompting",
      "Automated design and content creation",
      "Support for landing pages to full applications",
      "Dynamic TypeScript frontend",
      "Scalable architecture for various project types"
    ],
    technologies: [
      "React", "TypeScript", "Express", "Node.js", "OpenAI"
    ],
    thumbnail: "/thumbnails/bolt_clone.png",
    links: {
      visit: "",
      source: ""
    }
  }
];

'use client';


import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { BadgeCheck, Sun, Moon, Github, Linkedin, Twitter, Coffee, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

const RotatingText = () => {
  const words = ["Building in Public", "Indie Hacker", "Ship Fast", "Break Things", "Learning Daily", "MVP Mode", "Relentless", "Execution First", "No Excuses", "Consistency > Motivation", "10x Mindset", "Daily Grind"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-[family-name:var(--font-instrument-serif)] tracking-wider text-sm h-6 overflow-hidden ">
      <div className="relative w-48 h-6 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 whitespace-nowrap"
          >
            {words[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/punyajain1",
      icon: <Github className="w-full h-full text-zinc-900 dark:text-zinc-100" />,
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/PunyaJain01",
      icon: <Twitter className="w-full h-full text-zinc-900 dark:text-zinc-100" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/punya-jain-40ab8b2a6/",
      icon: <Linkedin className="w-full h-full text-[#0a66c2]" />,
    }
  ];

  return (
    <motion.header
      className="mb-14 mt-0 sm:mt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Banner */}
      <div className="relative w-full h-[200px] sm:h-[270px] rounded-2xl overflow-hidden mb-[-40px] sm:mb-[-50px] z-0">
        <Image
          src="/banner.jpg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <p className="text-white text-base sm:text-xl italic font-serif text-center drop-shadow-md px-4">
            The biggest risk is not taking any risk.
          </p>
        </div>
      </div>

      {/* Profile and Info */}
      <div className="relative z-10 px-4 sm:px-6">
        <div className="flex justify-between items-end">
          {/* Profile Picture */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-background bg-zinc-100 dark:bg-zinc-800 overflow-hidden transform translate-y-2">
            <Image
              src={isDarkMode ? "/punya.jpg" : "/punya_2.jpg"}
              alt="Punya Jain"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 96px, 128px"
              priority
            />
          </div>

          {/* Social Links - Desktop Only */}
          <div className="hidden sm:flex items-center gap-1 mb-2">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
              >
                <Link
                  href={link.url}
                  target="_blank"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    {link.icon}
                  </div>
                </Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-100/50 dark:hover:bg-amber-900/20"
            >
              <Link
                href="https://lightning-dust-053.notion.site/Buy-Me-a-Coffee-The-Lazy-Way-17d72d69c0498008aa42ef7121aff3b6?source=copy_link"
                target="_blank"
                aria-label="Buy me a coffee"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <Coffee className="w-full h-full" />
                </div>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            >
              <Link
                href="https://drive.google.com/file/d/1b0NQ3XQYd_pkUFBoQelfUPdoNrRbP-i4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <FileText className="w-full h-full" />
                </div>
              </Link>
            </Button>
            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Toggle theme"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              </div>
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-3xl sm:text-5xl font-bold italic text-black dark:text-white font-[family-name:var(--font-instrument-serif)] tracking-wider">
              Punya Jain
            </h1>

            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
            </svg>

            <div className="md:text-xl text-lg font-[family-name:var(--font-instrument-serif)] tracking-wider dark:text-zinc-400 text-zinc-600 font-light mt-1 sm:mt-2">
              | Delhi, India 🇮🇳
            </div>
          </div>

          <div className="mt-2">
            <RotatingText />
          </div>
        </div>

        {/* Social Links - Mobile Only */}
        <div className="flex sm:hidden items-center gap-1 mt-2">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full"
            >
              <Link
                href={link.url}
                target="_blank"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  {link.icon}
                </div>
              </Link>
            </Button>
          ))}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-100/50 dark:hover:bg-amber-900/20"
          >
            <Link
              href="https://lightning-dust-053.notion.site/Buy-Me-a-Coffee-The-Lazy-Way-17d72d69c0498008aa42ef7121aff3b6?source=copy_link"
              target="_blank"
              aria-label="Buy me a coffee"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <Coffee className="w-full h-full" />
              </div>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
          >
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <FileText className="w-full h-full" />
              </div>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
        </div>
      </div>


      {/* Bio */}
      <div className="mt-2 px-1 sm:px-0">
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base sm:text-lg">
          Quietly turning late nights, caffeine, and curiosity into useful tools. From automation bots to AI-powered systems, I like solving real problems with code and shipping before overthinking. Learning in public, experimenting daily, and stacking small wins into real products. Less noise, more execution. 🚀
        </p>
      </div>
    </motion.header>
  );
}

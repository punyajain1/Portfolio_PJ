'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Check, Copy, Coffee } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { cn } from "@/lib/utils";


export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "punyajain1@gmail.com";

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/punya-jain-40ab8b2a6/',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/punyajain1',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/PunyaJain01',
      icon: <Twitter className="w-5 h-5" />,
    },
  ];

  return (
    <section className="mb-12 mt-8" id="contact">
      <h2 className="text-3xl font-serif italic text-black dark:text-white mb-6">
        Get in Touch
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed text-base sm:text-lg">
        I usually reply within 24 hours. Feel free to reach out for collaborations,
        projects, or just to say hi!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-8">
        <Button
          className="rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 px-6"
          asChild
        >
          <a href={`mailto:${email}`}>
            <Mail className="w-4 h-4 mr-2" />
            Say Hello
          </a>
        </Button>

        <Button
          variant="outline"
          className="rounded-full px-6 gap-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={onCopy}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-green-500">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Email</span>
            </>
          )}
        </Button>

        <Button
          asChild
          variant="ghost"
          className="rounded-full px-6 text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400 hover:bg-amber-100/50 dark:hover:bg-amber-900/20"
        >
          <a
            href="https://lightning-dust-053.notion.site/Buy-Me-a-Coffee-The-Lazy-Way-17d72d69c0498008aa42ef7121aff3b6?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Coffee className="w-4 h-4 mr-2" />
            Buy me a coffee
          </a>
        </Button>
      </div>

      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            className="p-2 rounded-full  transition-colors text-zinc-600 dark:text-zinc-400 dark:hover:text-white"
            aria-label={link.name}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="pt-8 mt-8 pb-2 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <p className="text-zinc-600 dark:text-zinc-400">Designed & Developed by Punya</p>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
          <p>© 2026 All rights reserved.</p>
        </div>

        <div className="flex items-center gap-2 font-mono">
          <span>🇮🇳</span>
          <span>Delhi, India</span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span className="text-zinc-600 dark:text-zinc-400">{time || '--:--'}</span>
        </div>
      </div>
    </footer>
  );
}

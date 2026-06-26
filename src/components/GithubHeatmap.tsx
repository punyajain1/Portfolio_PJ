'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type GithubData = {
  total: {
    [year: string]: number;
  };
  contributions: Contribution[];
};

export default function GithubHeatmap() {
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  const [showPunk, setShowPunk] = useState(false);
  const keysRef = React.useRef('');

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Only care about single character keys
      if (e.key.length === 1) {
        keysRef.current += e.key.toLowerCase();
      }

      if (keysRef.current.length > 4) {
        keysRef.current = keysRef.current.slice(-4);
      }

      if (keysRef.current === 'punk') {
        setShowPunk((prev) => !prev);
        keysRef.current = '';
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/punyajain1?y=last')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch github contributions', err);
        setLoading(false);
      });
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-emerald-200 dark:bg-emerald-900/70';
      case 2:
        return 'bg-emerald-300 dark:bg-emerald-700/80';
      case 3:
        return 'bg-emerald-400 dark:bg-emerald-500/90';
      case 4:
        return 'bg-emerald-500 dark:bg-emerald-400';
      default:
        return 'bg-zinc-100 dark:bg-zinc-800/40';
    }
  };

  const currentYearTotal = data?.total?.lastYear || 0;
  const startOffset = data?.contributions?.length ? new Date(data.contributions[0].date).getDay() : 0;

  const getMonthLabels = () => {
    if (!data?.contributions.length) return [];
    const labels: { label: string; index: number }[] = [];
    let currentMonth = -1;

    data.contributions.forEach((day, i) => {
      const date = new Date(day.date);
      const month = date.getMonth();
      if (month !== currentMonth) {
        if (i > 15 || labels.length === 0) {
          labels.push({
            label: date.toLocaleString('default', { month: 'short' }),
            index: Math.floor((i + startOffset) / 7),
          });
        }
        currentMonth = month;
      }
    });
    return labels;
  };

  return (
    <section className="mb-16">
      <div className="flex flex-col sm:flex-row items-baseline gap-2 mb-6">
        <h2 id="contributions-heading" className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
          {showPunk ? 'Indie Hacker Protocol 🚀' : 'GitHub Contributions'} <span className="text-zinc-400 font-normal">#</span>
        </h2>
        {showPunk && (
          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            href="https://x.com/PunkCompiler"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:ml-auto flex items-center gap-1.5 text-xs sm:text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.96z"></path>
            </svg>
            @PunkCompiler
          </motion.a>
        )}
      </div>

      <div className="w-full">
        <div>
          {loading ? (
            <div className="animate-pulse bg-zinc-200 dark:bg-zinc-800/40 rounded-xl h-32 w-full"></div>
          ) : (
            data?.contributions && (
              <div
                className="flex overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                style={{ direction: 'rtl' }}
              >
                <div
                  className="inline-flex flex-col"
                  style={{ direction: 'ltr' }}
                >
                  <div className="relative h-5 text-[10px] text-zinc-500 dark:text-zinc-500 mb-1">
                    {getMonthLabels().map((m, i) => (
                      <span
                        key={i}
                        className="absolute"
                        style={{ left: `${m.index * 15}px`, bottom: 0 }}
                      >
                        {m.label}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-rows-7 grid-flow-col gap-[3px] sm:gap-[4px]">
                    {Array.from({ length: startOffset }).map((_, i) => (
                      <div
                        key={`empty-${i}`}
                        className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-sm"
                      />
                    ))}
                    {data.contributions.map((day) => (
                      <div
                        key={day.date}
                        className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-sm ${getLevelColor(
                          day.level
                        )}`}
                        title={`${day.count} contributions on ${new Date(
                          day.date
                        ).toDateString()}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-4 sm:gap-0">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {loading ? '...' : `${currentYearTotal} contributions in the last year`}
          </span>
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
            <span>Less</span>
            <div className="flex gap-[3px]">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-[12px] h-[12px] rounded-sm ${getLevelColor(
                    level
                  )}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

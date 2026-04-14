'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    // Fetch directly from the public API since no token is required
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
    // Official GitHub Contribution Colors
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
        return 'bg-zinc-100 dark:bg-zinc-800/40'; // 0 level
    }
  };

  const currentYearTotal = data?.total?.lastYear || 0;
  const startOffset = data?.contributions?.length ? new Date(data.contributions[0].date).getDay() : 0;

  // Calculate where month labels should be placed
  const getMonthLabels = () => {
    if (!data?.contributions.length) return [];
    const labels: { label: string; index: number }[] = [];
    let currentMonth = -1;

    data.contributions.forEach((day, i) => {
      const date = new Date(day.date);
      const month = date.getMonth();
      if (month !== currentMonth) {
        // Prevent label overlap at the very start
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
      <h2 className="text-lg font-bold mb-6 text-black dark:text-white flex items-center gap-2">
        GitHub Contributions <span className="text-zinc-400 font-normal">#</span>
      </h2>

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
                  {/* Months Row */}
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

                  {/* Contributions Grid */}
                  <div className="grid grid-rows-7 grid-flow-col gap-[3px] sm:gap-[4px]">
                    {/* Add empty blocks to offset the first day */}
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

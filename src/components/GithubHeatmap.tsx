'use client';

import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useTheme } from '@/context/ThemeContext';

export default function GithubHeatmap() {
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return <div className="h-40 animate-pulse bg-neutral-100 dark:bg-neutral-900 rounded-xl" />;

  const theme = {
    light: ['#f0f0f0', '#d4d4d4', '#a3a3a3', '#737373', '#404040'],
    dark: ['#171717', '#262626', '#404040', '#737373', '#d4d4d4'],
  };

  return (
    <section className="mb-12">
      <h2 id="contributions-heading" className="text-3xl font-serif italic text-black dark:text-white mb-6">
        <span>GitHub Activity</span>
      </h2>

      <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 p-4 sm:p-6 rounded-xl shadow-sm">
        <div className="min-w-max pb-1 mx-auto w-fit">
          <GitHubCalendar
            username="punyajain1"
            theme={theme}
            colorScheme={isDarkMode ? 'dark' : 'light'}
            blockSize={isMobile ? 8 : 10}
            blockMargin={isMobile ? 2 : 3}
            fontSize={12}
            renderBlock={(block, activity) =>
              React.cloneElement(block, {
                'data-tooltip-id': 'react-tooltip',
                'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
              })
            }
            labels={{
              totalCount: '{{count}} contributions in the last year',
            }}
          />
        </div>
        <Tooltip id="react-tooltip" />
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function EasterEgg() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    console.log(
      '%cLooking for secrets? Try the Konami Code! 🎮',
      'color: #22c55e; font-weight: bold; font-size: 1.2em;'
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      
      setInputSequence((prev) => {
        const newSequence = [...prev, key];
        
        // Keep only the last N keys, where N is the length of the Konami code
        if (newSequence.length > KONAMI_CODE.length) {
          newSequence.shift();
        }

        // Check if the sequence matches
        if (JSON.stringify(newSequence) === JSON.stringify(KONAMI_CODE)) {
          // Trigger Easter Egg
          console.log('Konami Code Activated!');
          window.location.href = 'https://portfolio-punk-bay.vercel.app/';
        }

        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);
  return null;
}

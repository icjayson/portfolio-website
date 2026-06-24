'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Segment {
  text: string;
  emphasis: boolean;
}

interface Row {
  blank: boolean;
  words: Segment[];
}

// Build rows from text. "\n" starts a new line; an empty line becomes a vertical gap.
// **phrase** marks emphasis — still revealed word-by-word, just highlighted.
const buildRows = (text: string): Row[] =>
  text.split('\n').map((line) => {
    if (line.trim() === '') return { blank: true, words: [] };
    const words: Segment[] = [];
    line
      .split(/(\*\*[^*]+\*\*)/g)
      .filter(Boolean)
      .forEach((part) => {
        const emphasis = part.startsWith('**') && part.endsWith('**');
        const clean = emphasis ? part.slice(2, -2) : part;
        clean
          .split(/\s+/)
          .filter(Boolean)
          .forEach((w) => words.push({ text: w, emphasis }));
      });
    return { blank: false, words };
  });

const Word: React.FC<{
  segment: Segment;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ segment, progress, range }) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={cn(
        'mr-[0.28em] inline-block',
        segment.emphasis ? 'font-semibold text-primary' : 'text-black'
      )}
    >
      {segment.text}
    </motion.span>
  );
};

interface ScrollRevealTextProps {
  /** Text with **phrases** marked for emphasis; "\n" for line break, blank line for gap */
  text: string;
  className?: string;
}

/**
 * Reveals text word-by-word as it scrolls through the viewport — words
 * brighten from faint to full, with **marked** phrases popping in primary.
 */
export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35']
  });

  const rows = buildRows(text);
  const total = rows.reduce((n, r) => n + r.words.length, 0) || 1;
  let index = 0;

  return (
    <div ref={ref} className={cn('flex flex-col items-center', className)}>
      {rows.map((row, ri) => {
        if (row.blank) return <div key={ri} className="h-6 w-full" aria-hidden />;
        return (
          <div key={ri} className="flex flex-wrap justify-center">
            {row.words.map((segment, wi) => {
              const start = index / total;
              const end = start + 1 / total;
              index += 1;
              return (
                <Word key={wi} segment={segment} progress={scrollYProgress} range={[start, end]} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

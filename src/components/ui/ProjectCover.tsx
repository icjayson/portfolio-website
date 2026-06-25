'use client';

import React from 'react';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type CoverRatio = '16/9' | '16/7' | '16/5' | '2/3' | '3/4';

const ratioClass: Record<CoverRatio, string> = {
  '16/9': 'aspect-[16/9]',
  '16/7': 'aspect-[16/7]',
  '16/5': 'aspect-[16/5]',
  // Portrait only on large screens; stays 16/9 on smaller screens to avoid a too-tall banner
  '2/3': 'aspect-[16/9] lg:aspect-[2/3]',
  '3/4': 'aspect-[16/9] lg:aspect-[3/4]'
};

interface ProjectCoverProps {
  /** Cover image path; falls back to a styled placeholder when omitted */
  src?: string;
  name: string;
  /** Aspect ratio — pick by card layout: 3-col 16/9, 2-col 16/7, 1-col 16/5, portrait 2/3 (lg) */
  ratio?: CoverRatio;
  className?: string;
}

/**
 * Full-bleed cover banner shown at the top of a project card.
 * Width spans the card; height is derived from the aspect ratio.
 * Zooms gently on hover (when the parent card has the `group` class).
 */
export const ProjectCover: React.FC<ProjectCoverProps> = ({ src, name, ratio = '16/9', className }) => {
  return (
    <div className={cn('relative -mx-6 -mt-6 mb-5 overflow-hidden', ratioClass[ratio], className)}>
      {src ? (
        <img
          src={src}
          alt={`${name} preview`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/5">
          <ImageIcon className="w-8 h-8 text-primary/40" />
          <span className="text-xs font-medium text-black/40">Preview coming soon</span>
        </div>
      )}
    </div>
  );
};

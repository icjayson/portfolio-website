'use client';

import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  asChild = false,
  className,
}) => {
  const Component = asChild ? Slot : 'div';

  const baseClasses = `
    glass-panel backdrop-blur-sm
  `;

  return (
    <Component className={cn(baseClasses, className)}>
      {children}
    </Component>
  );
};
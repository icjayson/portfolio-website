'use client';

import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface CardPanelProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const CardPanel: React.FC<CardPanelProps> = ({
  children,
  asChild = false,
  className,
}) => {
  const Component = asChild ? Slot : 'div';

  const baseClasses = `
    card-panel backdrop-blur-sm
  `;

  return (
    <Component className={cn(baseClasses, className)}>
      {children}
    </Component>
  );
};

'use client';

import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface FillPanelProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const FillPanel: React.FC<FillPanelProps> = ({
  children,
  asChild = false,
  className,
}) => {
  const Component = asChild ? Slot : 'div';

  const baseClasses = `
    fill-panel
  `;

  return (
    <Component className={cn(baseClasses, className)}>
      {children}
    </Component>
  );
};
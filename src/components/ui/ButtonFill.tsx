'use client';

import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface ButtonFillProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ButtonFill: React.FC<ButtonFillProps> = ({
  children,
  asChild = false,
  className,
  onClick,
  disabled = false,
  size = 'md',
}) => {
  const Component = asChild ? Slot : 'button';
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseClasses = `
    relative font-medium transition-all duration-300 ease-in-out
    bg-gradient-to-br from-secondary to-primary
    text-white rounded-xl
    shadow-[inset_0_0_12px_4px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.5)]
    hover:bg-secondary hover:shadow-[inset_0_0_12px_2px_rgba(255,255,255,0.2),0_1px_0_rgba(255,255,255,0.5),0_0_0_4px_#093C33,0_0_20px_rgba(19,134,81,0.4)]
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
  `;

  return (
    <Component
      className={cn(baseClasses, sizeClasses[size], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Component>
  );
};
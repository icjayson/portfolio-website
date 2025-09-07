'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'magnetic';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  href
}) => {
  const baseClasses = "inline-flex items-center justify-center font-heading font-semibold rounded-2xl transition-all duration-300 text-decoration-none border-none cursor-pointer relative overflow-hidden";
  
  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-accentCoral to-softGold text-white shadow-lg hover:shadow-xl",
    secondary: "bg-transparent text-deepNavy border-2 border-deepNavy hover:bg-deepNavy hover:text-white",
    magnetic: "bg-deepNavy text-white hover:scale-105 shadow-lg hover:shadow-xl"
  };
  
  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "";
  
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: variant === 'magnetic' ? 1.05 : 1.02, y: -2 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        {...motionProps}
      >
        {children}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...motionProps}
    >
      {children}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
    </motion.button>
  );
};
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CardProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  icon?: string;
  expandable?: boolean;
  defaultExpanded?: boolean;
  className?: string;
  preview?: React.ReactNode;
  expandedContent?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  icon,
  expandable = false,
  defaultExpanded = false,
  className = '',
  preview,
  expandedContent
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${className}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div 
        className="p-6 cursor-pointer relative hover:bg-warmGray/2 transition-colors duration-300"
        onClick={toggleExpanded}
      >
        {icon && (
          <div className="text-2xl mb-4 text-center">
            {icon}
          </div>
        )}
        
        {title && (
          <h3 className="text-lg font-semibold text-deepNavy mb-2 font-heading">
            {title}
          </h3>
        )}
        
        {subtitle && (
          <p className="text-sm text-warmGray mb-4">
            {subtitle}
          </p>
        )}
        
        {expandable && (
          <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accentCoral/10 hover:bg-accentCoral/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-accentCoral" />
            ) : (
              <ChevronDown className="w-4 h-4 text-accentCoral" />
            )}
          </button>
        )}
        
        {preview && !isExpanded && (
          <div>{preview}</div>
        )}
      </div>
      
      {!expandable && (
        <div className="px-6 pb-6">
          {children}
        </div>
      )}
      
      <AnimatePresence>
        {expandable && isExpanded && (
          <motion.div
            className="px-6 pb-6 border-t border-warmGray/10 bg-warmGray/2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {expandedContent || children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
  className
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const containerVariants = {
    hidden: { scale: 0.92, opacity: 0, y: 24 },
    visible: { scale: 1, opacity: 1, y: 0 }
  };

  if (!isMounted) return null;

  return createPortal(
    (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={onClose}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            
            {/* Popup Container */}
            <motion.div
              className={cn(
                "relative w-full max-w-6xl h-[80vh]",
                className
              )}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-panel backdrop-blur-sm rounded-2xl overflow-hidden h-full flex flex-col min-h-0">
                {/* Close Button - Top Right */}
                <div className="flex justify-end p-4">
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-black/10 transition-colors duration-200"
                    aria-label="Close popup"
                  >
                    <X className="w-5 h-5 text-black" />
                  </button>
                </div>
                
                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30 popup-scrollbar">
                  {children}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    ),
    document.body
  );
};

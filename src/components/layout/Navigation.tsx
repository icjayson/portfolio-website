'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { ButtonFill } from '@/components/ui';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' }
];

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-10 right-10 z-50 max-w-[1200px] mx-auto transition-all duration-300 mt-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg shadow-[inset_0_0_20px_0_rgba(255,255,255,0.2)]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Placeholder for future link implementation */}
            <motion.div
              className="flex items-center space-x-3"
            >
              {/* Circular Logo */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img 
                  src="/favicon.png" 
                  alt="Nguyen Minh Quang Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              {/* Portfolio Title */}
              <div className="font-serif text-white text-xl">
                <span className="hidden lg:inline">Nguyen Minh Quang&#39;s Portfolio</span>
                <span className="lg:hidden">Nguyen Minh Quang&#39;s Portfolio</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 ml-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Let's Connect Button */}
              <ButtonFill 
                size="sm"
                className="whitespace-nowrap px-4 flex items-center"
                onClick={() => handleNavClick('#connect')}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Let&#39;s connect
              </ButtonFill>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-8 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-lg font-medium text-deepNavy hover:text-primary transition-colors duration-300 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile Let's Connect Button */}
                <div className="pt-4 border-t border-gray-200">
                  <ButtonFill 
                    className="w-full whitespace-nowrap px-4 flex items-center justify-center"
                    onClick={() => handleNavClick('#connect')}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Let&#39;s connect
                  </ButtonFill>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
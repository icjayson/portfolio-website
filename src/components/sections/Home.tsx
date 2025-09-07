'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ButtonFill, ButtonOutline } from '@/components/ui';
import { Sparkles, Telescope, Handshake } from 'lucide-react';

// Typewriter component for character-by-character animation
const TypewriterText: React.FC<{ text: string; delay: number; duration: number }> = ({ text, delay, duration }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const intervalDuration = (duration * 1000) / text.length;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, intervalDuration);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [text, delay, duration]);

  return (
    <div className="relative inline">
      <span className="leading-relaxed">
        &quot;{displayedText}
      </span>
      {/* Cursor follows the text */}
      <motion.span
        className="inline-block w-0.5 h-5 bg-primary ml-0.5"
        animate={{
          opacity: isComplete ? [0, 1, 1, 0] : 1,
        }}
        transition={{
          duration: isComplete ? 1 : 0,
          repeat: isComplete ? Infinity : 0,
          repeatDelay: 0.5,
        }}
      />
    </div>
  );
};

export const Home: React.FC = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/80 to-gray-900/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,134,81,0.1),transparent_50%)]">
      </div>
      
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 text-center lg:text-left space-y-8"
          >
            {/* Line 1: Hi, I'm Nguyen Minh Quang */}
            <motion.div
              className="flex items-baseline gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-lg md:text-xl text-gray-300 font-sans">
                Hi, I&#39;m
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary leading-tight italic">
                Nguyen Minh Quang
              </h1>
            </motion.div>

            {/* Line 2: Skills with sparkles */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-lg md:text-xl text-white whitespace-nowrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>Performance Marketing</span>
              <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Strategic Planning</span>
              <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Product Development</span>
            </motion.div>

            {/* Line 3: Quote with typewriter effect */}
            <motion.div
              className="text-base md:text-lg text-gray-300 italic font-light max-w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <TypewriterText 
                  text="Being full-stack isn&#39;t about doing everything — it&#39;s about understanding enough to connect the dots where others can&#39;t."
                  delay={1}
                  duration={3}
                />
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ButtonFill size="md" onClick={() => handleNavClick('#experience')} className="flex items-center space-x-4">
                <Telescope className="w-6 h-6" />
                <span>Explore My Work</span>
              </ButtonFill>
              <ButtonOutline size="md" onClick={() => handleNavClick('#connect')} className="flex items-center space-x-4">
                <Handshake className="w-6 h-6" />
                <span>Let&#39;s connect</span>
              </ButtonOutline>
            </motion.div>
          </motion.div>

          {/* Right Content - Card Element */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Shadow/backdrop effect */}
              <div className="absolute top-12 left-12 w-[300px] h-[400px] bg-white/80 rounded-2xl blur-sm"></div>
              <div className="absolute top-8 left-8 w-[300px] h-[400px] bg-primary/80 rounded-2xl blur-sm"></div>
              <div className="absolute top-4 left-4 w-[300px] h-[400px] bg-secondary/80 rounded-2xl blur-sm"></div>

              
              {/* Main card */}
              <motion.div
                className="relative w-[300px] h-[400px] bg-gray-300 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card content with image */}
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/home-section.png" 
                    alt="Portfolio image" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
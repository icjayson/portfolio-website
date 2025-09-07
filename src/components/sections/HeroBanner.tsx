'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, FillPanel } from '@/components/ui';

export const HeroBanner: React.FC = () => {
  return (
    <section className="section-padding bg-transparent relative">
      {/* Gradient dark background with subtle texture overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black/40 to-gray-900/20"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,134,81,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-lg md:text-xl text-gray-300 mb-4">
            I position myself as
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight font-serif italic">
            A FULL-STACK MARKETER with SOLOPRENEUR MINDSET
          </h1>
        </motion.div>

        {/* Two-column layout for top cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Card - Why FULL-STACK MARKETER? */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassPanel className="p-8 rounded-2xl h-full border-2 border-primary/30">
              <div className="mb-6">
                <FillPanel className="inline-block px-4 py-2 rounded-full text-sm font-semibold">
                  Why FULL-STACK MARKETER?
                </FillPanel>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-base leading-relaxed">
                  Starting as a marketing newcomer, I intentionally explored multiple domains — <span className="text-white font-semibold">from strategy and research to content, product, and performance</span>. This wasn&#39;t just skill-building; it was a path of self-discovery.
                </p>
                
                <div className="border-l-4 border-primary/50 pl-4 py-2">
                  <p className="text-primary italic text-sm">
                    &quot;Being full-stack isn&#39;t about doing everything — it&#39;s about understanding enough to connect the dots where others can&#39;t.&quot;
                  </p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Right Card - Why SOLOPRENEUR MINDSET? */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassPanel className="p-8 rounded-2xl h-full border-2 border-gray-600/30">
              <div className="mb-6">
                <FillPanel className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gray-600">
                  Why SOLOPRENEUR MINDSET?
                </FillPanel>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-base leading-relaxed">
                  I approach every project with the ownership, adaptability, and initiative of a founder. Even within a company, I think and act like it&#39;s my own — <span className="text-white font-semibold">bridging strategic vision with hands-on execution to deliver real impact</span>.
                </p>
              </div>
            </GlassPanel>
          </motion.div>
        </div>

        {/* Bottom Card - WHERE I'M HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <GlassPanel className="p-8 rounded-2xl border-2 border-gray-600/30">
            <div className="text-center mb-6">
              <FillPanel className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gray-600">
                WHERE I&#39;M HEADING
              </FillPanel>
            </div>
            
            <div className="space-y-4 text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&#39;m currently seeking opportunities in <span className="text-white font-semibold">Strategic Planning, Product or Performance Marketing</span>, where I can go deep and create measurable impact.
              </p>
              
              <p className="text-base text-gray-400 italic leading-relaxed">
                The diverse skills I&#39;ve gained <span className="text-primary">aren&#39;t just &quot;nice to have&quot;</span> — they are powerful complements that enhance cross-functional thinking, improve collaboration, and help me solve problems more creatively and holistically.
              </p>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
};
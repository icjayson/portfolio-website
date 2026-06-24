'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollRevealText } from '@/components/ui';

const manifesto =
  "I started as a marketer with a deep passion for technology and outgrew only **delivering products**\nbut also learned to **discover** and **develop** them\n\nWith **marketing** and **product development** in one skill stack, I can understand what users need and turn it into a working product";

const skillChips = ['Product', 'Marketing', 'Data', 'Design', 'AI-Driven'];

export const HeroBanner: React.FC = () => {
  return (
    <section className="section-padding bg-transparent relative">
      <div className="max-w-2xl mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-semibold tracking-[0.25em] uppercase text-sm text-black/50 mb-4">
            What I Stand For
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight font-serif italic">
            A Product-Growth Builder with a Solopreneur Mindset
          </h1>
        </motion.div>

        {/* Scroll-revealed manifesto */}
        <ScrollRevealText
          text={manifesto}
          className="justify-center text-center text-xl md:text-2xl leading-relaxed font-light"
        />

        {/* Skill mix chips */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {skillChips.map((chip) => (
            <motion.span
              key={chip}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 }
              }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

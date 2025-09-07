'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, BarChart3, PenTool, Users } from 'lucide-react';
import { FillPanel } from '@/components/ui';
import { Planning } from './Planning';
import { ProductDevelopment } from './ProductDevelopment';
import { Performance } from './Performance';
import { Copywriting } from './Copywriting';

interface TabItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType;
}

export const WorkExperience: React.FC = () => {
  // Parallax effect state
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [activeTab, setActiveTab] = useState('planning');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxSpeed = 0.5;
      setParallaxOffset(scrollY * parallaxSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const tabs: TabItem[] = [
    {
      id: 'planning',
      name: 'Planning',
      icon: Target,
      component: Planning
    },
    {
      id: 'product-development',
      name: 'Product Development',
      icon: Users,
      component: ProductDevelopment
    },
    {
      id: 'performance',
      name: 'Performance',
      icon: BarChart3,
      component: Performance
    },
    {
      id: 'copywriting',
      name: 'Copywriting',
      icon: PenTool,
      component: Copywriting
    }
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const getCurrentComponent = () => {
    const activeTabData = tabs.find(tab => tab.id === activeTab);
    return activeTabData?.component || Planning;
  };
  return (
    <section id="experience" className="section-padding bg-transparent relative">
      {/* Gradient dark background with subtle texture overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black/40 to-gray-900/20"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,134,81,0.1),transparent_70%)]" 
             style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Header Section with Sparkles */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary flex items-center justify-center gap-4 font-serif">
          <Sparkles className="text-primary w-8 h-8 animate-pulse" />
            <span>WORK EXPERIENCE</span>
            <Sparkles className="text-primary w-8 h-8 animate-pulse" />
          </h1>
        </motion.div>
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <TabNavigation 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={handleTabChange} 
          />
        </motion.div>

        {/* Projects Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {React.createElement(getCurrentComponent())}
        </motion.div>
      </div>
    </section>
  );
};

const TabNavigation: React.FC<{
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center">
      <FillPanel className="inline-flex rounded-full p-2 items-center gap-2">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex items-center gap-4 px-6 py-3 rounded-full text-base font-medium transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-secondary text-white border border-white shadow-[inset_0_0_12px_4px_rgba(0,0,0,0.5),_0_1px_0_rgba(255,255,255,0.5)]' 
                  : 'text-white/80 hover:text-white hover:bg-black/50 bg-transparent border-0'
                }
              `}
            >
              <IconComponent className="w-5 h-5" />
              <span className="hidden sm:inline">{tab.name}</span>
            </button>
          );
        })}
      </FillPanel>
    </div>
  );
};
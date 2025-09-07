'use client';

import React from 'react';
import { Navigation } from '../components/layout/Navigation';
import { Home } from '../components/sections/Home';
import { HeroBanner } from '../components/sections/HeroBanner';
import { AboutMe } from '../components/sections/AboutMe';
import { WorkExperience } from '../components/sections/WorkExperience';
import { LetsConnect } from '../components/sections/LetsConnect';

export default function Page() {
  return (
    <>
      <Navigation />
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <main>
          <section id="home">
            <Home />
          </section>
          
          <section id="hero-banner">
            <HeroBanner />
          </section>
          
          <section id="about">
            <AboutMe />
          </section>
          
          <section id="experience">
            <WorkExperience />
          </section>
          
          <section id="connect">
            <LetsConnect />
          </section>
        </main>
        
        {/* Full-width image section - Add your image here */}
        <div className="w-full">
            <img 
              src="/image-footer.png" 
              alt="Footer image" 
              className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Copyright section */}
        <div className="w-full bg-black py-4">
          <div className="text-center">
            <p className="text-white text-sm font-inter">
              Copyright © 2025 Nguyen Minh Quang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

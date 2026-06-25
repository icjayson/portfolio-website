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
      {/* White layer behind the video */}
      <div className="fixed inset-0 bg-white pointer-events-none -z-20" />
      {/* Fixed background video */}
      <video
        className="fixed inset-x-0 top-[400px] w-full h-full object-cover pointer-events-none -z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disableRemotePlayback
        webkit-playsinline="true"
        x5-playsinline="true"
      >
        <source
          src="/background-video.mp4"
          type="video/mp4"
        />
      </video>
      {/* Overlay above the video */}
      <div className="fixed inset-0 bg-white/40 pointer-events-none -z-10" />

      <Navigation />
      <div className="bg-transparent">
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
        {/* Copyright section */}
        <div className="w-full border-t border-black/20 py-4">
          <div className="text-center">
            <p className="text-black text-sm font-inter">
              Copyright © 2026 Nguyen Minh Quang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

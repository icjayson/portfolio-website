'use client';

import React from 'react';
import { FillPanel } from '@/components/ui';

interface ProjectItem {
  id: number;
  name: string;
  logo?: string;
  href?: string;
  typeBadge: string;
  achievementBadge?: string;
  achievementEvent?: string;
  nameColor?: string;
  badgeColor?: string;
  contributions: string[];
  details?: string;
}

interface PlanningPopupProps {
  project: ProjectItem;
}

export const PlanningPopup: React.FC<PlanningPopupProps> = ({ project }) => {
  const objectivesByName: Record<string, string[]> = {
    LAONMEDI: [
      "Increase brand awareness in Vietnamese market",
      "Develop comprehensive marketing strategy",
      "Build strong brand positioning",
      "Create effective customer acquisition plan"
    ],
    SUKI: [
      "Enhance brand recognition and market share",
      "Develop innovative marketing campaigns",
      "Strengthen customer engagement",
      "Drive sales growth through strategic initiatives"
    ],
    KISSHU: [
      "Establish competitive advantage in market",
      "Develop integrated marketing communication",
      "Build brand differentiation",
      "Increase market penetration"
    ],
    Vincom: [
      "Enhance social media presence",
      "Improve content quality and engagement",
      "Build stronger brand community",
      "Increase digital reach and visibility"
    ],
    "Dong Luc Sport": [
      "Develop compelling social media content",
      "Increase brand engagement and following",
      "Create authentic brand voice",
      "Drive community growth and loyalty"
    ],
    "TON Degen": [
      "Build strong TON community in Vietnam",
      "Develop strategic growth initiatives",
      "Increase community engagement",
      "Drive adoption and awareness"
    ]
  };
  const objectives = objectivesByName[project.name] || [];

  return (
    <div className="space-y-6">
      {/* Combined Header Row: Logo, Name, Type Badge */}
      <div className="flex items-center justify-between gap-4">
        {/* Left side: Logo and Name */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {project.logo ? (
            <img 
              src={project.logo} 
              alt={`${project.name} logo`}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-sm">
                {project.name.substring(0, 2)}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            {project.href ? (
              <a 
                href={project.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-xl font-bold hover:opacity-80 transition-colors duration-300 block ${
                  project.nameColor || 'text-black'
                }`}
              >
                {project.name}
              </a>
            ) : (
              <h3 className={`text-xl font-bold ${
                project.nameColor || 'text-black'
              }`}>
                {project.name}
              </h3>
            )}
          </div>
        </div>

        {/* Right side: Type Badge */}
        <div className="flex-shrink-0">
          <span className={`px-3 py-1 text-xs rounded-full border ${
            project.badgeColor || 'bg-primary/20 text-primary border-primary/30'
          }`}>
            {project.typeBadge}
          </span>
        </div>
      </div>

      {/* Achievement Badge */}
      {project.achievementBadge && (
        <div>
          <FillPanel className="p-1 rounded-lg text-center">
            <span className="text-sm font-medium text-white">
              {project.achievementBadge}{project.achievementEvent ? ` ${project.achievementEvent}` : ''}
            </span>
          </FillPanel>
        </div>
      )}

      {/* Contributions and Objectives - 2 Column Layout (Objectives hidden when empty) */}
      <div className={`grid gap-6 ${objectives.length > 0 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {/* Left Column: Contributions */}
        <div>
          <h4 className="text-sm font-semibold text-black mb-1">
            My contribution:
          </h4>
          <ul className="space-y-0">
            {project.contributions.map((contribution, index) => (
              <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Objectives (only when present) */}
        {objectives.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-black mb-1">
              Objectives:
            </h4>
            <ul className="space-y-0">
              {objectives.map((objective, index) => (
                <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Image Grid - Dynamic Layout */}
      <div>
        <h4 className="text-sm font-semibold text-black mb-3">
          Showcase of my work:
        </h4>
        <div className={`grid gap-4 grid-cols-1 ${
          project.name === 'LAONMEDI' || project.name === 'SUKI'
            ? 'md:grid-cols-2'
            : project.name === 'KISSHU' || project.id === 25
            ? 'md:grid-cols-2'
            :project.name ==='Dong Luc Sport'|| project.name === 'Vincom' || project.id === 24
            ? 'md:grid-cols-2'
            : 'md:grid-cols-3'
        }`}>
          {project.id === 24 && [
            "/planning-googlehackathon/4.png",
            "/planning-googlehackathon/6.png",
            "/planning-googlehackathon/9.png",
            "/planning-googlehackathon/13.png",
          ].map((imageUrl, index) => (
            <div key={index} className="w-full rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={`Google Developer Groups On Campus Hackathon Vietnam 2026 image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
          {project.id === 25 && [
            "/planning-vas/3.png",
            "/planning-vas/4.png",
            "/planning-vas/5.png",
            "/planning-vas/8.png",
            "/planning-vas/10.png",
            "/planning-vas/12.png",
          ].map((imageUrl, index) => (
            <div key={index} className="w-full rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={`Vietnam AI Stars 2026 image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
          {project.name === 'LAONMEDI' && [
            "/planning-laonmedi/0.png",
            "/planning-laonmedi/1.png",
            "/planning-laonmedi/2.png",
            "/planning-laonmedi/4.png",
            "/planning-laonmedi/5.png",
            "/planning-laonmedi/6.png",
            "/planning-laonmedi/7.png",
            "/planning-laonmedi/8.png",
          ].map((imageUrl, index) => (
            <div key={index} className="w-full rounded-lg overflow-hidden">
              <img 
                src={imageUrl} 
                alt={`LAONMEDI project image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
          {project.name === 'SUKI' && [
            "/planning-suki/0.png",
            "/planning-suki/1.png",
            "/planning-suki/2.png",
            "/planning-suki/3.png",
            "/planning-suki/4.png",
            "/planning-suki/5.png",
            "/planning-suki/6.png",
            "/planning-suki/7.png",
          ].map((imageUrl, index) => (
            <div key={index} className="w-full rounded-lg overflow-hidden">
              <img 
                src={imageUrl} 
                alt={`SUKI project image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
          {project.name === 'KISSHU' && [
            "/planning-kisshu/1.png",
            "/planning-kisshu/2.png",
            "/planning-kisshu/3.png",
            "/planning-kisshu/4.png",
            "/planning-kisshu/5.png",
            "/planning-kisshu/6.png"
          ].map((imageUrl, index) => (
            <div key={index} className="w-full rounded-lg overflow-hidden">
              <img 
                src={imageUrl} 
                alt={`KISSHU project image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
          {project.name === 'Vincom' && [
            "/planning-vincom/1.png",
            "/planning-vincom/2.png",
            "/planning-vincom/3.png",
            "/planning-vincom/4.png"
          ].map((imageUrl, index) => (
            <div key={index} className="w-full rounded-lg overflow-hidden">
              <img 
                src={imageUrl} 
                alt={`Vincom project image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
          {project.name === 'Dong Luc Sport' && [
            "/planning-dongluc/1.png",
            "/planning-dongluc/2.png",
            "/planning-dongluc/3.png",
            "/planning-dongluc/4.png"
          ].map((imageUrl, index) => (
            <div key={index} className="w-full rounded-lg overflow-hidden">
              <img 
                src={imageUrl} 
                alt={`Dong Luc Sport project image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
          {project.name === 'TON Degen' && [
            "/planning-tondegen/1.png",
            "/planning-tondegen/2.png",
            "/planning-tondegen/3.png",
            "/planning-tondegen/4.png",
            "/planning-tondegen/5.png",
            "/planning-tondegen/6.png"
          ].map((imageUrl, index) => (
            <div key={index} className="w-full rounded-lg overflow-hidden">
              <img 
                src={imageUrl} 
                alt={`TON Degen project image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

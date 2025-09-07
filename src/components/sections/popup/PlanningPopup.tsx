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
  nameColor?: string;
  badgeColor?: string;
  contributions: string[];
  details?: string;
}

interface PlanningPopupProps {
  project: ProjectItem;
}

export const PlanningPopup: React.FC<PlanningPopupProps> = ({ project }) => {
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
              <span className="text-white font-bold text-sm">
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
                  project.nameColor || 'text-white'
                }`}
              >
                {project.name}
              </a>
            ) : (
              <h3 className={`text-xl font-bold ${
                project.nameColor || 'text-white'
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
              {project.achievementBadge} at &quot;{project.name === 'SUKI' ? 'Marketing Big Day 2024' : 'Chien Binh Marketing 2024'}&quot; competition
            </span>
          </FillPanel>
        </div>
      )}

      {/* Contributions and Objectives - 2 Column Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column: Contributions */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-1">
            My contribution:
          </h4>
          <ul className="space-y-0">
            {project.contributions.map((contribution, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Objectives */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-1">
            Objectives:
          </h4>
          <ul className="space-y-0">
            {project.name === 'LAONMEDI' && [
              "Increase brand awareness in Vietnamese market",
              "Develop comprehensive marketing strategy",
              "Build strong brand positioning",
              "Create effective customer acquisition plan"
            ].map((objective, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{objective}</span>
              </li>
            ))}
            {project.name === 'SUKI' && [
              "Enhance brand recognition and market share",
              "Develop innovative marketing campaigns",
              "Strengthen customer engagement",
              "Drive sales growth through strategic initiatives"
            ].map((objective, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{objective}</span>
              </li>
            ))}
            {project.name === 'KISSHU' && [
              "Establish competitive advantage in market",
              "Develop integrated marketing communication",
              "Build brand differentiation",
              "Increase market penetration"
            ].map((objective, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{objective}</span>
              </li>
            ))}
            {project.name === 'Vincom' && [
              "Enhance social media presence",
              "Improve content quality and engagement",
              "Build stronger brand community",
              "Increase digital reach and visibility"
            ].map((objective, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{objective}</span>
              </li>
            ))}
            {project.name === 'Dong Luc Sport' && [
              "Develop compelling social media content",
              "Increase brand engagement and following",
              "Create authentic brand voice",
              "Drive community growth and loyalty"
            ].map((objective, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{objective}</span>
              </li>
            ))}
            {project.name === 'TON Degen' && [
              "Build strong TON community in Vietnam",
              "Develop strategic growth initiatives",
              "Increase community engagement",
              "Drive adoption and awareness"
            ].map((objective, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Grid - Dynamic Layout */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-3">
          Showcase of my work:
        </h4>
        <div className={`grid gap-4 ${
          project.name === 'LAONMEDI' || project.name === 'SUKI' 
            ? 'grid-cols-2 grid-rows-4' 
            : project.name === 'KISSHU'
            ? 'grid-cols-2 grid-rows-3'
            :project.name ==='Dong Luc Sport'|| project.name === 'Vincom'
            ? 'grid-cols-2 grid-rows-2'
            : 'grid-cols-3 grid-rows-1'
        }`}>
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
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
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
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
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
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
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
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
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
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
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
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, ButtonOutline, Popup } from '@/components/ui';
import { ExternalLink } from 'lucide-react';
import { ProductDevelopmentPopup } from './popup/ProductDevelopmentPopup';

interface ProjectItem {
  id: number;
  name: string;
  logo?: string;
  href?: string;
  period?: string;
  subtext?: string;
  typeBadge: string | string[];
  achievementBadge?: string;
  nameColor?: string;
  badgeColor?: string | string[];
  contributions: string[] | string[][];
  details?: string;
}

const productDevelopmentProjects: ProjectItem[] = [
  {
    id: 7,
    name: "XUONG KY UC",
    logo: "/xuongkyuc-logo.png",
    href: "#",
    period: "02/2025 - Present",
    subtext: "(My personal start-up)",
    typeBadge: ["Concept Development", "User Flow & UI Design"],
    nameColor: "text-[#CEA19E]",
    badgeColor: ["bg-[#CEA19E]/20 text-[#CEA19E] border-[#CEA19E]/30", "bg-[#CEA19E]/20 text-[#CEA19E] border-[#CEA19E]/30"],
    contributions: [
      [
        "From customer insight, we created the concept of DIGITAL HANDMADE GIFTS, focusing on INTERACTION and PERSONALIZATION",
      ],
      [
        "We designed and built website aiming at enhancing user interaction and enabling seamless personalizations",
      ]
    ]
  },
  {
    id: 8,
    name: "SOCIAL AI AGENT",
    logo: "tondegen-logo.jpg",
    href: "#",
    period: "01/2025 - 02/2025",
    subtext: "",
    typeBadge: "User Flow",
    nameColor: "text-[#0064FD]",
    badgeColor: "bg-[#0064FD]/20 text-[#0064FD] border-[#0064FD]/30",
    contributions: [
      "Conduct market research on blockchain-integrated AI agents",
      "Design user flow including schema mapping between user input and agent functions",
    ]
  },
  {
    id: 9,
    name: "KISSHU LANDING PAGE",
    logo: "kisshu-logo.png",
    href: "#",
    period: "04/2025 - 05/2025",
    subtext: "(A brand of Bao Ngoc)",
    typeBadge: ["UI Design", "Frontend Development"],
    nameColor: "text-[#ED1A25]",
    badgeColor: ["bg-[#ED1A25]/20 text-[#ED1A25] border-[#ED1A25]/30", "bg-[#ED1A25]/20 text-[#ED1A25] border-[#ED1A25]/30"],
    contributions: [
      [
        "Design wireframe for a launching campaign landingpage on Figma",
      ],
      [
        "Build and deploy landing page using Cursor AI and Vercel, ensuring fast rollout and responsiveness",
      ]
    ]
  },
  {
    id: 10,
    name: "BAO NGOC'S CASTELLA CAKE",
    logo: "/baongoc-logo.png",
    href: "#",
    period: "05/2025",
    subtext: "",
    typeBadge: "Product Research",
    nameColor: "text-[#8F0B0B]",
    badgeColor: "bg-[#8F0B0B]/20 text-white/70 border-[#8F0B0B]/30",
    contributions: [
      "Design and execute a consumer research survey on Bao Ngoc Castella",
      "Analyze quantitative and qualitative data to extract insights on flavor and packaging and  delivered a data-driven report",
    ]
  }
];

const ProjectCard: React.FC<{ project: ProjectItem; onViewMore: (project: ProjectItem) => void }> = ({ project, onViewMore }) => {
  return (
    <GlassPanel className="p-6 rounded-2xl h-full flex flex-col relative">
      {/* Period - Top Right */}
      {project.period && (
        <div className="absolute top-4 right-6">
          <span className="text-sm text-gray-400 italic">
            {project.period}
          </span>
        </div>
      )}

      {/* Row 1: Logo, Company Name, and Subtext */}
      <div className="mb-4">
        <div className="flex items-start gap-3">
          {project.logo ? (
            <img 
              src={project.logo} 
              alt={`${project.name} logo`}
              className="w-12 h-12 rounded-full object-contain bg-white flex-shrink-0"
            />
          ) : (
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">
                {project.name.substring(0, 2)}
              </span>
            </div>
          )}
          <div className="flex-1">
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
            {project.subtext && (
              <p className="text-sm text-gray-400 mt-1">
                {project.subtext}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Row 2 & 3: Type Badges and Contributions */}
      <div className="flex-1 mb-3">
        {Array.isArray(project.typeBadge) && Array.isArray(project.contributions[0]) ? (
          // 2-column layout: each column has typeBadge + contribution section
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(project.typeBadge as string[]).map((badge, colIndex) => (
              <div key={colIndex} className="space-y-3">
                {/* Type Badge */}
                <div>
                  <span className={`px-3 py-1 text-xs rounded-full border ${
                    Array.isArray(project.badgeColor) 
                      ? (project.badgeColor[colIndex] || 'bg-secondary text-white border-secondary')
                      : (project.badgeColor || 'bg-secondary text-white border-secondary')
                  }`}>
                    {badge}
                  </span>
                </div>
                {/* Contributions */}
                {(project.contributions as string[][])[colIndex] && (
                  <div>
                    <ul className="space-y-1">
                      {(project.contributions as string[][])[colIndex].map((contribution, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : Array.isArray(project.typeBadge) ? (
          // Multiple badges but single contribution section
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {(project.typeBadge as string[]).map((badge, index) => (
                <span key={index} className={`px-3 py-1 text-xs rounded-full border ${
                  Array.isArray(project.badgeColor) 
                    ? (project.badgeColor[index] || 'bg-secondary text-white border-secondary')
                    : (project.badgeColor || 'bg-secondary text-white border-secondary')
                }`}>
                  {badge}
                </span>
              ))}
            </div>
            <ul className="space-y-1">
              {(project.contributions as string[]).map((contribution, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // Single badge and single contribution section
          <div>
            <div className="mb-4">
              <span className={`px-3 py-1 text-xs rounded-full border ${
                Array.isArray(project.badgeColor) 
                  ? (project.badgeColor[0] || 'bg-secondary text-white border-secondary')
                  : (project.badgeColor || 'bg-secondary text-white border-secondary')
              }`}>
                {project.typeBadge as string}
              </span>
            </div>
            <ul className="space-y-1">
              {(project.contributions as string[]).map((contribution, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Row 4: View More Button */}
      <div className="mt-auto flex justify-center">
        <ButtonOutline 
          className="flex items-center justify-center gap-2 px-6 py-2"
          onClick={() => onViewMore(project)}
        >
          <span className="text-sm font-medium">View more</span>
          <ExternalLink className="w-4 h-4 flex-shrink-0" />
        </ButtonOutline>
      </div>
    </GlassPanel>
  );
};

export const ProductDevelopment: React.FC = () => {
  const [popupProject, setPopupProject] = useState<ProjectItem | null>(null);

  const openPopup = (project: ProjectItem) => {
    setPopupProject(project);
  };

  const closePopup = () => {
    setPopupProject(null);
  };


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {productDevelopmentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} onViewMore={openPopup} />
          </motion.div>
        ))}
      </div>

      <Popup
        isOpen={!!popupProject}
        onClose={closePopup}
      >
        {popupProject && <ProductDevelopmentPopup project={popupProject} />}
      </Popup>
    </>
  );
};
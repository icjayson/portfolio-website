'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CardPanel, ButtonOutline, Popup, ProjectCover } from '@/components/ui';
import { ExternalLink } from 'lucide-react';
import { PlanningPopup } from './popup/PlanningPopup';

interface ProjectItem {
  id: number;
  name: string;
  logo?: string;
  coverImage?: string;
  href?: string;
  typeBadge: string;
  achievementBadge?: string;
  achievementEvent?: string;
  nameColor?: string;
  badgeColor?: string;
  contributions: string[];
  details?: string;
}

const planningProjects: ProjectItem[] = [
  {
    id: 24,
    name: "DREAMIFY",
    logo: "/dreamify-logo.png",
    coverImage: "/planning-googlehackathon/12.png",
    href: "https://dreamify.dev",
    typeBadge: "Fundraising Pitchdeck",
    achievementBadge: "FINALIST",
    achievementEvent: "Google Developer Groups On Campus Hackathon Vietnam 2026",
    nameColor: "text-[#1E40AF]",
    badgeColor: "bg-[#1E40AF]/20 text-[#1E40AF] border-[#1E40AF]/30",
    contributions: [
      "Built the fundraising pitch deck covering problem, solution, market and business model",
      "Crafted the product narrative, traction story and financial model for investors",
    ]
  },
  {
    id: 25,
    name: "DREAMIFY",
    logo: "/dreamify-logo.png",
    coverImage: "/planning-vas/2.png",
    href: "https://dreamify.dev",
    typeBadge: "Fundraising Pitchdeck",
    achievementBadge: "TOP 20",
    achievementEvent: "Vietnam AI Stars 2026",
    nameColor: "text-[#1E40AF]",
    badgeColor: "bg-[#1E40AF]/20 text-[#1E40AF] border-[#1E40AF]/30",
    contributions: [
      "Built the fundraising pitch deck covering problem, solution, market and business model",
      "Crafted the product narrative, traction story and financial model for investors",
    ]
  },
  {
    id: 1,
    name: "LAONMEDI",
    logo: "/laonmedi-logo.png",
    coverImage: "/planning-laonmedi/1.png",
    href: "https://laonmedi.com",
    typeBadge: "Marketing Proposal",
    achievementBadge: "CHAMPION",
    achievementEvent: 'at "Chien Binh Marketing 2024" competition',
    nameColor: "text-[#EC8002]",
    badgeColor: "bg-[#EC8002]/20 text-[#EC8002] border-[#EC8002]/30",
    contributions: [
      "Research market overview & brand's SWOT",
      "Develop brand's SOC",
      "Develop strategic implication & strategic approach",
      "Build customer journey & IMC plan",
      "Estimate KPI & budget allocation"
    ]
  },
  {
    id: 2,
    name: "SUKI",
    logo: "/suki-logo.jpg",
    coverImage: "/planning-suki/1.png",
    href: "https://suki.vn",
    typeBadge: "Marketing Proposal",
    achievementBadge: "2ND RUNNER-UP",
    achievementEvent: 'at "Marketing Big Day 2024" competition',
    nameColor: "text-[#D454B2]",
    badgeColor: "bg-[#D454B2]/20 text-[#D454B2] border-[#D454B2]/30",
    contributions: [
      "Research market overview & brand's SWOT",
      "Develop strategic implication & strategic approach",
      "Develop big idea & key message",
      "Build customer journey",
      "Develop IMC plan & trade strategy"
    ]
  },
  {
    id: 3,
    name: "KISSHU",
    logo: "/kisshu-logo.png",
    coverImage: "/planning-kisshu/5.png",
    href: "#",
    typeBadge: "IMC Proposal",
    nameColor: "text-[#ED1A25]",
    badgeColor: "bg-[#ED1A25]/20 text-[#ED1A25] border-[#ED1A25]/30",
    contributions: [
      "Conduct competitive landscape analysis to identify product USP",
      "Develop strategic implication using 3C model and strategic approach",
      "Develop IMC plan with channel-specific initiatives",
    ]
  },
  {
    id: 4,
    name: "Vincom",
    logo: "/vincom-logo.webp",
    coverImage: "/planning-vincom/2.png",
    href: "#",
    typeBadge: "Social Media Proposal",
    nameColor: "text-[#D2242A]",
    badgeColor: "bg-[#D2242A]/20 text-[#D2242A] border-[#D2242A]/30",
    contributions: [
      "Evaluate current quality of Vincom and competitors’s media channels",
      "Propose content concepts and pillars for Vincom's owned media channels",
    ]
  },
  {
    id: 5,
    name: "Dong Luc Sport",
    logo: "/dongluc-logo.png",
    coverImage: "/planning-dongluc/1.png",
    href: "#",
    typeBadge: "Social Media Proposal",
    nameColor: "text-[#F66D2A]",
    badgeColor: "bg-[#F66D2A]/20 text-[#F66D2A] border-[#F66D2A]/30",
    contributions: [
      "Research competitors",
      "Develop insight, big idea",
      "Write post demos",
    ]
  },
  {
    id: 6,
    name: "TON Degen",
    logo: "/tondegen-logo.jpg",
    coverImage: "/planning-tondegen/1.png",
    href: "#",
    typeBadge: "Community Development Proposal",
    nameColor: "text-[#0098e9]",
    badgeColor: "bg-[#0098e9]/20 text-[#0098e9] border-[#0098e9]/30",
    contributions: [
      "Main responsibility in developing strategies for the growth of TON Community in Vietnam including Market Analysis, Strategic Initiatives, Execution Plan and Expected Outcome",
    ]
  }
];

const ProjectCard: React.FC<{ project: ProjectItem; onViewMore: (project: ProjectItem) => void; ratio?: '16/9' | '16/7' | '16/5' | '2/3' }> = ({ project, onViewMore, ratio = '16/9' }) => {
  return (
    <CardPanel className="group p-6 rounded-2xl h-full flex flex-col relative overflow-hidden">
      {/* Cover image */}
      <ProjectCover src={project.coverImage} name={project.name} ratio={ratio} />

      {/* Row 1: Logo, Company Name and Type Badge
          (stacked below xl: name → badge; side-by-side on xl) */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 min-w-0">
          {project.logo ? (
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="w-12 h-12 rounded-full object-contain bg-white flex-shrink-0"
            />
          ) : (
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-sm">
                {project.name.substring(0, 2)}
              </span>
            </div>
          )}
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl font-bold hover:opacity-80 transition-colors duration-300 ${project.nameColor || 'text-black'
                }`}
            >
              {project.name}
            </a>
          ) : (
            <h3 className={`text-xl font-bold ${project.nameColor || 'text-black'
              }`}>
              {project.name}
            </h3>
          )}
        </div>
        <span className={`w-fit px-3 py-1 text-xs rounded-full border whitespace-nowrap flex-shrink-0 ${project.badgeColor || 'bg-primary/20 text-primary border-primary/30'
          }`}>
          {project.typeBadge}
        </span>
      </div>

      {/* Row 2: Achievement Badge */}
      {project.achievementBadge && (
        <div className="mb-4">
          <span className="flex w-full flex-col items-center text-center bg-primary/20 text-primary px-4 py-2 rounded-2xl">
            <span className="text-sm font-bold uppercase tracking-wide">
              {project.achievementBadge}
            </span>
            {project.achievementEvent && (
              <span className="text-xs text-primary/80">
                {project.achievementEvent}
              </span>
            )}
          </span>
        </div>
      )}

      {/* Row 3: Contributions */}
      <div className="flex-1 mb-3">
        <h4 className="text-sm font-semibold text-black mb-1">
          My contribution:
        </h4>
        <ul className="space-y-0">
          {project.contributions.map((contribution, index) => (
            <li key={index} className="text-black text-sm flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
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
    </CardPanel>
  );
};

export const Planning: React.FC = () => {
  const [popupProject, setPopupProject] = useState<ProjectItem | null>(null);

  const openPopup = (project: ProjectItem) => {
    setPopupProject(project);
  };

  const closePopup = () => {
    setPopupProject(null);
  };


  return (
    <>
      <div className="space-y-6">
        {/* Row 1: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {planningProjects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onViewMore={openPopup} ratio="16/7" />
            </motion.div>
          ))}
        </div>

        {/* Remaining rows: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {planningProjects.slice(2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onViewMore={openPopup} ratio="16/9" />
            </motion.div>
          ))}
        </div>
      </div>

      <Popup
        isOpen={!!popupProject}
        onClose={closePopup}
      >
        {popupProject && <PlanningPopup project={popupProject} />}
      </Popup>
    </>
  );
};
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, ButtonOutline, FillPanel, Popup } from '@/components/ui';
import { Users, Eye, ThumbsUp, MessagesSquare, CircleDollarSign, TrendingUp, Target, Zap, FileText, ExternalLink} from 'lucide-react';
import { PerformancePopup } from './popup/PerformancePopup';

interface ProjectItem {
  id: number;
  name: string;
  logo?: string;
  href?: string;
  subtext?: string;
  period?: string;
  typeBadge: string;
  nameColor?: string;
  badgeColor?: string;
  achievementBadge?: string;
  results?: {
    label: string;
    value: string;
    icon: string;
  }[];
  contributions: string[];
  details?: string;
}

const performanceProjects: ProjectItem[] = [
  {
    id: 13,
    name: "Phen Marketing",
    logo: "phenmarketing-logo.png",
    href: "#",
    subtext: "(A brand of S.O.C Institute)",
    period: "01/2023 - 04/2023",
    typeBadge: "Facebook Ads",
    nameColor: "text-[#f77a26]",
    badgeColor: "bg-[#f77a26]/20 text-[#f77a26] border-[#f77a26]/30",
    results: [
      { label: "Total Reach", value: "50,192", icon: "Users" },
      { label: "Total Impressions", value: "187,601", icon: "Eye" },
      { label: "Post engagements", value: "3,592", icon: "ThumbsUp" },
      { label: "Messages started", value: "146", icon: "MessagesSquare" },
      { label: "Average CPL", value: "50,828 VND", icon: "CircleDollarSign" }
    ],
    contributions: [
    ]
  },
  {
    id: 14,
    name: "Tạp Hoá Decor",
    logo: "taphoadecor-logo.jpg",
    href: "#",
    subtext: "(Personal Business Project)",
    period: "02/2025 - 03/2025",
    typeBadge: "Facebook Ads",
    nameColor: "text-[#e88e95]",
    badgeColor: "bg-[#e88e95]/20 text-[#e88e95] border-[#e88e95]/30",
    results: [
      { label: "Average CPL", value: "11,448 VND", icon: "CircleDollarSign" },
      { label: "Messages started", value: "224", icon: "MessagesSquare" },
      { label: "Total Reach", value: "47,823", icon: "Users" },
      { label: "Total Impressions", value: "75,805", icon: "Eye" }
    ],
    contributions: [
    ]
  },
  {
    id: 15,
    name: "EVG Cloud",
    logo: "evg-logo.jpg",
    href: "#",
    subtext: "",
    period: "03/2025 - 05/2025",
    typeBadge: "Content SEO",
    nameColor: "text-[#d09029]",
    badgeColor: "bg-[#d09029]/20 text-[#d09029] border-[#d09029]/30",
    results: [
    ],
    contributions: [
      "Conduct keyword research, on-page SEO optimization and content planning for 5 core products: CDN, S3 Storage, Security, Cloud Server, and Streaming",
      "Design UI for 'Blog' module on website",
      "Manage CMS for streamlined content updates"
    ]
  }
];

const ProjectCard: React.FC<{ project: ProjectItem; onViewMore: (project: ProjectItem) => void }> = ({ project, onViewMore }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users": return <Users className="w-4 h-4" />;
      case "Eye": return <Eye className="w-4 h-4" />;
      case "ThumbsUp": return <ThumbsUp className="w-4 h-4" />;
      case "MessagesSquare": return <MessagesSquare className="w-4 h-4" />;
      case "CircleDollarSign": return <CircleDollarSign className="w-4 h-4" />;
      case "TrendingUp": return <TrendingUp className="w-4 h-4" />;
      case "Target": return <Target className="w-4 h-4" />;
      case "Zap": return <Zap className="w-4 h-4" />;
      case "FileText": return <FileText className="w-4 h-4" />;
      default: return <TrendingUp className="w-4 h-4" />;
    }
  };

  return (
    <GlassPanel className="p-6 rounded-2xl h-full flex flex-col relative">
      {/* Top Right: Type Badge and Period */}
      <div className="absolute top-4 right-6 space-y-2 text-right">
        <div>
          <span className={`px-3 py-1 text-xs rounded-full border ${
            project.badgeColor || 'bg-primary/20 text-primary border-primary/30'
          }`}>
            {project.typeBadge}
          </span>
        </div>
        {project.period && (
          <div>
            <span className="text-xs text-gray-400 italic">
              {project.period}
            </span>
          </div>
        )}
      </div>

      {/* Row 1: Logo, Company Name, and Subtext */}
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-2">
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

      {/* Row 2: Results Section */}
      {project.results && project.results.length > 0 && (
        <div className="flex-1 flex flex-col justify-center mb-6">
          <h4 className="text-lg font-semibold text-white mb-4 text-center">
            Result
          </h4>
          <div className={`grid gap-4 ${
            project.results.length === 5 
              ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' 
              : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}>
            {project.results.map((result, index) => (
              <FillPanel key={index} className="rounded-lg p-3 text-center transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center mb-2 text-white">
                  {getIcon(result.icon)}
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  {result.value}
                </div>
                <div className="text-xs text-white/80">
                  {result.label}
                </div>
              </FillPanel>
            ))}
          </div>
        </div>
      )}

      {/* Row 3: Contributions */}
      {project.contributions && project.contributions.length > 0 && (
        <div className="flex-1 flex flex-col justify-center mb-3">
          <h4 className="text-sm font-semibold text-white mb-3">
            My contribution:
          </h4>
          <ul className="space-y-0">
            {project.contributions.map((contribution, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

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

export const Performance: React.FC = () => {
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
        {performanceProjects.map((project, index) => (
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
        {popupProject && <PerformancePopup project={popupProject} />}
      </Popup>
    </>
  );
};
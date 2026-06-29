'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CardPanel, ButtonOutline, Popup, ProjectCover } from '@/components/ui';
import { ExternalLink } from 'lucide-react';
import { ProductDevelopmentPopup } from './popup/ProductDevelopmentPopup';

interface ProjectItem {
  id: number;
  name: string;
  logo?: string;
  coverImage?: string;
  href?: string;
  period?: string;
  subtext?: string;
  context?: string;
  objective?: string;
  typeBadge: string | string[];
  achievementBadge?: string;
  nameColor?: string;
  badgeColor?: string | string[];
  contributions: string[] | string[][];
  details?: string;
}

const productDevelopmentProjects: ProjectItem[] = [
  {
    id: 11,
    name: "DREAMIFY",
    logo: "/dreamify-logo.png",
    coverImage: "/product-dreamify/0.png",
    href: "https://dreamify.dev",
    period: "09/2025 - Present",
    subtext: "(My personal start-up)",
    context: "An always-on AI reporting analyst for online sellers and agencies, who have no data team, and integrated into their team's workspace",
    objective: "Take it from 0 → MVP and validate the core value with real users.",
    typeBadge: ["PRD & User Flow", "MVP Development"],
    nameColor: "text-[#1E40AF]",
    badgeColor: ["bg-[#1E40AF]/20 text-[#1E40AF] border-[#1E40AF]/30", "bg-[#1E40AF]/20 text-[#1E40AF] border-[#1E40AF]/30"],
    contributions: [
      [
        "Co-built an AI product from 0 to MVP, owning product requirement docs, wireframe, user flow, GTM strategy and financial model",
        "Conducted market research, competitor analysis and user interviews to uncover user needs, market gaps and retention hypotheses",
      ],
      [
        "Vibe-coded the frontend with Vite and backend with FastAPI to quickly validate the product concept and user experience",
        "Organically reached 700+ visitors, 11K+ page views, 90 NRUs, ~1,000 conversations and ~28M LLM tokens processed after 1-month launch",
      ]
    ]
  },
  {
    id: 7,
    name: "XUONG KY UC",
    logo: "/xuongkyuc-logo.png",
    coverImage: "/product-xuongkyuc/0.png",
    href: "https://xuong-ky-uc.vercel.app/",
    period: "03/2025 - 08/2025",
    subtext: "(My personal start-up)",
    context: "An NFC-enabled personalized gifting startup with interactive love websites.",
    objective: "Build the product end-to-end and ship a deployed, emotional web experience.",
    typeBadge: ["End-to-End Product", "Full Web App Development"],
    nameColor: "text-[#CEA19E]",
    badgeColor: ["bg-[#CEA19E]/20 text-[#CEA19E] border-[#CEA19E]/30", "bg-[#CEA19E]/20 text-[#CEA19E] border-[#CEA19E]/30"],
    contributions: [
      [
        "Owned end-to-end product development, from product concept, user flow and UI/UX design to full web app build and deployment",
        "Defined core brand assets and product strategy including brand guideline, growth strategy and pricing strategy",
      ],
      [
        "Built and shipped the web app (Next.js, Supabase, EVG S3, Vercel), prototyping and iterating rapidly",
        "Designed the user flow and UI/UX for xuongkyuc.com, focusing on personalization, interaction and emotional value",
      ]
    ]
  },
  {
    id: 8,
    name: "SOCIAL AI AGENT",
    logo: "tondegen-logo.jpg",
    coverImage: "/product-socialai.png",
    href: "#",
    period: "01/2025 - 02/2025",
    subtext: "",
    context: "A blockchain-integrated Social AI Agent concept on the TON ecosystem.",
    objective: "Define the product features and user flow from market research.",
    typeBadge: "User Flow",
    nameColor: "text-[#0064FD]",
    badgeColor: "bg-[#0064FD]/20 text-[#0064FD] border-[#0064FD]/30",
    contributions: [
      "Conducted DeFAI market and competitive research to define product features and user flows for the concept",
      "Designed the user flow, including schema mapping between user input and agent functions",
    ]
  },
  {
    id: 9,
    name: "KISSHU LANDING PAGE",
    logo: "kisshu-logo.png",
    coverImage: "/product-kisshu/0.png",
    href: "#",
    period: "05/2025",
    subtext: "(A brand of Bao Ngoc)",
    context: "A launch-campaign landing page for Kisshu candy, a brand of Bao Ngoc.",
    objective: "Design and ship a fast, responsive landing page for the product launch.",
    typeBadge: ["UI Design", "Frontend Development"],
    nameColor: "text-[#ED1A25]",
    badgeColor: ["bg-[#ED1A25]/20 text-[#ED1A25] border-[#ED1A25]/30", "bg-[#ED1A25]/20 text-[#ED1A25] border-[#ED1A25]/30"],
    contributions: [
      [
        "Designed the wireframe and UI for the launch-campaign landing page in Figma",
      ],
      [
        "Built and deployed the landing page (Next.js, Vercel), owning UI/UX through to deployment with fast rollout and responsiveness",
      ]
    ]
  },
  {
    id: 10,
    name: "BAO NGOC'S CASTELLA CAKE",
    logo: "/baongoc-logo.png",
    coverImage: "/product-baongoc/1.png",
    href: "#",
    period: "05/2025",
    subtext: "",
    context: "An underperforming castella product after multiple R&D rounds.",
    objective: "Run consumer research to guide product and packaging improvement.",
    typeBadge: "Product Research",
    nameColor: "text-[#8F0B0B]",
    badgeColor: "bg-[#8F0B0B]/20 text-black/70 border-[#8F0B0B]/30",
    contributions: [
      "Designed and executed pre- and post-launch user research on Bao Ngoc Castella",
      "Analyzed quantitative and qualitative data to identify actionable insights on flavor and packaging, and delivered a data-driven report",
    ]
  }
];

const ProjectCard: React.FC<{ project: ProjectItem; onViewMore: (project: ProjectItem) => void; ratio?: '16/9' | '16/7' | '16/5' }> = ({ project, onViewMore, ratio = '16/7' }) => {
  return (
    <CardPanel className="group p-6 rounded-2xl h-full flex flex-col relative overflow-hidden">
      {/* Cover image */}
      <ProjectCover src={project.coverImage} name={project.name} ratio={ratio} />

      {/* Row 1: Logo, Company Name, Subtext and Period
          (period drops below the name block below xl) */}
      <div className="mb-4">
        <div className="flex flex-col xl:flex-row xl:items-start gap-2 xl:gap-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
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
            <div className="flex-1 min-w-0">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl font-bold hover:opacity-80 transition-colors duration-300 block ${project.nameColor || 'text-black'
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
              {project.subtext && (
                <p className="text-sm text-gray-700 mt-1">
                  {project.subtext}
                </p>
              )}
            </div>
          </div>
          {project.period && (
            <span className="text-sm text-gray-700 italic whitespace-nowrap flex-shrink-0">
              {project.period}
            </span>
          )}
        </div>
      </div>

      {/* Row 2: Scope badges + Context / Objective (clean glance; full detail in popup) */}
      <div className="flex-1 mb-3 space-y-4">
        {/* Scope badges */}
        <div className="flex flex-wrap gap-2">
          {(Array.isArray(project.typeBadge) ? project.typeBadge : [project.typeBadge]).map((badge, index) => (
            <span key={index} className={`px-3 py-1 text-xs rounded-full border ${Array.isArray(project.badgeColor)
              ? (project.badgeColor[index] || 'bg-secondary text-white border-secondary')
              : (project.badgeColor || 'bg-secondary text-white border-secondary')
              }`}>
              {badge}
            </span>
          ))}
        </div>

        {/* Context → Objective micro-lines */}
        <div className="space-y-2 text-sm leading-relaxed">
          {project.context && (
            <p className="text-gray-700">
              <span className="font-semibold text-black">Context: </span>
              {project.context}
            </p>
          )}
          {project.objective && (
            <p className="text-gray-700">
              <span className="font-semibold text-black">Objective: </span>
              {project.objective}
            </p>
          )}
        </div>
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
      <div className="space-y-6">
        {/* Row 1: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productDevelopmentProjects.slice(0, 2).map((project, index) => (
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

        {/* Row 2: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productDevelopmentProjects.slice(2).map((project, index) => (
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
        {popupProject && <ProductDevelopmentPopup project={popupProject} />}
      </Popup>
    </>
  );
};

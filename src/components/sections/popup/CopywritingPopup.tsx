'use client';

import React from 'react';
import { FillPanel } from '@/components/ui';
import { Users, Eye, ThumbsUp, MessageSquare, CircleDollarSign, Handshake, TrendingUp, Target, Zap, FileText, Facebook } from 'lucide-react';

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

interface CopywritingPopupProps {
  project: ProjectItem;
}

export const CopywritingPopup: React.FC<CopywritingPopupProps> = ({ project }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users": return <Users className="w-4 h-4" />;
      case "Eye": return <Eye className="w-4 h-4" />;
      case "ThumbsUp": return <ThumbsUp className="w-4 h-4" />;
      case "MessageSquare": return <MessageSquare className="w-4 h-4" />;
      case "CircleDollarSign": return <CircleDollarSign className="w-4 h-4" />;
      case "Target": return <Target className="w-4 h-4" />;
      case "Zap": return <Zap className="w-4 h-4" />;
      case "FileText": return <FileText className="w-4 h-4" />;
      case "Handshake": return <Handshake className="w-4 h-4" />;
      default: return <TrendingUp className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Combined Header Row: Logo, Name, Subtext, Period, Type Badge */}
      <div className="flex items-center justify-between gap-4">
        {/* Left side: Logo, Name, Subtext */}
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
            {project.subtext && (
              <p className="text-sm text-gray-400 mt-1 truncate">
                {project.subtext}
              </p>
            )}
          </div>
        </div>

        {/* Right side: Type Badge and Period */}
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <span className={`px-3 py-1 text-xs rounded-full border flex items-center gap-1 ${
            project.badgeColor || 'bg-primary/20 text-primary border-primary/30'
          }`}>
            {project.typeBadge === 'Facebook' && <Facebook size={12} />}
            {project.typeBadge}
          </span>
          {project.period && (
            <span className="text-xs text-gray-400 italic">
              {project.period}
            </span>
          )}
        </div>
      </div>

      {/* Results Section */}
      {project.results && project.results.length > 0 && (
        <div>
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

      {/* Contributions and Images - Conditional Layouts */}
      {project.name === 'TON Degen' ? (
        // Card 1: Large image + 2x3 grid with alt text
        <div>
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
          {/* Large Image */}
          <div className="mt-6">
            <div className="w-full rounded-lg overflow-hidden">
            {[
                { url: "/copywriting-tondegen/10.png", alt: "X Analytics" },
              ].map((image, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-3/5 mx-auto rounded-lg overflow-hidden">
                  <p className="text-xs text-gray-400 text-center mb-2">{image.alt}</p>
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-auto object-cover rounded-lg "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 2x3 Grid with Alt Text */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-white mb-3">
            Some of my copies on X:
            </h4>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              {[
                { url: "/copywriting-tondegen/1.png", alt: "Topic: Regular news" },
                { url: "/copywriting-tondegen/2.png", alt: "Topic: Regular news" },
                { url: "/copywriting-tondegen/3.png", alt: "Topic: Education post" },
                { url: "/copywriting-tondegen/4.png", alt: "Topic: TON Milestone update" },
                { url: "/copywriting-tondegen/5.png", alt: "Topic: TON Projects update" },
                { url: "/copywriting-tondegen/6.png", alt: "Topic: TON Projects update" }
              ].map((image, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-full overflow-hidden">
                  <p className="text-xs text-gray-400 text-center mb-2">{image.alt}</p>
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : project.name === 'Vincom' ? (
        // Card 2: 3x1 grid
        <div>
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
          {/* 3x1 Grid */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-white mb-3">
            Some of my copies on Facebook:
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {[
                "/copywriting-vincom/1.png",
                "/copywriting-vincom/2.png",
                "/copywriting-vincom/3.png"
              ].map((imageUrl, index) => (
                <div key={index} className="w-full rounded-lg overflow-hidden">
                  <img 
                    src={imageUrl}
                    alt={`Vincom project image ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : project.name === 'VinFast' ? (
        // Card 3: 3x1 grid
        <div>
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
          {/* 3x1 Grid */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-white mb-3">
            Some of my copies on Facebook:
            </h4>
            <div className="grid grid-cols-3 gap-4">
            {[
                "/copywriting-vinfast/1.png",
                "/copywriting-vinfast/2.png",
                "/copywriting-vinfast/3.png"
              ].map((imageUrl, index) => (
                <div key={index} className="w-full rounded-lg overflow-hidden">
                  <img 
                    src={imageUrl}
                    alt={`Vincom project image ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : project.name === 'Xanh SM' ? (
        // Card 4: 4x1 grid with alt text
        <div>
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
          {/* 4x1 Grid with Alt Text */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-white mb-3">
            Some of my copies on Facebook:
            </h4>
            <div className="grid grid-cols-4 gap-4">
            {[
                { url: "/copywriting-xanhsm/1.png", alt: "Topic: “App USPs (referral, special discounts,...)" },
                { url: "/copywriting-xanhsm/2.png", alt: "Topic: Activity official announcements" },
                { url: "/copywriting-xanhsm/3.png", alt: "Topic: Service USPs" },
                { url: "/copywriting-xanhsm/4.png", alt: "Topic: Activity official announcements" },
              ].map((image, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-full rounded-lg overflow-hidden">
                  <p className="text-xs text-gray-400 text-center mb-2">{image.alt}</p>
                    <img 
                      alt={image.alt}
                      src={image.url}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : project.name === 'Phen Marketing' ? (
        // Card 5: Large image + 2x3 grid with alt text
        <div>
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
          {/* 2x3 Grid with Alt Text */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-white mb-3">
              Some of my copies on Facebook:
            </h4>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              {[
                { url: "/copywriting-phenmarketing/1.png", alt: "Topic: Course introduction" },
                { url: "/copywriting-phenmarketing/2.png", alt: "Topic: Knowledge" },
                { url: "/copywriting-phenmarketing/3.png", alt: "Topic: Meme" },
                { url: "/copywriting-phenmarketing/4.png", alt: "Topic: Event" },
                { url: "/copywriting-phenmarketing/5.png", alt: "Topic: Marketing in Real Life" },
                { url: "/copywriting-phenmarketing/6.png", alt: "Topic: News" }
              ].map((image, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-full rounded-lg overflow-hidden">
                  <p className="text-xs text-gray-400 text-center mb-2">{image.alt}</p>
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Fallback for any other projects
        project.contributions && project.contributions.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
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
        )
      )}
    </div>
  );
};

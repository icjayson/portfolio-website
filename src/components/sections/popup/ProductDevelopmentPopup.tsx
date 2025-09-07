'use client';

import React from 'react';

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

interface ProductDevelopmentPopupProps {
  project: ProjectItem;
}

export const ProductDevelopmentPopup: React.FC<ProductDevelopmentPopupProps> = ({ project }) => {
  return (
    <div className="space-y-6">
      {/* Combined Header Row: Logo, Name, Subtext, Period */}
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

        {/* Right side: Period only */}
        {project.period && (
          <div className="flex-shrink-0">
            <span className="text-xs text-gray-400 italic">
              {project.period}
            </span>
          </div>
        )}
      </div>

      {/* Context Section */}
      {project.name === 'XUONG KY UC' && (
        <div className="rounded-lg">
          <p className="text-gray-300 text-sm leading-relaxed">
            <span className="text-sm font-semibold text-white">Context:</span> Initial idea was a gift for couples, but user interviews revealed a key insight: couples desire not only emotional meaning but also practical value.
          </p>
          <p className="text-md text-white mt-2">
            <a href="https://xuongkyuc.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 underline">
              Visit website: xuongkyuc.com
            </a>
          </p>
        </div>
      )}
      {project.name === 'KISSHU LANDING PAGE' && (
        <div className="rounded-lg">
        <p className="text-gray-300 text-sm leading-relaxed">
          <span className="text-sm font-semibold text-white">Context:</span> The landing page was developed as a central touchpoint to support marketing efforts during the product launch phase.
        </p>
        <p className="text-md text-white mt-2">
          <a href="https://keo-ngam-kisshu.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 underline">
            Visit landing page: keo-ngam-kisshu.vercel.app/
          </a>
        </p>
      </div>
      )}

      {/* Type Badges and Contributions */}
      <div>
        {project.name === 'XUONG KY UC' ? (
          // Card 1: 2-column layout with images below each column
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
                <ul className="space-y-1">
                  {(project.contributions[colIndex] as string[]).map((contribution, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
                {/* Images below each column */}
                <h4 className="text-sm font-semibold text-white mb-1">
              Showcase of my work:
            </h4>
                <div className="space-y-2">
                  {colIndex === 0 ? [
                    "product-xuongkyuc/1.png",
                    "product-xuongkyuc/2.png"
                  ].map((imageUrl, index) => {
                    const captions = [
                      'NFC Card: Căn cước Tình yêu',
                      'Website xuongkyuc.com: Nhat ky Tinh yeu'
                    ];
                    const caption = captions[index] || `XUONG KY UC image ${index + 1}`;
                    return (
                      <div key={index} className="w-full rounded-lg overflow-hidden">
                        <p className="text-xs text-gray-400 text-center mb-2">{caption}</p>
                        <img 
                          src={imageUrl} 
                          alt={caption}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    );
                  }) : [
                    "product-xuongkyuc/3.png",
                    "product-xuongkyuc/4.png"
                  ].map((imageUrl, index) => {
                    const captions = [
                      'User Interface on Figma',
                      'Userflow on Excalidraw '
                    ];
                    const caption = captions[index] || `XUONG KY UC image ${index + 3}`;
                    return (
                      <div key={index} className="w-full rounded-lg overflow-hidden">
                        <p className="text-xs text-gray-400 text-center mb-2">{caption}</p>
                        <img 
                          src={imageUrl} 
                          alt={caption}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : project.name === 'SOCIAL AI AGENT' ? (
          // Card 2: Split row + large image
          <div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Left Column: Type Badge and Contributions */}
              <div>
                <div className="mb-4">
                  <span className={`px-3 py-1 text-xs rounded-full border ${
                    project.badgeColor || 'bg-secondary text-white border-secondary'
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
              {/* Right Column: Context */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  Context:
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                In early 2025, the AI Agent ecosystem witnessed an explosive surge within blockchain market <br /> Therefore, we initiated the development of a Social AI Agent on the Mantle ecosystem
                </p>
              </div>
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">
              Showcase of my work:
            </h4>
            {/* Large Image */}
            <div className="w-full rounded-lg overflow-hidden">
              <p className="text-xs text-gray-400 text-center mb-2">Agent userflow on Miro</p>
              <img 
                src="/product-socialai.png"
                alt="Agent userflow on Miro "
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ) : project.name === 'KISSHU LANDING PAGE' ? (
          // Card 3: 2-column layout with images below each column
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
                <ul className="space-y-1">
                  {(project.contributions[colIndex] as string[]).map((contribution, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
                {/* Images below each column */}
                <h4 className="text-sm font-semibold text-white mb-1">
              Showcase of my work:
            </h4>
                <div className="space-y-2">
                  {colIndex === 0 ? [
                    "/product-kisshu/1.png",
                    "/product-kisshu/2.png"
                  ].map((imageUrl, index) => {
                    const captions = [
                      'Kisshu landing page',
                      'User Interface on Figma'
                    ];
                    const caption = captions[index] || `KISSHU image ${index + 1}`;
                    return (
                      <div key={index} className="w-full rounded-lg overflow-hidden">
                        <p className="text-xs text-gray-400 text-center mb-2">{caption}</p>
                        <img 
                          src={imageUrl} 
                          alt={caption}
                          className="w-full h-auto object-cover "
                        />
                      </div>
                    );
                  }) : [
                    "/product-kisshu/3.png",
                    "/product-kisshu/4.png"
                  ].map((imageUrl, index) => {
                    const captions = [
                      'Vibe-coding using ReactJS  on Cursor AI ',
                      'Deploy on Vercel'
                    ];
                    const caption = captions[index] || `KISSHU image ${index + 3}`;
                    return (
                      <div key={index} className="w-full rounded-lg overflow-hidden">
                        <p className="text-xs text-gray-400 text-center mb-2">{caption}</p>
                        <img 
                          src={imageUrl} 
                          alt={caption}
                          className="w-full h-auto object-cover "
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : project.name === 'BAO NGOC\'S CASTELLA CAKE' ? (
          // Card 4: Split row + 6 images in 3x2 grid
          <div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Left Column: Type Badge and Contributions */}
              <div>
                <div className="mb-4">
                  <span className={`px-3 py-1 text-xs rounded-full border ${
                    project.badgeColor || 'bg-secondary text-white border-secondary'
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
              {/* Right Column: Context */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  Context:
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                Despite multiple R&D rounds, the product underperformed in sales. A large-scale consumer survey was conducted to guide product improvement.
                </p>
              </div>
            </div>
            {/* 6 Images in 3x2 Grid */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">
                Showcase of my work:
              </h4>
              <div className="grid grid-cols-2 grid-rows-3 gap-4">
                {[
                  "/product-baongoc/1.png",
                  "/product-baongoc/2.png",
                  "/product-baongoc/3.png",
                  "/product-baongoc/4.png",
                  "/product-baongoc/5.png",
                  "/product-baongoc/6.png"
                ].map((imageUrl, index) => {
                  const captions = [
                    'Questionnaire design',
                    'Analytics: Customer demographics',
                    'Analytics: Taste preferences',
                    'Analytics: Packaging preferences',
                    'Analytics: Packaging preferences',
                    'Summary: Key findings'
                  ];
                  const caption = captions[index] || `Bao Ngoc Castella Cake research image ${index + 1}`;
                  return (
                    <div key={index} className="w-full rounded-lg overflow-hidden">
                      <p className="text-xs text-gray-400 text-center mb-2">{caption}</p>
                      <img 
                        src={imageUrl} 
                        alt={caption}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          // Fallback for any other projects
          <div>
            {Array.isArray(project.typeBadge) ? (
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
        )}
      </div>
    </div>
  );
};

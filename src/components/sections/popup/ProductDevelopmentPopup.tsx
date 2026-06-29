'use client';

import React from 'react';
import { FillPanel } from '@/components/ui';

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
              <p className="text-sm text-gray-600 mt-1 truncate">
                {project.subtext}
              </p>
            )}
          </div>
        </div>

        {/* Right side: Period only */}
        {project.period && (
          <div className="flex-shrink-0">
            <span className="text-xs text-gray-600 italic">
              {project.period}
            </span>
          </div>
        )}
      </div>

      {/* Context Section */}
      {project.name === 'DREAMIFY' && (
        <div className="rounded-lg">
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="text-sm font-semibold text-black">Context:</span> Dreamify is an AI reporting analyst for online sellers and agencies, built to turn business data into practical insights through an AI-first workflow.
          </p>
          <p className="text-md text-black mt-2">
            <a href="https://dreamify.dev" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200 underline">
              Visit website: dreamify.dev
            </a>
          </p>
        </div>
      )}
      {project.name === 'XUONG KY UC' && (
        <div className="rounded-lg">
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="text-sm font-semibold text-black">Context:</span> Xuong Ky Uc provides NFC-enabled personalized cards and interactive love websites, combining emotional gifting with personalized digital interaction.
          </p>
          <p className="text-md text-black mt-2">
            <a href="https://xuong-ky-uc.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200 underline">
              Visit website: xuongkyuc.com
            </a>
          </p>
        </div>
      )}
      {project.name === 'KISSHU LANDING PAGE' && (
        <div className="rounded-lg">
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="text-sm font-semibold text-black">Context:</span> The landing page was developed as a central touchpoint to support marketing efforts during the product launch phase.
          </p>
          <p className="text-md text-black mt-2">
            <a href="https://keo-ngam-kisshu.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200 underline">
              Visit landing page: keo-ngam-kisshu.vercel.app/
            </a>
          </p>
        </div>
      )}

      {/* Type Badges and Contributions */}
      <div>
        {project.name === 'DREAMIFY' ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {(project.typeBadge as string[]).map((badge, colIndex) => (
                <div key={colIndex} className="space-y-3">
                  <div>
                    <span className={`px-3 py-1 text-xs rounded-full border ${Array.isArray(project.badgeColor)
                      ? (project.badgeColor[colIndex] || 'bg-secondary text-white border-secondary')
                      : (project.badgeColor || 'bg-secondary text-white border-secondary')
                      }`}>
                      {badge}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {(project.contributions[colIndex] as string[]).map((contribution, index) => (
                      <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-semibold text-black mb-3">
                Key milestones after 1-month launch:
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Visitors', value: '700+' },
                  { label: 'Page views', value: '11K+' },
                  { label: 'NRUs', value: '90' },
                  { label: 'Conversations', value: '~1,000' },
                  { label: 'LLM tokens processed', value: '~28M' },
                  { label: 'Core insight', value: 'Aha moment confirmed' }
                ].map((metric, index) => (
                  <FillPanel key={index} className="rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-xs text-white/80">{metric.label}</div>
                  </FillPanel>
                ))}
              </div>
            </div>

            {/* Showcase of my work */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-black mb-3">
                Showcase of my work:
              </h4>
              <div className="space-y-4">
                {/* Product walkthrough video */}
                <div className="w-full max-w-full md:max-w-[70%] mx-auto rounded-lg overflow-hidden">
                  <p className="text-xs text-gray-600 text-center mb-2">Product Showcase Video</p>
                  <video
                    src="/product-dreamify/video-about-full.mp4"
                    controls
                    playsInline
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { src: "/product-dreamify/1.png", caption: "Product Browser Interface" },
                    { src: "/product-dreamify/4.png", caption: "Workspace Integration Interface" },
                    { src: "/product-dreamify/3.jpg", caption: "Data Connector Feature" },
                    { src: "/product-dreamify/2.png", caption: "Fundraising pitch deck" },
                    { src: "/product-dreamify/5.png", caption: "Web traffic analytics dashboard" },
                    { src: "/product-dreamify/6.png", caption: "Product usage analytics dashboard" },
                  ].map((item, index) => (
                    <div key={index} className="w-full rounded-lg overflow-hidden">
                      <p className="text-xs text-gray-600 text-center mb-2">{item.caption}</p>
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : project.name === 'XUONG KY UC' ? (
          // Card 1: 2-column layout with images below each column
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(project.typeBadge as string[]).map((badge, colIndex) => (
              <div key={colIndex} className="space-y-3">
                {/* Type Badge */}
                <div>
                  <span className={`px-3 py-1 text-xs rounded-full border ${Array.isArray(project.badgeColor)
                    ? (project.badgeColor[colIndex] || 'bg-secondary text-white border-secondary')
                    : (project.badgeColor || 'bg-secondary text-white border-secondary')
                    }`}>
                    {badge}
                  </span>
                </div>
                {/* Contributions */}
                <ul className="space-y-1">
                  {(project.contributions[colIndex] as string[]).map((contribution, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
                {/* Images below each column */}
                <h4 className="text-sm font-semibold text-black mb-1">
                  Showcase of my work:
                </h4>
                <div className="space-y-2">
                  {colIndex === 0 ? [
                    "product-xuongkyuc/1.png",
                    "product-xuongkyuc/2.png"
                  ].map((imageUrl, index) => {
                    const captions = [
                      'NFC Card: Căn cước Tình yêu',
                      'Interactive love website on xuongkyuc.com'
                    ];
                    const caption = captions[index] || `XUONG KY UC image ${index + 1}`;
                    return (
                      <div key={index} className="w-full rounded-lg overflow-hidden">
                        <p className="text-xs text-gray-600 text-center mb-2">{caption}</p>
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
                      'UI/UX design on Figma',
                      'User flow and product logic'
                    ];
                    const caption = captions[index] || `XUONG KY UC image ${index + 3}`;
                    return (
                      <div key={index} className="w-full rounded-lg overflow-hidden">
                        <p className="text-xs text-gray-600 text-center mb-2">{caption}</p>
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
                  <span className={`px-3 py-1 text-xs rounded-full border ${project.badgeColor || 'bg-secondary text-white border-secondary'
                    }`}>
                    {project.typeBadge as string}
                  </span>
                </div>
                <ul className="space-y-1">
                  {(project.contributions as string[]).map((contribution, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Column: Context */}
              <div>
                <h4 className="text-sm font-semibold text-black mb-1">
                  Context:
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  In early 2025, the AI Agent ecosystem witnessed an explosive surge within blockchain market <br /> Therefore, we initiated the development of a Social AI Agent on the Mantle ecosystem
                </p>
              </div>
            </div>
            <h4 className="text-sm font-semibold text-black mb-1">
              Showcase of my work:
            </h4>
            {/* Large Image */}
            <div className="w-full rounded-lg overflow-hidden">
              <p className="text-xs text-gray-600 text-center mb-2">Agent userflow design</p>
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
                  <span className={`px-3 py-1 text-xs rounded-full border ${Array.isArray(project.badgeColor)
                    ? (project.badgeColor[colIndex] || 'bg-secondary text-white border-secondary')
                    : (project.badgeColor || 'bg-secondary text-white border-secondary')
                    }`}>
                    {badge}
                  </span>
                </div>
                {/* Contributions */}
                <ul className="space-y-1">
                  {(project.contributions[colIndex] as string[]).map((contribution, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
                {/* Images below each column */}
                <h4 className="text-sm font-semibold text-black mb-1">
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
                        <p className="text-xs text-gray-600 text-center mb-2">{caption}</p>
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
                      'Build landing page using Next.js',
                      'Deploy on Vercel hosting'
                    ];
                    const caption = captions[index] || `KISSHU image ${index + 3}`;
                    return (
                      <div key={index} className="w-full rounded-lg overflow-hidden">
                        <p className="text-xs text-gray-600 text-center mb-2">{caption}</p>
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
                  <span className={`px-3 py-1 text-xs rounded-full border ${project.badgeColor || 'bg-secondary text-white border-secondary'
                    }`}>
                    {project.typeBadge as string}
                  </span>
                </div>
                <ul className="space-y-1">
                  {(project.contributions as string[]).map((contribution, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Column: Context */}
              <div>
                <h4 className="text-sm font-semibold text-black mb-1">
                  Context:
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Despite multiple R&D rounds, the product underperformed in sales. A large-scale consumer survey was conducted to guide product improvement.
                </p>
              </div>
            </div>
            {/* 6 Images in 3x2 Grid */}
            <div>
              <h4 className="text-sm font-semibold text-black mb-1">
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
                      <p className="text-xs text-gray-600 text-center mb-2">{caption}</p>
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
                    <span key={index} className={`px-3 py-1 text-xs rounded-full border ${Array.isArray(project.badgeColor)
                      ? (project.badgeColor[index] || 'bg-secondary text-white border-secondary')
                      : (project.badgeColor || 'bg-secondary text-white border-secondary')
                      }`}>
                      {badge}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {(project.contributions as string[]).map((contribution, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <span className={`px-3 py-1 text-xs rounded-full border ${Array.isArray(project.badgeColor)
                    ? (project.badgeColor[0] || 'bg-secondary text-white border-secondary')
                    : (project.badgeColor || 'bg-secondary text-white border-secondary')
                    }`}>
                    {project.typeBadge as string}
                  </span>
                </div>
                <ul className="space-y-1">
                  {(project.contributions as string[]).map((contribution, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
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

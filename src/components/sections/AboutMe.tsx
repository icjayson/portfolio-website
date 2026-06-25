'use client';

import { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, FillPanel, GradientPanel } from '@/components/ui';
import { Trophy, GraduationCap, CircleStar, Medal, ChevronDown } from 'lucide-react';

interface TimelineItem {
  role: string;
  company: string;
  companyDomain?: string;
  companyUrl?: string;
  subtext?: string;
  skills: string[];
  period: string;
  description: string[];
  milestones?: { label: string; items: string[] };
}

export const AboutMe: React.FC = () => {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const normalizeBulletText = (text: string): string => {
    return text.replace(/^\s*[\-•]\s*/, '');
  };

  // Render a bullet line, turning **keyword** markers into highlighted chips
  const renderDescriptionLine = (text: string): React.ReactNode => {
    const clean = normalizeBulletText(text);
    return clean.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={i}
            className="font-semibold text-primary bg-primary/10 rounded px-1 py-0.5 whitespace-nowrap"
          >
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <Fragment key={i}>{part}</Fragment>;
    });
  };

  // Experience timeline data
  const timelineData: TimelineItem[] = [
    {
      role: 'Marketing Collaborator',
      company: 'Zalo Games (Zalo)',
      skills: ['Market Research', 'Strategic Planning', 'User Acquisition', 'Data Analytics'],
      period: '12/2025 - Present',
      description:
        ['Owned marketing execution from game research, brand guideline and launch plan to daily UA setup, data tracking and optimization',
          'Managed internal and external UA channels, monitoring KPIs including CPI, CTR, NRU, PU, PR, RR and revenue',
          'Prepared daily data reports, identified funnel bottlenecks and proposed post-release optimization actions'],
      milestones: {
        label: 'Key achievements',
        items:
          ['Game “Ma Kiếm”: **470K+ NRU** and **2.5B+ VND** revenue in the 1st month; reached **26K+ DAU** and **6.7B+ VND** revenue after 3 months',
            'Game “ZA War: Survival VN”: **880K+ NRU** and **1.8B+ VND** revenue in the 1st month']
      }
    },
    {
      role: 'Product Marketing Intern',
      company: 'Bao Ngoc',
      skills: ['Product Research', 'Product Development'],
      period: '03/2025 - 07/2025',
      description:
        ['Conducted pre- and post-launch product research to identify insights on flavor, packaging and customer perception',
          'Developed IMC plan, key messages and key visuals for new product launch (Kisshu Candy)',
          'Designed UI and built a launching landing page using Next.js and Vercel hosting']
    },
    {
      role: 'Marketing Associate',
      company: 'EVG Cloud',
      subtext: 'Role: Marketing Team Lead',
      skills: ['Strategic Planning', 'SEO', 'Copywriting'],
      period: '03/2025 - 05/2025',
      description:
        ['Built overall marketing plan and cross-functional coordination workflow between tech and marketing team',
          'Conducted SEO keyword research, on-page optimization and content strategy',
          'Designed UI for the website “Blog” module to improve content operation']
    },
    {
      role: 'Growth Marketing Executive',
      company: 'AnyAxis Labs',
      subtext: 'Role: Head of Marketing at Ton Degen',
      skills: ['Strategic Planning', 'Performance', 'Product Development'],
      period: '03/2024 - 02/2025',
      description:
        ['Researched DeFAI trends and designed product features/user flow for a Social AI Agent concept',
          'Developed content strategy, tracked market trends and created daily content on X to drive reach and follower growth',
          'Proposed growth strategies for TON Community in Vietnam'],
      milestones: {
        label: 'Key achievements in 7 months',
        items:
          ['Generated **$30,000+ revenue** with total **120+ business partners**',
            'Grew communities to **10,000+ members**, achieved **10M+ impressions** and **80K+ new followers** organically']
      }
    },
    {
      role: 'Marketing Freelancer',
      company: 'REPI',
      skills: ['Strategic Planning', 'Performance'],
      period: '03/2024 - 06/2024',
      description:
        ['Executed performance marketing campaigns to clear old inventory',
          'Built rebranding proposal transitioning from “REPI” to “HORUS”, including Vision, Mission, Slogan, Core Values, and Brand Manifesto.',
          'Contributed to conceptualizing and creating “HORUS" Brand Guideline']
    },
    {
      role: 'Marketing Intern',
      company: 'G.E.C Agency',
      skills: ['Strategic Planning', 'Copywriting'],
      period: '05/2023 - 09/2023',
      description:
        ['Created branded content on Facebook for Xanh SM, Vincom, VinFast and Ocean City (Vinhomes)',
          'Built content strategy proposals for Dong Luc Sport and VinFast',
          'Executed multi-channel seeding activities.']
    },
    {
      role: 'Performance Marketing Intern',
      company: 'S.O.C Institute',
      skills: ['Performance', 'Copywriting'],
      period: '11/2022 - 06/2023',
      description:
        ['Designed and created informative, trendy Facebook posts',
          'Managed Facebook Ads tools to drive lead generation',
          'Built IMC plans and organized online webinars and mock classes.'],
      milestones: {
        label: 'Key achievements',
        items:
          ['Achieved **~60,000 VND** average CPL and **~3.7%** average CTR',
            'Facebook Ads posts reached **2,500–6,000 views** and **300–500 engagements** each']
      }
    }
  ];

  // Personal projects timeline data (rendered on the right column)
  const personalProjectsData: TimelineItem[] = [
    {
      role: 'Co-Founder',
      company: 'Dreamify',
      companyDomain: 'dreamify.dev',
      companyUrl: 'https://dreamify.dev',
      skills: ['Product Research', 'Product Development', 'User Acquisition'],
      period: '09/2025 - Present',
      description:
        ['Co-built an AI reporting analyst from 0 to MVP, owning product requirement docs, wireframe, user flow, GTM strategy and financial model',
          'Vibe-coded the frontend with Vite and backend with FastAPI to quickly validate the product concept and user experience',
          'Conducted market research and user interviews to define pilot direction and retention hypotheses'],
      milestones: {
        label: 'Key milestones after 1-month launch',
        items:
          ['Organic Traffic: **700+ visitors**, **11K+ page views**',
            'User Acquisition: **90 NRUs**, **~1,000 conversations** generated and **~28M LLM tokens** burnt']
      }
    },
    {
      role: 'Co-Founder & Product Lead',
      company: 'Xuong Ky Uc',
      companyDomain: 'xuongkyuc.com',
      companyUrl: 'https://xuong-ky-uc.vercel.app/',
      skills: ['Product Research', 'Product Development', 'Strategic Planning'],
      period: '03/2025 - 08/2025',
      description:
        ['Handled end-to-end product development, from product concept, user flow and UI/UX design to full web app development and deployment',
          'Built the web app using Next.js, Supabase database, EVG S3 and Vercel hosting',
          'Developed core brand assets including brand guideline, growth strategy and pricing strategy']
    }
  ];

  // Achievement data
  const achievementData = [
    {
      title: 'FINALIST - Google Developer Groups On Campus Hackathon Vietnam 2026',
      date: '2026',
      icon: Trophy
    },
    {
      title: 'TOP 20 - Vietnam AI Stars 2026',
      date: '2026',
      icon: CircleStar
    },
    {
      title: 'CHAMPION - Chien Binh Marketing 2024',
      date: '2024',
      icon: Trophy
    },
    {
      title: '2ND RUNNER-UP - Marketing Big Day 2024',
      date: '2024',
      icon: Medal
    },
    {
      title: 'TOP 20 - Chien Binh Marketing 2023',
      date: '2023',
      icon: CircleStar
    },
    {
      title: 'Academic Scholarship - National Economics University',
      date: '4 times',
      icon: Medal
    }
  ];

  // Education data
  const educationData = [
    {
      university: 'National Economics University',
      details: ['Major: Digital Marketing', 'GPA: 3.82'],
      period: '2022 - 2026'
    },
    {
      university: 'Tran Phu High School for the Gifted',
      details: ['Major: Chinese'],
      period: '2019 - 2022'
    }
  ];

  // Reusable timeline renderer (used for both Work Experience and Personal Projects)
  const renderTimeline = (items: TimelineItem[], keyPrefix: string) => (
    <div className="relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-5 lg:left-6 top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden lg:block"></div>

      {/* Timeline Cards */}
      <div className="space-y-8">
        {items.map((item, index) => {
          const itemKey = `${keyPrefix}-${index}`;
          const isExpanded = expandedKey === itemKey;
          return (
            <motion.div
              key={itemKey}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Animated Pulse Dot */}
              <div className="absolute left-3 lg:left-4 top-2 w-6 h-6 bg-primary rounded-full border-4 border-white hidden lg:block"
                style={{
                  boxShadow: '0 0 25px rgba(37, 99, 235, 0.8), 0 0 50px rgba(37, 99, 235, 0.4)',
                  animation: 'pulseGlow 2s ease-in-out infinite'
                }}></div>

              {/* Timeline Card */}
              <GlassPanel className="ml-0 lg:ml-16 p-6 rounded-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">{item.role}</h3>
                    <p className="text-black text-base mb-1">
                      Company: {item.company}
                      {item.companyDomain && (
                        <>
                          {' - '}
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium underline hover:text-secondary transition-colors"
                          >
                            {item.companyDomain}
                          </a>
                        </>
                      )}
                    </p>
                    {item.subtext && (
                      <p className="text-gray-700 text-sm italic">{item.subtext}</p>
                    )}
                  </div>
                  <div className="lg:ml-4">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <FillPanel key={skillIndex} className="px-4 py-1 text-sm rounded-full hover:bg-primary/80 transition-colors">
                      {skill}
                    </FillPanel>
                  ))}
                </div>

                {/* Toggle Description */}
                {item.description && (
                  <div className="mt-4">
                    {!isExpanded && (
                      <button
                        type="button"
                        onClick={() => setExpandedKey(itemKey)}
                        className="w-full flex items-center justify-between md:justify-start text-left text-black/60 hover:text-black transition-colors"
                        aria-expanded={false}
                        aria-controls={`exp-desc-${itemKey}`}
                      >
                        <span className="text-sm font-medium flex items-center gap-2">
                          Show work description
                          <ChevronDown className="hidden md:inline-block w-5 h-5 transition-transform duration-300 rotate-0" />
                        </span>
                        <ChevronDown className="md:hidden w-5 h-5 transition-transform duration-300 rotate-0" />
                      </button>
                    )}

                    <motion.div
                      id={`exp-desc-${itemKey}`}
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-1 list-disc marker:text-primary pl-5 space-y-2 text-sm text-black/80 leading-relaxed">
                        {item.description.map((line: string, i: number) => (
                          <li key={i}>{renderDescriptionLine(line)}</li>
                        ))}
                      </ul>

                      {item.milestones && (
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-primary mb-1">
                            {item.milestones.label}
                          </p>
                          <ul className="list-disc marker:text-primary pl-5 space-y-2 text-sm text-black/80 leading-relaxed">
                            {item.milestones.items.map((line: string, i: number) => (
                              <li key={i}>{renderDescriptionLine(line)}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>

                    {isExpanded && (
                      <button
                        type="button"
                        onClick={() => setExpandedKey(null)}
                        className="mt-3 w-full flex items-center justify-between md:justify-start text-left text-black/60 hover:text-black transition-colors"
                        aria-expanded
                        aria-controls={`exp-desc-${itemKey}`}
                      >
                        <span className="text-sm font-medium flex items-center gap-2">
                          Hide work description
                          <ChevronDown className="hidden md:inline-block w-5 h-5 transition-transform duration-300 rotate-180" />
                        </span>
                        <ChevronDown className="md:hidden w-5 h-5 transition-transform duration-300 rotate-180" />
                      </button>
                    )}
                  </div>
                )}
              </GlassPanel>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="about" className="section-padding bg-transparent relative">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Header Section with Sparkles */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary flex items-center justify-center gap-4 font-serif">
            <span>The Road So Far</span>
          </h1>
        </motion.div>

        {/* 2-Column Equal-Width Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Work Experience Timeline (Left) */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8 font-serif">Work Experience</h2>
            {renderTimeline(timelineData, 'work')}
          </div>

          {/* Personal Projects + Sidebar (Right) */}
          <div className="space-y-8">
            {/* Personal Projects Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8 font-serif">Personal Projects</h2>
              {renderTimeline(personalProjectsData, 'project')}
            </div>

            {/* Achievements Card */}
            <motion.div
              className="ml-0 lg:ml-16"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <GradientPanel className="p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-white">Achievements</h3>
                </div>
                <div className="space-y-4">
                  {achievementData.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <GlassPanel key={index} className="px-4 py-2 rounded-2xl transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <IconComponent className="text-white w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-white text-md">{achievement.title}</p>
                            <p className="text-sm text-white">{achievement.date}</p>
                          </div>
                        </div>
                      </GlassPanel>
                    );
                  })}
                </div>
              </GradientPanel>
            </motion.div>

            {/* Education Card */}
            <motion.div
              className="ml-0 lg:ml-16"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <GlassPanel className="p-6 rounded-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-primary">Education</h3>
                </div>
                <div className="space-y-5">
                  {educationData.map((edu, index) => (
                    <div key={index} className="text-black">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <GraduationCap className="text-black w-6 h-6 flex-shrink-0" />
                          <p className="font-medium">{edu.university}</p>
                        </div>
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                          {edu.period}
                        </span>
                      </div>
                      {edu.details.map((detail, i) => (
                        <p key={i} className="text-sm text-black ml-9">{detail}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

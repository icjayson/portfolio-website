'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel, FillPanel, GradientPanel } from '@/components/ui';
import { Sparkles, Trophy, GraduationCap, Phone, Mail, CircleStar, Medal,  Linkedin, ChevronDown, Figma } from 'lucide-react';

export const AboutMe: React.FC = () => {
  // Parallax effect state
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const normalizeBulletText = (text: string): string => {
    return text.replace(/^\s*[\-•]\s*/, '');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxSpeed = 0.5;
      setParallaxOffset(scrollY * parallaxSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Experience timeline data (7 items)
  const timelineData = [
    {
      role: 'Co-Founder & Product Lead',
      company: 'Xuong Ky Uc - xuongkyuc.com',
      skills: ['Planning', 'Product Developement', 'Frontend Development', 'UI & Graphic Design'],
      period: '03/2025 - Present',
      description: 
      ['Led end-to-end product concept development from the ground up based on market research and customer insights, to build product portfolio',
        'Designed complete userflow and partly UI for website xuongkyuc.com',
        'Developed core brand assets including brand guidelines, marketing strategy, and pricing policy']
    },
        {
      role: 'Product Marketing Intern',
      company: 'Bao Ngoc',
      skills: ['Planning', 'Product Developement'],
      period: '03/2025 - 07/2025',
      description: 
      ['Conducted pre- and post-launch product research, focusing on product flavor and packaging.',
        'Developed IMC plans for new product launch',
        'Collaborated with media team to produce performance-driven content',
        'Design UI, build and deploy a launching-campaign landing page using Figma, Cursor AI and Vercel']
    },
    {
      role: 'Marketing Intern',
      company: 'EVG Cloud',
      subtext: 'Role: Marketing Team Lead',
      skills: ['Planning', 'SEO', 'Copywriting'],
      period: '03/2025 - 05/2025',
      description: 
      ['Built overall marketing plan and cross-functional coordination to align marketing strategies with business goals',
        'Conducted SEO keyword research, on-page optimization and content strategy',
        'Designed UI for “Blog” module on website',
        'Managed CMS for streamlined content updates on website']
    },
    {
      role: 'Marketing Executive',
      company: 'AnyAxis Labs',
      subtext: 'Role: Head of Marketing at Ton Degen',
      skills: ['Planning', 'Performance', 'Product Developement'],
      period: '03/2024 - 02/2025',
      description: 
      ['Developed and created content on X, covering news and projects on TON',
        'Executed business development, reaching and collaborating with partners through promotional service packages',
        'Proposed growth strategies for TON Community in Vietnam']
    },
    {
      role: 'Marketing Freelancer',
      company: 'REPI',
      skills: ['Planning', 'Performance'],
      period: '03/2024 - 06/2024',
      description: 
      ['Executed performance marketing campaigns to clear old inventory',
        'Built rebranding proposal transitioning from “REPI” to “HORUS”, including Vision, Mission, Slogan, Core Values, and Brand Manifesto.',
        'Contributed to conceptualizing and creating “HORUS" Brand Guideline']
    },
    {
      role: 'Content Coordinator',
      company: 'G.E.C Agency',
      skills: ['Planning', 'Copywriting'],
      period: '05/2023 - 09/2023',
      description: 
      ['Created branded content on Facebook for Xanh SM, Vincom, VinFast and Ocean City (Vinhomes)',
        'Built content strategy proposals for Dong Luc Sport and VinFast',
        'Executed multi-channel seeding activities.']
    },
    {
      role: 'Marketing Intern',
      company: 'S.O.C Institute',
      skills: ['Performance', 'Copywriting'],
      period: '11/2022 - 06/2023',
      description: 
      ['Designed and created informative, trendy Facebook posts',
        'Managed Facebook Ads tools to drive lead generation',
        'Built IMC plans and organized online webinars and mock classes.']
    }
  ];

  // Achievement data (3 items)
  const achievementData = [
    {
      title: 'CHAMPION - Chien Binh Marketing 2024',
      date: '11/2024',
      icon: Trophy
    },
    {
      title: '2ND RUNNER-UP - Marketing Big Day 2024',
      date: '11/2024', 
      icon: Medal
    },
    {
      title: 'TOP 20 - Chien Binh Marketing 2023',
      date: '11/2023',
      icon: CircleStar
    }
  ];

  // Education data
  const educationData = {
    university: 'National Economics University',
    degree: 'Major: Digital Marketing',
    period: '2022 - 2026'
  };

  // Contact data
  const contactData = [
    { icon: Phone, label: 'Phone', value: '0904 103 475', isLink: false },
    { icon: Mail, label: 'Email', value: 'nmquang281.work@gmail.com', isLink: false },
    { icon: Linkedin, label: 'LinkedIn', value: 'www.linkedin.com/in/nmquang281/', isLink: true, url: 'https://www.linkedin.com/in/nmquang281/' }
  ];

  return (
    <section id="about" className="section-padding bg-transparent relative">
      {/* Gradient dark background with subtle texture overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black/40 to-gray-900/20"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,134,81,0.1),transparent_70%)]" 
             style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}></div>
      </div>
      
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
            <Sparkles className=" w-8 h-8 animate-pulse " />
            <span>ABOUT ME</span>
            <Sparkles className="text-primary w-8 h-8 animate-pulse" />
          </h1>
        </motion.div>

        {/* 5-Column CSS Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Timeline Section (Left 3 columns) */}
          <div className="lg:col-span-3 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-5 lg:left-6 top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden lg:block"></div>
            
            {/* Timeline Cards */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Animated Pulse Dot */}
                  <div className="absolute left-3 lg:left-4 top-2 w-6 h-6 bg-primary rounded-full border-4 border-white hidden lg:block"
                       style={{ 
                         boxShadow: '0 0 25px rgba(19, 134, 81, 0.8), 0 0 50px rgba(19, 134, 81, 0.4)',
                         animation: 'pulseGlow 2s ease-in-out infinite'
                       }}></div>
                  
                  {/* Timeline Card */}
                  <GlassPanel className="ml-0 lg:ml-16 p-6 rounded-2xl hover:transform hover:scale-[1.03] transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                        <p className="text-gray-300 text-base mb-1">Company: {item.company}</p>
                        {item.subtext && (
                          <p className="text-gray-400 text-sm italic">{item.subtext}</p>
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
                        {expandedIndex !== index && (
                          <button
                            type="button"
                            onClick={() => setExpandedIndex(index)}
                            className="w-full flex items-center justify-between md:justify-start text-left text-white/60 hover:text-white transition-colors"
                            aria-expanded={false}
                            aria-controls={`exp-desc-${index}`}
                          >
                            <span className="text-sm font-medium flex items-center gap-2">
                              Show work description
                              {/* md+ icon next to text */}
                              <ChevronDown className="hidden md:inline-block w-5 h-5 transition-transform duration-300 rotate-0" />
                            </span>
                            {/* mobile icon on far right */}
                            <ChevronDown className="md:hidden w-5 h-5 transition-transform duration-300 rotate-0" />
                          </button>
                        )}

                        <motion.div
                          id={`exp-desc-${index}`}
                          initial={false}
                          animate={{ height: expandedIndex === index ? 'auto' : 0, opacity: expandedIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {Array.isArray(item.description) ? (
                            <ul className="mt-0 list-disc pl-5 space-y-1 text-sm text-gray-200 leading-relaxed">
                              {item.description.map((line: string, i: number) => (
                                <li key={i}>{normalizeBulletText(line)}</li>
                              ))}
                            </ul>
                          ) : (
                            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-200 leading-relaxed">
                              {String(item.description)
                                .split(/\r?\n/)
                                .filter(Boolean)
                                .map((line, i) => (
                                  <li key={i}>{normalizeBulletText(line)}</li>
                                ))}
                            </ul>
                          )}
                        </motion.div>

                        {expandedIndex === index && (
                          <button
                            type="button"
                            onClick={() => setExpandedIndex(null)}
                            className="mt-3 w-full flex items-center justify-between md:justify-start text-left text-white/60 hover:text-white transition-colors"
                            aria-expanded
                            aria-controls={`exp-desc-${index}`}
                          >
                            <span className="text-sm font-medium flex items-center gap-2">
                              Hide work description
                              {/* md+ icon next to text (rotated) */}
                              <ChevronDown className="hidden md:inline-block w-5 h-5 transition-transform duration-300 rotate-180" />
                            </span>
                            {/* mobile icon on far right (rotated) */}
                            <ChevronDown className="md:hidden w-5 h-5 transition-transform duration-300 rotate-180" />
                          </button>
                        )}
                      </div>
                    )}
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar Section (Right 2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Achievements Card */}
            <motion.div
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
                      <GlassPanel key={index} className="px-4 py-2 rounded-2xl hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <IconComponent className="text-gray-300 w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-white text-md">{achievement.title}</p>
                            <p className="text-sm text-gray-300">{achievement.date}</p>
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <GlassPanel className="p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-primary">Education</h3>
                </div>
                <div className="text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="text-white w-6 h-6" />
                    <p className="font-medium">{educationData.university}</p>
                  </div>
                  <p className="text-sm text-gray-200 ml-8">{educationData.degree}</p>
                  <p className="text-sm text-gray-200 ml-8 mt-1">{educationData.period}</p>
                </div>
              </GlassPanel>
            </motion.div>

            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <GlassPanel className="p-6 rounded-2xl hover:transform hover:scale-[1.03] transition-all duration-300">
                <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {contactData.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div key={index} className="flex items-center gap-6 text-white">
                        <IconComponent className="w-5 h-5" />
                        <div>
                          <p className="text-sm text-white/60">{contact.label}</p>
                          {contact.isLink ? (
                            <a 
                              href={contact.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-medium hover:text-primary transition-colors duration-200 underline"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="font-medium">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </GlassPanel>
            </motion.div>

            {/* Contact Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
            <div className="relative">
              {/* Shadow/backdrop effect */}
              <div className="absolute top-12 left-12 w-[300px] h-[400px] bg-white/80 rounded-2xl blur-sm"></div>
              <div className="absolute top-8 left-8 w-[300px] h-[400px] bg-primary/80 rounded-2xl blur-sm"></div>
              <div className="absolute top-4 left-4 w-[300px] h-[400px] bg-secondary/80 rounded-2xl blur-sm"></div>

              
              {/* Main card */}
              <motion.div
                className="relative w-[300px] h-[400px] bg-gray-300 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card content placeholder */}
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/aboutme-section.png" 
                    alt="Portfolio image" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
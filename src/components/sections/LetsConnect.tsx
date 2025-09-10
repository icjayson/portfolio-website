'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, Sparkles, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { ButtonFill, GlassPanel, GradientPanel } from '@/components/ui';
import emailjs from '@emailjs/browser';

export const LetsConnect: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectDetails: ''
  });

  const [formState, setFormState] = useState({
    isLoading: false,
    isSuccess: false,
    errors: {} as Record<string, string>
  });

  const [focusStates, setFocusStates] = useState({
    fullName: false,
    email: false,
    projectDetails: false
  });

  // Parallax effect state
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxSpeed = 0.5;
      setParallaxOffset(scrollY * parallaxSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: '' }
      }));
    }
  };

  const handleFocus = (fieldName: string) => {
    setFocusStates(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  const handleBlur = (fieldName: string) => {
    setFocusStates(prev => ({
      ...prev,
      [fieldName]: false
    }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.projectDetails.trim()) {
      errors.projectDetails = 'Project details are required';
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({ ...prev, errors }));
      return;
    }
    
    setFormState(prev => ({ ...prev, isLoading: true, errors: {} }));
    
    try {
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        message: formData.projectDetails,
        to_email: 'nmquang281.work@gmail.com'
      };

      console.log('EmailJS Config:', {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      });

      console.log('Template Params:', templateParams);

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );

      console.log('EmailJS Success:', result);

      setFormState(prev => ({ 
        ...prev, 
        isLoading: false, 
        isSuccess: true 
      }));
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ fullName: '', email: '', projectDetails: '' });
        setFormState({ isLoading: false, isSuccess: false, errors: {} });
      }, 3000);
    } catch (error: unknown) {
      console.error('EmailJS Error Details:', error);
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      // Type guard to check if error has status property
      if (error && typeof error === 'object' && 'status' in error) {
        const emailError = error as { status?: number; text?: string };
        console.error('Error Status:', emailError.status);
        console.error('Error Text:', emailError.text);
        
        if (emailError.status === 400) {
          errorMessage = 'Invalid email configuration. Please check your EmailJS setup.';
        } else if (emailError.status === 401) {
          errorMessage = 'Authentication failed. Please check your EmailJS public key.';
        } else if (emailError.status === 403) {
          errorMessage = 'Access denied. Please check your EmailJS service permissions.';
        }
      } else {
        console.error('Unknown error:', error);
      }
      
      setFormState(prev => ({ 
        ...prev, 
        isLoading: false, 
        errors: { general: errorMessage }
      }));
    }
  };

  const characterCount = formData.projectDetails.length;
  const maxCharacters = 500;

  return (
    <section id="contact" className="section-padding pb-20 bg-transparent relative">
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
          <Sparkles className="w-8 h-8 animate-pulse" />
            <span>LET&#39;S CONNECT</span>
            <Sparkles className="text-primary w-8 h-8 animate-pulse" />
          </h1>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Column 1: Stacked vertical with 2 cards */}
          <div className="space-y-8">
            {/* Motivation Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GradientPanel className="px-8 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-300">
                <div className="text-center">
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    &quot;If there are any skills or requirements you haven&#39;t seen here, it doesn&#39;t mean I don&#39;t know about it. I just haven&#39;t had the opportunity to do it and show it perfectly. Let me do it!&quot;
                  </p>

                </div>
              </GradientPanel>
            </motion.div>

            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassPanel className="p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {/* Phone */}
                  <motion.a
                    href="tel:0904103475"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-semibold group-hover:text-primary transition-colors">0904103475</p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:nmquang281.work@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-semibold group-hover:text-primary transition-colors">nmquang281.work@gmail.com</p>
                    </div>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://linkedin.com/in/nmquang281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="text-white font-semibold group-hover:text-primary transition-colors">linkedin.com/in/nmquang281</p>
                    </div>
                  </motion.a>
                </div>
              </GlassPanel>
            </motion.div>
          </div>

          {/* Column 2: Get in Touch Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <GlassPanel className="p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Get in Touch</h3>
              
              {formState.isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col justify-center text-center py-8"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-300">Thank you for reaching out. I&#39;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col">
                  {formState.errors.general && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg"
                    >
                      <p className="text-red-400 text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        {formState.errors.general}
                      </p>
                    </motion.div>
                  )}
                  <div className="space-y-6">
                  {/* Full Name Field */}
                  <div className="relative">
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('fullName')}
                        onBlur={() => handleBlur('fullName')}
                        className={`w-full px-4 pt-6 pb-2 bg-white/10 border rounded-lg text-white placeholder-transparent focus:outline-none transition-all duration-300 ${
                          formState.errors.fullName 
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                            : 'border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent'
                        }`}
                        placeholder="Full Name"
                      />
                      <label
                        htmlFor="fullName"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusStates.fullName || formData.fullName
                            ? 'top-2 text-xs text-primary'
                            : 'top-4 text-base text-gray-400'
                        }`}
                      >
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                    </div>
                    {formState.errors.fullName && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {formState.errors.fullName}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        className={`w-full px-4 pt-6 pb-2 bg-white/10 border rounded-lg text-white placeholder-transparent focus:outline-none transition-all duration-300 ${
                          formState.errors.email 
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                            : 'border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent'
                        }`}
                        placeholder="Email Address"
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusStates.email || formData.email
                            ? 'top-2 text-xs text-primary'
                            : 'top-4 text-base text-gray-400'
                        }`}
                      >
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address
                      </label>
                    </div>
                    {formState.errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {formState.errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Project Details Field */}
                  <div className="relative">
                    <div className="relative">
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('projectDetails')}
                        onBlur={() => handleBlur('projectDetails')}
                        rows={5}
                        maxLength={maxCharacters}
                        className={`w-full px-4 pt-6 pb-2 bg-white/10 border rounded-lg text-white placeholder-transparent focus:outline-none resize-none transition-all duration-300 ${
                          formState.errors.projectDetails 
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                            : 'border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent'
                        }`}
                        placeholder="Details"
                      />
                      <label
                        htmlFor="projectDetails"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusStates.projectDetails || formData.projectDetails
                            ? 'top-2 text-xs text-primary'
                            : 'top-4 text-base text-gray-400'
                        }`}
                      >
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Details
                      </label>
                    </div>
                    
                    {/* Character Count */}
                    <div className="flex justify-between items-center mt-1">
                      <div>
                        {formState.errors.projectDetails && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {formState.errors.projectDetails}
                          </motion.p>
                        )}
                      </div>
                      <p className={`text-sm ${
                        characterCount > maxCharacters * 0.8 
                          ? characterCount >= maxCharacters 
                            ? 'text-red-400' 
                            : 'text-yellow-400'
                          : 'text-gray-400'
                      }`}>
                        {characterCount}/{maxCharacters}
                      </p>
                    </div>
                  </div>

                  </div>
                  
                  {/* Submit Button - Centered */}
                  <div className="flex justify-center pt-6">
                    <ButtonFill 
                      className="px-6" 
                      disabled={formState.isLoading}
                    >
                      <button 
                        type="submit" 
                        className="flex items-center justify-center gap-2 disabled:opacity-50"
                        disabled={formState.isLoading}
                      >
                        {formState.isLoading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </ButtonFill>
                  </div>
                </form>
              )}
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Send, ChevronDown, Sparkles } from 'lucide-react';
import { USER_INFO } from '../constants/portfolio';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion || window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center pt-24 sm:pt-32 pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.25] dark:opacity-[0.12] pointer-events-none" />

      {/* Floating Orb System */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: mousePos.x * 40,
                y: mousePos.y * 40,
              }
        }
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#4F46E5]/15 to-transparent rounded-full blur-[70px] sm:blur-[100px] pointer-events-none animate-float-slow"
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: mousePos.x * -50,
                y: mousePos.y * -50,
              }
        }
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="absolute top-1/3 right-4 sm:right-10 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-gradient-to-br from-[#06B6D4]/20 via-[#7C3AED]/15 to-transparent rounded-full blur-[70px] sm:blur-[100px] pointer-events-none animate-float-reverse"
      />

      {/* Hero Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        {/* Status Pill */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 glass-card rounded-full text-[11px] sm:text-xs font-semibold text-primary dark:text-accent shadow-soft mb-6 sm:mb-8 max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-code text-slate-700 dark:text-slate-200 truncate">Available for High-Impact Roles & Projects</span>
          <Sparkles className="w-3.5 h-3.5 text-secondary animate-spin shrink-0" style={{ animationDuration: '8s' }} />
        </motion.div>

        {/* 1. Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-heading font-black tracking-tight text-slate-900 dark:text-white leading-[1.05] mb-3 sm:mb-4"
        >
          {USER_INFO.name}
        </motion.h1>

        {/* 2. Professional Title */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-700 dark:text-slate-200 mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3"
        >
          <span className="gradient-text">{USER_INFO.title}</span>
          <span className="text-[11px] sm:text-xs font-code px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-white/10 text-primary dark:text-accent border border-indigo-200/80 dark:border-white/10">
            Full Stack • AI Agents • LLMs
          </span>
        </motion.div>

        {/* 3. Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8 sm:mb-10"
        >
          {USER_INFO.tagline}
        </motion.p>

        {/* 4. CTA Buttons with Magnetic Interactions */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
          <MagneticButton href="#projects" strength={8}>
            <div className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold text-sm rounded-2xl shadow-soft hover:shadow-glowPrimary transition-all w-full sm:w-auto">
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </MagneticButton>

          <MagneticButton
            href="./Rubesh_R_Resume.pdf"
            download="Rubesh_R_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            strength={8}
          >
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white font-semibold text-sm rounded-2xl shadow-soft hover:shadow-glowViolet transition-all w-full sm:w-auto">
              <Download className="w-4 h-4 animate-bounce" style={{ animationDuration: '2.5s' }} />
              <span>Download Resume</span>
            </div>
          </MagneticButton>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <MagneticButton href={USER_INFO.github} target="_blank" rel="noopener noreferrer" strength={8}>
              <div className="p-3.5 glass-card text-slate-700 dark:text-slate-200 rounded-2xl hover:text-primary dark:hover:text-accent transition-all shadow-soft">
                <Github className="w-5 h-5" />
              </div>
            </MagneticButton>

            <MagneticButton href={USER_INFO.linkedin} target="_blank" rel="noopener noreferrer" strength={8}>
              <div className="p-3.5 glass-card text-slate-700 dark:text-slate-200 rounded-2xl hover:text-primary dark:hover:text-accent transition-all shadow-soft">
                <Linkedin className="w-5 h-5" />
              </div>
            </MagneticButton>
          </div>
        </motion.div>

          <MagneticButton href="#contact" strength={8}>
            <div className="inline-flex items-center gap-2 px-6 py-3.5 glass-card text-slate-800 dark:text-white font-semibold text-sm rounded-2xl border border-secondary/30 hover:border-secondary transition-all">
              <Send className="w-4 h-4 text-secondary" />
              <span>Contact</span>
            </div>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs font-code text-slate-400 hover:text-primary transition-colors animate-bounce"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
};

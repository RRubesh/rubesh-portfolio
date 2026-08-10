import React from 'react';
import { USER_INFO } from '../constants/portfolio';
import { Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-white/80 dark:bg-[#0B0F19]/90 backdrop-blur-xl border-t border-slate-200/60 dark:border-white/10 overflow-hidden">
      {/* Slowly moving gradient line above the footer */}
      <div className="h-[2px] w-full gradient-line-move" />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 font-heading font-extrabold text-base text-slate-900 dark:text-white">
            <ShieldCheck className="w-4 h-4 text-primary dark:text-accent" />
            <span>{USER_INFO.name}</span>
          </div>
          <span className="font-code text-xs text-slate-400">{USER_INFO.title}</span>
        </div>

        <div className="flex items-center gap-4">
          <MagneticButton href={USER_INFO.github} target="_blank" rel="noopener noreferrer" strength={4}>
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-primary dark:hover:text-accent transition-colors flex items-center gap-1.5 font-code">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </div>
          </MagneticButton>

          <MagneticButton href={USER_INFO.linkedin} target="_blank" rel="noopener noreferrer" strength={4}>
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-primary dark:hover:text-accent transition-colors flex items-center gap-1.5 font-code">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </div>
          </MagneticButton>

          <MagneticButton href={`mailto:${USER_INFO.email}`} strength={4}>
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-primary dark:hover:text-accent transition-colors flex items-center gap-1.5 font-code">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </div>
          </MagneticButton>
        </div>

        <div className="text-center md:text-right font-code text-[11px] text-slate-400">
          &copy; {new Date().getFullYear()} {USER_INFO.name}. Built with React, TypeScript & Framer Motion.
        </div>
      </div>
    </footer>
  );
};

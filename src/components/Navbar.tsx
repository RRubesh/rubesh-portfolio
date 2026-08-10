import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Command, Menu, X, Home, User, Wrench, FolderGit2, Cpu, Route, Send, Download, Award } from 'lucide-react';
import { USER_INFO } from '../constants/portfolio';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
  avatarSrc: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isDark,
  onToggleTheme,
  onOpenCommandPalette,
  avatarSrc,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'experience', label: 'Journey', icon: Route },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 inset-x-0 z-[999] flex justify-center items-center pointer-events-none transition-all duration-300 ${
        isScrolled ? 'scale-[0.98]' : 'scale-100'
      }`}
    >
      <nav
        className={`pointer-events-auto flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-2 glass-card rounded-full shadow-glass transition-all duration-300 whitespace-nowrap max-w-[95vw] ${
          isScrolled ? 'bg-white/90 dark:bg-[#0B0F19]/90 shadow-lg border-primary/20' : 'bg-white/80 dark:bg-[#0B0F19]/80'
        }`}
      >
        {/* Brand Avatar & Name */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 px-2 py-1 text-slate-900 dark:text-white font-heading font-extrabold text-sm tracking-tight shrink-0 whitespace-nowrap group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center overflow-hidden border border-white/20 text-white text-xs shadow-soft shrink-0 group-hover:scale-105 transition-transform">
            {avatarSrc ? (
              <img src={avatarSrc} alt={USER_INFO.name} className="w-full h-full object-cover object-top" />
            ) : (
              <span>RR</span>
            )}
          </div>
          <span className="hidden sm:inline font-heading font-extrabold text-sm whitespace-nowrap leading-none">
            {USER_INFO.name}
          </span>
        </a>

        {/* Desktop Links with Framer Motion Sliding Pill Background */}
        <ul className="hidden md:flex items-center gap-1 list-none relative shrink-0">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-primary dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{link.label}</span>
                </a>

                {/* Animated Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-primary/10 dark:bg-white/15 rounded-full border border-primary/20 dark:border-white/20 z-0"
                  />
                )}
              </li>
            );
          })}

          {/* Dedicated Resume Download Button */}
          <li>
            <a
              href={USER_INFO.resumeFile}
              download="Rubesh_R_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary dark:text-accent bg-indigo-50 dark:bg-white/10 hover:bg-indigo-100 dark:hover:bg-white/20 rounded-full border border-indigo-200/80 dark:border-white/10 transition-all shadow-sm ml-1 whitespace-nowrap"
              title="Download Rubesh R's Resume"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span>Resume</span>
            </a>
          </li>
        </ul>

        {/* Right Tools Container */}
        <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200/80 dark:border-white/10 shrink-0">
          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-code text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full border border-slate-200 dark:border-white/10 transition-all whitespace-nowrap"
            title="Open Command Palette (Ctrl + K)"
          >
            <Command className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden lg:inline">⌘K</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full border border-slate-200 dark:border-white/10 transition-all shrink-0"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400 shrink-0" /> : <Moon className="w-4 h-4 text-indigo-600 shrink-0" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-slate-200 shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.92, y: -10, filter: 'blur(8px)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden mt-3 p-4 bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-3xl flex flex-col gap-1.5 shadow-2xl pointer-events-auto"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-2xl transition-all ${
                    isActive
                      ? 'bg-primary/10 text-primary dark:text-accent font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span>{link.label}</span>
                </a>
              );
            })}
            <a
              href={USER_INFO.resumeFile}
              download="Rubesh_R_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-primary dark:text-accent bg-indigo-50 dark:bg-white/10 rounded-2xl transition-all mt-1"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Download Resume PDF</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useCommandPalette } from './hooks/useCommandPalette';
import { CinematicIntro } from './components/CinematicIntro';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CommandPalette } from './components/CommandPalette';

import { USER_INFO } from './constants/portfolio';

export const App: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isOpen: commandPaletteOpen, setIsOpen: setCommandPaletteOpen, toggle: toggleCommandPalette } = useCommandPalette();
  const [activeSection, setActiveSection] = useState('hero');
  const [avatarSrc, setAvatarSrc] = useState<string>(USER_INFO.profileImage);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('rubesh_profile_photo');
    if (saved) {
      setAvatarSrc(saved);
    }
  }, []);

  const handleAvatarUpdate = (newSrc: string) => {
    setAvatarSrc(newSrc);
    localStorage.setItem('rubesh_profile_photo', newSrc);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'hero';
      sections.forEach((sec) => {
        const top = sec.offsetTop - 220;
        if (window.scrollY >= top) {
          current = sec.getAttribute('id') || 'hero';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] font-body transition-colors duration-300 relative selection:bg-primary selection:text-white overflow-x-hidden">
      {/* 1. Cinematic Page Intro */}
      {!introFinished && <CinematicIntro onComplete={() => setIntroFinished(true)} />}

      {/* Thin Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Mouse Glow Overlay */}
      <CursorGlow />

      {/* Floating Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={toggleCommandPalette}
        avatarSrc={avatarSrc}
      />

      {/* Main Portfolio Content Sections */}
      <main className="relative z-10">
        <Hero />

        <div className="relative w-full h-16 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-md" />
        </div>

        <About avatarSrc={avatarSrc} onAvatarUpdate={handleAvatarUpdate} />

        <div className="relative w-full h-16 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent blur-md" />
        </div>

        <Services />

        <div className="relative w-full h-16 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent blur-md" />
        </div>

        <Projects />

        <div className="relative w-full h-16 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-md" />
        </div>

        <Skills />

        <div className="relative w-full h-16 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent blur-md" />
        </div>

        <Certificates />

        <div className="relative w-full h-16 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-md" />
        </div>

        <Experience />

        <div className="relative w-full h-16 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06B6D4]/5 to-transparent blur-md" />
        </div>

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* Command Palette (Ctrl + K Modal) */}
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
};

export default App;

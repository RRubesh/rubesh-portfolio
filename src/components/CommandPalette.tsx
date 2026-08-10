import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Wrench, Cpu, FolderGit2, Route, Send, FileText, Github, Linkedin, X } from 'lucide-react';
import { USER_INFO } from '../constants/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');

  const commands = [
    { label: 'Go to Home', sectionId: 'hero', icon: Home, category: 'Navigation' },
    { label: 'Go to About', sectionId: 'about', icon: User, category: 'Navigation' },
    { label: 'Go to Services', sectionId: 'services', icon: Wrench, category: 'Navigation' },
    { label: 'Go to Projects', sectionId: 'projects', icon: FolderGit2, category: 'Navigation' },
    { label: 'Go to Skills', sectionId: 'skills', icon: Cpu, category: 'Navigation' },
    { label: 'Go to Journey', sectionId: 'experience', icon: Route, category: 'Navigation' },
    { label: 'Go to Contact', sectionId: 'contact', icon: Send, category: 'Navigation' },
    { label: 'Download Resume PDF', href: USER_INFO.resumeFile, external: true, icon: FileText, category: 'Actions' },
    { label: 'Open GitHub Profile', href: USER_INFO.github, external: true, icon: Github, category: 'Social' },
    { label: 'Open LinkedIn Profile', href: USER_INFO.linkedin, external: true, icon: Linkedin, category: 'Social' },
  ];

  const filtered = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (cmd: typeof commands[0]) => {
    onClose();
    if (cmd.sectionId) {
      const el = document.getElementById(cmd.sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd.href) {
      window.open(cmd.href, cmd.external ? '_blank' : '_self');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input */}
            <div className="flex items-center px-5 border-b border-slate-200 dark:border-white/10">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full py-4 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none font-body text-sm"
                autoFocus
              />
              <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Commands List */}
            <div className="max-h-80 overflow-y-auto p-3 flex flex-col gap-1">
              {filtered.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400 font-code">No matching commands found.</div>
              ) : (
                filtered.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(cmd)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-indigo-50 dark:hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-white/5 flex items-center justify-center text-indigo-600 dark:text-accent group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-accent transition-colors">
                          {cmd.label}
                        </span>
                      </div>
                      <span className="text-[10px] font-code px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-400">
                        {cmd.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            <div className="px-5 py-2.5 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-code text-slate-400">
              <span>Navigation: <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 shadow-sm border border-slate-200 dark:border-white/10">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 shadow-sm border border-slate-200 dark:border-white/10">↓</kbd></span>
              <span>Close: <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 shadow-sm border border-slate-200 dark:border-white/10">ESC</kbd></span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

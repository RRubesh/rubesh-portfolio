import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 1.2 seconds maximum total duration
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 400); // sync fade transition
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#F8FAFC] dark:bg-[#0B0F19] select-none"
        >
          <div className="flex flex-col items-center gap-3">
            {/* Rubesh R Blur-to-Sharp Text */}
            <motion.h1
              initial={{ opacity: 0, filter: 'blur(16px)', y: 15 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl font-heading font-black tracking-widest text-slate-900 dark:text-white uppercase"
            >
              RUBESH R
            </motion.h1>

            {/* Thin Gradient Line Underneath */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] w-48 bg-gradient-to-r from-primary via-secondary to-accent rounded-full origin-center"
            />

            {/* Subtle Tagline Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs font-code text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-1"
            >
              Full-Stack Developer & Penetration Tester
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

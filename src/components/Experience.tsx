import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Route, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants/portfolio';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { TiltCard } from './TiltCard';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['100%', '100%'] : ['0%', '100%']
  );

  return (
    <section id="experience" className="relative py-28 max-w-7xl mx-auto px-6 z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mb-16 text-center"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-white/5 border border-indigo-200/80 dark:border-white/10 rounded-full text-xs font-code text-primary dark:text-accent uppercase tracking-wider mb-3">
          <Route className="w-3.5 h-3.5" /> Technical Roadmap
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          Technical Growth Journey
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-3">
          Key milestones from full-stack software development to autonomous AI security engineering.
        </motion.p>
      </motion.div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto w-full">
        {/* Background Base Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-slate-200 dark:bg-slate-800/60 rounded-full" />

        {/* Progressive Gradient Animated Timeline Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 md:left-1/2 top-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-accent rounded-full origin-top z-0 shadow-glowViolet"
        />

        <div className="flex flex-col gap-12 relative z-10">
          {EXPERIENCE_DATA.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Glowing Node Dot */}
                <motion.div
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#F8FAFC] dark:border-[#0B0F19] z-20 shadow-glowPrimary flex items-center justify-center ${
                    item.highlight ? 'bg-secondary ring-4 ring-secondary/30' : 'bg-primary dark:bg-accent'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </motion.div>

                {/* Milestone Card Box */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <TiltCard maxRotation={3}>
                    <div
                      className={`p-7 rounded-3xl glass-card glass-card-hover ${
                        item.highlight ? 'border-secondary/40 shadow-glowViolet' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`inline-block px-3.5 py-1 text-xs font-code rounded-full font-semibold border ${
                            item.highlight
                              ? 'bg-secondary/15 border-secondary text-secondary dark:text-accent'
                              : 'bg-primary/10 border-primary/30 text-primary dark:text-accent'
                          }`}
                        >
                          {item.year}
                        </span>

                        {item.highlight && (
                          <span className="flex items-center gap-1 text-[11px] font-code text-secondary font-bold">
                            <Sparkles className="w-3.5 h-3.5" /> Target Milestone
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

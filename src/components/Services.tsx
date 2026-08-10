import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ShieldCheck, Layers, Cpu, Sparkles, Palette, Wrench } from 'lucide-react';
import { SERVICES_DATA } from '../constants/portfolio';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { TiltCard } from './TiltCard';

const iconMap: Record<string, React.ElementType> = {
  Bot,
  ShieldCheck,
  Layers,
  Cpu,
  Sparkles,
  Palette,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-28 max-w-7xl mx-auto px-6 z-10">
      {/* Background Ambient Lighting Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mb-16"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-white/5 border border-indigo-200/80 dark:border-white/10 rounded-full text-xs font-code text-primary dark:text-accent uppercase tracking-wider mb-3">
          <Wrench className="w-3.5 h-3.5" /> Technical Capabilities
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          Specialized Engineering Services
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mt-3">
          High-performance full-stack web development, penetration testing, SAST security auditing, and AI/LLM model automation.
        </motion.p>
      </motion.div>

      {/* Grid of Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, idx) => {
          const Icon = iconMap[service.icon] || Bot;
          return (
            <TiltCard key={service.id} maxRotation={4} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full p-8 rounded-3xl glass-card glass-card-hover flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background Hover Accent Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/15 via-secondary/15 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Service Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-white/10 border border-indigo-100 dark:border-white/10 flex items-center justify-center text-primary dark:text-accent mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-soft">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 group-hover:translate-y-[-2px] transition-transform duration-300">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Highlight Pills */}
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-lg text-[11px] font-code font-medium text-slate-700 dark:text-slate-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
};

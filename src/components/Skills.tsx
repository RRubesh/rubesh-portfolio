import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Layout, Server, Bot, ShieldAlert } from 'lucide-react';
import { SKILLS_DATA } from '../constants/portfolio';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { TiltCard } from './TiltCard';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Bot,
  ShieldAlert,
  Cpu,
};

const FLOATING_CLOUD_TECH = [
  { name: 'Python', icon: 'devicon-python-plain colored', top: '10%', left: '5%' },
  { name: 'React', icon: 'devicon-react-original colored', top: '20%', right: '8%' },
  { name: 'Docker', icon: 'devicon-docker-plain colored', bottom: '15%', left: '8%' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', top: '60%', right: '5%' },
  { name: 'FastAPI', icon: 'devicon-fastapi-plain colored', bottom: '30%', left: '4%' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-28 max-w-7xl mx-auto px-6 z-10 overflow-hidden">
      {/* Floating Technology Cloud Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {FLOATING_CLOUD_TECH.map((t, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 12 + idx * 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: t.top,
              left: t.left,
              right: t.right,
              bottom: t.bottom,
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/30 dark:bg-white/5 border border-slate-300/40 dark:border-white/5 backdrop-blur-sm opacity-30 text-xs font-code font-semibold text-slate-600 dark:text-slate-400"
          >
            <i className={`${t.icon} text-base`} />
            <span>{t.name}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mb-14 relative z-10"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-white/5 border border-indigo-200/80 dark:border-white/10 rounded-full text-xs font-code text-primary dark:text-accent uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" /> Technical Expertise
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tech Stack & Ecosystem
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mt-3">
          Comprehensive breakdown of programming languages, frontend frameworks, backend tools, penetration testing, and soft skills.
        </motion.p>
      </motion.div>

      {/* Grid of Skill Categories */}
      <div className="flex flex-col gap-12 relative z-10">
        {SKILLS_DATA.map((category, idx) => {
          const Icon = iconMap[category.icon] || Code2;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary dark:text-accent">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <TiltCard key={sIdx} maxRotation={5} className="h-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 15 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                      className="h-full p-5 rounded-3xl glass-card glass-card-hover flex flex-col items-center justify-between text-center group"
                    >
                      {/* Icon */}
                      <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                        <i
                          className={`${skill.iconClass} text-3xl`}
                          style={skill.color ? { color: skill.color } : {}}
                        />
                      </div>

                      {/* Skill Name */}
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        {skill.name}
                      </span>

                      {/* Visual Skill Indicator Bar */}
                      <div className="w-full bg-slate-200/70 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + sIdx * 0.05, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  </TiltCard>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

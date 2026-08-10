import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, MapPin, Cpu, ShieldCheck, UserCheck } from 'lucide-react';
import { USER_INFO } from '../constants/portfolio';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { TiltCard } from './TiltCard';

interface AboutProps {
  avatarSrc?: string | null;
  onAvatarUpdate?: (newSrc: string) => void;
}

const FLOATING_SYMBOLS = [
  { text: 'AI', top: '12%', left: '8%', delay: 0 },
  { text: 'LLM', top: '25%', right: '10%', delay: 2 },
  { text: 'CYBER', bottom: '20%', left: '12%', delay: 4 },
  { text: 'CODE', top: '65%', right: '15%', delay: 1 },
  { text: 'API', bottom: '10%', right: '35%', delay: 3 },
];

export const About: React.FC<AboutProps> = ({ avatarSrc }) => {
  return (
    <section id="about" className="relative py-28 max-w-7xl mx-auto px-6 z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mb-14"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-white/5 border border-indigo-200/80 dark:border-white/10 rounded-full text-xs font-code text-primary dark:text-accent uppercase tracking-wider mb-3">
          <UserCheck className="w-3.5 h-3.5" /> About Rubesh R
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          Engineering Intelligence & Defense
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mt-3">
          Combining autonomous AI agents with defense-in-depth cybersecurity engineering & scalable web systems.
        </motion.p>
      </motion.div>

      {/* Main Large Glassmorphism About Container with Animated Gradient Border */}
      <div className="animated-gradient-border p-1">
        <div className="relative p-8 sm:p-12 rounded-[1.4rem] bg-white/80 dark:bg-[#0B0F19]/90 backdrop-blur-2xl overflow-hidden">
          {/* Floating Technology Symbols Behind Main Content */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            {FLOATING_SYMBOLS.map((sym, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -18, 0],
                  x: [0, 10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8 + idx * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: sym.delay,
                }}
                style={{
                  position: 'absolute',
                  top: sym.top,
                  left: sym.left,
                  right: sym.right,
                  bottom: sym.bottom,
                }}
                className="font-code text-3xl font-black text-slate-300/30 dark:text-white/5 tracking-widest pointer-events-none"
              >
                {sym.text}
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-stretch">
            {/* Profile Photo Glass Card */}
            <TiltCard maxRotation={4} className="h-full min-h-[440px]">
              <div className="relative h-full p-3 rounded-3xl glass-card flex flex-col group overflow-hidden">
                <div className="relative w-full h-full rounded-2xl overflow-hidden flex-grow bg-slate-100 dark:bg-slate-900">
                  <img
                    src={avatarSrc || USER_INFO.profileImage}
                    alt={USER_INFO.name}
                    className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                    onError={(e) => {
                      // Fallback if image fails to load
                      (e.target as HTMLImageElement).src = USER_INFO.profileImage;
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border border-slate-200/80 dark:border-white/15 rounded-2xl flex flex-col gap-1 shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-extrabold text-base text-slate-900 dark:text-white">{USER_INFO.name}</span>
                    </div>
                    <span className="font-code text-xs text-primary dark:text-accent flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> Full-Stack Developer & Penetration Tester
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Bio Content & Quick Info Cards */}
            <div className="flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-4">
                  Full-Stack Developer & Penetration Tester
                </h3>
                {USER_INFO.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Education & Info Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary dark:text-accent shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-code text-slate-400 uppercase tracking-wider">Degree</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{USER_INFO.education[0].degree}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary dark:text-accent shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-code text-slate-400 uppercase tracking-wider">Institution</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{USER_INFO.education[0].institution}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-code text-slate-400 uppercase tracking-wider">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{USER_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-code text-slate-400 uppercase tracking-wider">Specialization</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">Full-Stack & Penetration Testing</div>
                  </div>
                </div>
              </div>

              {/* Achievements Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {USER_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl glass-card text-center hover:border-primary transition-all">
                    <div className="text-3xl font-extrabold text-primary dark:text-accent font-heading">{stat.value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

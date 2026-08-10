import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FolderGit2, Check, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../constants/portfolio';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { TiltCard } from './TiltCard';
import { MagneticButton } from './MagneticButton';

interface SingleProjectCardProps {
  project: ProjectItem;
  idx: number;
}

const SingleProjectCard: React.FC<SingleProjectCardProps> = ({ project, idx }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-18, 18]
  );

  return (
    <div ref={cardRef}>
      <TiltCard maxRotation={3} className="h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: idx * 0.12 }}
          className="h-full flex flex-col justify-between rounded-3xl glass-card glass-card-hover overflow-hidden group relative"
        >
          {/* Top Image Container with Parallax & Zoom */}
          <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-100 dark:bg-slate-900">
            <motion.img
              style={{ y: imageY }}
              src={project.image}
              alt={project.title}
              className="w-full h-[115%] object-cover object-top group-hover:scale-108 transition-transform duration-700 filter contrast-[1.04]"
            />

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0B0F19] via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <span className="px-3.5 py-1.5 glass-card rounded-full font-code text-xs font-semibold text-primary dark:text-accent shadow-sm">
                {project.badge}
              </span>

              <span className="font-heading font-black text-2xl sm:text-3xl text-slate-800/90 dark:text-white/90 drop-shadow-md group-hover:translate-x-[-4px] group-hover:translate-y-[2px] transition-transform duration-300">
                #{project.projectNumber}
              </span>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-8 flex flex-col justify-between flex-grow">
            <div>
              <div className="text-[11px] font-code text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-1">
                {project.category}
              </div>

              {/* Title with Sliding Arrow */}
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-primary dark:text-accent" />
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Features List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-6 group-hover:translate-y-[-3px] transition-transform duration-300">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-indigo-50/80 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-lg font-code text-[11px] text-slate-700 dark:text-accent font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center gap-4">
                <MagneticButton href={project.githubUrl} target="_blank" rel="noopener noreferrer" strength={6}>
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 dark:bg-white/10 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-all shadow-sm">
                    <Github className="w-4 h-4" /> GitHub
                  </div>
                </MagneticButton>

                {project.liveUrl && (
                  <MagneticButton href={project.liveUrl} target="_blank" rel="noopener noreferrer" strength={6}>
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary dark:text-accent rounded-xl text-xs font-semibold border border-primary/20 transition-all">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </div>
                  </MagneticButton>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </TiltCard>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-28 max-w-7xl mx-auto px-6 z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mb-14"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-white/5 border border-indigo-200/80 dark:border-white/10 rounded-full text-xs font-code text-primary dark:text-accent uppercase tracking-wider mb-3">
          <FolderGit2 className="w-3.5 h-3.5" /> Flagship Work
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          Projects
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mt-3">
          Production-grade AI agent systems, SAST security auditors, and CLI workflow automation tools.
        </motion.p>
      </motion.div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, idx) => (
          <SingleProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
};

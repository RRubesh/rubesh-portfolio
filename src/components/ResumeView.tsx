import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Phone, Mail, Github, Linkedin, GraduationCap, Award, Globe, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';
import { USER_INFO, PROJECTS_DATA } from '../constants/portfolio';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const ResumeView: React.FC = () => {
  return (
    <section id="resume" className="relative py-28 max-w-7xl mx-auto px-6 z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mb-14 text-center"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-white/5 border border-indigo-200 dark:border-white/10 rounded-full text-xs font-code text-primary dark:text-accent uppercase tracking-wider mb-3">
          <FileText className="w-3.5 h-3.5" /> Official Resume
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          Curriculum Vitae & Qualifications
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-3">
          Full breakdown of professional summary, technical proficiencies, penetration testing background, and academic credentials.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8">
          <a
            href={USER_INFO.resumeFile}
            download="Rubesh_R_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-white font-semibold text-sm rounded-2xl shadow-soft hover:shadow-glowPrimary hover:scale-[1.03] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Official Resume PDF</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Official Resume Sheet Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-cardDark border border-slate-200/80 dark:border-white/10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />

        {/* Header */}
        <div className="border-b border-slate-200/80 dark:border-white/10 pb-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white tracking-tight">{USER_INFO.name}</h1>
              <p className="text-base font-semibold text-primary dark:text-accent font-code mt-1">{USER_INFO.title}</p>
            </div>
            <a
              href={USER_INFO.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 text-slate-800 dark:text-white rounded-xl text-xs font-semibold border border-slate-200 dark:border-white/10 transition-all self-start sm:self-auto"
            >
              <FileText className="w-4 h-4 text-primary" /> PDF Copy
            </a>
          </div>

          {/* Quick Contact Bar */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 dark:text-slate-300 mt-6 font-code">
            <a href={`tel:${USER_INFO.phone}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 text-primary" /> {USER_INFO.phone}
            </a>
            <a href={`mailto:${USER_INFO.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary" /> {USER_INFO.email}
            </a>
            <a href={USER_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Github className="w-3.5 h-3.5 text-primary" /> github.com/RRubesh
            </a>
            <a href={USER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Linkedin className="w-3.5 h-3.5 text-primary" /> linkedin.com/in/rubesh-r-
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-8">
          <h3 className="text-sm font-heading font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" /> Professional Summary
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-5 rounded-2xl border border-slate-200/60 dark:border-white/5">
            {USER_INFO.summary}
          </p>
        </div>

        {/* Projects Breakdown from Resume */}
        <div className="mb-8">
          <h3 className="text-sm font-heading font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" /> Featured Projects Highlight
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS_DATA.slice(0, 2).map((p) => (
              <div key={p.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">{p.title}</h4>
                  <span className="px-2.5 py-0.5 bg-primary/10 text-primary dark:text-accent rounded-full text-[10px] font-code font-semibold">
                    {p.role}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.techStack.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white dark:bg-white/10 text-[10px] font-code text-slate-700 dark:text-slate-200 rounded border border-slate-200 dark:border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <div>
            <h3 className="text-sm font-heading font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" /> Academic Qualifications
            </h3>
            <div className="flex flex-col gap-3">
              {USER_INFO.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                  <div className="text-xs font-code font-semibold text-primary dark:text-accent">{edu.year}</div>
                  <div className="font-heading font-bold text-slate-900 dark:text-white text-sm mt-0.5">{edu.degree}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-sm font-heading font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" /> Key Achievements
            </h3>
            <ul className="flex flex-col gap-3">
              {USER_INFO.achievements.map((ach, idx) => (
                <li key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Languages & Soft Skills */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="text-xs font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-primary" /> Languages Spoken
            </div>
            <div className="flex flex-wrap gap-2">
              {USER_INFO.languages.map((lang, idx) => (
                <span key={idx} className="px-3 py-1 bg-indigo-50 dark:bg-white/5 border border-indigo-200/60 dark:border-white/10 rounded-xl text-xs font-semibold text-primary dark:text-accent">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-primary" /> Soft Skills
            </div>
            <div className="flex flex-wrap gap-2">
              {USER_INFO.softSkills.map((ss, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200">
                  {ss}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

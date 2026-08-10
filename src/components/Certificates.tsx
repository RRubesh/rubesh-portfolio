import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, X, Calendar, CheckCircle2, Eye } from 'lucide-react';
import { CERTIFICATES_DATA, CertificateItem } from '../constants/portfolio';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { TiltCard } from './TiltCard';

export const Certificates: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const categories = ['All', 'Cybersecurity', 'Database', 'Python'];

  const filteredCerts = activeCategory === 'All'
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter((cert) => cert.category === activeCategory);

  return (
    <section id="certificates" className="relative py-28 max-w-7xl mx-auto px-6 z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mb-14 text-center max-w-3xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-white/5 border border-indigo-200/80 dark:border-white/10 rounded-full text-xs font-code text-primary dark:text-accent uppercase tracking-wider mb-3">
          <Award className="w-3.5 h-3.5" /> Credentials & Achievements
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          Official Certifications
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-base text-slate-600 dark:text-slate-400 mt-3">
          Verified professional credentials in Certified Ethical Hacking, Penetration Testing, Oracle SQL Databases, and Python Engineering.
        </motion.p>

        {/* Filter Category Pills */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-code transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-soft scale-105'
                  : 'glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCerts.map((cert, idx) => (
          <TiltCard key={cert.id} maxRotation={4} className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full rounded-3xl glass-card glass-card-hover overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                  <div className="px-4 py-2 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md rounded-full text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4 text-primary" /> View Certificate
                  </div>
                </div>

                <span className="absolute top-4 left-4 px-3 py-1 glass-card rounded-full font-code text-[11px] font-semibold text-primary dark:text-accent shadow-sm">
                  {cert.badge}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 text-xs font-code text-slate-500 dark:text-slate-400 mb-2">
                    <ShieldCheck className="w-4 h-4 text-primary dark:text-accent" />
                    <span>{cert.issuer}</span>
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs font-code text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.issueDate}</span>
                  </div>

                  {cert.credentialId && (
                    <span className="text-[10px] text-primary dark:text-accent font-mono truncate max-w-[120px]">
                      ID: {cert.credentialId.slice(0, 10)}...
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>

      {/* Certificate High-Res Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full bg-white dark:bg-[#0B0F19] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-code text-primary dark:text-accent mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Official Certificate
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                    {selectedCert.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-code mt-0.5">
                    Issued by <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedCert.issuer}</span> on {selectedCert.issueDate}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image View */}
              <div className="p-6 max-h-[70vh] overflow-y-auto flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-lg border border-slate-200 dark:border-white/10"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                {selectedCert.credentialId ? (
                  <div className="font-code text-xs text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Credential ID:</span> <span className="font-mono font-semibold text-primary dark:text-accent">{selectedCert.credentialId}</span>
                  </div>
                ) : (
                  <div className="font-code text-xs text-slate-600 dark:text-slate-300">
                    Verified Credential by {selectedCert.issuer}
                  </div>
                )}

                <div className="flex items-center gap-3">
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-soft"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Verify Credential
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 glass-card text-slate-800 dark:text-white text-xs font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

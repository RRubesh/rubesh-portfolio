import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, CheckCircle2, Loader2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { USER_INFO } from '../constants/portfolio';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { MagneticButton } from './MagneticButton';
import { TiltCard } from './TiltCard';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Message from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Rubesh,\n\nYou received a new message from your portfolio website:\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n\n---\nSent via Rubesh R Portfolio Contact Form`
    );

    const mailtoUrl = `mailto:${USER_INFO.email}?subject=${subject}&body=${body}`;

    // Open default mail client / Gmail
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 max-w-7xl mx-auto px-6 z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-primary/10 via-secondary/15 to-accent/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mb-14 text-center max-w-3xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-white/5 border border-indigo-200/80 dark:border-white/10 rounded-full text-xs font-code text-primary dark:text-accent uppercase tracking-wider mb-4">
          <MessageSquare className="w-3.5 h-3.5" /> Start a Conversation
        </motion.div>

        {/* Heading with slow fade & slight upward movement */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-heading font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4"
        >
          Let's Build Something Intelligent.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
        >
          Have an idea, project, or opportunity? Let's connect.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Animated Glass Contact Info Card */}
        <TiltCard maxRotation={3}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl glass-card flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">Direct Contact Channels</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Open for high-impact AI engineering positions, security consulting, and full-stack software development projects.
              </p>
            </div>

            {/* Email Glass Button */}
            <MagneticButton href={`mailto:${USER_INFO.email}`} className="w-full" strength={6}>
              <div className="flex items-center justify-between p-4 bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 rounded-2xl hover:border-primary transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary dark:text-accent shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-code text-slate-400 uppercase tracking-wider">Email Address</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{USER_INFO.email}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            </MagneticButton>

            {/* GitHub Glass Button */}
            <MagneticButton href={USER_INFO.github} target="_blank" rel="noopener noreferrer" className="w-full" strength={6}>
              <div className="flex items-center justify-between p-4 bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 rounded-2xl hover:border-primary transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-code text-slate-400 uppercase tracking-wider">GitHub Profile</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">github.com/RRubesh</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            </MagneticButton>

            {/* LinkedIn Glass Button */}
            <MagneticButton href={USER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-full" strength={6}>
              <div className="flex items-center justify-between p-4 bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 rounded-2xl hover:border-primary transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-code text-slate-400 uppercase tracking-wider">LinkedIn Network</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">linkedin.com/in/rubesh-r-</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            </MagneticButton>
          </motion.div>
        </TiltCard>

        {/* Message Form Glass Card */}
        <TiltCard maxRotation={3}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl glass-card"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-3.5 bg-white/80 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3.5 bg-white/80 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Project Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your AI or Cybersecurity project needs..."
                  className="w-full px-4 py-3.5 bg-white/80 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-y"
                />
              </div>

              <MagneticButton className="w-full" strength={6}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-semibold text-sm rounded-2xl shadow-soft hover:shadow-glowPrimary transition-all flex items-center justify-center gap-2 shine-effect"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </MagneticButton>

              {submitted && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 rounded-2xl text-emerald-700 dark:text-emerald-400 text-xs text-center flex items-center justify-center gap-2 mt-2 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Message sent successfully! Rubesh R will respond promptly.</span>
                </div>
              )}
            </form>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
};

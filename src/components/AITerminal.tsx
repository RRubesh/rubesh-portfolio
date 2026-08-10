import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Play, RotateCcw, CheckCircle2 } from 'lucide-react';

const TERMINAL_LINES = [
  "> Initializing AI Engine...",
  "> Loading security modules...",
  "> Connecting LLM...",
  "> Scanning project architecture...",
  "> Security analysis ready.",
  "> System Status: ONLINE"
];

export const AITerminal: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_LINES.length) {
      setIsCompleted(true);
      return;
    }

    const currentLine = TERMINAL_LINES[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const updated = [...prev];
          if (!updated[currentLineIndex]) {
            updated[currentLineIndex] = '';
          }
          updated[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return updated;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, 25); // typing speed per character

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 250); // delay before next line

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  const handleRestart = () => {
    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setIsCompleted(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-xl mx-auto rounded-3xl bg-[#0B0F19] border border-slate-700/60 shadow-2xl overflow-hidden font-code text-xs text-slate-200"
    >
      {/* Terminal Bar Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="ml-2 flex items-center gap-1.5 text-slate-400 font-semibold text-[11px] tracking-wider uppercase">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span>AI SYSTEM STATUS</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRestart}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            title="Replay Terminal Sequence"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            LIVE
          </span>
        </div>
      </div>

      {/* Terminal Content Output Area */}
      <div className="p-5 flex flex-col gap-2 min-h-[170px] bg-[#0B0F19]/90">
        {displayedLines.map((line, idx) => {
          const isOnline = line.includes("ONLINE");
          const isReady = line.includes("ready");
          return (
            <div
              key={idx}
              className={`flex items-center gap-2 ${
                isOnline
                  ? "text-emerald-400 font-bold"
                  : isReady
                  ? "text-accent"
                  : "text-slate-300"
              }`}
            >
              <span>{line}</span>
              {isOnline && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </div>
          );
        })}

        {/* Blinking Cursor */}
        {!isCompleted && (
          <div className="flex items-center gap-1 text-accent">
            <span className="animate-pulse">█</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

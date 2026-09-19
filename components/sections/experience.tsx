"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CONTENT } from "@/lib/content";

export function Experience() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="py-28 border-b border-[var(--border)] bg-[var(--surface-1)]">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-sans font-semibold text-[var(--accent)] uppercase tracking-wider block mb-2">
              Where I&apos;ve Worked
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text-main)] tracking-tight">
              Experience
            </h2>
          </div>
          <p className="font-sans text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
            Full-stack engineering, AI features, and backend work across startups and tech companies.
          </p>
        </div>

        {/* Editorial Progressive Disclosure List */}
        <div className="space-y-6">
          {CONTENT.experience.map((item, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={reduced ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                  className="w-full text-left p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-main)]">
                        {item.company}
                      </h3>
                      <span className="text-xs font-sans px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--surface-1)] text-[var(--text-muted)]">
                        {item.type}
                      </span>
                    </div>
                    <div className="font-sans text-sm text-[var(--accent)] font-medium">
                      {item.role}
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 text-sm font-sans text-[var(--text-muted)]">
                    <span>{item.period}</span>
                    <span className="text-lg font-mono text-[var(--accent)]">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* Progressive Disclosure Bullet Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-[var(--border)]"
                    >
                      <p className="font-sans text-sm text-[var(--text-main)] font-medium mt-4 mb-4">
                        {item.summary}
                      </p>

                      <ul className="space-y-2 font-sans text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-2.5 items-start">
                            <span className="text-[var(--accent)]">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {item.stack.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded bg-[var(--surface-1)] text-[var(--text-muted)] border border-[var(--border)]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

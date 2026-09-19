"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CONTENT } from "@/lib/content";

const EVOLUTION_STATES = [
  {
    stage: "Idea",
    label: "Raw Concept",
    detail: "Framing customer requirements, scoping database schemas, and mapping user interactions.",
    preview: "sketch",
  },
  {
    stage: "Interface",
    label: "User Experience",
    detail: "Building intuitive interfaces in React/Next.js focused on clarity and fast load times.",
    preview: "ui",
  },
  {
    stage: "System",
    label: "Backend & AI",
    detail: "Wiring Laravel backend APIs, PostgreSQL database queries, Redis caching, and RAG search.",
    preview: "api",
  },
  {
    stage: "Production",
    label: "Live Software",
    detail: "Deploying to AWS S3 & production servers with monitoring and database query tuning.",
    preview: "live",
  },
];

export function Hero() {
  const [activeStage, setActiveStage] = useState(0);
  const reduced = useReducedMotion();

  const current = EVOLUTION_STATES[activeStage];

  return (
    <section className="min-h-[88vh] flex flex-col justify-between pt-32 pb-16 border-b border-[var(--border)]">
      <div className="container-editorial w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column — Human Statement (7 Columns) */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-1)] text-xs font-sans text-[var(--text-muted)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>Software Engineer @ 7Span</span>
            </div>

            {/* Main Statement */}
            <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-[var(--text-main)] mb-6 tracking-tight">
              Building AI-native products from idea to production.
            </h1>

            {/* Short Human Sentence */}
            <p className="font-sans text-base sm:text-lg text-[var(--text-muted)] max-w-xl leading-relaxed mb-8">
              {CONTENT.subTagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#work" className="btn-human">
                See My Work ↓
              </a>
              <a
                href={CONTENT.resume}
                className="font-sans text-sm font-medium px-5 py-3 rounded-md border border-[var(--border)] text-[var(--text-main)] hover:border-[var(--accent)] transition-colors"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>

          {/* Right Column — Signature Interactive Product Metaphor (5 Columns) */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={reduced ? {} : { y: -10, scale: 1.02 }}
            className="lg:col-span-5 cursor-pointer"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border)] shadow-xl hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--accent)]/15 transition-all duration-300">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border)]">
                <span className="text-xs font-sans font-medium text-[var(--text-muted)]">
                  Product Lifecycle Evolution
                </span>
                <span className="text-xs font-mono text-[var(--accent)] font-semibold">
                  0{activeStage + 1} / 04
                </span>
              </div>

              {/* State Visual Card */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-1">
                  STAGE: {current.stage}
                </div>
                <h3 className="font-display font-semibold text-2xl text-[var(--text-main)] mb-3">
                  {current.label}
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed min-h-[60px]">
                  {current.detail}
                </p>
              </div>

              {/* Interactive State Switches */}
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-[var(--border)]">
                {EVOLUTION_STATES.map((stg, idx) => (
                  <button
                    key={stg.stage}
                    onClick={() => setActiveStage(idx)}
                    className={`py-2 px-1 rounded text-xs font-sans font-semibold transition-all ${
                      activeStage === idx
                        ? "bg-[var(--accent)] text-white"
                        : "bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    }`}
                  >
                    {stg.stage}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

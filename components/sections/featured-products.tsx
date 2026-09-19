"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONTENT } from "@/lib/content";

function ProgressDot({
  idx,
  total,
  scrollYProgress,
}: {
  idx: number;
  total: number;
  scrollYProgress: any;
}) {
  const start = idx === 0 ? 0 : 0.15 + (idx - 1) * 0.26;
  const width = useTransform(scrollYProgress, [start, start + 0.2], ["0%", "100%"]);

  return <motion.div style={{ width }} className="h-full bg-[var(--accent)]" />;
}

function StackedCardItem({
  project,
  idx,
  total,
  scrollYProgress,
}: {
  project: (typeof CONTENT.projects)[number];
  idx: number;
  total: number;
  scrollYProgress: any;
}) {
  // Entry scroll window thresholds
  const startRange = idx === 0 ? 0 : 0.15 + (idx - 1) * 0.26;
  const endRange = idx === 0 ? 0 : startRange + 0.22;
  const targetY = idx * 12;

  // Slide Y up from 400px below to offset stacked position
  const y = useTransform(
    scrollYProgress,
    [startRange, endRange],
    [idx === 0 ? 0 : 400, targetY]
  );

  // Subtle depth scale down as subsequent cards stack on top
  const scaleStart = endRange + 0.05;
  const scaleEnd = Math.min(scaleStart + 0.3, 1);
  const scale = useTransform(
    scrollYProgress,
    [scaleStart, scaleEnd],
    [1, 1 - (total - idx - 1) * 0.018]
  );

  // Opacity fade in for entering cards
  const opacity = useTransform(
    scrollYProgress,
    [startRange, startRange + 0.08],
    [idx === 0 ? 1 : 0, 1]
  );

  return (
    <motion.article
      style={{
        y,
        scale,
        opacity,
        zIndex: idx + 10,
      }}
      className="absolute top-0 left-0 w-full h-[390px] sm:h-[420px] p-5 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border)] shadow-2xl hover:border-[var(--accent)] transition-colors duration-300 group cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Visual Card Header */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-[var(--border)]">
          <span className="text-xs font-mono font-bold text-[var(--accent)] tracking-widest uppercase">
            0{idx + 1} / 0{total} • {project.category}
          </span>
          <span className="text-xs font-sans text-[var(--text-subtle)] px-3 py-1 rounded-full bg-[var(--surface-2)] border border-[var(--border)]">
            {project.flagship ? "Flagship Project" : "Featured Work"}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-main)] mb-2 group-hover:text-[var(--accent)] transition-colors">
          {project.name}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-3 font-medium">
          {project.tagline}
        </p>

        {/* Context Box Visual */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] mb-3 text-xs sm:text-sm font-sans text-[var(--text-muted)] leading-relaxed group-hover:border-[var(--accent)]/40 transition-colors">
          <span className="font-semibold text-[var(--text-main)] block mb-1">
            What I Built & Technical Approach:
          </span>
          {project.built}
        </div>
      </div>

      {/* Footer Tech Stack Pills */}
      <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-main)]"
            >
              {t}
            </span>
          ))}
        </div>

        <span className="text-xs sm:text-sm font-sans font-semibold text-[var(--accent)] flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
          Explore Project Details →
        </span>
      </div>
    </motion.article>
  );
}

export function FeaturedProducts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projects = CONTENT.projects;

  // Track scroll position through the tall 360vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const strapText =
    "✦ FULL-STACK SAAS ✦ RAG RETRIEVAL PIPELINES ✦ AI-NATIVE PRODUCTS ✦ LARAVEL & NEXT.JS ✦ POSTGRESQL & REDIS ✦ OPENAI API INTEGRATIONS ✦ ";

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative h-[360vh] border-b border-[var(--border)]"
    >
      {/* ─── Pinned Sticky Viewport Container ─── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background Soft Glow Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[var(--accent)]/10 blur-[150px] rounded-full pointer-events-none z-0" />

        {/* ─── Automatic Continuous Infinite Marquee Strap ─── */}
        <div className="absolute top-[52%] -translate-y-1/2 left-0 right-0 w-full overflow-hidden py-4 sm:py-5 bg-gradient-to-r from-[var(--accent)] via-[#E85D04] to-[var(--accent)] -rotate-1 shadow-xl pointer-events-none select-none z-0">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex whitespace-nowrap text-white font-display font-black text-lg sm:text-2xl tracking-wider uppercase"
          >
            <span className="pr-4">{strapText.repeat(4)}</span>
            <span className="pr-4">{strapText.repeat(4)}</span>
          </motion.div>
        </div>

        {/* Section Header with top spacing below floating capsule navbar */}
        <div className="container-editorial relative z-10 pt-20 sm:pt-24 pb-2">
          <span className="text-xs font-sans font-semibold text-[var(--accent)] uppercase tracking-wider block mb-1">
            Featured Work
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] tracking-tight">
            Products I&apos;ve built.
          </h2>
        </div>

        {/* ─── Pinned Stacking Cards Viewport ─── */}
        <div className="container-editorial relative z-10 w-full flex-1 flex items-center justify-center my-auto">
          <div className="relative w-full max-w-2xl h-[410px] sm:h-[440px] mx-auto">
            {projects.map((project, idx) => (
              <StackedCardItem
                key={project.id}
                project={project}
                idx={idx}
                total={projects.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Spacer to give proper padding below cards before next section */}
        <div className="h-16 sm:h-24 shrink-0"></div>
      </div>
    </section>
  );
}

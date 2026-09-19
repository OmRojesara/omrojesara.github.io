"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CONTENT } from "@/lib/content";

// --- Draggable Card Component ---
function DraggableCard({ children, title, color, constraintsRef, delay = 0, initialPos = { x: 0, y: 0 } }: any) {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      whileDrag={{ scale: 1.05, cursor: "grabbing", zIndex: 50, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
      style={{ position: 'absolute', top: initialPos.y, left: initialPos.x }}
      className={`cursor-grab w-72 sm:w-80 lg:w-96 rounded-3xl bg-[var(--surface-1)]/80 backdrop-blur-xl border border-black/30 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-2xl overflow-hidden group hover:border-${color}-500/50 transition-colors duration-300`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50" />
      <div className="p-4 sm:p-6">
        <div className={`text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2 text-${color}-400`}>
          <div className={`w-2 h-2 rounded-full bg-${color}-500 animate-pulse`} />
          {title}
        </div>
        {children}
      </div>
    </motion.div>
  );
}

// --- Typing Terminal Component (Laravel Version) ---
function Terminal() {
  const codeLines = [
    { text: "<?php", color: "text-red-400" },
    { text: "", color: "" },
    { text: "namespace App\\Engineers;", color: "text-purple-400" },
    { text: "", color: "" },
    { text: "class OmRojesara extends SoftwareEngineer {", color: "text-yellow-300" },
    { text: "    public string $role = 'Associate Software Engineer @ 7Span';", color: "text-green-300" },
    { text: "    public array $focus = ['SaaS', 'AI Integrations', 'Backend'];", color: "text-green-300" },
    { text: "", color: "" },
    { text: "    public function buildProduct(): void {", color: "text-blue-400" },
    { text: "        // I build the whole product, not just one part.", color: "text-gray-500" },
    { text: "        $this->executeFullStackWorkflow();", color: "text-blue-300" },
    { text: "    }", color: "text-gray-300" },
    { text: "}", color: "text-gray-300" },
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0d1117] border border-[var(--border)] rounded-xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">
      {/* Terminal Header */}
      <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-[var(--border)]">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-4 text-[10px] font-mono text-[var(--text-muted)]">OmRojesara.php</div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 font-mono text-[10px] sm:text-xs leading-relaxed overflow-hidden">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (i * 0.15) }}
            className="flex whitespace-nowrap"
          >
            <span className="w-6 text-gray-600 select-none shrink-0">{i + 1}</span>
            <span className={line.color}>{line.text}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline-block w-2 h-3 bg-[var(--text-main)] ml-6 mt-1 align-middle"
        />
      </div>
    </div>
  );
}

export function Philosophy() {
  const reduced = useReducedMotion();
  const targetRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  // Scroll Progress for Horizontal Translation
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal X movement (only active on desktop)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  // Parallax backgrounds
  const parallax1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section id="about" className="bg-[var(--bg)] relative z-10 border-b border-[var(--border)]">
      {/* 
        Responsive Setup:
        - Mobile: Normal vertical flow (hidden overflowing horizontal elements)
        - Desktop (lg): 300vh scrolling container that pins and translates horizontally 
      */}

      {/* MOBILE LAYOUT (Vertical) */}
      <div className="lg:hidden px-6 py-24 space-y-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--accent)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

        <div className="space-y-6">
          <h2 className="font-display font-extrabold text-4xl text-[var(--text-main)] tracking-tight leading-[1.1] relative z-10">
            I like working on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-400">whole product</span> - not just my part of the stack.
          </h2>
          <Terminal />
        </div>

        <div className="space-y-8">


          <div className="space-y-6">
            <div className="rounded-3xl bg-[var(--surface-1)] border border-black/30 dark:border-white/10 p-6 group hover:border-blue-500/50 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-lg">
              <div className="text-xs font-mono font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-blue-500">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Frontend Architecture
              </div>
              <p className="font-sans text-sm text-[var(--text-muted)] mb-4">
                Building highly interactive, accessible, and fluid UIs that users love.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind CSS", "Framer Motion"].map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 text-[10px] font-mono">{skill}</span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-[var(--surface-1)] border border-black/30 dark:border-white/10 p-6 group hover:border-emerald-500/50 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-lg">
              <div className="text-xs font-mono font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-emerald-500">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Backend Systems
              </div>
              <p className="font-sans text-sm text-[var(--text-muted)] mb-4">
                Designing robust APIs, managing databases, and ensuring scalable architecture behind the scenes.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "AWS"].map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-300 text-[10px] font-mono">{skill}</span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-[var(--surface-1)] border border-black/30 dark:border-white/10 p-6 group hover:border-purple-500/50 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-lg">
              <div className="text-xs font-mono font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-purple-500">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                AI Integrations
              </div>
              <p className="font-sans text-sm text-[var(--text-muted)] mb-4">
                Making software smarter by integrating cutting-edge LLMs and vector retrieval systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["GenAI", "RAG Pipelines", "Vector DBs", "LLMs", "OpenAI"].map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-[10px] font-mono">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* DESKTOP LAYOUT (Horizontal Cinematic Scroll) */}
      <div ref={targetRef} className="hidden lg:block h-[300vh] relative w-full">
        <div className="sticky top-20 h-[calc(100vh-80px)] w-full overflow-hidden flex items-center">

          {/* Cinematic Parallax Background Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div style={{ x: parallax1 }} className="absolute top-[20%] left-[10%] text-[12rem] font-display font-bold text-[var(--text-main)] opacity-[0.03] whitespace-nowrap select-none">
              FULL STACK
            </motion.div>
            <motion.div style={{ x: parallax2 }} className="absolute bottom-[20%] right-[-20%] text-[12rem] font-display font-bold text-[var(--text-main)] opacity-[0.03] whitespace-nowrap select-none">
              AI NATIVE
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.04] blur-[150px] rounded-full" />
          </div>

          {/* The Horizontal Track */}
          <motion.div
            style={{ x: reduced ? 0 : x }}
            className="flex h-full w-[300vw] relative z-10"
          >

            {/* SCENE 1: Intro & Terminal (100vw) */}
            <div className="w-screen h-full flex items-center justify-center px-16 xl:px-24">
              <div className="grid grid-cols-2 gap-16 items-center w-full max-w-[90rem] mx-auto">

                {/* Left: Intro Text (Decreased Size as requested) */}
                <div className="space-y-6 relative">
                  <motion.div className="absolute -left-12 -top-6 text-[8rem] text-[var(--accent)] opacity-10 font-serif leading-none select-none">
                    "
                  </motion.div>
                  <h2 className="font-display font-extrabold text-5xl xl:text-6xl text-[var(--text-main)] tracking-tight leading-[1.1] relative z-10">
                    I like working on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-400">whole product</span> - not just my part of the stack.
                  </h2>
                  <div className="flex items-center gap-4 text-[var(--text-muted)] animate-pulse pt-4">
                    <span className="w-8 h-px bg-[var(--text-muted)]" />
                    <span className="font-mono text-sm uppercase tracking-widest">Scroll to explore</span>
                  </div>
                </div>

                {/* Right: Interactive Terminal */}
                <div className="flex justify-center xl:justify-end">
                  <Terminal />
                </div>

              </div>
            </div>

            {/* SCENE 2: The Physics Desktop Playground (200vw) */}
            <div ref={constraintsRef} className="w-[200vw] h-full relative border-l border-[var(--border)] flex items-center justify-center overflow-hidden">



              {/* Draggable Card 1: Frontend */}
              <DraggableCard title="Frontend Architecture" color="blue" constraintsRef={constraintsRef} delay={0.2} initialPos={{ x: "10%", y: "20%" }}>
                <p className="font-sans text-sm text-[var(--text-muted)] mb-4">
                  Building highly interactive, accessible, and fluid UIs that users love.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind CSS", "Framer Motion"].map(skill => (
                    <span key={skill} className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 text-xs font-mono">{skill}</span>
                  ))}
                </div>
              </DraggableCard>

              {/* Draggable Card 2: Backend */}
              <DraggableCard title="Backend Systems" color="emerald" constraintsRef={constraintsRef} delay={0.4} initialPos={{ x: "28%", y: "50%" }}>
                <p className="font-sans text-sm text-[var(--text-muted)] mb-4">
                  Designing robust APIs, managing databases, and ensuring scalable architecture behind the scenes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "AWS"].map(skill => (
                    <span key={skill} className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-300 text-xs font-mono">{skill}</span>
                  ))}
                </div>
              </DraggableCard>

              {/* Draggable Card 3: AI Integration */}
              <DraggableCard title="AI Integrations" color="purple" constraintsRef={constraintsRef} delay={0.6} initialPos={{ x: "48%", y: "20%" }}>
                <p className="font-sans text-sm text-[var(--text-muted)] mb-4">
                  Making software smarter by integrating cutting-edge LLMs and vector retrieval systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["GenAI", "RAG Pipelines", "Vector DBs", "LLMs", "LangChain"].map(skill => (
                    <span key={skill} className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-mono">{skill}</span>
                  ))}
                </div>
              </DraggableCard>

              {/* Draggable Card 4: Education & Certs */}
              <DraggableCard title="Education" color="orange" constraintsRef={constraintsRef} delay={0.8} initialPos={{ x: "65%", y: "45%" }}>
                <div className="space-y-4">
                  {CONTENT.education.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="text-sm font-bold text-[var(--text-main)] leading-tight">{item.degree}</div>
                      <div className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {item.institution} <span className="font-mono text-[10px] whitespace-nowrap"><span className="mx-1.5 opacity-50">•</span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="inline-flex items-center px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 font-mono text-[11px] font-bold shadow-[0_0_8px_-2px_rgba(249,115,22,0.3)]">
                          {item.status}
                        </div>
                        <div className="text-[10px] text-[var(--text-muted)] font-medium">
                          First Class with Distinction
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-[var(--border)]">
                    <div className="text-xs text-[var(--text-muted)] mb-2 font-medium">Selected Certifications:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {CONTENT.certifications.slice(0, 3).map((cert, idx) => (
                        <span key={idx} className="px-2 py-1 rounded bg-[var(--surface-1)] border border-[var(--border)] text-[var(--text-main)] text-[10px] whitespace-nowrap shadow-sm">{cert}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </DraggableCard>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

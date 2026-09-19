"use client";

import { motion, useReducedMotion, useMotionValue, useMotionTemplate, AnimatePresence } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { MouseEvent, useState } from "react";

export function Contact() {
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHoveringMagic, setIsHoveringMagic] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // A marquee array
  const marqueeText = new Array(4).fill("LET'S WORK TOGETHER • ");

  const magicWords = [
    "Web", "App", "AI Agents", "Automation", 
    "Workflow", "Custom Software", "Backend", 
    "Idea to product", "SaaS"
  ];

  return (
    <section id="contact" className="relative pt-32 pb-24 bg-[var(--bg)] overflow-hidden">
      
      {/* Animated Background Marquee */}
      <div className="absolute top-1/4 left-0 w-[200%] flex opacity-[0.03] pointer-events-none rotate-[-3deg] select-none">
        <motion.div
          animate={reduced ? {} : { x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap"
        >
          {marqueeText.map((text, i) => (
            <span key={i} className="text-[12rem] font-display font-bold leading-none tracking-tighter mx-8">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 left-0 w-[200%] flex opacity-[0.03] pointer-events-none rotate-[2deg] select-none">
        <motion.div
          animate={reduced ? {} : { x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap"
        >
          {marqueeText.map((text, i) => (
            <span key={i} className="text-[10rem] font-display font-bold leading-none tracking-tighter mx-8">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Interactive Card */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-[2rem] border border-[var(--border)] bg-transparent py-6 px-6 sm:py-8 sm:px-16 overflow-hidden text-center shadow-2xl"
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight Glow Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  800px circle at ${mouseX}px ${mouseY}px,
                  var(--accent-soft),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Floating Magic Cursor Pop-up */}
          <AnimatePresence>
            {isHoveringMagic && (
              <motion.div
                initial={{ opacity: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, x: "-50%", y: "-120%" }}
                exit={{ opacity: 0, x: "-50%", y: "-50%", transition: { duration: 0.2 } }}
                style={{
                  position: 'absolute',
                  top: mouseY,
                  left: mouseX,
                  pointerEvents: 'none',
                }}
                className="z-50 flex flex-wrap gap-2 w-64 justify-center"
              >
                {magicWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.1 } }}
                    transition={{ delay: i * 0.03, type: "spring", stiffness: 400, damping: 25 }}
                    className="bg-[var(--surface-1)]/90 backdrop-blur-md text-[var(--text-main)] text-xs font-sans font-medium px-2.5 py-1.5 rounded-lg border border-[var(--border)] shadow-xl whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface-1)]/50 backdrop-blur-sm shadow-sm"
            >
              <span className="text-xs font-sans font-semibold text-[var(--text-main)] uppercase tracking-widest mt-[1px]">
                Available for work
              </span>
            </motion.div>

            <h2 className="font-display font-extrabold text-5xl sm:text-7xl text-[var(--text-main)] tracking-tighter mb-8 leading-[1.1] flex flex-col items-center gap-3">
              <span>Ready to</span>
              <span 
                onMouseEnter={() => setIsHoveringMagic(true)}
                onMouseLeave={() => setIsHoveringMagic(false)}
                className="inline-block bg-[var(--accent)] text-[var(--bg)] px-6 py-2 sm:px-8 sm:py-3 rounded-2xl transform -rotate-3 shadow-[0_8px_30px_-10px_var(--accent)] mt-1 cursor-crosshair transition-transform hover:scale-105 active:scale-95 duration-300"
              >
                create magic?
              </span>
            </h2>

            <p className="font-sans text-lg sm:text-xl text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed mb-12">
              I&apos;m currently open to new product projects. Drop me a line if you have something exciting in mind.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              <a 
                href={`mailto:${CONTENT.email}`} 
                className="group/btn relative overflow-hidden bg-[var(--text-main)] text-[var(--bg)] font-display font-semibold text-base px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_var(--accent)] w-full sm:w-auto flex justify-center items-center gap-2"
              >
                <div className="absolute inset-0 bg-[var(--accent)] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-white transition-colors duration-300">
                  Say Hello
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/omrojesara/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn2 font-sans text-base font-medium px-8 py-4 rounded-full border border-[var(--border)] text-[var(--text-main)] hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto hover:scale-105 active:scale-95"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover/btn2:scale-110 transition-transform duration-300">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

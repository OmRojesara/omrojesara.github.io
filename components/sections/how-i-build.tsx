"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { CONTENT } from "@/lib/content";

export function HowIBuild() {
  const [activeStep, setActiveStep] = useState(0);
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const steps = CONTENT.workflow.length;
    const step = Math.min(Math.floor(latest * steps), steps - 1);
    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  const current = CONTENT.workflow[activeStep];

  return (
    <section ref={sectionRef} id="workflow" className="relative h-[250vh] border-b border-[var(--border)] bg-[var(--surface-1)]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="container-editorial w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs font-sans font-semibold text-[var(--accent)] uppercase tracking-wider block mb-2">
              Engineering Workflow
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text-main)] tracking-tight">
              How I actually build.
            </h2>
          </div>
          <p className="font-sans text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
            A simple, pragmatic workflow applied across full-stack features and AI integrations.
          </p>
        </motion.div>

        {/* Interactive Step-by-Step Workflow Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Step Selector Buttons */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              hidden: { opacity: 0 }
            }}
            className="lg:col-span-5 space-y-3"
          >
            {CONTENT.workflow.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <div key={item.step} className="overflow-hidden rounded-xl">
                  <motion.div
                    variants={{
                      visible: { 
                        y: "0%",
                        opacity: 1,
                        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                      },
                      hidden: { 
                        y: "100%",
                        opacity: 0
                      }
                    }}
                    onClick={() => {
                      // Optional: scroll to the specific part of the section when clicked
                      const section = sectionRef.current;
                      if (section) {
                        const top = section.offsetTop + (section.offsetHeight / CONTENT.workflow.length) * idx;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }}
                    className={`w-full text-left p-5 rounded-xl border text-sm font-sans transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-[var(--bg)] border-[var(--accent)] text-[var(--text-main)] shadow-sm"
                      : "bg-[var(--surface-2)] border-transparent text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold ${isActive ? "text-[var(--accent)]" : "text-[var(--text-subtle)]"}`}>
                      {item.step}
                    </span>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <span>{isActive ? "→" : "›"}</span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Active Step Story Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", y: 30 }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <motion.div
              key={current.step}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] h-full"
            >
              <div className="text-xs font-mono text-[var(--accent)] font-semibold mb-2">
                STEP {current.step} OF 04
              </div>
              <h3 className="font-display font-bold text-3xl text-[var(--text-main)] mb-4">
                {current.title}
              </h3>
              <p className="font-sans text-base text-[var(--text-muted)] leading-relaxed">
                {current.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CONTENT } from "@/lib/content";

export function Proof() {
  const reduced = useReducedMotion();

  return (
    <section className="py-16 border-b border-[var(--border)] bg-[var(--surface-1)]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTENT.quickFacts.map((fact, idx) => (
            <motion.div
              key={fact.label}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-4 rounded-lg bg-[var(--bg)] border border-[var(--border)]"
            >
              <div className="text-xs font-sans font-medium text-[var(--text-subtle)] uppercase tracking-wider mb-1">
                {fact.label}
              </div>
              <div className="font-display font-semibold text-sm text-[var(--text-main)]">
                {fact.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

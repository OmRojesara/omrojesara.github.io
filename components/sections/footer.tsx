"use client";

import { CONTENT } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-subtle)]">
        <div>
          © {year} {CONTENT.name}. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a href={CONTENT.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] transition-colors">
            GitHub
          </a>
          <a href={CONTENT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] transition-colors">
            LinkedIn
          </a>
          <a href={CONTENT.resume} className="hover:text-[var(--text-main)] transition-colors">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

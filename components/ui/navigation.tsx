"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/use-theme";
import { CONTENT } from "@/lib/content";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Workflow", href: "#workflow" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-[var(--border)] bg-[var(--surface-1)] text-[var(--text-main)] hover:border-[var(--accent)] transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 220, damping: 14 }}
        className="w-4 h-4 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0 0 18V3z" fill="currentColor" stroke="none" />
        </svg>
      </motion.div>
    </motion.button>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-300">
        <div className="w-full px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl shadow-lg shadow-black/10 flex items-center justify-between">
          {/* Logo Mark */}
          <Link
            href="/"
            aria-label="Om Rojesara — Home"
            className="font-display font-semibold text-sm sm:text-base tracking-tight text-[var(--text-main)] flex items-center gap-2 hover:opacity-80 transition-opacity pl-1"
          >
            <span>Om Rojesara</span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6 font-sans text-xs sm:text-sm text-[var(--text-muted)]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[var(--text-main)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={CONTENT.resume}
              className="text-xs font-sans font-medium px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-1)] text-[var(--text-main)] hover:border-[var(--accent)] transition-colors duration-200"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xs font-sans px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-1)] text-[var(--text-main)] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] pt-24 pb-8 px-6 flex flex-col justify-between"
          >
            <nav className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.href} className="border-b border-[var(--border)] pb-3">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display font-semibold text-2xl text-[var(--text-main)] block"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>

            <div className="pt-6 border-t border-[var(--border)] flex justify-between items-center text-xs font-sans text-[var(--text-muted)]">
              <a href={CONTENT.resume} className="text-[var(--accent)] font-medium">
                Download Resume PDF ↗
              </a>
              <span>{CONTENT.location}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

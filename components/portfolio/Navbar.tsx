"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Menu, X, Download } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { contactDetails } from "@/lib/portfolio-data";

export function Navbar() {
  const { locale, toggleLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Clean 4-item core navigation (Logo already links to #home, CTA links to #contact)
  const links = [
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#education", label: t.nav.education },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? "py-2.5" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <nav
          aria-label="Navegación principal"
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 sm:px-6 py-2.5 transition-all ${
            scrolled || open
              ? "glass shadow-card border border-border"
              : "bg-surface/40 backdrop-blur-md border border-border/50"
          }`}
        >
          {/* Minimal Brand Identity */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 font-bold tracking-tight whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-brand shadow-glow shrink-0">
              <Code2 className="w-4 h-4 text-primary-foreground" />
            </span>
            <span className="text-foreground text-base font-bold tracking-tight">
              Leoferson<span className="text-primary">.dev</span>
            </span>
          </a>

          {/* Clean Center Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors whitespace-nowrap relative group"
                >
                  {l.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* Compact Right Actions */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleLocale}
              aria-label={t.nav.langLabel}
              title={t.nav.langLabel}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-elevated/80 border border-border hover:border-primary/50 text-xs font-mono font-semibold text-muted-foreground hover:text-foreground transition cursor-pointer whitespace-nowrap"
            >
              <span className={locale === "es" ? "text-primary" : ""}>ES</span>
              <span className="opacity-40">/</span>
              <span className={locale === "en" ? "text-primary" : ""}>EN</span>
            </button>

            <a
              href={contactDetails.cvPath}
              download={contactDetails.cvDownloadName}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-2 rounded-lg bg-surface-elevated/80 border border-border hover:border-primary/50 hover:text-primary transition whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              {t.nav.downloadCv}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-brand text-primary-foreground hover:opacity-95 transition shadow-glow whitespace-nowrap"
            >
              {t.nav.hireMe}
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              aria-label={t.nav.langLabel}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-elevated border border-border text-xs font-mono font-semibold text-foreground"
            >
              <span className={locale === "es" ? "text-primary" : "text-muted-foreground"}>
                ES
              </span>
              <span className="opacity-40">/</span>
              <span className={locale === "en" ? "text-primary" : "text-muted-foreground"}>
                EN
              </span>
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="grid place-items-center w-9 h-9 rounded-lg glass hover:text-primary transition"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl glass shadow-card overflow-hidden border border-border"
            >
              <ul className="flex flex-col p-3 gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-surface-elevated rounded-xl transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-border/60 mt-1 grid grid-cols-2 gap-2">
                  <a
                    href={contactDetails.cvPath}
                    download={contactDetails.cvDownloadName}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-1.5 text-xs font-mono font-medium px-3 py-2.5 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {t.nav.downloadCv}
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center text-xs font-semibold px-3 py-2.5 rounded-xl bg-gradient-brand text-primary-foreground hover:opacity-95 transition shadow-glow"
                  >
                    {t.nav.hireMe}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

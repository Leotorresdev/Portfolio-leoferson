"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Menu, X, Download } from "lucide-react";

const cvFileName = "Leoferson.pdf";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#experience", label: "Experiencia" },
  { href: "#education", label: "Educación" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
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
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled || open ? "glass shadow-card" : ""
          }`}
        >
          <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-brand shadow-glow">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </span>
            <span className="text-gradient text-lg">Leoferson.dev</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`/${cvFileName}`}
              download={cvFileName}
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg glass hover:border-primary/50 transition"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-lg bg-gradient-brand text-primary-foreground hover:opacity-90 transition shadow-glow"
            >
              Hablemos
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-lg glass hover:text-primary transition"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-3 rounded-2xl glass shadow-card overflow-hidden"
            >
              <ul className="flex flex-col p-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
                <li className="p-2">
                  <a
                    href={`/${cvFileName}`}
                    download={cvFileName}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-lg glass hover:border-primary/50 transition mb-2"
                  >
                    <Download className="w-4 h-4" />
                    Descargar CV
                  </a>
                </li>
                <li className="p-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block text-center text-sm font-medium px-4 py-3 rounded-lg bg-gradient-brand text-primary-foreground hover:opacity-90 transition shadow-glow"
                  >
                    Hablemos
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

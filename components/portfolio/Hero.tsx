"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";

const cvFileName = "Leoferson.pdf";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent/30 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-8"
          >
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full bg-gradient-brand opacity-60 blur-md"
            />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-[3px] bg-gradient-brand shadow-glow">
              <Image
                src="/leoferson.png"
                alt="Retrato de Leoferson Torres, Full Stack Developer"
                width={320}
                height={320}
                priority
                className="w-full h-full rounded-full object-cover bg-surface"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-background" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            Disponible para nuevos proyectos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            Hola, soy <span className="text-gradient">Leoferson Torres</span>
            <br className="hidden sm:block" />
            <span className="block mt-2 sm:mt-0">Full Stack Developer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Ingeniero en Computación con experiencia en proyectos reales de travel, e-commerce y
            SaaS. Me especializo en el ecosistema{" "}
            <span className="text-foreground font-medium">React, Next.js y Tailwind CSS</span>, con
            enfoque en backend con Node.js y Express. Explorando el mundo de la{" "}
            <span className="text-violet-400 font-medium">Inteligencia Artificial</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#experience"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
            >
              Ver experiencia <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href={`/${cvFileName}`}
              download={cvFileName}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:border-primary/50 transition"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              {[
                { Icon: Github, href: "https://github.com/Leotorresdev", label: "GitHub" },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com/in/Leoferson-torres-",
                  label: "LinkedIn",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-primary hover:border-primary/50 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { contactDetails } from "@/lib/portfolio-data";

const liveDomains = [
  { label: "gabchips.com", url: "https://www.gabchips.com", tag: "B2C/B2B E-Commerce" },
  { label: "flightepic.com", url: "https://flightepic.com/", tag: "Travel Booking" },
  { label: "tripcapy.com", url: "https://tripcapy.com/es", tag: "Metasearch SaaS" },
  { label: "innovacompanyven.com", url: "https://innovacompanyven.com/", tag: "Tech Store + Bot" },
];

const primaryStackPills = [
  "React 19",
  "Next.js (App Router)",
  "TypeScript",
  "Tailwind CSS",
  "Node.js / Express",
  "PHP / Laravel",
  "MySQL / PostgreSQL",
  "Docker / AWS",
];

export function Hero() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (!navigator?.clipboard) {
        window.location.href = `mailto:${contactDetails.email}`;
        return;
      }
      await navigator.clipboard.writeText(contactDetails.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      window.location.href = `mailto:${contactDetails.email}`;
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-border/60"
    >
      {/* Subtle architectural background grid */}
      <div
        aria-hidden
        className="absolute inset-0 grid-bg opacity-35 [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_80%)]"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        {/* Top Status Telemetry Bar for Recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-border/60 text-xs font-mono"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">{t.meta.availability}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-primary" />
              {t.meta.timezone}
            </span>
          </div>
        </motion.div>

        {/* Main Asymmetric 2-Column Executive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column (7 cols): Thesis, Value Prop & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-primary mb-4"
            >
              <Terminal className="w-4 h-4" />
              <span>{t.hero.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight leading-[1.08] text-foreground"
            >
              {t.hero.headlinePrefix}{" "}
              <span className="text-gradient">{t.hero.headlineHighlight}</span>{" "}
              {t.hero.headlineSuffix}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              {t.hero.valueProposition}
            </motion.p>

            {/* Recruiter Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-7 flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-brand text-primary-foreground font-semibold text-sm shadow-glow hover:opacity-95 transition"
              >
                {t.hero.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={contactDetails.cvPath}
                download={contactDetails.cvDownloadName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass font-medium text-sm hover:border-primary/50 hover:text-primary transition"
              >
                <Download className="w-4 h-4" />
                {t.hero.secondaryCta}
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={t.hero.copyEmailLabel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 text-xs font-mono text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">
                      {t.hero.emailCopiedLabel}
                    </span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{contactDetails.email}</span>
                    <Copy className="w-3.5 h-3.5 opacity-70" />
                  </>
                )}
              </button>
            </motion.div>

            {/* Impact KPI Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full"
            >
              {t.hero.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl bg-surface/80 border border-border p-4 hover:border-primary/35 transition"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-gradient">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mt-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column (5 cols): Signature Engineering Dossier Card */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="Perfil técnico de Leoferson Torres"
            className="lg:col-span-5 rounded-2xl glass shadow-card border border-border overflow-hidden"
          >
            {/* Dossier Top Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-surface-elevated/90 border-b border-border text-[11px] font-mono">
              <span className="text-muted-foreground tracking-wider">
                {t.hero.dossierCard.headerTitle}
              </span>
              <span className="text-emerald-400 font-semibold">
                ● {t.hero.dossierCard.statusTag}
              </span>
            </div>

            <div className="p-5 sm:p-6 space-y-5">
              {/* Engineer Profile Row */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl p-[2px] bg-gradient-brand shrink-0">
                  <Image
                    src="/leo.png"
                    alt="Retrato de Leoferson Torres — Full Stack Software Engineer"
                    width={160}
                    height={160}
                    priority
                    className="w-full h-full rounded-[14px] object-cover bg-surface"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold text-foreground truncate">
                    {contactDetails.fullName}
                  </h2>
                  <p className="text-sm text-primary font-medium">
                    {t.hero.dossierCard.engineerRole}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {t.hero.dossierCard.degreeLabel}
                  </p>
                  <div className="flex items-center gap-2 mt-2.5">
                    <a
                      href={contactDetails.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub de Leoferson Torres"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-elevated border border-border hover:border-primary/50 hover:text-primary transition"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                    <a
                      href={contactDetails.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn de Leoferson Torres"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-elevated border border-border hover:border-primary/50 hover:text-primary transition"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Core Stack Pills */}
              <div className="pt-4 border-t border-border/60">
                <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2.5">
                  {t.hero.dossierCard.coreStackLabel}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {primaryStackPills.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-elevated border border-border/80 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Production Systems Telemetry */}
              <div className="pt-4 border-t border-border/60">
                <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2.5">
                  {t.hero.dossierCard.liveSystemsLabel}
                </div>
                <div className="space-y-2">
                  {liveDomains.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-surface-elevated/70 border border-border/70 hover:border-primary/50 group transition"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-xs font-mono font-semibold text-foreground group-hover:text-primary transition truncate">
                          {item.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-mono text-muted-foreground">
                          {item.tag}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

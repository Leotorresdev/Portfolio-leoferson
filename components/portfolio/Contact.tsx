"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { contactDetails } from "@/lib/portfolio-data";

export function Contact() {
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
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-4 h-4" />
            <span>
              {t.contact.sectionNumber} — {t.contact.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t.contact.title}{" "}
            <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Dual Action Cards: Recruiter Email + Fast WhatsApp */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
          {/* Primary Recruiter Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 rounded-2xl glass border border-primary/40 p-6 sm:p-8 flex flex-col justify-between shadow-glow"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-mono font-semibold mb-4">
                <Mail className="w-3.5 h-3.5" />
                {t.contact.emailCardTitle}
              </div>

              <div className="text-xl sm:text-2xl font-mono font-bold text-foreground break-all">
                {contactDetails.email}
              </div>

              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t.contact.emailCardDesc}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-brand text-primary-foreground font-semibold text-sm hover:opacity-95 transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{t.contact.copiedButton}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{t.contact.copyButton}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${contactDetails.email}?subject=Job%20Opportunity%20%E2%80%94%20Full%20Stack%20Developer`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 hover:text-primary text-sm font-medium transition"
              >
                <span>{t.contact.sendEmailButton}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Secondary WhatsApp & Direct CV Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-5 rounded-2xl glass border border-border p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold mb-4">
                <MessageCircle className="w-3.5 h-3.5" />
                {t.contact.whatsappCardTitle}
              </div>

              <div className="text-xl font-mono font-bold text-foreground">
                {contactDetails.phoneDisplay}
              </div>

              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t.contact.whatsappCardDesc}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={contactDetails.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition"
              >
                <MessageCircle className="w-4 h-4" />
                {t.contact.whatsappButton}
              </a>

              <a
                href={contactDetails.cvPath}
                download={contactDetails.cvDownloadName}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 hover:text-primary text-sm font-mono font-medium transition"
              >
                <Download className="w-4 h-4" />
                {t.contact.downloadCvButton}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Professional Profiles Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={contactDetails.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:text-primary hover:border-primary/40 transition text-sm font-mono"
          >
            <Linkedin className="w-4 h-4 text-primary" />
            linkedin.com/in/Leoferson-torres-
          </a>
          <a
            href={contactDetails.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:text-primary hover:border-primary/40 transition text-sm font-mono"
          >
            <Github className="w-4 h-4 text-primary" />
            github.com/Leotorresdev
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-border/60 pt-8">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>
            © {new Date().getFullYear()} {contactDetails.fullName} —{" "}
            {t.contact.footerRights}
          </p>
          <p className="text-primary">{t.contact.footerBuiltWith}</p>
        </div>
      </footer>
    </section>
  );
}

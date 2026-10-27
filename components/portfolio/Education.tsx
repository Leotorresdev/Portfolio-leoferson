"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  ExternalLink,
  GraduationCap,
  Languages,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const iconByType = {
  degree: GraduationCap,
  certification: Award,
  specialization: BookOpen,
};

export function Education() {
  const { t } = useLanguage();

  return (
    <section
      id="education"
      className="py-20 md:py-28 relative border-b border-border/60"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>
              {t.education.sectionNumber} — {t.education.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t.education.title}{" "}
            <span className="text-gradient">{t.education.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.education.subtitle}
          </p>
        </motion.div>

        {/* Academic & Certification Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.education.items.map((item, idx) => {
            const Icon = iconByType[item.type] || GraduationCap;
            const isDegree = item.type === "degree";

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`rounded-2xl glass p-6 sm:p-7 border transition flex flex-col justify-between ${
                  isDegree
                    ? "border-primary/45 shadow-glow"
                    : "border-border hover:border-primary/35"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-primary/15 text-primary border border-primary/30">
                      {item.badge}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-surface-elevated border border-border flex items-center justify-center shrink-0 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mt-0.5">
                        {item.institution}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground mt-1">
                        <Clock className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {item.certificateUrl && (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:underline pt-1"
                    >
                      {t.education.viewCertificateLabel}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Languages Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6 rounded-2xl glass border border-border p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border flex items-center justify-center text-primary shrink-0">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-foreground">
              {t.education.languagesTitle}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {t.education.languages.map((lang) => (
              <div
                key={lang.language}
                className="px-4 py-2 rounded-xl bg-surface-elevated border border-border text-xs sm:text-sm"
              >
                <span className="font-bold text-foreground">{lang.language}:</span>{" "}
                <span className="text-muted-foreground">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
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
            <Briefcase className="w-4 h-4" />
            <span>
              {t.experience.sectionNumber} — {t.experience.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t.experience.title}{" "}
            <span className="text-gradient">{t.experience.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Timeline Experience Cards */}
        <div className="space-y-6">
          {t.experience.items.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative rounded-2xl glass border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Top status bar */}
              <div className="h-1 w-full bg-gradient-brand opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 sm:p-8">
                {/* Role & Company Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-border/60">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                          {exp.workMode}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground/90">
                          {exp.company}
                        </span>
                        {exp.domainUrl && (
                          <a
                            href={exp.domainUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                          >
                            {exp.domainUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Period & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground md:text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-border">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-border">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Body Content: Summary + Achievements + Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {exp.summary}
                    </p>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-foreground/80 mb-3">
                        {t.experience.achievementsTitle}
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Technologies */}
                  <div className="lg:col-span-5 lg:border-l lg:border-border/60 lg:pl-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-foreground/80 mb-3">
                        {t.experience.stackTitle}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-3 py-1.5 rounded-lg bg-surface-elevated border border-border text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

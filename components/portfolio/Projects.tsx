"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  Github,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

type FilterCategory = "all" | "saas-travel" | "ecommerce";

export function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filterOptions: { id: FilterCategory; label: string }[] = [
    { id: "all", label: t.projects.filters.all },
    { id: "saas-travel", label: t.projects.filters.saasTravel },
    { id: "ecommerce", label: t.projects.filters.ecommerce },
  ];

  const filteredProjects = t.projects.items.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative border-b border-border/60"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider mb-3">
              <FolderGit2 className="w-4 h-4" />
              <span>
                {t.projects.sectionNumber} — {t.projects.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {t.projects.title}{" "}
              <span className="text-gradient">{t.projects.titleHighlight}</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.projects.subtitle}
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filtrar proyectos por categoría"
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-surface-elevated border border-border self-start lg:self-auto"
          >
            {filterOptions.map((option) => {
              const isSelected = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(option.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gradient-brand text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl glass border border-border p-12 text-center">
            <p className="text-muted-foreground text-sm font-mono">
              No hay proyectos en esta categoría.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="group rounded-2xl glass border border-border hover:border-primary/45 transition-all duration-300 flex flex-col overflow-hidden shadow-card"
                >
                  {/* Browser Frame Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-surface-elevated border-b border-border text-xs font-mono">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 text-muted-foreground hover:text-primary transition truncate"
                      >
                        https://{project.domainLabel}
                      </a>
                    </div>
                    <span className="text-[11px] text-primary font-semibold shrink-0">
                      {project.year}
                    </span>
                  </div>

                  {/* Visual Preview Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface border-b border-border/60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                    {/* Category & Impact Overlay Badges */}
                    <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-md border border-border text-foreground">
                        {project.categoryLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300">
                        <Sparkles className="w-3 h-3" />
                        {project.impactMetric}
                      </span>
                    </div>
                  </div>

                  {/* Case Study Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-xs font-mono text-primary">
                            {project.role}
                          </span>
                          <h3 className="text-xl font-bold text-foreground mt-0.5 group-hover:text-primary transition">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Architectural Deliverables */}
                      <div className="pt-2">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-foreground/80 mb-2">
                          {t.projects.keyDeliverablesLabel}
                        </div>
                        <ul className="space-y-1.5">
                          {project.highlights.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer: Stack Tags & Action Links */}
                    <div className="pt-4 border-t border-border/60 space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-3 pt-1">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl bg-gradient-brand text-primary-foreground hover:opacity-95 transition shadow-glow"
                        >
                          {t.projects.liveSiteLabel} ({project.domainLabel})
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${t.projects.sourceCodeLabel} — ${project.title}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2.5 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 hover:text-primary transition"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>{t.projects.sourceCodeLabel}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Layers, Server } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const iconMap: Record<string, typeof Globe> = {
  frontend: Globe,
  backend: Server,
  infra: Cpu,
  practices: Layers,
};

export function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative border-b border-border/60"
    >
      <div
        aria-hidden
        className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]"
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <Code2 className="w-4 h-4" />
            <span>
              {t.skills.sectionNumber} — {t.skills.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t.skills.title}{" "}
            <span className="text-gradient">{t.skills.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.skills.groups.map((group, idx) => {
            const IconComponent = iconMap[group.id] || Code2;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="glass rounded-2xl p-6 sm:p-7 border border-border hover:border-primary/40 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="grid place-items-center w-11 h-11 rounded-xl bg-surface-elevated border border-border shrink-0 text-primary">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {group.category}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-surface-elevated/85 border border-border/80 hover:border-primary/40 transition"
                      >
                        <span className="text-xs sm:text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

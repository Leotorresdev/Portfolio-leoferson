"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Server, Wrench, Cpu } from "lucide-react";

const groups = [
  {
    icon: Globe,
    title: "Frontend profesional",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
  },
  {
    icon: Server,
    title: "Full stack fundamentals",
    skills: ["Node.js", "Express", "Supabase", "Prisma", "REST APIs"],
  },
  {
    icon: Wrench,
    title: "Colaboracion agil",
    skills: ["Scrum", "GitHub", "Code Review", "Sprints"],
  },
  {
    icon: Code2,
    title: "Diseno a codigo",
    skills: ["Figma", "UI Systems", "UX Basics"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary text-sm font-mono mb-4">
            <Cpu className="w-4 h-4" /> 03 — Stack Tecnologico
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            Mi <span className="text-gradient">caja de herramientas</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Tecnologias y practicas que uso para construir interfaces limpias y mantenibles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-surface-elevated group-hover:bg-gradient-brand transition">
                  <g.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition" />
                </div>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="text-sm px-3 py-1.5 rounded-lg bg-surface-elevated border border-border text-muted-foreground hover:text-primary hover:border-primary/50 cursor-default transition"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

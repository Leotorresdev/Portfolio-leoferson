"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Flightepic",
    description:
      "Frontend en Next.js para una plataforma de viajes real, con foco en velocidad, reduciendo los tiempos de carga en un 35% para mejorar la experiencia y conversión de reservas.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    repo: "https://github.com/Leotorresdev",
    demo: "https://flightepic.com/",
    accent: "from-cyan-500/20 to-blue-500/20",
    image: "/flightepic.png",
  },
  {
    title: "Tripcapy",
    description:
      "Experiencia web multilingue para exploracion turistica, pensada para descubrimiento rapido y contenido organizado.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    repo: "https://github.com/Leotorresdev",
    demo: "https://tripcapy.com/es",
    accent: "from-violet-500/20 to-fuchsia-500/20",
    image: "/tricapy.png",
  },
  {
    title: "RelojesVZLA",
    description:
      "E-commerce optimizado para conversión. Implementación de pasarela de pago segura y reducción de tiempos de carga para soportar alto tráfico y aumentar ventas.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    repo: "https://github.com/Leotorresdev",
    demo: "http://relojesvzla.com/",
    accent: "from-amber-500/20 to-orange-500/20",
    image: "/proyecto1.png",
  },
  {
    title: "Innova Company",
    description:
      "E-commerce de productos innovadores. Flujo de pagos integrado en la web con notificaciones automáticas de pedidos y envíos a través de un bot de Telegram.",
    tags: ["Next.js", "TypeScript", "Node.js", "Supabase"],
    repo: "https://github.com/Leotorresdev/innova-store",
    demo: "https://innovacompanyven.com/",
    accent: "from-emerald-500/20 to-teal-500/20",
    image: "/innova.png",
  },
  {
    title: "Relojes Sixten",
    description:
      "E-commerce premium escalable. Integración de UX/UI avanzada para maximizar retención y rendimiento técnico enfocado en SEO, velocidad y estrategias de monetización.",
    tags: ["React", "Tailwind CSS", "UI", "E-commerce"],
    repo: "https://github.com/Leotorresdev/Sixten",
    demo: "https://sixtenvenezuela.com/",
    accent: "from-amber-500/20 to-orange-500/20",
    image: "/proyecto2.png",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 text-primary text-sm font-mono mb-4">
            <FolderGit2 className="w-4 h-4" /> 02 — Proyectos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            Cosas que <span className="text-gradient">he construido</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Proyectos reales para productos de travel, e-commerce y SaaS.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden glass flex flex-col hover:border-primary/40 transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60 z-10 mix-blend-overlay`}
                />
                <Image
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-20" />
                <div className="absolute top-4 right-4 z-30 flex gap-2">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg glass hover:text-primary transition"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {p.demo !== "#" && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg glass hover:text-primary transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="relative p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-elevated text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

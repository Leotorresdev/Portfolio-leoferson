"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ArrowRight, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Tricapy",
    role: "Desarrollador Full Stack",
    period: "2026 - Presente",
    location: "Remoto",
    type: "Tiempo completo",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "bg-emerald-500",
    description:
      "Desarrollo de aplicaciones web SaaS para gestión empresarial. Implementación de APIs RESTful, paneles de administración y sistemas de automatización.",
    highlights: [
      "Arquitectura de microservicios escalables",
      "Integración con pasarelas de pago",
      "Optimización de rendimiento +40%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    company: "FlightEpic",
    role: "Ingeniero de Software",
    period: "2025",
    location: "Remoto",
    type: "Colaborador",
    color: "from-cyan-500/20 to-blue-500/20",
    accent: "bg-cyan-500",
    description:
      "Desarrollo de soluciones tecnológicas para la industria de aviación. Sistemas de booking, gestión de pasajeros y herramientas de análisis de datos.",
    highlights: [
      "Sistema de reservas manejando +10k búsquedas mensuales",
      "API de integración reduciendo tiempos de respuesta en 30%",
      "Dashboard de analytics aumentando retención de usuarios",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 text-primary text-sm font-mono mb-4">
            <Briefcase className="w-4 h-4" /> 01 — Experiencia
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            Empresas donde he <span className="text-gradient">trabajado</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Mi trayectoria profesional en desarrollo de software y soluciones tecnológicas.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden glass border border-transparent hover:border-primary/30 transition-all duration-300"
            >
              {/* Accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Company Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl ${exp.color} flex items-center justify-center border border-white/10`}
                      >
                        <Building2 className="w-7 h-7 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-gradient transition">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exp.type}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-elevated text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role & Highlights */}
                  <div className="lg:w-72 lg:border-l lg:border-white/10 lg:pl-8">
                    <h4 className="text-lg font-semibold mb-4 group-hover:text-gradient transition">
                      {exp.role}
                    </h4>

                    <div className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full ${exp.accent} mt-1.5 shrink-0`} />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-xl glass hover:border-primary/50 transition"
          >
            Ver proyectos de estas empresas
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

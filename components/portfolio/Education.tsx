"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Brain,
  BookOpen,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Ingeniería en Computación",
    institution: "Universidad Valle del Momboy",
    period: "2020 - 2025",
    status: "Completado",
    statusColor: "text-emerald-400",
    description:
      "Formación integral en ciencias de la computación, incluyendo desarrollo de software, sistemas distribuidos, bases de datos y arquitectura de computadoras.",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "bg-blue-500",
    featured: false,
  },
];

const courses = [
  {
    icon: BookOpen,
    title: "Formación como Desarrollador",
    institution: "Universidad Valle del Momboy + cursos externos",
    period: "2020 - 2025",
    status: "Completado",
    statusColor: "text-emerald-400",
    description:
      "Durante mi etapa universitaria reforcé mi formación como programador con cursos externos en React, Next.js, Node.js y bases de datos, aplicando esos conocimientos en proyectos reales de e-commerce y SaaS.",
    skills: ["React", "Next.js", "Node.js", "PostgreSQL"],
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "bg-emerald-500",
    featured: true,
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial & Machine Learning",
    institution: "Universidad Valle del Momboy",
    period: "2024",
    status: "Completado",
    statusColor: "text-amber-400",
    description:
      "Curso especializado en inteligencia artificial, cubriendo desde fundamentos de machine learning hasta técnicas avanzadas en NLP, visión por computadora y modelos de lenguaje como GPT.",
    color: "from-violet-500/20 to-purple-500/20",
    accent: "bg-violet-500",
    featured: false,
  },
];

export function Education() {
  const featuredCourse = courses.find((c) => c.featured);
  const otherCourses = courses.filter((c) => !c.featured);

  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 text-primary text-sm font-mono mb-4">
            <GraduationCap className="w-4 h-4" /> 03 — Educación
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            Formación <span className="text-gradient">profesional</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Mi formación académica y el desarrollo como programador durante la universidad,
            complementada con cursos externos.
          </p>
        </motion.div>

        {/* Featured Course (AI) */}
        {featuredCourse && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden mb-12 max-w-4xl mx-auto"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-950/90 via-background to-purple-950/90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(88,86,214,0.2),transparent_50%)]" />

            <div className="relative p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 mb-6">
                    <Sparkles className="w-4 h-4 text-violet-400" />
                    <span className="text-xs font-bold text-violet-300">CURSO DESTACADO</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                      <featuredCourse.icon className="w-7 h-7 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">
                        {featuredCourse.title}
                      </h3>
                      <p className="text-violet-300">{featuredCourse.institution}</p>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-slate-300 mb-6">
                    {featuredCourse.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="lg:w-64 lg:border-l lg:border-violet-500/20 lg:pl-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock className="w-4 h-4 text-violet-400" />
                      <span className="text-sm">{featuredCourse.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span className={`text-sm font-bold ${featuredCourse.statusColor}`}>
                        {featuredCourse.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Education + Other Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto justify-center">
          {/* Education Card */}
          {education.map((edu, index) => (
            <motion.article
              key={edu.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl overflow-hidden glass border border-transparent hover:border-primary/30 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-50`} />
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-xl bg-surface-elevated flex items-center justify-center mb-4">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-gradient transition">
                  {edu.title}
                </h3>
                <p className="text-sm font-medium text-primary mt-1">{edu.institution}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4 mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {edu.period}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 font-semibold ${edu.statusColor}`}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {edu.status}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
              </div>
            </motion.article>
          ))}

          {/* Other Courses */}
          {otherCourses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl overflow-hidden glass border border-transparent hover:border-white/10 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-30`} />
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${course.color} flex items-center justify-center border border-white/10`}
                  >
                    <course.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-gradient transition">
                      {course.title}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">
                      {course.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {course.period}
                  </span>
                  <span className={`font-semibold ${course.statusColor}`}>{course.status}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-primary text-sm font-mono mb-4">
            <Mail className="w-4 h-4" /> 04 — Contacto
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            Escríbeme por <span className="text-gradient">WhatsApp</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Si quieres enviarme un mensaje para hablar de un proyecto, vacante o colaboración, haz clic en el botón de abajo. ¡Te responderé lo antes posible!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto flex flex-col items-center gap-8"
        >
          <a
            href="https://wa.me/584247807851"
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-brand text-primary-foreground font-semibold shadow-glow hover:scale-105 active:scale-95 transition-all text-lg"
          >
            Contactar por WhatsApp <MessageCircle className="w-5 h-5" />
          </a>

          <div className="flex items-center justify-center gap-4 w-full">
            {[
              { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/Leoferson-torres-" },
              { Icon: Github, label: "GitHub", href: "https://github.com/Leotorresdev" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:text-primary hover:border-primary/40 transition text-sm text-muted-foreground"
              >
                <Icon className="w-4 h-4" /> {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="mt-10 border-t border-border pt-4 pb-0">
        <div className="container mx-auto px-2 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p className="leading-tight text-xs">
            © {new Date().getFullYear()} Leoferson Torres. Desarrollo web profesional con foco en
            experiencia de usuario, rendimiento y escalabilidad.
          </p>
          <div className="flex flex-row items-center gap-2 text-primary">
            <span className="font-medium text-xs">
              React · Next.js · Tailwind CSS · Framer Motion
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}

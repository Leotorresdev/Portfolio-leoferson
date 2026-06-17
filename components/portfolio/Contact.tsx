"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

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
            ¿Construimos algo <span className="text-gradient">juntos</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tengo experiencia en proyectos reales de travel y e-commerce. Si tienes un proyecto, una
            vacante o quieres colaborar, escribeme.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-3"
          >
            {[
              {
                Icon: Linkedin,
                label: "LinkedIn",
                value: "/in/Leoferson-torres-",
                href: "https://linkedin.com/in/Leoferson-torres-",
              },
              {
                Icon: Github,
                label: "GitHub",
                value: "@Leotorresdev",
                href: "https://github.com/Leotorresdev",
              },
              { Icon: MapPin, label: "Ubicacion", value: "Venezuela", href: "#" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 hover:translate-x-1 transition"
              >
                <div className="grid place-items-center w-10 h-10 rounded-lg bg-gradient-brand shadow-glow">
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-sm font-medium">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
              const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
              const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value || "";
              const message =
                (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
              const text = `Hola Leoferson, soy ${name}.\nEmail: ${email}.\nAsunto: ${subject}.\nMensaje: ${message}`;
              window.location.href = `https://wa.me/584247807851?text=${encodeURIComponent(text)}`;
            }}
            className="lg:col-span-3 glass rounded-2xl p-7 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">
                  NOMBRE
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">
                  EMAIL
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-1.5 block">ASUNTO</label>
              <input
                name="subject"
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                placeholder="Sobre qué quieres hablar"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-1.5 block">
                MENSAJE
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                placeholder="Cuéntame más..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-primary-foreground font-medium shadow-glow"
            >
              Enviar mensaje <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
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

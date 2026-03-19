'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const navigationLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Mi', href: '/about' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Habilidades', href: '/skills' },
  { name: 'Contacto', href: '/contact' },
];

const stack = ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'PHP/Laravel'];

const socials = [
  { name: 'GitHub', href: 'https://github.com/Leotorresdev', icon: <Github size={18} /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/Leoferson-torres-', icon: <Linkedin size={18} /> },
];

const linkBase =
  'text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 rounded-md';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-100 mt-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 rounded-md">
              <h3 className="text-xl font-semibold tracking-tight">Leoferson Torres</h3>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Full Stack Developer con enfoque en interfaces de alto impacto, colaboracion efectiva y soluciones de negocio escalables.
            </p>
            <div className="mt-4 inline-flex items-center rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 px-3 py-1 text-xs">
              Disponible para nuevas oportunidades
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Navegacion</h4>
            <ul className="mt-3 space-y-2">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={`${linkBase} text-slate-300 hover:text-white`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Stack Principal</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="px-2.5 py-1 rounded-md text-xs bg-slate-800 text-slate-200 border border-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Contacto</h4>
            <p className="mt-3 text-sm text-slate-300">Conversemos sobre tu proyecto o una posicion en tu equipo.</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            >
              <Mail size={16} />
              Enviar mensaje
            </Link>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-md bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {currentYear} Leoferson Torres. Todos los derechos reservados.</p>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 rounded-md"
          >
            Desarrollado con Next.js <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}

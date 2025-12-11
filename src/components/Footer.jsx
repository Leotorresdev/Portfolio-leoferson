'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Leotorresdev',
    icon: <Github size={20} />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/Leoferson-torres-',
    icon: <Linkedin size={20} />
  },
];

const navigationLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Mí', href: '/about' },
  { name: 'Proyectos', href: '/proyects' },
  { name: 'Contacto', href: '/contact' }
];

const FooterLink = ({ href, children, external }) => {
  const baseClasses = "text-gray-500 hover:text-gray-800 transition-colors duration-300";
  
  if (external) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  );
};

const SocialButton = ({ href, icon, name }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.95 }}
    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors duration-300"
    aria-label={name}
  >
    {icon}
  </motion.a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Grid Superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: Logo y Descripción */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leoferson Torres
              </h3>
            </Link>
            <p className="text-gray-500 text-sm">
              Desarrollador Backend apasionado por crear experiencias digitales excepcionales y soluciones innovadoras.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Tecnologías */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Tecnologías</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#" external>React.js</FooterLink></li>
              <li><FooterLink href="#" external>Next.js</FooterLink></li>
              <li><FooterLink href="#" external>Node.js</FooterLink></li>
              <li><FooterLink href="#" external>Tailwind CSS</FooterLink></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contacto</h4>
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.name}
                  href={social.url}
                  icon={social.icon}
                  name={social.name}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              ¿Tienes un proyecto en mente?{' '}
              <FooterLink href="/contact" className="text-blue-600 hover:text-blue-700">
                Hablemos
              </FooterLink>
            </p>
          </div>
        </div>

        {/* Línea Divisoria con Gradiente */}
        <div className="h-px bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 mb-8" />

        {/* Footer Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <span>Hecho con</span>
            <Heart size={16} className="text-red-500 inline" />
            <span>por Leoferson Torres © {currentYear}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <FooterLink href="/privacy" external>
              Privacidad
            </FooterLink>
            <FooterLink href="/terms" external>
              Términos
            </FooterLink>
            <FooterLink href="https://nextjs.org" external>
              <span className="flex items-center">
                Powered by Next.js
                <ExternalLink size={14} className="ml-1" />
              </span>
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

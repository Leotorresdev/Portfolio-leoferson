'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Leotorresdev',
    icon: <Github size={16} />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/Leoferson-torres-',
    icon: <Linkedin size={16} />
  },
];

const navigationLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Mí', href: '/about' },
  { name: 'Proyectos', href: '/proyects' },
  { name: 'Contacto', href: '/contact' }
];

const FooterLink = ({ href, children, external, className = '' }) => {
  const baseClasses = "text-gray-500 hover:text-gray-800 transition-colors duration-200 text-xs " + className;
  
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
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors duration-200"
    aria-label={name}
  >
    {icon}
  </motion.a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Reduce vertical padding para que el área blanca sea más pequeña */}
      <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div className="space-y-1">
            <Link href="/" className="inline-block">
              <h3 className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leoferson Torres
              </h3>
            </Link>
            <p className="text-gray-500 text-xs">
              Desarrollador Backend — soluciones eficientes.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-1 text-xs">Enlaces</h4>
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-1 text-xs">Contacto</h4>
            <div className="flex space-x-2 mb-1">
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.name}
                  href={social.url}
                  icon={social.icon}
                  name={social.name}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500">
              <FooterLink href="/contact" className="text-blue-600">Hablemos</FooterLink>
            </p>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 mb-2" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex items-center space-x-1 mb-1 md:mb-0">
            <span>Hecho con</span>
            <Heart size={12} className="text-red-500 inline" />
            <span>por Leoferson Torres © {currentYear}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <FooterLink href="/privacy" external>Privacidad</FooterLink>
            <FooterLink href="/terms" external>Términos</FooterLink>
            <FooterLink href="https://nextjs.org" external>
              <span className="flex items-center">
                Next.js
                <ExternalLink size={12} className="ml-1" />
              </span>
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

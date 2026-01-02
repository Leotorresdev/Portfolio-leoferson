'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github } from 'lucide-react';

const projectTags = {
  react: { name: 'React', color: 'from-blue-400 to-blue-600' },
  next: { name: 'Next.js', color: 'from-black to-gray-800' },
  tailwind: { name: 'Tailwind', color: 'from-cyan-400 to-cyan-600' },
  node: { name: 'Node.js', color: 'from-green-400 to-green-600' },
  typescript: { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
  postgresql: { name: 'PostgreSQL', color: 'from-green-500 to-green-700' },
  express: { name: 'Express', color: 'from-yellow-500 to-yellow-600' },
  framer: { name: 'Framer Motion', color: 'from-pink-400 to-pink-600' },
  prisma: { name: 'Prisma', color: 'from-amber-400 to-amber-600' },
  docker: { name: 'Docker', color: 'from-sky-400 to-sky-600' },
};

export const proyectosEjemplo = [
  {
    title: "Sistema de Gestión hotelero",
    description: "Aplicación web muy completa para la gestión de reservas, publicidad y servicios hoteleros.",
    images: ["/hotel.png", "/hotel1.png", "/hotel2.png", "/hotel-3.png", "/hotel-4.png", "/hotel-5.png"],
    githubLink: "https://github.com/Leotorresdev/APP-HOTEL",
    tags: ['react', 'tailwind', 'postgresql']
  },
  {
    title: "SaaS de control de gastos e ingresos con IA",
    description: "Aplicación web para gestionar y controlar gastos e ingresos personales o empresariales de manera eficiente, con IA que da sugerencias sobre tu posición actual.",
    images: ["/finance-0.png", "/finance-1.png", "/finance-2.png", "/finance-3.png"],
    githubLink: "https://github.com/Leotorresdev/Finance",
    tags: ['react', 'framer', 'tailwind', 'node', 'express', 'postgresql', 'prisma']
  },
  {
    title: "AuthAPI Pro",
    description: "API de autenticación con Express, Prisma y JWT. Permite registro, inicio de sesión y gestión de usuarios con seguridad avanzada.",
    images: ["/Api0.png", "/Api1.png"],
    githubLink: "https://github.com/Leotorresdev/AuchAPI-Pro",
    tags: [ 'node', 'express', 'postgresql', 'prisma', 'Zod', 'JWT']
  }
];

export function ProjectCard({
  title,
  description,
  images = [],
  githubLink,
  tags = [] // ✅ Valor por defecto para evitar undefined
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images && images.length ? images[activeIndex] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-80 md:h-96 overflow-hidden bg-gray-100">
        {activeImage ? (
          <div className="relative w-full h-full">
            <Image
              src={activeImage}
              alt={`${title} imagen ${activeIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              priority={activeIndex === 0}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            Sin imagen
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 p-1.5 rounded-full hover:bg-white transition-colors"
            >
              <Github className="w-4 h-4 text-gray-800" />
            </motion.a>
          )}
        </div>

        {/* Thumbnails */}
        {images && images.length > 1 && (
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex gap-3 overflow-x-auto py-1 px-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex-shrink-0 w-14 h-14 overflow-hidden rounded-md border-2 ${i === activeIndex ? 'border-blue-500 scale-105' : 'border-transparent'} p-0.5 bg-white/90 transition-transform`}
                  aria-label={`Mostrar imagen ${i + 1}`}
                >
                  <Image src={img} alt={`${title} mini ${i + 1}`} width={56} height={56} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* icono de código eliminado según solicitud */}
      </div>

      <div className="p-6 pt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-700 text-base mb-4 line-clamp-3 min-h-[3.5rem]">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {(tags || []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${projectTags[tag]?.color}`}
            >
              {projectTags[tag]?.name}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
}

export function ProjectGrid() {
  return (
    <section className="min-h-screen pt-[120px] scroll-mt-[120px] bg-gradient-to-b from-white to-gray-50" id="projects">
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          Proyectos Destacados
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {proyectosEjemplo.map((proyecto, index) => (
            <ProjectCard key={index} {...proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
}




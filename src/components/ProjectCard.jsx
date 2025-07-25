'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink, Code } from 'lucide-react';
import Link from 'next/link';

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
    image: "/app-hotel.png",
    demoLink: "https://frontend-kohl-beta-85.vercel.app",
    githubLink: "https://github.com/Leotorresdev/APP-HOTEL",
    tags: ['react', 'tailwind', 'postgresql']
  },
  {
    title: "Landing Page de Publicidad",
    description: "Página de aterrizaje para promocionar servicios de publicidad digital.",
    image: "/publicidad.png",
    demoLink: "https://langind-page-two.vercel.app/",
    githubLink: "https://github.com/Leotorresdev/langind-page",
    tags: ['react', 'framer', 'tailwind']
  },
];

export function ProjectCard({
  title,
  description,
  image,
  demoLink,
  githubLink,
  tags = [] // ✅ Valor por defecto para evitar undefined
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
          />
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
          {demoLink && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 p-1.5 rounded-full hover:bg-white transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-gray-800" />
            </motion.a>
          )}
        </div>
        <div className="absolute -bottom-5 left-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2.5 rounded-xl shadow-lg">
            <Code className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div className="p-4 pt-7">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {(tags || []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 text-xs font-medium text-white rounded-full bg-gradient-to-r ${projectTags[tag]?.color}`}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {proyectosEjemplo.map((proyecto, index) => (
            <ProjectCard key={index} {...proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
}




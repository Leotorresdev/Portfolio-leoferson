'use client';

import { motion } from 'framer-motion';
import { ProjectGrid } from '@/components/ProjectCard';

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Header */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Mis Proyectos
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Una colección de proyectos que demuestran mi experiencia en desarrollo web, 
            aplicaciones móviles y soluciones empresariales.
          </p>
        </motion.div>
      </div>

      {/* Grid de Proyectos */}
      <ProjectGrid />

      {/* Sección de Contacto */}
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-gray-600 mb-6">
            Estoy disponible para colaborar en nuevos proyectos y ayudarte a hacer realidad tus ideas.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Contáctame
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
} 
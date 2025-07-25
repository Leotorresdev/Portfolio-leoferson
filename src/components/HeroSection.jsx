'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const tech = [
  { name: 'React', color: 'from-blue-400 to-blue-600', icon: '⚛️' },
  { name: 'Node.js', color: 'from-green-400 to-green-600', icon: '🚀' },
  { name: 'PostgreSQL', color: 'from-indigo-400 to-indigo-600', icon: '🐘' },
  { name: 'Tailwind', color: 'from-cyan-400 to-cyan-600', icon: '🎨' },
  { name: 'Framer Motion', color: 'from-pink-400 to-pink-600', icon: '✨' },
  { name: 'Next.js', color: 'from-yellow-400 to-yellow-600', icon: '🌟' },
];

const socialLinks = [
  { icon: <Github size={24} />, href: 'https://github.com/Leotorresdev', label: 'GitHub' },
  { icon: <Linkedin size={24} />, href: 'https://linkedin.com/in/Leoferson-torres-', label: 'LinkedIn' },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        {tech.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            animate={{
              x: ['0%', '100%'],
              y: [index * 100, (index + 1) * 100],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${index * 20}%`,
              top: `${index * 10}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-4xl w-full mx-auto px-4 pt-20 flex flex-col items-center gap-8"
      >
        {/* Logo con efectos mejorados */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5
          }}
          className="relative group mt-20"
        >
          {/* Anillos giratorios */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-md"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-md"
          />

          {/* Contenedor del logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-48 h-48 rounded-3xl overflow-hidden bg-white shadow-2xl"
          >
            {/* Gradiente de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
            
            {/* Logo con brillo */}
            <div className="relative w-full h-full p-6 flex items-center justify-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </motion.div>
            </div>

            {/* Efecto de brillo */}
            <motion.div
              animate={{
                opacity: [0, 1, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
            />
          </motion.div>
        </motion.div>

        {/* Texto principal con animaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mt-6"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            ¡Hola! Soy{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Desarrollador Full Stack
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Mi nombre es Leoferson Torres y me enfoco en crear experiencias digitales excepcionales,
            modernas y de alto rendimiento.
          </motion.p>
        </motion.div>

        {/* Tech stack con efectos mejorados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >
          {tech.map((item, index) => (
            <motion.span
              key={item.name}
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-medium 
                         shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <span>{item.icon}</span>
              {item.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full 
                       font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Ver Proyectos <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

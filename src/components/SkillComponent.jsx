'use client';

import { motion } from 'framer-motion';
import { Code, Server, Network, Brain, Star, } from 'lucide-react';

const getNivelMaestria = (level) => {
  if (level >= 90) return {  color: 'text-purple-600' };
  if (level >= 80) return { color: 'text-blue-600' };
  if (level >= 70) return { color: 'text-green-600' };
  return {color: 'text-orange-600' };
};

const skills = [
  {
    title: 'Frontend Development',
    icon: <Code size={28} />,
    level: 90,
    technologies: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Zustand', level: 75 },
      { name: 'Tailwind CSS', level: 95 }
    ],
    description:
      'Construcción de interfaces modernas, responsivas y animadas con enfoque en experiencia de usuario (UX) y accesibilidad.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend Development',
    icon: <Server size={28} />,
    level: 85,
    technologies: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Supabase', level: 75 },
      { name: 'Prisma', level: 85 }
    ],
    description:
      'Diseño de APIs RESTful, autenticación segura, controladores limpios y arquitectura escalable.',
    gradient: 'from-green-500 to-emerald-500'
  },
 
  {
    title: 'Redes & IoT',
    icon: <Network size={28} />,
    level: 70,
    technologies: [
      { name: 'Networking', level: 70 },
      { name: 'Arduino', level: 75 }
    ],
    description:
      'Configuración de redes LAN, direccionamiento IP, y automatización con sensores y microcontroladores.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Soft Skills',
    icon: <Brain size={28} />,
    level: 90,
    technologies: [
      { name: 'Trabajo en Equipo', level: 90 },
      { name: 'Comunicación', level: 85 },
      { name: 'Resolución de Problemas', level: 90 },
      { name: 'Adaptabilidad', level: 85 }
    ],
    description:
      'Habilidades blandas esenciales para el desarrollo profesional y trabajo en equipo efectivo.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Ingeniería de Contexto',
    icon: <Brain size={28} />,
    level: 75,
    technologies: [
      { name: 'Context Engineering', level: 75 },
      { name: 'Prompt Design', level: 70 }
    ],
    description:
      'Aplicación de técnicas avanzadas para optimizar el uso de IA, diseño de prompts y adaptación de modelos a necesidades específicas.',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    title: 'Ingeniería de Producto',
    icon: <Server size={28} />,
    level: 80,
    technologies: [
      { name: 'Product Management', level: 80 },
      { name: 'Product Design', level: 75 }
    ],
    description:
      'Gestión y diseño de productos digitales, desde la conceptualización hasta la entrega, con enfoque en valor y experiencia de usuario.',
    gradient: 'from-red-500 to-yellow-500'
  },
];

const SkillBar = ({ name, level }) => {
  const { texto, color } = getNivelMaestria(level);
  const starsCount = Math.floor(level / 20); // Convertir nivel a estrellas (máximo 5)

  return (
    <div className="mb-4 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className={`text-sm font-semibold ${color}`}>{texto}</span>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: index < starsCount ? 1 : 0.2,
              scale: 1
            }}
            transition={{ delay: index * 0.1 }}
            className={`h-1.5 flex-1 rounded-full ${
              index < starsCount ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function SkillComponent() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Habilidades y Tecnologías
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Acá te muestro mis habilidades y tecnologías que tengo, para que puedas ver como puedo ayudarte a crear tu proyecto,
           o aportar valor a tu empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-r ${skill.gradient}`}>
                <div className="flex items-center justify-between">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <div className="text-white">{skill.icon}</div>
                  </div>
                  <div className="bg-white/20 px-4 py-1.5 rounded-full">
                    <span className="text-white font-medium">
                      {getNivelMaestria(skill.level).texto}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{skill.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{skill.description}</p>

                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <SkillBar key={tech.name} name={tech.name} level={tech.level} />
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Nivel de Maestría</span>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className={getNivelMaestria(skill.level).color} />
                      <span className={`text-sm font-bold ${getNivelMaestria(skill.level).color}`}>
                        {getNivelMaestria(skill.level).texto}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

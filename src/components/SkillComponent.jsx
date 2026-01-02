'use client';

import { motion } from 'framer-motion';
import { Code, Server, Network, Brain } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Development',
    icon: <Code size={28} />,
    level: 90,
    technologies: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Framer Motion' },
      { name: 'Zustand' },
      { name: 'Tailwind CSS' }
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
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Supabase' },
      { name: 'Prisma' }
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
      { name: 'Networking' },
      { name: 'Arduino' }
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
      { name: 'Trabajo en Equipo' },
      { name: 'Comunicación' },
      { name: 'Resolución de Problemas' },
      { name: 'Adaptabilidad' }
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
      { name: 'Context Engineering' },
      { name: 'Prompt Design' }
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
      { name: 'Product Management' },
      { name: 'Product Design' }
    ],
    description:
      'Gestión y diseño de productos digitales, desde la conceptualización hasta la entrega, con enfoque en valor y experiencia de usuario.',
    gradient: 'from-red-500 to-yellow-500'
  },
];

const TechChips = ({ technologies, accent }) => {
  const base = accent ? `bg-gradient-to-r ${accent} text-white` : 'bg-white/10 text-gray-800';

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((t, i) => (
        <motion.span
          key={t.name}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: i * 0.03 }}
          style={{ opacity: 0.95 - i * 0.03 }}
          className={`${base} text-xs font-medium px-3 py-1 rounded-full shadow-sm backdrop-blur-sm transform transition hover:scale-105`}
        >
          {t.name}
        </motion.span>
      ))}
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
                  <div className="flex items-center">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <div className="text-white">{skill.icon}</div>
                    </div>
                  </div>
                </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{skill.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{skill.description}</p>

                <div className="space-y-3">
                  {skill.technologies && <TechChips technologies={skill.technologies} accent={skill.gradient} />}
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

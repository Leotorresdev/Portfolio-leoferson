'use client';

import { motion } from 'framer-motion';
import { Code, Server, Network, Brain, Workflow } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Development',
    icon: <Code size={28} />,
    technologies: [{ name: 'React' }, { name: 'Next.js' }, { name: 'Tailwind CSS' }, { name: 'Framer Motion' }, { name: 'JavaScript' }],
    description:
      'Construccion de interfaces modernas, responsivas y orientadas a conversion, con buenas practicas de accesibilidad y rendimiento.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend Fundamentals',
    icon: <Server size={28} />,
    technologies: [{ name: 'Node.js' }, { name: 'Express' }, { name: 'Supabase' }, { name: 'Prisma' }, { name: 'REST APIs' }],
    description:
      'Base backend para integracion de APIs, manejo de datos y colaboracion eficiente con equipos full stack.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'PHP y Laravel (En aprendizaje)',
    icon: <Server size={28} />,
    technologies: [{ name: 'PHP' }, { name: 'Laravel' }, { name: 'MVC' }, { name: 'Routing' }],
    description:
      'Formacion activa en Laravel para fortalecer arquitectura backend, buenas practicas y desarrollo full stack.',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    title: 'Scrum y Colaboracion',
    icon: <Workflow size={28} />,
    technologies: [{ name: 'Scrum' }, { name: 'Jira/Fira' }, { name: 'GitHub' }, { name: 'Code Review' }],
    description:
      'Trabajo por sprints, seguimiento de tareas, PRs y comunicacion continua para entregas ordenadas y de calidad.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Diseno y Handoff',
    icon: <Brain size={28} />,
    technologies: [{ name: 'Figma' }, { name: 'UI Consistency' }, { name: 'UX Basics' }],
    description:
      'Traduccion de disenos a componentes reutilizables, manteniendo consistencia visual y experiencia de usuario.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Base de Redes',
    icon: <Network size={28} />,
    technologies: [{ name: 'Networking' }, { name: 'LAN' }, { name: 'IP Basics' }],
    description:
      'Conocimientos complementarios para entender infraestructura y mejorar toma de decisiones tecnicas.',
    gradient: 'from-yellow-500 to-orange-500',
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
            Habilidades y Tecnologias
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Stack y herramientas que uso para crear productos digitales profesionales, con enfoque full stack, colaboracion y entrega continua.
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
                <p className="text-gray-700 text-sm mb-6">{skill.description}</p>

                <div className="space-y-3">{skill.technologies && <TechChips technologies={skill.technologies} accent={skill.gradient} />}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

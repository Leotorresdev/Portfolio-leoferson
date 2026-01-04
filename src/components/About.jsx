'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Network, Cpu, Code, Briefcase, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const educationDetails = {
  university: 'Universidad Valle del Momboy',
  career: 'Ingeniería en Computación',
  duration: '2019 - 2026',
  status: 'Practicas profesionales',
  startYear: '2019',
  endYear: '2026',
};

const specialties = [
  {
    title: 'Desarrollo Web y Software',
    icon: <Code className="w-6 h-6" />,
    description: 'Especializado en desarrollo web full stack y arquitectura de software.'
  },
  {
    title: 'Redes',
    icon: <Network className="w-6 h-6" />,
    description: 'Conocimientos básicos en configuración y administración de redes.'
  },
  {
    title: 'Robótica',
    icon: <Cpu className="w-6 h-6" />,
    description: 'Experiencia básica en programación y control de sistemas robóticos.'
  }
];

const timeline = [
  {
    title: 'Mis primeros pasos',
    period: '2018 - comienzos',
    description: 'comence a estudiar ingenieria en el 2018 pero por motivos de pandemia no pude continuar con mis estudios hasta el 2022 que pude retornar'
  },
  {
    title: 'Estudiante de Ingeniería en Computación',
    period: '2025 - Presente',
    description: '6 años de formación académica en la Universidad Valle del Momboy.'
  }
];

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  return (
    <section id="about" className="min-h-screen px-4 md:scroll-mt-[120px] bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto mt-20 pt-20">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto"
    >
      {/* Encabezado */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative inline-block mb-5">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur transition duration-500" />
          <button
            onClick={() => { setIsOpen(true); setIsImgLoaded(false); }}
            aria-label="Ver foto en grande"
            className="relative rounded-full overflow-hidden w-40 h-40 border-4 border-white shadow-2xl focus:outline-none"
          >
            <Image
              src="/leo.png"
              alt="leo"
              width={160}
              height={160}
              className="w-full h-full object-cover transition duration-300"
              priority
            />
          </button>

          {isOpen && (
            <div
              className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/80"
              onClick={() => { setIsOpen(false); setIsImgLoaded(false); }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="relative mx-2"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => { setIsOpen(false); setIsImgLoaded(false); }}
                  className="absolute top-2 right-2 z-50 text-white bg-black/40 p-2 rounded-full"
                  aria-label="Cerrar imagen"
                >
                  ✕
                </button>

                {/* Spinner visible mientras carga la imagen */}
                {!isImgLoaded && (
                  <div className="flex items-center justify-center w-full">
                    <div className="h-10 w-10 border-4 border-white border-t-blue-500 rounded-full animate-spin" />
                  </div>
                )}

                <div className={`flex items-center justify-center ${isImgLoaded ? '' : 'opacity-0'}`}>
                  <img
                    src="/leo.png"
                    alt="leo grande"
                    onLoad={() => setIsImgLoaded(true)}
                    className="max-w-[90vw] max-h-[75vh] object-contain rounded-md"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </div>

        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Sobre mí
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Soy un apasionado de la tecnología, actualmente finalizando mi formación como Ingeniero en Computación,
          con un enfoque especial en el desarrollo web, de software y sistemas computacionales.
        </p>
      </motion.div>

          {/* Contenedor principal de las secciones */}
          <div className="space-y-20">
            {/* Educación */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">Formación Académica</h3>
              </div>
              <div className="pl-11">
                <h4 className="text-xl font-semibold text-gray-800">{educationDetails.university}</h4>
                  <p className="text-blue-600 font-medium">{educationDetails.career}</p>
                  <p className="text-gray-600">{educationDetails.duration}</p>
                  <p className="text-green-600 font-medium mt-2">{educationDetails.status}</p>
              </div>
            </motion.div>

            {/* Certificado: ubicado tras la sección de Formación Académica */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <div className="w-full md:w-1/3 flex items-center justify-center">
                <Image src="/certificado .png" alt="Certificado IA" width={360} height={240} className="rounded-md object-contain shadow-md" />
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-xl font-semibold text-gray-800">Certificado en Inteligencia Artificial</h4>
                <p className="text-gray-600 mt-2">Recibido en el año <span className="text-blue-600 font-medium">2025</span>. Certificación que reconoce formación en fundamentos y aplicaciones prácticas de IA.</p>
              </div>
            </motion.div>

            {/* Especialidades */}
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Línea de tiempo */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">Mi Trayectoria</h3>
              </div>
              <div className="space-y-8">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-8 border-l-2 border-blue-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600" />
                    <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                    <span className="text-blue-600 font-medium">{item.period}</span>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Botón CV */}
            <motion.div
              className="flex justify-center pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link href="/CV-leoferson Torres.pdf" target="_blank" download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full 
                           font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Download className="w-5 h-5" />
                  Descargar CV
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );  
}

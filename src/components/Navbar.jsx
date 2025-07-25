'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Briefcase, User, Home, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Inicio', icon: <Home size={20} /> },
    { href: '/about', label: 'Sobre mí', icon: <User size={20} /> },
    { href: '/projects', label: 'Proyectos', icon: <Briefcase size={20} /> },
    { href: '/skills', label: 'Habilidades', icon: <Code size={20} /> },
    { href: '/contact', label: 'Contacto', icon: <Mail size={20} /> },
  ];

  const navbarVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  const linkVariants = {
    hover: { scale: 1.1, y: -2 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/logo.png"
                  alt="LeoTorresDev Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LeoTorresDev
              </span>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(link => (
              <motion.div
                key={link.href}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href={link.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 ${
                    pathname === link.href
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'hover:bg-gray-100 text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-700"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {links.map(link => (
                  <motion.div
                    key={link.href}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
                        pathname === link.href
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

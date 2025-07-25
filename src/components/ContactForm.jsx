'use client';

import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquareText } from 'lucide-react';
import { TextField, Button, Card, Typography } from '@mui/material';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ nombre: '', email: '', mensaje: '' });
      } else {
        const data = await res.json();
        setError(data.error || 'Error al enviar el mensaje');
      }
    } catch (err) {
      setError('Error de red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Contáctame
        </h2>
        <Typography variant="subtitle1" color="textSecondary">
          ¿Tienes un proyecto en mente o quieres trabajar conmigo? ¡Hablemos!
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-xl mx-auto"
      >
        <Card className="p-6 shadow-xl rounded-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <User className="text-blue-600" size={20} />
              <TextField
                fullWidth
                label="Nombre"
                variant="outlined"
                required
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-blue-600" size={20} />
              <TextField
                fullWidth
                label="Correo Electrónico"
                variant="outlined"
                type="email"
                required
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <MessageSquareText className="text-blue-600" size={20} />
              <TextField
                fullWidth
                label="Mensaje"
                variant="outlined"
                multiline
                rows={4}
                required
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
              />
            </div>
            {success && (
              <Typography color="primary">¡Mensaje enviado correctamente!</Typography>
            )}
            {error && (
              <Typography color="error">{error}</Typography>
            )}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center"
            >
              <Button
                variant="contained"
                endIcon={<Send />}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-full shadow-md"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </motion.div>
          </form>
        </Card>
      </motion.div>
    </section>
  );
}

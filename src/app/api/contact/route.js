import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { nombre, email, mensaje } = await req.json();
    if (!nombre || !email || !mensaje) {
      return new Response(JSON.stringify({ error: 'Todos los campos son obligatorios.' }), { status: 400 });
    }

    // Configura el transporte de Nodemailer (ejemplo con Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'leodevtorres@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // Usa una contraseña de aplicación
      },
    });

    const mailOptions = {
      from: 'leodevtorres@gmail.com',
      to: 'leodevtorres@gmail.com',
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error al enviar el mensaje.' }), { status: 500 });
  }
} 
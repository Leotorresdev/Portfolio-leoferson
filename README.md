# Portafolio  Desarrollador FullStack

Bienvenido a mi portafolio personal. Esta aplicación presenta proyectos, habilidades y un formulario de contacto construido con Next.js y Tailwind CSS.

**Live demo:** (agrega aquí la URL si la despliegas)

**Tecnologías principales:**

- Next.js (app router)
- React
- Tailwind CSS
- Node.js

**Características principales:**

- Página de inicio con sección hero y navegación.
- Sección "Sobre mí" con descripción profesional.
- Listado de proyectos con tarjetas y enlaces.
- Sección de habilidades con componentes reutilizables.
- Formulario de contacto que envía datos a una API interna.

**Instalación y ejecución (desarrollo)**

Requisitos: `Node.js` 16+ y `npm` o `yarn`.

1. Instala dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre `http://localhost:3000` en tu navegador.

**Estructura relevante del proyecto**

- **Archivos de la app:** [src/app](src/app)
- **Componentes reutilizables:** [src/components](src/components)
- Página principal: [src/app/page.jsx](src/app/page.jsx)
- API de contacto: [src/app/api/contact/route.js](src/app/api/contact/route.js)

Para ver componentes específicos: [src/components/About.jsx](src/components/About.jsx), [src/components/ContactForm.jsx](src/components/ContactForm.jsx), y [src/components/ProjectCard.jsx](src/components/ProjectCard.jsx).

**Despliegue**

Puedes desplegar este proyecto en plataformas como Vercel o Netlify. Asegúrate de configurar variables de entorno si añades un servicio de correo o backend externo para el formulario de contacto.

**Buenas prácticas y notas**

- Mantén actualizado `node` y dependencias.
- Optimiza imágenes en `public/` y usa `next/image` cuando sea posible.
- Revisa rutas duplicadas (`projects` vs `proyects`) y consolida nombres para SEO y mantenimiento.

**Contribuciones**

Si deseas contribuir, crea un fork, abre una rama con cambios claros y envía un pull request describiendo el objetivo.

**Contacto**

Puedes usar el formulario de contacto incluido o añadir tu email y redes sociales aquí.

---

Archivo actualizado: [README.md](README.md)

Si quieres, puedo:

- Ejecutar la app localmente y verificar el formulario de contacto.
- Añadir una sección de captura de pantalla o GIF al README.
- Corregir la duplicación de la carpeta `proyects`.

Indica cuál de estas acciones quieres que haga a continuación.

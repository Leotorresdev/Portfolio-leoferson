export type Locale = "es" | "en";

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  workMode: string;
  domainUrl?: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "ecommerce" | "saas-travel";
  categoryLabel: string;
  role: string;
  year: string;
  description: string;
  impactMetric: string;
  highlights: string[];
  tags: string[];
  repo?: string;
  demo: string;
  domainLabel: string;
  image: string;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  category: string;
  subtitle: string;
  skills: {
    name: string;
    level: string;
  }[];
}

export interface EducationItem {
  id: string;
  type: "degree" | "certification" | "specialization";
  badge: string;
  title: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  skills: string[];
  certificateUrl?: string;
}

export interface PortfolioDictionary {
  meta: {
    roleBadge: string;
    availability: string;
    timezone: string;
    location: string;
  };
  nav: {
    home: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    downloadCv: string;
    hireMe: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    headlinePrefix: string;
    headlineHighlight: string;
    headlineSuffix: string;
    valueProposition: string;
    primaryCta: string;
    secondaryCta: string;
    copyEmailLabel: string;
    emailCopiedLabel: string;
    metrics: {
      value: string;
      label: string;
      detail: string;
    }[];
    dossierCard: {
      headerTitle: string;
      statusTag: string;
      engineerRole: string;
      degreeLabel: string;
      timezoneLabel: string;
      timezoneValue: string;
      liveSystemsLabel: string;
      coreStackLabel: string;
    };
  };
  experience: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    achievementsTitle: string;
    stackTitle: string;
    items: ExperienceItem[];
  };
  projects: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    filters: {
      all: string;
      saasTravel: string;
      ecommerce: string;
    };
    liveSiteLabel: string;
    sourceCodeLabel: string;
    architectureLabel: string;
    keyDeliverablesLabel: string;
    items: ProjectItem[];
  };
  skills: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    groups: SkillGroup[];
  };
  education: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewCertificateLabel: string;
    languagesTitle: string;
    languages: {
      language: string;
      proficiency: string;
    }[];
    items: EducationItem[];
  };
  contact: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    emailCardTitle: string;
    emailCardDesc: string;
    copyButton: string;
    copiedButton: string;
    sendEmailButton: string;
    whatsappCardTitle: string;
    whatsappCardDesc: string;
    whatsappButton: string;
    downloadCvButton: string;
    footerRights: string;
    footerBuiltWith: string;
  };
}

export const contactDetails = {
  fullName: "Leoferson Torres",
  email: "leofersontp0912@gmail.com",
  phoneDisplay: "+58 424-7807851",
  whatsappUrl:
    "https://wa.me/584247807851?text=Hola%20Leoferson%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad%20laboral.",
  githubUrl: "https://github.com/Leotorresdev",
  linkedinUrl: "https://linkedin.com/in/Leoferson-torres-",
  cvPath: "/Leoferson.pdf",
  cvDownloadName: "Leoferson_Torres_FullStack_CV.pdf",
};

export const portfolioData: Record<Locale, PortfolioDictionary> = {
  es: {
    meta: {
      roleBadge: "Ingeniero en Computación · Full Stack Developer",
      availability: "Disponible para roles remotos internacionales (Full-Time / Contractor)",
      timezone: "UTC-4 (Alineado con EST/EDT, LATAM & solapamiento con España/UE)",
      location: "Venezuela · 100% Remoto",
    },
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Stack",
      education: "Educación",
      contact: "Contacto",
      downloadCv: "CV",
      hireMe: "Contactar",
      langLabel: "Cambiar idioma",
    },
    hero: {
      eyebrow: "INGENIERO EN COMPUTACIÓN · FULL-STACK ENGINEER",
      headlinePrefix: "Construyo aplicaciones web",
      headlineHighlight: "rápidas, escalables y orientadas a conversión",
      headlineSuffix: "para SaaS, Travel y E-Commerce.",
      valueProposition:
        "Soy Leoferson Torres. Desarrollo productos en producción de principio a fin con React, Next.js (App Router), TypeScript, Tailwind CSS y Node.js/Express. Enfocado en arquitectura limpia, rendimiento medible y entrega ágil para equipos remotos globales.",
      primaryCta: "Ver Proyectos en Producción",
      secondaryCta: "Descargar CV (PDF)",
      copyEmailLabel: "Copiar correo",
      emailCopiedLabel: "¡Correo copiado!",
      metrics: [
        {
          value: "6+",
          label: "Productos en Producción",
          detail: "Plataformas activas en SaaS, TravelTech y E-Commerce B2C/B2B.",
        },
        {
          value: "+40%",
          label: "Mejora en Rendimiento",
          detail: "Optimización de tiempos de carga (Core Web Vitals) y respuesta de APIs.",
        },
        {
          value: "UTC-4",
          label: "Zona Horaria compatible",
          detail: "Sincronización total con equipos en EE. UU. (EST), LATAM y Europa.",
        },
      ],
      dossierCard: {
        headerTitle: "EXPEDIENTE TÉCNICO // PERFIL",
        statusTag: "DISPONIBLE · REMOTO",
        engineerRole: "Full Stack Software Engineer",
        degreeLabel: "Ingeniero en Computación (UVM)",
        timezoneLabel: "Ubicación / Horario",
        timezoneValue: "Remoto · UTC-4 (EST)",
        liveSystemsLabel: "DOMINIOS ACTIVOS EN PRODUCCIÓN",
        coreStackLabel: "TECNOLOGÍAS PRINCIPALES",
      },
    },
    experience: {
      sectionNumber: "01",
      eyebrow: "TRAYECTORIA PROFESIONAL",
      title: "Experiencia en",
      titleHighlight: "entornos reales",
      subtitle:
        "Historial comprobable desarrollando plataformas SaaS, motores de reservas y ecosistemas de comercio electrónico con impacto directo en métricas de negocio.",
      achievementsTitle: "Impacto y entregables clave",
      stackTitle: "Tecnologías utilizadas",
      items: [
        {
          id: "tricapy",
          company: "Tricapy (TripCapy)",
          role: "Desarrollador Full Stack",
          period: "2026 — Presente",
          location: "Remoto",
          workMode: "Tiempo Completo",
          domainUrl: "https://tripcapy.com/es",
          summary:
            "Diseño y desarrollo de aplicaciones web SaaS y metabuscador multilingüe. Implementación de servicios backend con PHP (Laravel) y base de datos relacional MySQL, paneles de administración, arquitectura orientada a velocidad y automatización de flujos.",
          achievements: [
            "Desarrollo e integración de servicios backend con PHP / Laravel y modelado de base de datos relacional en MySQL.",
            "Optimización de consultas SQL y del rendimiento general de la plataforma en más de un 40%, reduciendo la latencia y mejorando la retención de usuarios.",
            "Integración segura de pasarelas de pago y automatización de procesos operativos y financieros.",
          ],
          technologies: [
            "PHP",
            "Laravel",
            "MySQL",
            "JavaScript (ES6+)",
            "REST APIs",
            "Tailwind CSS",
            "Git",
          ],
        },
        {
          id: "flightepic",
          company: "FlightEpic",
          role: "Ingeniero de Software",
          period: "2025",
          location: "Remoto",
          workMode: "Colaborador Técnico",
          domainUrl: "https://flightepic.com/",
          summary:
            "Desarrollo de soluciones tecnológicas de alta disponibilidad para la industria de aviación y viajes: motor de búsqueda y reservas de vuelos, integración con servicios backend en PHP y base de datos MySQL, gestión de pasajeros y analítica operativa.",
          achievements: [
            "Construcción del flujo de búsqueda y reservas capaz de procesar +10,000 búsquedas mensuales con tiempos de carga un 35% más rápidos.",
            "Desarrollo y consumo de servicios en PHP y APIs RESTful en tiempo real con MySQL, reduciendo tiempos de respuesta en un 30%.",
            "Implementación de dashboards de analítica avanzada para respaldar decisiones comerciales basadas en datos.",
          ],
          technologies: [
            "Next.js",
            "React",
            "PHP",
            "Laravel",
            "MySQL",
            "Tailwind CSS",
            "REST APIs",
          ],
        },
        {
          id: "ecommerce-engineer",
          company: "Soluciones E-Commerce & B2B (Consultoría Independiente)",
          role: "Desarrollador Full Stack E-Commerce",
          period: "2023 — 2025",
          location: "Remoto",
          workMode: "Proyectos Llave en Mano",
          domainUrl: "https://www.gabchips.com",
          summary:
            "Arquitectura y entrega integral de plataformas de comercio electrónico B2C y mayoristas B2B para marcas comerciales (GAB Chips, Innova Company, RelojesVZLA y Relojes Sixten).",
          achievements: [
            "Desarrollo de catálogos interactivos con lógica de precios diferenciados (detal vs. mayorista) y programas de fidelización.",
            "Automatización de notificaciones de pedidos y logística en tiempo real mediante bots de Telegram, WhatsApp y Supabase.",
            "Optimización técnica de SEO, Core Web Vitals y embudos de conversión (checkout) adaptados a múltiples métodos de pago (USDT, banca nacional y pasarelas digitales).",
          ],
          technologies: [
            "Next.js (App Router)",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Supabase",
            "Vercel",
          ],
        },
      ],
    },
    projects: {
      sectionNumber: "02",
      eyebrow: "CASOS DE ESTUDIO & PRODUCCIÓN",
      title: "Proyectos",
      titleHighlight: "desplegados en producción",
      subtitle:
        "Cada proyecto listado está activo en producción, resolviendo necesidades reales de ventas, reservas o descubrimiento con arquitectura moderna en Next.js.",
      filters: {
        all: "Todos los proyectos (6)",
        saasTravel: "SaaS & TravelTech (2)",
        ecommerce: "E-Commerce & B2B (4)",
      },
      liveSiteLabel: "Visitar sitio en vivo",
      sourceCodeLabel: "Repositorio",
      architectureLabel: "Stack Técnico",
      keyDeliverablesLabel: "Arquitectura y valor entregado",
      items: [
        {
          id: "gabchips",
          title: "GAB Chips — E-Commerce B2C/B2B & Fidelización",
          category: "ecommerce",
          categoryLabel: "E-Commerce B2C & Mayorista B2B",
          role: "Lead Full Stack Developer",
          year: "2025",
          description:
            "Plataforma digital comercial para marca de snacks artesanales con catálogo interactivo de sabores, motor de pedidos al detal y mayorista (+12 unidades) y dinámica de comunidad con ranking de compras.",
          impactMetric: "Flujo dual B2C/B2B + Multi-pago",
          highlights: [
            "Lógica de precios escalonados para venta al detal ($1.00) y lotes mayoristas (+12 unidades a $0.80) con cálculo automático.",
            "Experiencia mobile-first de alta velocidad en Next.js con integración de pedidos directos y soporte multi-pago (Binance USDT, Pago Móvil, BNC).",
            "Arquitectura orientada a retención con módulo de comunidad, acumulación de compras y despacho nacional.",
          ],
          tags: ["Next.js", "React", "Tailwind CSS", "JavaScript (ES6+)", "Vercel"],
          demo: "https://www.gabchips.com",
          domainLabel: "gabchips.com",
          image: "/gabchips.png",
          featured: true,
        },
        {
          id: "flightepic",
          title: "FlightEpic — Plataforma de Reservas Aéreas",
          category: "saas-travel",
          categoryLabel: "TravelTech & Booking Engine",
          role: "Software Engineer",
          year: "2025",
          description:
            "Plataforma de búsqueda y reserva de vuelos nacionales e internacionales con frontend en Next.js e integración backend en PHP / MySQL, optimizada para velocidad extrema, claridad en tarifas y alta conversión.",
          impactMetric: "-35% tiempo de carga · +10k búsquedas/mes",
          highlights: [
            "Reducción del 35% en tiempos de carga mediante renderizado optimizado en Next.js y gestión eficiente de estado.",
            "Interfaz intuitiva de búsqueda multi-tramo (ida y vuelta / solo ida), selector de pasajeros y filtrado dinámico de ofertas.",
            "Integración con servicios backend en PHP, base de datos MySQL y APIs del sector aeronáutico reduciendo la latencia de respuesta en un 30%.",
          ],
          tags: ["Next.js", "React", "PHP", "Laravel", "MySQL", "Tailwind CSS", "REST APIs"],
          repo: "https://github.com/Leotorresdev",
          demo: "https://flightepic.com/",
          domainLabel: "flightepic.com",
          image: "/flightepic.png",
          featured: true,
        },
        {
          id: "tripcapy",
          title: "TripCapy — Metabuscador Turístico Multilingüe",
          category: "saas-travel",
          categoryLabel: "SaaS & Travel Metasearch",
          role: "Full Stack Developer",
          year: "2026",
          description:
            "Ecosistema web multilingüe (ES/EN) para exploración y comparación de rutas de viaje, construido con backend en PHP (Laravel) y base de datos MySQL para descubrimiento rápido y captación de demanda.",
          impactMetric: "+40% rendimiento global · Arquitectura i18n",
          highlights: [
            "Arquitectura internacionalizada (ES/EN) con cambio instantáneo y estructura SEO para múltiples mercados.",
            "Interfaz de comparación clara con previsualización en tiempo real de rutas, fechas y modos de búsqueda.",
            "Optimización integral de rendimiento (+40%) respaldada por servicios backend en PHP y consultas optimizadas en MySQL.",
          ],
          tags: ["PHP", "Laravel", "MySQL", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs"],
          repo: "https://github.com/Leotorresdev",
          demo: "https://tripcapy.com/es",
          domainLabel: "tripcapy.com",
          image: "/tricapy.png",
          featured: true,
        },
        {
          id: "innova",
          title: "Innova Company — E-Commerce & Automatización con Bot",
          category: "ecommerce",
          categoryLabel: "E-Commerce & Automatización",
          role: "Full Stack Developer",
          year: "2024",
          description:
            "Tienda online de tecnología y equipos innovadores con pasarela de pagos integrada, gestión de preventas y automatización de órdenes en tiempo real vía Telegram Bot.",
          impactMetric: "Notificación de pedidos 100% automatizada",
          highlights: [
            "Integración backend con bot de Telegram para alertar instantáneamente al equipo logístico sobre nuevos pagos y envíos.",
            "Persistencia de datos e inventario con Supabase y validación segura en el servidor con Node.js.",
            "Diseño UI moderno con catálogo filtrable, módulo de preventas y métricas de confianza.",
          ],
          tags: ["Next.js", "TypeScript", "Node.js", "Supabase", "Tailwind CSS", "Telegram API"],
          repo: "https://github.com/Leotorresdev/innova-store",
          demo: "https://innovacompanyven.com/",
          domainLabel: "innovacompanyven.com",
          image: "/innova.png",
        },
        {
          id: "relojesvzla",
          title: "RelojesVZLA — E-Commerce de Alta Conversión",
          category: "ecommerce",
          categoryLabel: "E-Commerce Direct-to-Consumer",
          role: "Full Stack Web Developer",
          year: "2024",
          description:
            "Plataforma de comercio electrónico optimizada para soportar picos de tráfico publicitario, con checkout simplificado y carga ultrarrápida de activos visuales.",
          impactMetric: "Optimizado para embudos de alto tráfico",
          highlights: [
            "Implementación de flujo de pago seguro y reducción de fricción en el embudo de compra móvil.",
            "Optimización de imágenes y recursos estáticos con Next.js para tiempos de respuesta inmediatos.",
          ],
          tags: ["Next.js", "React", "Tailwind CSS", "UI/UX", "Vercel"],
          repo: "https://github.com/Leotorresdev",
          demo: "http://relojesvzla.com/",
          domainLabel: "relojesvzla.com",
          image: "/proyecto1.png",
        },
        {
          id: "sixten",
          title: "Relojes Sixten — E-Commerce Premium & SEO",
          category: "ecommerce",
          categoryLabel: "Luxury Retail E-Commerce",
          role: "Frontend & UI Engineer",
          year: "2023",
          description:
            "Tienda digital de estética premium enfocada en posicionamiento orgánico (SEO técnico), retención visual y presentación de catálogo de alta gama.",
          impactMetric: "Arquitectura SEO + UI de alta conversión",
          highlights: [
            "Sistema de diseño a medida con Tailwind CSS enfocado en transmitir valor de marca y confianza de compra.",
            "Estructura semántica y optimización de rendimiento para maximizar conversión y retención.",
          ],
          tags: ["React", "Next.js", "Tailwind CSS", "SEO Técnico", "E-Commerce"],
          repo: "https://github.com/Leotorresdev/Sixten",
          demo: "https://sixtenvenezuela.com/",
          domainLabel: "sixtenvenezuela.com",
          image: "/proyecto2.png",
        },
      ],
    },
    skills: {
      sectionNumber: "03",
      eyebrow: "CAPACIDADES DE INGENIERÍA",
      title: "Arquitectura y",
      titleHighlight: "stack tecnológico",
      subtitle:
        "Dominio técnico organizado por capas de responsabilidad, priorizando código mantenible, tipado estricto y despliegues confiables en producción.",
      groups: [
        {
          id: "frontend",
          category: "Frontend & Arquitectura UI",
          subtitle: "Interfaces reactivas, accesibles (WCAG/ARIA) y optimizadas para Core Web Vitals.",
          skills: [
            { name: "React 19", level: "Avanzado" },
            { name: "Next.js (App Router)", level: "Avanzado" },
            { name: "TypeScript / JavaScript (ES6+)", level: "Avanzado" },
            { name: "Tailwind CSS", level: "Avanzado" },
            { name: "Framer Motion", level: "Intermedio-Alto" },
            { name: "Diseño Responsive & Sistemas UI", level: "Avanzado" },
          ],
        },
        {
          id: "backend",
          category: "Backend, APIs & Persistencia",
          subtitle: "Servicios escalables, validación de datos, autenticación y modelado relacional/NoSQL.",
          skills: [
            { name: "Node.js & Express", level: "Avanzado" },
            { name: "PHP & Laravel", level: "Básico" },
            { name: "MySQL & PostgreSQL", level: "Intermedio-Alto" },
            { name: "Supabase & Prisma ORM", level: "Intermedio-Alto" },
            { name: "MongoDB", level: "Intermedio" },
            { name: "Diseño de APIs RESTful", level: "Avanzado" },
          ],
        },
        {
          id: "infra",
          category: "Infraestructura, Cloud & Herramientas",
          subtitle: "Control de versiones, contenedores, despliegue continuo y sistemas empresariales.",
          skills: [
            { name: "Git & GitHub (CI/CD Workflows)", level: "Avanzado" },
            { name: "Vercel (Edge & Serverless)", level: "Avanzado" },
            { name: "Docker", level: "Intermedio" },
            { name: "AWS (Servicios Core)", level: "Intermedio" },
            { name: "Odoo ERP (Fundamentos)", level: "Básico-Intermedio" },
            { name: "Integración de Pasarelas & Bots", level: "Avanzado" },
          ],
        },
        {
          id: "practices",
          category: "Metodología & Producto",
          subtitle: "Trabajo colaborativo en equipos remotos, calidad de código y enfoque en negocio.",
          skills: [
            { name: "Arquitectura Escalable & Modular", level: "Avanzado" },
            { name: "Scrum & Entregas por Sprints", level: "Avanzado" },
            { name: "Code Review & Clean Code (SRP)", level: "Avanzado" },
            { name: "Figma a Código (Pixel-Perfect)", level: "Avanzado" },
            { name: "SEO Técnico & Web Performance", level: "Avanzado" },
            { name: "IA Aplicada & Automatización", level: "Intermedio-Alto" },
          ],
        },
      ],
    },
    education: {
      sectionNumber: "04",
      eyebrow: "CREDENCIALES ACADÉMICAS",
      title: "Educación y",
      titleHighlight: "certificaciones",
      subtitle:
        "Base formal en Ingeniería en Computación complementada con especialización práctica en Inteligencia Artificial y desarrollo Full Stack moderno.",
      viewCertificateLabel: "Ver certificado oficial",
      languagesTitle: "Idiomas y Comunicación",
      languages: [
        { language: "Español", proficiency: "Nativo (Comunicación fluida técnica y ejecutiva)" },
        {
          language: "Inglés",
          proficiency: "Básico / Lectura técnica de documentación y código (En progreso activo)",
        },
      ],
      items: [
        {
          id: "computer-engineering",
          type: "degree",
          badge: "TÍTULO UNIVERSITARIO",
          title: "Ingeniero en Computación",
          institution: "Universidad Valle del Momboy (UVM)",
          period: "2020 — 2025",
          status: "Graduado",
          description:
            "Formación universitaria integral en ciencias de la computación, arquitectura de software, sistemas distribuidos, estructuras de datos, bases de datos relacionales y gestión de proyectos tecnológicos.",
          skills: [
            "Ingeniería de Software",
            "Sistemas Distribuidos",
            "Bases de Datos",
            "Arquitectura de Computadoras",
          ],
        },
        {
          id: "ai-ml-cert",
          type: "certification",
          badge: "CERTIFICACIÓN ESPECIALIZADA",
          title: "Inteligencia Artificial & Machine Learning",
          institution: "Universidad Valle del Momboy (UVM)",
          period: "2024",
          status: "Completado",
          description:
            "Certificación enfocada en la aplicación práctica de Inteligencia Artificial, fundamentos de Machine Learning, procesamiento de lenguaje natural (NLP) e integración de modelos de lenguaje (LLMs).",
          skills: ["Machine Learning", "NLP", "LLMs / GPT", "IA Aplicada"],
          certificateUrl: "/certificado.png",
        },
        {
          id: "fullstack-specialization",
          type: "specialization",
          badge: "ESPECIALIZACIÓN PRÁCTICA",
          title: "Desarrollo Web Full Stack & Arquitectura Cloud",
          institution: "Formación Continua + Proyectos Comerciales",
          period: "2021 — 2025",
          status: "Completado",
          description:
            "Especialización intensiva en el ecosistema moderno de JavaScript/TypeScript (React, Next.js, Node.js, Express y PostgreSQL), aplicando patrones de diseño listos para producción en clientes reales.",
          skills: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
        },
      ],
    },
    contact: {
      sectionNumber: "05",
      eyebrow: "CONTACTO DIRECTO PARA RECLUTADORES",
      title: "¿Buscas un Ingeniero Full Stack",
      titleHighlight: "listo para aportar desde el día 1?",
      subtitle:
        "Estoy disponible para entrevistas técnicas, pruebas de código y oportunidades remotas fuera de Venezuela. Elige el canal que prefieras para conversar.",
      emailCardTitle: "Correo Electrónico Directo (Recomendado para RRHH)",
      emailCardDesc: "Ideal para envío de descripciones de puesto (JD), coordinación de entrevistas o propuestas formales.",
      copyButton: "Copiar correo",
      copiedButton: "¡Correo copiado al portapapeles!",
      sendEmailButton: "Abrir cliente de correo",
      whatsappCardTitle: "Contacto Rápido vía WhatsApp",
      whatsappCardDesc: "Respuesta inmediata en horario laboral (UTC-4) para coordinar llamadas rápidas.",
      whatsappButton: "Escribir por WhatsApp",
      downloadCvButton: "Descargar CV Completo (PDF)",
      footerRights: "Ingeniero en Computación & Full Stack Developer.",
      footerBuiltWith: "Arquitectura en Next.js App Router · React 19 · TypeScript · Tailwind CSS",
    },
  },
  en: {
    meta: {
      roleBadge: "Computer Engineer · Full Stack Developer",
      availability: "Available for International Remote Roles (Full-Time / Contractor)",
      timezone: "UTC-4 (Aligned with US EST/EDT, LATAM & EU overlap)",
      location: "Venezuela · 100% Remote",
    },
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      skills: "Stack",
      education: "Education",
      contact: "Contact",
      downloadCv: "Resume",
      hireMe: "Contact",
      langLabel: "Switch language",
    },
    hero: {
      eyebrow: "COMPUTER ENGINEER · FULL-STACK SOFTWARE ENGINEER",
      headlinePrefix: "Building high-speed,",
      headlineHighlight: "conversion-driven web applications",
      headlineSuffix: "for SaaS, TravelTech & E-Commerce.",
      valueProposition:
        "I'm Leoferson Torres. I architect and ship end-to-end production systems using React, Next.js (App Router), TypeScript, Tailwind CSS, and Node.js/Express—focused on clean modularity, measurable performance gains, and reliable delivery for global remote teams.",
      primaryCta: "Explore Production Projects",
      secondaryCta: "Download Resume (PDF)",
      copyEmailLabel: "Copy email",
      emailCopiedLabel: "Email copied!",
      metrics: [
        {
          value: "6+",
          label: "Production Systems Shipped",
          detail: "Live applications across SaaS, TravelTech, and B2C/B2B E-Commerce.",
        },
        {
          value: "+40%",
          label: "Performance Optimization",
          detail: "Measurable improvements in Core Web Vitals, load times, and API latency.",
        },
        {
          value: "UTC-4",
          label: "Time Zone Alignment",
          detail: "Full workday overlap with US Eastern Time (EST/EDT), LATAM, and Europe.",
        },
      ],
      dossierCard: {
        headerTitle: "ENGINEERING DOSSIER // PROFILE",
        statusTag: "AVAILABLE · REMOTE",
        engineerRole: "Full Stack Software Engineer",
        degreeLabel: "B.S. in Computer Engineering (UVM)",
        timezoneLabel: "Location / Time Zone",
        timezoneValue: "Remote · UTC-4 (EST)",
        liveSystemsLabel: "LIVE PRODUCTION DOMAINS",
        coreStackLabel: "PRIMARY TECH STACK",
      },
    },
    experience: {
      sectionNumber: "01",
      eyebrow: "PROFESSIONAL TRACK RECORD",
      title: "Production",
      titleHighlight: "work experience",
      subtitle:
        "Proven track record building SaaS applications, high-availability booking engines, and commercial e-commerce platforms with measurable business outcomes.",
      achievementsTitle: "Key engineering deliverables & impact",
      stackTitle: "Technologies & tools",
      items: [
        {
          id: "tricapy",
          company: "Tricapy (TripCapy)",
          role: "Full Stack Developer",
          period: "2026 — Present",
          location: "Remote",
          workMode: "Full-Time",
          domainUrl: "https://tripcapy.com/es",
          summary:
            "End-to-end development of SaaS web applications and a multilingual travel metasearch engine built with PHP (Laravel) and MySQL. Responsible for backend services, administrative dashboards, and workflow automation.",
          achievements: [
            "Developed and integrated backend services in PHP / Laravel backed by a relational MySQL database.",
            "Optimized SQL queries and overall platform performance by +40%, cutting response times and increasing user retention.",
            "Integrated payment gateways and automated financial and operational workflows.",
          ],
          technologies: [
            "PHP",
            "Laravel",
            "MySQL",
            "JavaScript (ES6+)",
            "REST APIs",
            "Tailwind CSS",
            "Git",
          ],
        },
        {
          id: "flightepic",
          company: "FlightEpic",
          role: "Software Engineer",
          period: "2025",
          location: "Remote",
          workMode: "Contract Engineer",
          domainUrl: "https://flightepic.com/",
          summary:
            "Engineered high-availability web solutions for the aviation and travel industry, integrating Next.js frontend interfaces with PHP backend services and MySQL databases for flight search, booking flows, and analytics.",
          achievements: [
            "Built a flight reservation ecosystem handling +10,000 monthly searches while reducing page load times by 35%.",
            "Developed and integrated real-time PHP backend services, MySQL queries, and airline RESTful APIs, reducing average response latency by 30%.",
            "Delivered analytics dashboards that empowered data-driven commercial decisions and improved user retention.",
          ],
          technologies: [
            "Next.js",
            "React",
            "PHP",
            "Laravel",
            "MySQL",
            "Tailwind CSS",
            "REST APIs",
          ],
        },
        {
          id: "ecommerce-engineer",
          company: "E-Commerce & B2B Platforms (Independent Consulting)",
          role: "Full Stack E-Commerce Developer",
          period: "2023 — 2025",
          location: "Remote",
          workMode: "Client Production Projects",
          domainUrl: "https://www.gabchips.com",
          summary:
            "Architected and delivered turnkey B2C and wholesale B2B e-commerce platforms for commercial brands (GAB Chips, Innova Company, RelojesVZLA, and Relojes Sixten).",
          achievements: [
            "Built interactive product catalogs featuring tiered retail/wholesale pricing logic and customer loyalty rankings.",
            "Automated real-time order notifications and fulfillment workflows via Telegram bots, WhatsApp, and Supabase.",
            "Optimized technical SEO, Core Web Vitals, and checkout funnels supporting multi-payment methods (USDT, wire transfers, mobile payments).",
          ],
          technologies: [
            "Next.js (App Router)",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Supabase",
            "Vercel",
          ],
        },
      ],
    },
    projects: {
      sectionNumber: "02",
      eyebrow: "CASE STUDIES & LIVE SYSTEMS",
      title: "Featured",
      titleHighlight: "production projects",
      subtitle:
        "Every project below is deployed and serving real users across travel, SaaS, and commercial e-commerce—built with modern Next.js architecture.",
      filters: {
        all: "All Projects (6)",
        saasTravel: "SaaS & TravelTech (2)",
        ecommerce: "E-Commerce & B2B (4)",
      },
      liveSiteLabel: "Visit Live Site",
      sourceCodeLabel: "Repository",
      architectureLabel: "Tech Stack",
      keyDeliverablesLabel: "Architecture & delivered value",
      items: [
        {
          id: "gabchips",
          title: "GAB Chips — B2C/B2B E-Commerce & Loyalty Platform",
          category: "ecommerce",
          categoryLabel: "B2C & Wholesale B2B E-Commerce",
          role: "Lead Full Stack Developer",
          year: "2025",
          description:
            "Commercial web platform for an artisanal snack brand featuring an interactive flavor catalog, retail and wholesale (+12 units) ordering engine, and a community purchase ranking program.",
          impactMetric: "Dual B2C/B2B Pricing + Multi-Payment",
          highlights: [
            "Engineered tiered pricing logic for retail ($1.00/unit) and wholesale bulk orders (+12 units at $0.80/unit) with instant calculation.",
            "Fast mobile-first Next.js (App Router) experience integrating direct order routing and multi-payment options (Binance USDT, Pago Móvil, BNC).",
            "Retention-focused architecture featuring a community loyalty club, purchase tracking, and nationwide shipping.",
          ],
          tags: ["Next.js", "React", "Tailwind CSS", "JavaScript (ES6+)", "Vercel"],
          demo: "https://www.gabchips.com",
          domainLabel: "gabchips.com",
          image: "/gabchips.png",
          featured: true,
        },
        {
          id: "flightepic",
          title: "FlightEpic — Airline Booking & Search Platform",
          category: "saas-travel",
          categoryLabel: "TravelTech & Booking Engine",
          role: "Software Engineer",
          year: "2025",
          description:
            "Domestic and international flight search and booking platform pairing a fast Next.js frontend with PHP & MySQL backend services, engineered for speed, fare clarity, and high conversion.",
          impactMetric: "-35% load time · +10k monthly searches",
          highlights: [
            "Cut page load times by 35% through optimized Next.js rendering and streamlined state management.",
            "Intuitive multi-leg search interface (round-trip / one-way), passenger selector, and dynamic route offers.",
            "Integrated real-time PHP backend services, MySQL persistence, and aviation REST APIs, reducing response latency by 30%.",
          ],
          tags: ["Next.js", "React", "PHP", "Laravel", "MySQL", "Tailwind CSS", "REST APIs"],
          repo: "https://github.com/Leotorresdev",
          demo: "https://flightepic.com/",
          domainLabel: "flightepic.com",
          image: "/flightepic.png",
          featured: true,
        },
        {
          id: "tripcapy",
          title: "TripCapy — Multilingual Travel Metasearch",
          category: "saas-travel",
          categoryLabel: "SaaS & Travel Metasearch",
          role: "Full Stack Developer",
          year: "2026",
          description:
            "Multilingual (ES/EN) travel discovery and route comparison platform built with PHP (Laravel) and MySQL, designed for rapid exploration, demand capture, and seamless cross-border UX.",
          impactMetric: "+40% overall perf · i18n Architecture",
          highlights: [
            "Internationalized (ES/EN) routing and SEO-ready architecture tailored for multi-region audiences.",
            "Clean route comparison interface with real-time preview of origins, destinations, dates, and search modes.",
            "End-to-end performance optimization (+40%) backed by scalable PHP backend services and optimized MySQL queries.",
          ],
          tags: ["PHP", "Laravel", "MySQL", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs"],
          repo: "https://github.com/Leotorresdev",
          demo: "https://tripcapy.com/es",
          domainLabel: "tripcapy.com",
          image: "/tricapy.png",
          featured: true,
        },
        {
          id: "innova",
          title: "Innova Company — E-Commerce & Telegram Bot Automation",
          category: "ecommerce",
          categoryLabel: "E-Commerce & Automation",
          role: "Full Stack Developer",
          year: "2024",
          description:
            "Tech & hardware online store featuring integrated checkout flows, pre-order management, and automated real-time order alerts via a custom Telegram Bot.",
          impactMetric: "100% automated order notifications",
          highlights: [
            "Backend integration with Telegram Bot API to notify fulfillment teams immediately upon payment confirmation.",
            "Data persistence and inventory state managed with Supabase and server-side Node.js validation.",
            "Modern responsive UI featuring filterable catalogs, pre-order flows, and customer support metrics.",
          ],
          tags: ["Next.js", "TypeScript", "Node.js", "Supabase", "Tailwind CSS", "Telegram API"],
          repo: "https://github.com/Leotorresdev/innova-store",
          demo: "https://innovacompanyven.com/",
          domainLabel: "innovacompanyven.com",
          image: "/innova.png",
        },
        {
          id: "relojesvzla",
          title: "RelojesVZLA — High-Conversion Retail E-Commerce",
          category: "ecommerce",
          categoryLabel: "Direct-to-Consumer E-Commerce",
          role: "Full Stack Web Developer",
          year: "2024",
          description:
            "E-commerce storefront optimized to handle high-volume paid ad traffic with a frictionless checkout funnel and rapid asset delivery.",
          impactMetric: "Optimized for high-traffic ad funnels",
          highlights: [
            "Implemented secure payment workflows and reduced mobile checkout friction to maximize sales conversion.",
            "Optimized image delivery and static caching in Next.js for sub-second visual load times.",
          ],
          tags: ["Next.js", "React", "Tailwind CSS", "UI/UX", "Vercel"],
          repo: "https://github.com/Leotorresdev",
          demo: "http://relojesvzla.com/",
          domainLabel: "relojesvzla.com",
          image: "/proyecto1.png",
        },
        {
          id: "sixten",
          title: "Relojes Sixten — Luxury Watch Storefront & SEO",
          category: "ecommerce",
          categoryLabel: "Luxury Retail E-Commerce",
          role: "Frontend & UI Engineer",
          year: "2023",
          description:
            "Premium digital storefront engineered for organic search visibility (technical SEO), visual retention, and high-end catalog presentation.",
          impactMetric: "Technical SEO + High-conversion UI",
          highlights: [
            "Custom design system built with Tailwind CSS to elevate brand trust and buyer confidence.",
            "Semantic HTML structure and performance tuning focused on retention and monetization.",
          ],
          tags: ["React", "Next.js", "Tailwind CSS", "Technical SEO", "E-Commerce"],
          repo: "https://github.com/Leotorresdev/Sixten",
          demo: "https://sixtenvenezuela.com/",
          domainLabel: "sixtenvenezuela.com",
          image: "/proyecto2.png",
        },
      ],
    },
    skills: {
      sectionNumber: "03",
      eyebrow: "ENGINEERING CAPABILITIES",
      title: "Architecture &",
      titleHighlight: "technical stack",
      subtitle:
        "Technical proficiency organized by architectural layer—prioritizing maintainable code, strict typing, and production-ready deployments.",
      groups: [
        {
          id: "frontend",
          category: "Frontend & UI Architecture",
          subtitle: "Accessible (WCAG/ARIA), mobile-first interfaces optimized for Core Web Vitals.",
          skills: [
            { name: "React 19", level: "Advanced" },
            { name: "Next.js (App Router)", level: "Advanced" },
            { name: "TypeScript / JavaScript (ES6+)", level: "Advanced" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "Framer Motion", level: "Proficient" },
            { name: "Responsive UI Systems", level: "Advanced" },
          ],
        },
        {
          id: "backend",
          category: "Backend, APIs & Data Layer",
          subtitle: "Scalable server logic, input validation, authentication, and SQL/NoSQL modeling.",
          skills: [
            { name: "Node.js & Express", level: "Advanced" },
            { name: "PHP & Laravel", level: "Foundations" },
            { name: "MySQL & PostgreSQL", level: "Proficient" },
            { name: "Supabase & Prisma ORM", level: "Proficient" },
            { name: "MongoDB", level: "Intermediate" },
            { name: "RESTful API Design", level: "Advanced" },
          ],
        },
        {
          id: "infra",
          category: "Infrastructure, Cloud & Tooling",
          subtitle: "Version control, containerization, continuous deployment, and enterprise tooling.",
          skills: [
            { name: "Git & GitHub (CI/CD Workflows)", level: "Advanced" },
            { name: "Vercel (Edge & Serverless)", level: "Advanced" },
            { name: "Docker", level: "Intermediate" },
            { name: "AWS (Core Services)", level: "Intermediate" },
            { name: "Odoo ERP (Foundations)", level: "Working Knowledge" },
            { name: "Payment Gateways & Bot APIs", level: "Advanced" },
          ],
        },
        {
          id: "practices",
          category: "Engineering Practices & Product",
          subtitle: "Agile collaboration in distributed teams, clean code standards, and business focus.",
          skills: [
            { name: "Modular & Scalable Architecture", level: "Advanced" },
            { name: "Agile / Scrum Sprint Delivery", level: "Advanced" },
            { name: "Code Review & Clean Code (SRP)", level: "Advanced" },
            { name: "Figma to Code (Pixel-Perfect)", level: "Advanced" },
            { name: "Technical SEO & Web Performance", level: "Advanced" },
            { name: "Applied AI & Workflow Automation", level: "Proficient" },
          ],
        },
      ],
    },
    education: {
      sectionNumber: "04",
      eyebrow: "ACADEMIC CREDENTIALS",
      title: "Education &",
      titleHighlight: "certifications",
      subtitle:
        "Formal university degree in Computer Engineering complemented by specialized training in Artificial Intelligence and full-stack software architecture.",
      viewCertificateLabel: "View official certificate",
      languagesTitle: "Languages & Communication",
      languages: [
        { language: "Spanish", proficiency: "Native (Fluent technical and executive communication)" },
        {
          language: "English",
          proficiency: "Elementary / Technical reading & documentation (Actively improving)",
        },
      ],
      items: [
        {
          id: "computer-engineering",
          type: "degree",
          badge: "UNIVERSITY DEGREE",
          title: "B.S. in Computer Engineering",
          institution: "Universidad Valle del Momboy (UVM)",
          period: "2020 — 2025",
          status: "Graduated",
          description:
            "Comprehensive Computer Engineering degree covering software engineering, distributed systems, data structures, relational databases, and computer architecture.",
          skills: [
            "Software Engineering",
            "Distributed Systems",
            "Database Systems",
            "Computer Architecture",
          ],
        },
        {
          id: "ai-ml-cert",
          type: "certification",
          badge: "SPECIALIZED CERTIFICATION",
          title: "Artificial Intelligence & Machine Learning",
          institution: "Universidad Valle del Momboy (UVM)",
          period: "2024",
          status: "Completed",
          description:
            "Practical certification covering machine learning foundations, natural language processing (NLP), computer vision, and integration of Large Language Models (LLMs/GPT).",
          skills: ["Machine Learning", "NLP", "LLMs / GPT", "Applied AI"],
          certificateUrl: "/certificado.png",
        },
        {
          id: "fullstack-specialization",
          type: "specialization",
          badge: "CONTINUOUS SPECIALIZATION",
          title: "Full Stack Web Development & Cloud Architecture",
          institution: "External Specializations + Commercial Projects",
          period: "2021 — 2025",
          status: "Completed",
          description:
            "Intensive specialization across the modern JavaScript/TypeScript ecosystem (React, Next.js, Node.js, Express, PostgreSQL), applying production patterns to real client systems.",
          skills: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
        },
      ],
    },
    contact: {
      sectionNumber: "05",
      eyebrow: "DIRECT RECRUITER CONTACT",
      title: "Looking for a Full Stack Engineer",
      titleHighlight: "ready to deliver from day one?",
      subtitle:
        "Available for technical interviews, take-home assessments, and international remote roles. Reach out directly through your preferred channel below.",
      emailCardTitle: "Direct Email (Recommended for Recruiters & HR)",
      emailCardDesc: "Best for sending job descriptions (JDs), scheduling interviews, or formal inquiries.",
      copyButton: "Copy email address",
      copiedButton: "Copied to clipboard!",
      sendEmailButton: "Open email client",
      whatsappCardTitle: "Instant Message via WhatsApp",
      whatsappCardDesc: "Fast response during working hours (UTC-4 / EST) for quick coordination.",
      whatsappButton: "Message on WhatsApp",
      downloadCvButton: "Download Full Resume (PDF)",
      footerRights: "Computer Engineer & Full Stack Developer.",
      footerBuiltWith: "Built with Next.js App Router · React 19 · TypeScript · Tailwind CSS",
    },
  },
};

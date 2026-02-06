import { Project } from "../ts/projets";

export const projects: Project[] = [
  {
    id: 1,
    title: "Cotelco - Hotel Management",
    description:
      "Sistema completo de gestión hotelera desarrollado con WordPress y Tailwind CSS. Incluye reservas en línea, gestión de habitaciones y panel administrativo personalizado.",
    image: "/img/img2.jpg",
    technologies: ["WordPress", "Tailwind CSS", "PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/torco34/cotelco",
    demoUrl: "https://cotelco.com",
  },
  {
    id: 2,
    title: "Nuestra Señora Calendaría",
    description:
      "Aplicación web de calendario litúrgico con React y TypeScript. Integración con API REST para sincronización de eventos y notificaciones push.",
    image: "/img/img1.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "REST API",
    ],
    githubUrl: "https://github.com/torco34/calendar",
    demoUrl: "https://demo-calendar.com",
  },
  {
    id: 3,
    title: "E-commerce Moderno",
    description:
      "Tienda en línea con carrito de compras, pasarela de pago y panel de administración. Desarrollado con Next.js y Stripe integration.",
    image: "/img/img3.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/torco34/ecommerce",
    demoUrl: "https://ecommerce-demo.com",
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description:
      "Panel de control con gráficos interactivos y métricas en tiempo real. Visualización de datos con Chart.js y actualizaciones en vivo.",
    image: "/img/img1.jpg",
    technologies: ["React", "Chart.js", "WebSocket", "Node.js", "Express"],
    githubUrl: "https://github.com/torco34/dashboard",
    demoUrl: "https://dashboard-demo.com",
  },
  {
    id: 5,
    title: "Portafolio Personal",
    description:
      "Sitio web personal responsive con diseño moderno. Optimizado para SEO y performance con lazy loading de imágenes.",
    image: "/img/img2.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SEO",
    ],
    githubUrl: "https://github.com/torco34/portfolio",
    demoUrl: "https://torcoroma-arias.com",
  },
  {
    id: 6,
    title: "Task Manager App",
    description:
      "Aplicación de gestión de tareas con drag & drop, etiquetas y recordatorios. Sincronización multiplataforma.",
    image: "/img/img3.jpg",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Redux",
      "Push Notifications",
    ],
    githubUrl: "https://github.com/torco34/taskmanager",
    demoUrl: "https://taskmanager-app.com",
  },
  {
    id: 7,
    title: "Weather Forecast",
    description:
      "Aplicación de pronóstico del tiempo con geolocalización y pronóstico de 7 días. Integración con OpenWeather API.",
    image: "/img/fondo1.jpg",
    technologies: [
      "Vue.js",
      "Vuex",
      "OpenWeather API",
      "Geolocation API",
      "PWA",
    ],
    githubUrl: "https://github.com/torco34/weather",
    demoUrl: "https://weather-forecast.com",
  },
  {
    id: 8,
    title: "Blog Platform",
    description:
      "Plataforma de blogging con editor markdown, comentarios y sistema de likes. Autenticación con OAuth.",
    image: "/img/imfondo.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Markdown", "OAuth"],
    githubUrl: "https://github.com/torco34/blog",
    demoUrl: "https://blog-platform.com",
  },
];

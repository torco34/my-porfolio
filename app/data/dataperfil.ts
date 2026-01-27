import { Folder, Mail } from "lucide-react";
export const profileData = {
  name: "Torcoroma Arias",
  role: "Desarrollador Web Frontend",
  description: `
Con experiencia en proyectos reales, incluyendo proyectos freelancer.
Creando interfaces responsivas con React.js, Next.js y TypeScript,
además de experiencia en WordPress y PHP.

También cuento con experiencia en integración frontend-backend y
conocimientos básicos en la creación de endpoints con Node.js y Express.
  `,
  buttons: [
    {
      text: "Ver Portafolio",
      href: "/projects",
      icon: Folder,
    },
    {
      text: "Contactarme",
      href: "/contact",
      icon: Mail,
    },
  ],
};
// data slider
export const slides = [
  {
    id: 1,
    title: "Cotelco",
    description:
      "Desarrollé la maquetación frontend con WordPress y Tailwind CSS.",
    image: "/img/img2.jpg",
  },
  {
    id: 2,
    title: "Nuestra Señora Calendaría",
    description:
      "Maquetación de interfaces con React e integración de servicios backend.",
    image: "/img/img1.jpg",
  },
  {
    id: 3,
    title: "Timshel",
    description:
      "Maquetación frontend con Next.js para un panel de administración.",
    image: "/img/img3.jpg",
  },
];

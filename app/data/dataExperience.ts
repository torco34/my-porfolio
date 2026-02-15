import {
  Atom,
  Braces,
  Code,
  FileCode2,
  GitBranch,
  Globe,
  Users,
  Wind,
} from "lucide-react";

import { Experience } from "../ts/experiences";

export const experiencia: Experience[] = [
  {
    id: 1,
    role: "Desarrollador Web Front-End",
    company: "Empresa Intuition Business",
    period: "2025 - Presente",
    description:
      "Formo parte de esta empresa, donde adquirí experiencia trabajando con WordPress y desarrollando proyectos con Next.js.",
    type: "professional",
    location: "Bogotá, Colombia",
    achievements: [
      "Desarrollo de 5+ proyectos con WordPress y Next.js",
      "Optimización de performance en 40%",
      "Implementación de mejores prácticas de SEO",
    ],
    impact:
      "Contribución significativa al crecimiento de la empresa mediante desarrollo de soluciones escalables",
    projectsCount: 5,
    skills: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Code },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Tailwind", icon: Wind },
      { name: "WordPress", icon: Globe },
    ],
  },
  {
    id: 2,
    role: "Desarrollador Web Front-End",
    company: "Freelance Projects",
    period: "2025 - Presente",
    description:
      "He trabajado en proyectos reales con dos compañeros lo cual agrega experiencia valiosa en colaboración y desarrollo de soluciones personalizadas.",
    type: "freelance",
    location: "Remoto",
    achievements: [
      "Completados 4+ proyectos freelance",
      "Satisfacción del cliente del 95%",
      "Desarrollo de soluciones personalizadas",
    ],
    impact:
      "Entrega de proyectos de alta calidad que superan expectativas del cliente",
    projectsCount: 4,
    skills: [
      { name: "JavaScript", icon: Braces },
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Wind },
      { name: "Git", icon: GitBranch },
    ],
  },
  {
    id: 3,
    role: "Desarrollador Frontend",
    company: "Bosque Nagal",
    period: "Jun 2024 - Oct 2024",
    description:
      "Desarrollé y mantuve interfaces web para una aplicación ambiental, aportando mejoras en rendimiento, experiencia de usuario y arquitectura frontend. También brindé mentoría y apoyo técnico a desarrolladores junior y estudiantes.",
    type: "professional",
    location: "Bosque Nagal",
    achievements: [
      "Refactorice y componentice de la interfaz, mejorando la mantenibilidad y escalabilidad del frontend",
      "Desarrollo de componentes reutilizables (Cards dinámicas) para funcionalidades como sonidos y módulos interactivos",
      "Mejora del rendimiento de la aplicación en aproximadamente un 20% mediante optimización de renderizado y estructura de componentes",
    ],

    impact:
      "La componentización del frontend permitió un desarrollo más rápido y mantenible, mientras que las optimizaciones aplicadas mejoraron el rendimiento general de la aplicación en aproximadamente un 20%.",

    projectsCount: 2,
    skills: [
      { name: "Vue.js", icon: Atom },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Quasar Framework", icon: Users },
      { name: "SCRUM", icon: Users },
    ],
  },

  {
    id: 4,
    role: "Estudiante / Desarrollador Frontend",
    company: "TalentLogy",
    period: "Feb 2023 - Dic 2023",
    description:
      "Formación en desarrollo web frontend, fortaleciendo bases de JavaScript, HTML, CSS y Bootstrap. Participé en un proyecto colaborativo en tiempo real junto a un equipo, aplicando metodologías prácticas y simulando un entorno profesional.",
    type: "education",
    location: "Remoto",
    achievements: [
      "Desarrollo de un proyecto colaborativo en equipo aplicando conocimientos en tiempo real",
      "Implementación de interfaces responsivas utilizando Bootstrap y CSS",
      "Integración de frontend con backend mediante consumo de APIs y manejo de datos dinámicos",
    ],
    impact:
      "Consolidé bases sólidas en desarrollo web y experiencia práctica trabajando en equipo, mejorando mi capacidad para construir proyectos reales y colaborar en entornos similares a empresas.",
    projectsCount: 1,
    skills: [
      { name: "JavaScript", icon: GitBranch },
      { name: "Bootstrap", icon: Code },
      { name: "CSS", icon: Code },
      { name: "Integración Frontend-Backend", icon: FileCode2 },
    ],
  },
];
// data de colores y profeciones

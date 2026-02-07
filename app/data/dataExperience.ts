import type { ElementType } from "react";

import {
  Atom,
  Braces,
  Code,
  FileCode2,
  GitBranch,
  Globe,
  Wind,
  Users,
} from "lucide-react";

export type Skill = {
  name: string;
  icon: ElementType;
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  skills: Skill[];
  description: string;
  type?: "professional" | "freelance" | "education";
  location?: string;
  achievements?: string[];
  impact?: string;
  projectsCount?: number;
};

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
    impact: "Contribución significativa al crecimiento de la empresa mediante desarrollo de soluciones escalables",
    projectsCount: 8,
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
      "Completados 12+ proyectos freelance",
      "Satisfacción del cliente del 95%",
      "Desarrollo de soluciones personalizadas",
    ],
    impact: "Entrega de proyectos de alta calidad que superan expectativas del cliente",
    projectsCount: 12,
    skills: [
      { name: "JavaScript", icon: Braces },
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Wind },
      { name: "Git", icon: GitBranch },
    ],
  },
  {
    id: 3,
    role: "Mentor de Desarrollo Frontend",
    company: "Comunidad Tech",
    period: "2024 - Presente",
    description:
      "Mentoría a desarrolladores junior y estudiantes, compartiendo conocimientos y mejores prácticas en desarrollo frontend moderno.",
    type: "education",
    location: "Online",
    achievements: [
      "Mentoría a 15+ desarrolladores",
      "Creación de material educativo",
      "Talleres y workshops online",
    ],
    impact: "Contribución al crecimiento de la comunidad tech local",
    projectsCount: 5,
    skills: [
      { name: "React", icon: Atom },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Mentoría", icon: Users },
      { name: "Comunicación", icon: Users },
    ],
  },
  {
    id: 4,
    role: "Contribuidor Open Source",
    company: "Proyectos Open Source",
    period: "2023 - Presente",
    description:
      "Contribuciones activas a proyectos open source relacionados con React y herramientas de desarrollo frontend.",
    type: "professional",
    location: "Global",
    achievements: [
      "50+ contribuciones aceptadas",
      "Mantenimiento de librerías",
      "Reporte y fix de bugs",
    ],
    impact: "Mejora de herramientas utilizadas por miles de desarrolladores",
    projectsCount: 20,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Open Source", icon: Code },
      { name: "Code Review", icon: Code },
      { name: "Documentación", icon: FileCode2 },
    ],
  },
];

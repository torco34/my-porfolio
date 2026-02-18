import { Github, Linkedin } from "lucide-react";

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  experience: string;
  bio: string;
  about: string;
  philosophy: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number;
  category?: "frontend" | "tools" | "soft";
}

export interface SkillsData {
  frontend: Skill[];
  tools: Skill[];
  softSkills: string[];
}

export interface SkillByLevel {
  name: string;
  level: "básico" | "medio" | "avanzado";
  category: "frontend" | "tools" | "soft";
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export const personalInfo: PersonalInfo = {
  name: "Torcoroma Arias",
  title: "Desarrollador Frontend",
  location: "Colombia",
  email: "torcoromaarias@mail.com",
  experience: "2+ años de experiencia",
  bio: "Apasionado desarrollador frontend con más de 2 años de experiencia creando interfaces modernas y responsivas. Especializado en React, Next.js y TypeScript, me enfoco en entregar experiencias de usuario excepcionales y código de alta calidad.",
  about:
    "Mi pasión por la tecnología comenzó desde muy joven, y he dedicado mi carrera a dominar las mejores prácticas del desarrollo web moderno. Creo en el aprendizaje continuo y en mantenerme actualizado con las últimas tendencias tecnológicas.",
  philosophy:
    "Creo que el buen código no solo funciona, sino que también es mantenible, escalable y comprensible. Me esfuerzo por escribir código limpio y documentado que facilite la colaboración en equipo.",
};

export const experience: ExperienceItem[] = [
  {
    id: 1,
    title: "Desarrollador Frontend",
    company: "Freelancer",
    period: "2025 - Presente",
    description:
      "He trabajado con React y WordPress desarrollando maquetas y proyectos funcionales, participando en el desarrollo de aplicaciones web y sitios dinámicos, implementando buenas prácticas y aprendiendo en entornos profesionales.",
    achievements: [
      "Creación de maquetas interactivas en React para clientes y proyectos internos",
      "Desarrollo de sistemas administrables en WordPress para gestión de contenidos",
      "Colaboración en equipo de empresa para proyectos web completos",
    ],
  },

  {
    id: 2,
    title: "Desarrollador Frontend",
    company: "Intuition Business",
    period: "2025 - 2026",
    description:
      "Trabajé en Intuition Business desarrollando proyectos con Next.js y WordPress, creando sitios web y aplicaciones funcionales, y aprendiendo en un entorno profesional junto a equipos multidisciplinarios.",
    achievements: [
      "Desarrollo de múltiples proyectos web exitosos con Next.js y WordPress",
      "Implementación de diseños responsive y experiencias de usuario optimizadas",
      "Integración de APIs REST y GraphQL para funcionalidades dinámicas",
      "Colaboración efectiva en equipos multidisciplinarios y aprendizaje continuo",
    ],
  },

  {
    id: 3,
    title: "Desarrollador Web Junior",
    company: "Bosque Nagal",
    period: "2024 - 2024",
    description:
      "Trabajé en Bosque Nagal desarrollando componentes reutilizables en Vue, implementando interacción con APIs y participando en proyectos bajo metodología ágil Scrum, adquiriendo experiencia profesional y buenas prácticas de frontend.",
    achievements: [
      "Desarrollo de componentes reutilizables en Vue.js para optimizar proyectos",
      "Implementación de integración con APIs REST para funcionalidades dinámicas",
      "Participación en sprints Scrum, colaborando en equipos multidisciplinarios",
    ],
  },
];

export const skills: SkillsData = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 98 },
    { name: "Tailwind CSS", level: 90 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Webpack", level: 80 },
    { name: "Figma", level: 75 },
    { name: "VS Code", level: 95 },
    { name: "Docker", level: 70 },
    { name: "Jest", level: 85 },
  ],
  softSkills: [
    "Comunicación efectiva",
    "Trabajo en equipo",
    "Resolución de problemas",
    "Gestión del tiempo",
    "Aprendizaje continuo",
    "Pensamiento crítico",
  ],
};

export const skillsByLevel: SkillByLevel[] = [
  // Habilidades Avanzadas
  { name: "React", level: "avanzado", category: "frontend" },
  { name: "Next.js", level: "avanzado", category: "frontend" },
  { name: "TypeScript", level: "avanzado", category: "frontend" },
  { name: "JavaScript", level: "avanzado", category: "frontend" },
  { name: "HTML/CSS", level: "avanzado", category: "frontend" },
  { name: "Tailwind CSS", level: "avanzado", category: "frontend" },
  { name: "Git", level: "avanzado", category: "tools" },
  { name: "VS Code", level: "avanzado", category: "tools" },

  // Habilidades Medias
  { name: "Webpack", level: "medio", category: "tools" },
  { name: "Jest", level: "medio", category: "tools" },
  { name: "Figma", level: "medio", category: "tools" },
  { name: "Node.js", level: "medio", category: "frontend" },
  { name: "Express", level: "medio", category: "frontend" },
  { name: "MongoDB", level: "medio", category: "tools" },

  // Habilidades Básicas
  { name: "Docker", level: "básico", category: "tools" },
  { name: "AWS", level: "básico", category: "tools" },
  { name: "GraphQL", level: "básico", category: "frontend" },
  { name: "Python", level: "básico", category: "frontend" },
  { name: "PHP", level: "básico", category: "frontend" },
  { name: "WordPress", level: "básico", category: "frontend" },

  // Habilidades Blandas (todas avanzadas)
  { name: "Comunicación efectiva", level: "avanzado", category: "soft" },
  { name: "Trabajo en equipo", level: "avanzado", category: "soft" },
  { name: "Resolución de problemas", level: "avanzado", category: "soft" },
  { name: "Gestión del tiempo", level: "avanzado", category: "soft" },
  { name: "Aprendizaje continuo", level: "avanzado", category: "soft" },
  { name: "Pensamiento crítico", level: "avanzado", category: "soft" },
];

export const education: EducationItem[] = [
  {
    id: 1,
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Nacional",
    period: "2015 - 2019",
    description:
      "Especialización en desarrollo de software y arquitectura de sistemas.",
  },
  {
    id: 2,
    degree: "Certificación en React Avanzado",
    institution: "Platzi",
    period: "2021",
    description:
      "Curso avanzado de React con hooks, context y patrones avanzados.",
  },
  {
    id: 3,
    degree: "Certificación en TypeScript",
    institution: "Udemy",
    period: "2022",
    description:
      "Masterclass en TypeScript para desarrollo frontend y backend.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/torco34",
    icon: Github,
    color: "bg-[#574964]",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/torcoroma-arias-ascanio-a20315227/",
    icon: Linkedin,
    color: "bg-[#574964]",
  },
];

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
  experience: "3+ años de experiencia",
  bio: "Apasionado desarrollador frontend con más de 3 años de experiencia creando interfaces modernas y responsivas. Especializado en React, Next.js y TypeScript, me enfoco en entregar experiencias de usuario excepcionales y código de alta calidad.",
  about:
    "Mi pasión por la tecnología comenzó desde muy joven, y he dedicado mi carrera a dominar las mejores prácticas del desarrollo web moderno. Creo en el aprendizaje continuo y en mantenerme actualizado con las últimas tendencias tecnológicas.",
  philosophy:
    "Creo que el buen código no solo funciona, sino que también es mantenible, escalable y comprensible. Me esfuerzo por escribir código limpio y documentado que facilite la colaboración en equipo.",
};

export const experience: ExperienceItem[] = [
  {
    id: 1,
    title: "Desarrollador Frontend Senior",
    company: "Tech Solutions Inc.",
    period: "2022 - Presente",
    description:
      "Lidero el desarrollo de aplicaciones web con React y Next.js, implementando mejores prácticas y mentorizando a desarrolladores junior.",
    achievements: [
      "Reducción del tiempo de carga en 40% mediante optimización de código",
      "Implementación de arquitectura de micro-frontends",
      "Mentoría a 3 desarrolladores junior",
    ],
  },
  {
    id: 2,
    title: "Desarrollador Frontend",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description:
      "Desarrollo de sitios web y aplicaciones para clientes internacionales, trabajando con equipos multidisciplinarios.",
    achievements: [
      "Desarrollo de 15+ proyectos exitosos",
      "Implementación de diseño responsive",
      "Integración con APIs REST y GraphQL",
    ],
  },
  {
    id: 3,
    title: "Desarrollador Web Junior",
    company: "Startup Innovadora",
    period: "2019 - 2020",
    description:
      "Primera experiencia profesional, enfocada en aprendizaje y crecimiento en desarrollo frontend.",
    achievements: [
      "Aprendizaje de React y TypeScript",
      "Contribución a proyectos open source",
      "Certificación en desarrollo web",
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

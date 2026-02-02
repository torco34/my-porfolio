// import { HeroData } from "../ts/inicio";

// export function getHeroData(locale: string): HeroData {
//   const stats = [
//     { value: "2+", label: locale === "es" ? "Años Experiencia" : "Years Experience" },
//     { value: "15+", label: locale === "es" ? "Proyectos" : "Projects" },
//     { value: "100%", label: locale === "es" ? "Satisfacción" : "Satisfaction" },
//     { value: "React", label: locale === "es" ? "Stack Principal" : "Main Stack" },
//   ];

//   return {
//     name: "Torcoroma Arias",
//     role: locale === "es"
//       ? "Desarrollador Frontend especializado en crear experiencias digitales excepcionales con React, Next.js y TypeScript."
//       : "Frontend Developer specialized in creating exceptional digital experiences with React, Next.js and TypeScript.",
//     buttons: [
//       { label: locale === "es" ? "Ver Proyectos" : "View Projects", variant: "primary" },
//       { label: locale === "es" ? "Descargar CV" : "Download CV", variant: "secondary" },
//     ],
//     stats,
//   };
// }
export const HERO_BUTTONS = [
  { key: "projects", variant: "primary" },
  { key: "cv", variant: "secondary" },
] as const;

export const HERO_STATS = [
  { value: "2+", key: "experience" },
  { value: "15+", key: "projects" },
  { value: "100%", key: "satisfaction" },
  { value: "React", key: "stack" },
] as const;

// "use client";

// import { useTranslations } from "next-intl";
// import { useState } from "react";
// import {
//   SiCss3,
//   SiFigma,
//   SiGit,
//   SiGithub,
//   SiHtml5,
//   SiJavascript,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiReact,
//   SiTailwindcss,
//   SiTypescript,
//   SiWordpress,
// } from "react-icons/si";

// export default function EnhancedTechStack() {
//   const t = useTranslations("Home.tech");
//   const [hoveredTech, setHoveredTech] = useState<string | null>(null);

//   const technologies = [
//     {
//       name: "React",
//       icon: SiReact,
//       color: "from-blue-400 to-blue-600",
//       bgColor: "bg-blue-50",
//       description: "Biblioteca UI para interfaces dinámicas",
//     },
//     {
//       name: "Next.js",
//       icon: SiNextdotjs,
//       color: "from-gray-700 to-gray-900",
//       bgColor: "bg-gray-50",
//       description: "Framework React con SSR y optimizaciones",
//     },
//     {
//       name: "TypeScript",
//       icon: SiTypescript,
//       color: "from-blue-500 to-blue-700",
//       bgColor: "bg-blue-50",
//       description: "JavaScript con tipado estático",
//     },
//     {
//       name: "Tailwind",
//       icon: SiTailwindcss,
//       color: "from-cyan-400 to-cyan-600",
//       bgColor: "bg-cyan-50",
//       description: "Framework CSS utility-first",
//     },
//     {
//       name: "Node.js",
//       icon: SiNodedotjs,
//       color: "from-green-500 to-green-700",
//       bgColor: "bg-green-50",
//       description: "Runtime JavaScript en el servidor",
//     },
//     {
//       name: "WordPress",
//       icon: SiWordpress,
//       color: "from-blue-400 to-blue-600",
//       bgColor: "bg-blue-50",
//       description: "CMS para desarrollo web",
//     },
//     {
//       name: "JavaScript",
//       icon: SiJavascript,
//       color: "from-yellow-400 to-yellow-600",
//       bgColor: "bg-yellow-50",
//       description: "Lenguaje de programación web",
//     },
//     {
//       name: "HTML5",
//       icon: SiHtml5,
//       color: "from-orange-500 to-orange-700",
//       bgColor: "bg-orange-50",
//       description: "Marcado para estructura web",
//     },
//     {
//       name: "CSS3",
//       icon: SiCss3,
//       color: "from-blue-400 to-blue-600",
//       bgColor: "bg-blue-50",
//       description: "Estilos para diseño web",
//     },
//     {
//       name: "Git",
//       icon: SiGit,
//       color: "from-orange-500 to-orange-700",
//       bgColor: "bg-orange-50",
//       description: "Control de versiones",
//     },
//     {
//       name: "GitHub",
//       icon: SiGithub,
//       color: "from-gray-700 to-gray-900",
//       bgColor: "bg-gray-50",
//       description: "Plataforma de desarrollo colaborativo",
//     },
//     {
//       name: "Figma",
//       icon: SiFigma,
//       color: "from-purple-400 to-purple-600",
//       bgColor: "bg-purple-50",
//       description: "Diseño de interfaces y prototipado",
//     },
//   ];

//   return (
//     <section className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border border-gray-200/50 overflow-hidden">
//       {/* Elementos decorativos de fondo */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#aa60c8]/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
//       <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

//       <div className="relative z-10">
//         {/* Encabezado */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">
//             {t("title")}
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             {t("subtitle")}
//           </p>
//         </div>

//         {/* Tech Stack Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {technologies.map((tech) => {
//             const Icon = tech.icon;
//             const isHovered = hoveredTech === tech.name;

//             return (
//               <div
//                 key={tech.name}
//                 className="relative"
//                 onMouseEnter={() => setHoveredTech(tech.name)}
//                 onMouseLeave={() => setHoveredTech(null)}
//               >
//                 {/* Tarjeta principal */}
//                 <div
//                   className={`${tech.bgColor} rounded-2xl p-4 border border-gray-200/50 shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
//                 >
//                   {/* Icono con gradiente */}
//                   <div className="relative mb-3">
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-xl blur opacity-20`}
//                     ></div>
//                     <div className="relative flex items-center justify-center">
//                       <Icon
//                         className={`w-8 h-8 bg-gradient-to-br ${tech.color} bg-clip-text text-transparent`}
//                       />
//                       vvvv
//                     </div>
//                   </div>

//                   {/* Nombre */}
//                   <span className="font-semibold text-gray-800 block text-center text-sm">
//                     {tech.name}
//                   </span>
//                 </div>

//                 {/* Tooltip/Descripción */}
//                 {isHovered && (
//                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20">
//                     <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
//                       {tech.description}ffff
//                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Sección de nivel de experiencia */}
//         {/* <div className="mt-12 pt-8 border-t border-gray-200/50">
//           <div className="text-center">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Nivel de Experiencia
//             </h3>
//             <div className="flex flex-col md:flex-row items-center justify-center gap-6">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 <span className="text-sm text-gray-600">Avanzado</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//                 <span className="text-sm text-gray-600">Intermedio</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <span className="text-sm text-gray-600">Básico</span>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {/* Footer */}
//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-500">
//             Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useTranslations } from "next-intl";
// import {
//   SiNextdotjs,
//   SiNodedotjs,
//   SiReact,
//   SiTailwindcss,
//   SiTypescript,
//   SiWordpress,
// } from "react-icons/si";

// export default function TechStack() {
//   const t = useTranslations("Home.tech");

//   const technologies = [
//     {
//       name: "React",
//       icon: SiReact,
//       color: "bg-blue-50 text-blue-600",
//       iconColor: "text-blue-500",
//     },
//     {
//       name: "Next.js",
//       icon: SiNextdotjs,
//       color: "bg-gray-50 text-gray-900",
//       iconColor: "text-gray-700",
//     },
//     {
//       name: "TypeScript",
//       icon: SiTypescript,
//       color: "bg-blue-50 text-blue-700",
//       iconColor: "text-blue-600",
//     },
//     {
//       name: "Tailwind",
//       icon: SiTailwindcss,
//       color: "bg-cyan-50 text-cyan-700",
//       iconColor: "text-cyan-500",
//     },
//     {
//       name: "Node.js",
//       icon: SiNodedotjs,
//       color: "bg-green-50 text-green-700",
//       iconColor: "text-green-600",
//     },
//     {
//       name: "WordPress",
//       icon: SiWordpress,
//       color: "bg-blue-50 text-blue-700",
//       iconColor: "text-blue-500",
//     },
//   ];

//   return (
//     <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
//       <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
//         {t("title")}
//       </h2>
//       <p className="text-gray-600 text-center mb-6">{t("subtitle")}</p>
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {technologies.map((tech) => {
//           const Icon = tech.icon;
//           return (
//             <div key={tech.name} className="text-center">
//               <div
//                 className={`${tech.color} rounded-xl p-4 font-semibold hover-lift cursor-pointer flex flex-col items-center gap-2`}
//               >
//                 <Icon className={`w-6 h-6 ${tech.iconColor}`} />

//                 <span>{tech.name}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

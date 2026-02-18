"use client";

import { useTranslations } from "next-intl";
import { technologies } from "./data";

export default function SimpleTechStack() {
  const t = useTranslations("Home.tech");

  // const technologies = [
  //   {
  //     name: "React",
  //     icon: SiReact,
  //     color: "bg-blue-50 border-blue-200 text-blue-700",
  //     iconColor: "text-blue-600",
  //   },
  //   {
  //     name: "Next.js",
  //     icon: SiNextdotjs,
  //     color: "bg-gray-50 border-gray-200 text-gray-800",
  //     iconColor: "text-gray-700",
  //   },
  //   {
  //     name: "TypeScript",
  //     icon: SiTypescript,
  //     color: "bg-blue-50 border-blue-200 text-blue-700",
  //     iconColor: "text-blue-600",
  //   },
  //   {
  //     name: "Tailwind",
  //     icon: SiTailwindcss,
  //     color: "bg-cyan-50 border-cyan-200 text-cyan-700",
  //     iconColor: "text-cyan-500",
  //   },
  //   {
  //     name: "Node.js",
  //     icon: SiNodedotjs,
  //     color: "bg-green-50 border-green-200 text-green-700",
  //     iconColor: "text-green-600",
  //   },
  //   {
  //     name: "WordPress",
  //     icon: SiWordpress,
  //     color: "bg-blue-50 border-blue-200 text-blue-700",
  //     iconColor: "text-blue-500",
  //   },
  // ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 relative overflow-hidden">
      {/* linea arriba */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#574964] to-[#574964]"></div>
      {/* linea esquina */}
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#574964]"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#574964]"></div>
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <div className="w-2 h-8 bg-[#574964] rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">{t("title")}</h2>
          <div className="w-2 h-8 bg-[#574964] rounded-full"></div>
        </div>
        <p className="text-[#574964]">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className={`${tech.color} rounded-xl p-4 border flex flex-col items-center justify-center gap-3 transition-all hover:border-[#aa60c8]/30 hover:shadow-md`}
            >
              <div className="relative">
                <Icon className={`w-7 h-7 ${tech.iconColor}`} />
                <div className="absolute -inset-1  rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="font-semibold  text-sm">{tech.name}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <p className="text-sm text-">
          Tecnologías principales con las que trabajo diariamente
          <span className="text-[#574964] font-medium ml-1">#TechStack</span>
        </p>
      </div>
    </section>
  );
}

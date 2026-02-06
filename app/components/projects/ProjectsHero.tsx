"use client";

import { ProjectsHeroProps } from "@/app/ts/projets";
import { useTranslations } from "next-intl";

export default function ProjectsHero({
  totalProjects,
  totalTechnologies,
  showingProjects,
}: ProjectsHeroProps) {
  const t = useTranslations("Projects.hero");

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white py-12 md:py-16 rounded-2xl mx-4 md:mx-8 lg:mx-12">
      {/* Elemento decorativo simple */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#aa60c8]/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido principal */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">
              {t("title")}
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-300">
              {t("description")}
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-[#aa60c8] to-[#ca80e8] rounded-full mx-auto mt-4"></div>
          </div>
        </div>

        {/* Stats Bar simple y elegante */}
        <div className="mt-8 bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Total Projects */}
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {totalProjects}
              </div>
              <div className="text-sm text-gray-300">{t("stats.total")}</div>
            </div>
            
            {/* Separador */}
            <div className="hidden md:block w-px h-12 bg-gray-700 rounded-full" />
            
            {/* Total Technologies */}
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {totalTechnologies}
              </div>
              <div className="text-sm text-gray-300">
                {t("stats.technologies")}
              </div>
            </div>
            
            {/* Separador */}
            <div className="hidden md:block w-px h-12 bg-gray-700 rounded-full" />
            
            {/* Showing Projects */}
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {showingProjects}
              </div>
              <div className="text-sm text-gray-300">{t("stats.showing")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

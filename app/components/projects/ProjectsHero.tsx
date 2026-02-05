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
    <div className="bg-linear-to-r from-[#aa60c8] to-[#030000] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {totalProjects}
              </div>
              <div className="text-sm text-blue-100">{t("stats.total")}</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {totalTechnologies}
              </div>
              <div className="text-sm text-blue-100">
                {t("stats.technologies")}
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {showingProjects}
              </div>
              <div className="text-sm text-blue-100">{t("stats.showing")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

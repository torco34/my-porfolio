"use client";

import { SkillByLevel } from "@/app/data/dataAbout";
import { useTranslations } from "next-intl";

export default function StatsCard({ skills }: { skills: SkillByLevel[] }) {
  const t = useTranslations("About.skills");

  // Filtrar habilidades por nivel
  const advancedSkills = skills.filter((skill) => skill.level === "avanzado");
  const intermediateSkills = skills.filter((skill) => skill.level === "medio");
  const basicSkills = skills.filter((skill) => skill.level === "básico");

  return (
    <div className="bg-linear-to-r  bg-[#574964] rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-6">{t("stats.title")}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold">{skills.length}</div>
          <div className="text-purple-200 text-sm">{t("stats.total")}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{advancedSkills.length}</div>
          <div className="text-purple-200 text-sm">{t("stats.advanced")}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{intermediateSkills.length}</div>
          <div className="text-purple-200 text-sm">
            {t("stats.intermediate")}
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{basicSkills.length}</div>
          <div className="text-purple-200 text-sm">{t("stats.basic")}</div>
        </div>
      </div>
    </div>
  );
}

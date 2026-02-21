"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";
import { ExperienceStatsProps } from "@/app/ts/experiences";
import { Award, Briefcase, Calendar, Code } from "lucide-react";

export default function ExperienceStats({ stats }: ExperienceStatsProps) {
  const translations = useExperienceTranslations();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center color-texto justify-center gap-2 mb-2">
              <Calendar className="w-6 h-6 " />
              <div className="text-3xl font-bold">{stats.totalYears}+</div>
            </div>
            <div className="text-sm text-gray-600">
              {translations.hero.stats.years}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center color-texto justify-center gap-2 mb-2">
              <Briefcase className="w-6 h-6 " />
              <div className="text-3xl font-bold text-gray-900">
                {stats.totalProjects}+
              </div>
            </div>
            <div className="text-sm ">{translations.hero.stats.projects}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center color-texto justify-center gap-2 mb-2">
              <Award className="w-6 h-6" />
              <div className="text-3xl font-bold text-gray-900">
                {stats.totalAchievements}
              </div>
            </div>
            <div className="text-sm">
              {translations.hero.stats.achievements}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center color-texto justify-center gap-2 mb-2">
              <Code className="w-6 h-6" />
              <div className="text-3xl font-bold text-gray-900">
                {stats.skillsCount}
              </div>
            </div>
            <div className="text-sm ">{translations.hero.stats.skills}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

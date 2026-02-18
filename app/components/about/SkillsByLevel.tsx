"use client";

import {
  CheckCircle,
  Circle,
  Code,
  Star,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface SkillByLevel {
  name: string;
  level: "básico" | "medio" | "avanzado";
  category: "frontend" | "tools" | "soft";
}

interface SkillsByLevelProps {
  skills: SkillByLevel[];
}

export default function SkillsByLevel({ skills }: SkillsByLevelProps) {
  const t = useTranslations("About.skills");

  // Filtrar habilidades por nivel
  const advancedSkills = skills.filter((skill) => skill.level === "avanzado");
  const intermediateSkills = skills.filter((skill) => skill.level === "medio");
  const basicSkills = skills.filter((skill) => skill.level === "básico");

  // Filtrar habilidades por categoría
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend",
  );
  const toolSkills = skills.filter((skill) => skill.category === "tools");
  const softSkills = skills.filter((skill) => skill.category === "soft");

  // Función para obtener el color según el nivel
  const getLevelColor = (level: "básico" | "medio" | "avanzado") => {
    switch (level) {
      case "avanzado":
        return "bg-gradient-to-r from-purple-600 to-purple-700 text-white";
      case "medio":
        return "bg-gradient-to-r from-purple-400 to-purple-500 text-white";
      case "básico":
        return "bg-gradient-to-r from-purple-200 to-purple-300 text-purple-800";
    }
  };

  // Función para obtener el icono según el nivel
  const getLevelIcon = (level: "básico" | "medio" | "avanzado") => {
    switch (level) {
      case "avanzado":
        return <Star className="w-4 h-4" />;
      case "medio":
        return <Target className="w-4 h-4" />;
      case "básico":
        return <Circle className="w-4 h-4" />;
    }
  };

  // Función para obtener el icono según la categoría
  const getCategoryIcon = (category: "frontend" | "tools" | "soft") => {
    switch (category) {
      case "frontend":
        return <Code className="w-5 h-5" />;
      case "tools":
        return <Wrench className="w-5 h-5" />;
      case "soft":
        return <Users className="w-5 h-5" />;
    }
  };

  // Componente para mostrar una tarjeta de nivel
  const LevelCard = ({
    title,
    skills,
    level,
  }: {
    title: string;
    skills: SkillByLevel[];
    level: "básico" | "medio" | "avanzado";
  }) => (
    <div className="bg-white w-full  rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div
          className={`px-3 py-1 rounded-full ${getLevelColor(level)} text-sm font-medium flex items-center gap-2`}
        >
          {getLevelIcon(level)}
          <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
        </div>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="text-">{getCategoryIcon(skill.category)}</div>
              <span className="font-medium text-gray-900">{skill.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 capitalize">
                {skill.category}
              </span>
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Componente para mostrar estadísticas
  const StatsCard = () => (
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

  // Componente para mostrar distribución por categoría
  const CategoryDistribution = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        {t("categories.title")}
      </h3>
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-[#57]" />
              <span className="font-medium text-gray-900">
                {t("categories.frontend")}
              </span>
            </div>
            <span className="text-[#574964] font-bold">
              {frontendSkills.length}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#574964] rounded-full"
              style={{
                width: `${(frontendSkills.length / skills.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#574964] " />
              <span className="font-medium text-gray-900">
                {t("categories.tools")}
              </span>
            </div>
            <span className="text-[#574964] font-bold">
              {toolSkills.length}
            </span>
          </div>
          <div className="h-2 bg-[#574964]  rounded-full overflow-hidden">
            <div
              className="h-full text-[#574964]  rounded-full"
              style={{ width: `${(toolSkills.length / skills.length) * 100}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#574964]" />
              <span className="font-medium text-gray-900">
                {t("categories.soft")}
              </span>
            </div>
            <span className="text-[#574964] font-bold">
              {softSkills.length}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#574964]  rounded-full"
              style={{ width: `${(softSkills.length / skills.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Estadísticas y Distribución */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StatsCard />
        </div>
        <div>
          <CategoryDistribution />
        </div>
      </div>

      {/* Niveles de Habilidad */}
      <div className="flex grid-cols-1 lg:grid-cols-3 gap-6">
        <LevelCard
          title={t("levels.advanced")}
          skills={advancedSkills}
          level="avanzado"
        />

        {/* <LevelCard
          title={t("levels.intermediate")}
          skills={intermediateSkills}
          level="medio"
        /> */}

        {/* <LevelCard
          title={t("levels.basic")}
          skills={basicSkills}
          level="básico"
        /> */}
      </div>

      {/* Resumen por Categoría */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#574964] mb-6">
          {t("summary.title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-6 h-6 text-purple-600" />
              <h4 className="font-bold text-gray-900">
                {t("categories.frontend")}
              </h4>
            </div>
            <p className="text-gray-700 text-sm">{t("summary.frontend")}</p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Wrench className="w-6 h-6 text-purple-600" />
              <h4 className="font-bold text-gray-900">
                {t("categories.tools")}
              </h4>
            </div>
            <p className="text-gray-700 text-sm">{t("summary.tools")}</p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-purple-600" />
              <h4 className="font-bold text-gray-900">
                {t("categories.soft")}
              </h4>
            </div>
            <p className="text-gray-700 text-sm">{t("summary.soft")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

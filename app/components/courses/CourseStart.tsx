"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";
import { StatsGrid } from "../StatsGrid";
import { coursesStatsConfig } from "./data";

export type Stats = {
  totalCourses: number;
  completedCourses: number;
  totalHours: number;
  avgProgress: number;
};

type CourseStatsProps = {
  stats: Stats;
};

export default function CourseStats({ stats }: CourseStatsProps) {
  const translations = useExperienceTranslations();

  // Mapeamos los items del grid con sus valores
  const items = coursesStatsConfig.map((item) => {
    const value =
      item.key === "avgProgress" ?
        `${Math.round(stats.avgProgress)}%` // Formateamos avgProgress
      : `${stats[item.key]}${item.suffix ?? ""}`; // Usamos suffix si existe

    return {
      icon: item.icon,
      value,
      label: translations.courseStats[item.labelKey],
    };
  });

  return <StatsGrid items={items} />;
}

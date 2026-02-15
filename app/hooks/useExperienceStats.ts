import { useMemo } from "react";

import { experiencia } from "@/app/data/dataExperience";
import { type Experience } from "@/app/ts/experiences";

export function useExperienceStats(experiences: Experience[] = experiencia) {
  const stats = useMemo(() => {
    const totalYears = 2; // Based on experience periods
    const totalProjects = experiences.reduce(
      (sum, exp) => sum + (exp.projectsCount || 0),
      0,
    );
    const totalAchievements = experiences.reduce(
      (sum, exp) => sum + (exp.achievements?.length || 0),
      0,
    );
    const skillsCount = new Set(
      experiences.flatMap((exp) => exp.skills.map((s) => s.name)),
    ).size;

    return { totalYears, totalProjects, totalAchievements, skillsCount };
  }, [experiences]);

  return stats;
}

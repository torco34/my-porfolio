import { useMemo } from "react";
import { experiencia } from "@/app/data/dataExperience";
import { type Experience as DataExperience } from "@/app/ts/experiences";

export function useExperienceFilters(
  filterType: string,
  sortBy: "date" | "relevance",
  experiences: DataExperience[] = experiencia
) {
  const filteredExperiences = useMemo(() => {
    let filtered = experiences;

    // Apply type filter
    if (filterType !== "all") {
      filtered = filtered.filter((exp) => exp.type === filterType);
    }

    // Apply sorting
    if (sortBy === "date") {
      filtered = [...filtered].sort((a, b) => {
        const getYear = (period: string) => parseInt(period.split(" ")[0]);
        return getYear(b.period) - getYear(a.period);
      });
    } else {
      filtered = [...filtered].sort(
        (a, b) => (b.projectsCount || 0) - (a.projectsCount || 0)
      );
    }

    return filtered;
  }, [filterType, sortBy, experiences]);

  return filteredExperiences;
}
"use client";

import {
  ExperienceFilters,
  ExperienceSection,
  ExperienceStats,
} from "@/app/components/experience";
import { useExperienceFilters } from "@/app/hooks/useExperienceFilters";
import { useExperienceStats } from "@/app/hooks/useExperienceStats";
import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";
import { use, useState } from "react";

export default function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [filterType, setFilterType] = useState<string>("all");

  const { locale } = use(params);
  const translations = useExperienceTranslations();
  const filteredExperiences = useExperienceFilters(filterType, "date");
  const stats = useExperienceStats();

  return (
    <div className="min-h-screen bg-linear-to-b ">
      {/* <ExperienceHero /> */}
      <ExperienceStats stats={stats} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <ExperienceFilters
              filterType={filterType}
              filteredExperiences={filteredExperiences}
              onFilterChange={setFilterType}
            />
          </div>

          <ExperienceSection experiences={filteredExperiences} />
          {/* <ExperienceContent
            filteredExperiences={filteredExperiences}
            locale={locale}
          /> */}
        </div>
      </div>
    </div>
  );
}

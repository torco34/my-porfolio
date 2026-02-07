"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";
import { Briefcase } from "lucide-react";
import ExperienceCTA from "./ExperienceCTA";
import ExperienceSection from "./ExperienceSection";
import ExperienceSectionJSON from "./ExperienceSectionJSON";
import ExperienceTimelineHeader from "./ExperienceTimelineHeader";
import TimelineLegend from "./TimelineLegend";

interface ExperienceContentProps {
  useJSON: boolean;
  filteredExperiences: any[];
  locale: string;
}

export default function ExperienceContent({
  useJSON,
  filteredExperiences,
  locale,
}: ExperienceContentProps) {
  const translations = useExperienceTranslations();

  return (
    <div className="lg:w-3/4">
      <ExperienceTimelineHeader />
      {/* se muestra el contenido de la experiencia */}
      {useJSON ?
        <ExperienceSectionJSON locale={locale} />
      : filteredExperiences.length === 0 ?
        <div className="text-center py-12 bg-white rounded-xl shadow-lg">
          <div className="text-gray-400 mb-4">
            <Briefcase className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {translations.noResults.title} no se encontraron resultados
          </h3>
          <p className="text-gray-600">{translations.noResults.description}</p>
        </div>
      : <ExperienceSection experiences={filteredExperiences} />}

      <TimelineLegend />
      <ExperienceCTA />
    </div>
  );
}

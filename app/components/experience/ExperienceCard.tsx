"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";
import { ExperienceCardProps } from "@/app/ts/experiences";
import { useState } from "react";
import { ExperienceExpanded } from "./cardComponents/ExperienceExpanded";
import { ExperienceHeader } from "./cardComponents/ExperienceHeader";
import { ExperienceMeta } from "./cardComponents/ExperienceMeta";
import { getExperienceTypeConfig } from "./cardComponents/ExperienceTypeConfig";

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const translations = useExperienceTranslations();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const experienceTypeConfig = getExperienceTypeConfig(translations);

  const getTypeConfig = (type?: string) => {
    if (type && type in experienceTypeConfig) {
      return experienceTypeConfig[type as keyof typeof experienceTypeConfig];
    }
    return experienceTypeConfig.default;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <ExperienceHeader
          role={experience.role}
          company={experience.company}
          type={experience.type}
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          translations={translations}
          getTypeConfig={getTypeConfig}
        />

        <ExperienceMeta
          period={experience.period}
          location={experience.location}
          projectsCount={experience.projectsCount}
          translations={translations}
        />
      </div>

      <ExperienceExpanded
        experience={experience}
        translations={translations}
        isExpanded={isExpanded}
        showAllSkills={showAllSkills}
        setShowAllSkills={setShowAllSkills}
      />
    </div>
  );
}

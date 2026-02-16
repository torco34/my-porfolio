"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";

export default function ExperienceTimelineHeader() {
  const translations = useExperienceTranslations();

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {translations.timeline.title}{" "}
      </h2>
      <p className="text-gray-600">{translations.timeline.description}</p>
    </div>
  );
}

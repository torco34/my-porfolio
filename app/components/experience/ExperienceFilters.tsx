"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";
import { ExperienceFiltersProps } from "@/app/ts/experiences";
import { typeIconMap } from "./cardComponents/ExperienceTypeConfig";

export default function ExperienceFilters({
  filterType,
  onFilterChange,
}: ExperienceFiltersProps) {
  const translations = useExperienceTranslations();

  const getTypeIcon = (type: string) => {
    return typeIconMap[type as keyof typeof typeIconMap] || typeIconMap.default;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
      {/* filtro */}

      {/* Type Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">
          {translations.filters.experienceType}
        </h4>
        <div className="space-y-2">
          {["all", "professional", "freelance", "education"].map((type) => (
            <button
              key={type}
              onClick={() => onFilterChange(type)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                filterType === type ?
                  "bg-[#574964] text-white border border-[#574964]"
                : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-2">
                {type !== "all" && getTypeIcon(type)}
                <span className="capitalize">
                  {{
                    all: translations.filters.all,
                    professional: translations.filters.professional,
                    freelance: translations.filters.freelance,
                    education: translations.filters.education,
                  }[type] || type}
                </span>{" "}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

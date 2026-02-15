"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";
import {
  Award,
  Briefcase,
  Users,
} from "lucide-react";

interface ExperienceFiltersProps {
  filterType: string;
  filteredExperiences: unknown[];
  onFilterChange: (type: string) => void;
}

export default function ExperienceFilters({
  filterType,
  filteredExperiences,
  onFilterChange,
}: ExperienceFiltersProps) {
  const translations = useExperienceTranslations();
  const typeIconMap = {
    professional: <Briefcase className="w-4 h-4" />,
    freelance: <Users className="w-4 h-4" />,
    education: <Award className="w-4 h-4" />,
    default: <Briefcase className="w-4 h-4" />
  } as const;

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
                   "bg-blue-50 text-blue-700 border border-blue-200"
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
                       education: translations.filters.education
                     }[type] || type}
                   </span>
                </div>
             </button>
           ))}
         </div>
      </div>


    </div>
  );
}

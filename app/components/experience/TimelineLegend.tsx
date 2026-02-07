"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";

export default function TimelineLegend() {
  const translations = useExperienceTranslations();
  
  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
      <h4 className="font-semibold text-gray-900 mb-4">
        {translations.timeline.legend.title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <div>
            <div className="font-medium text-gray-900">
              {translations.content.types.professional}
            </div>
            <div className="text-sm text-gray-600">
              {translations.timeline.legend.professionalDescription}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
          <div>
            <div className="font-medium text-gray-900">
              {translations.content.types.freelance}
            </div>
            <div className="text-sm text-gray-600">
              {translations.timeline.legend.freelanceDescription}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div>
            <div className="font-medium text-gray-900">
              {translations.content.types.education}
            </div>
            <div className="text-sm text-gray-600">
              {translations.timeline.legend.educationDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
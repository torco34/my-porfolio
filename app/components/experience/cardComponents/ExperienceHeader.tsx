import { ChevronDown, ChevronUp } from "lucide-react";

import { experienceProps } from "@/app/ts/experiences";

export function ExperienceHeader({
  role,
  company,
  type,
  isExpanded,
  onToggle,
  translations,
  getTypeConfig,
}: experienceProps) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold text-gray-900">{role}</h3>

          {type && (
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getTypeConfig(type).color}`}
            >
              {getTypeConfig(type).icon}
              {getTypeConfig(type).label}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-lg text-gray-700 mb-4">
          <span className="font-medium">{company}</span>
        </div>
      </div>

      <button
        onClick={onToggle}
        className="flex items-center gap-2 color-texto font-medium"
      >
        {isExpanded ?
          <>
            <ChevronUp className="w-5 h-5 color-texto" />
            <span className="font-semibold">{translations.card.showLess}</span>
          </>
        : <>
            <ChevronDown className="w-5 h-5" />
            <span className="font-semibold">{translations.card.showMore}</span>
          </>
        }
      </button>
    </div>
  );
}

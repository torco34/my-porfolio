import { ElementType } from "react";

export interface Technology {
  name: string;
  icon?: ElementType;
}

interface TechBadgesProps {
  technologies: Technology[];
  max?: number;
  moreLabel: string; // texto traducido (ej: t("more"))
  className?: string;
}

export default function TechBadges({
  technologies,
  max = 4,
  moreLabel,
  className = "",
}: TechBadgesProps) {
  const visibleTechs = technologies.slice(0, max);
  const remaining = technologies.length - max;

  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex flex-wrap gap-2">
        {visibleTechs.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <span
              key={index}
              className="px-3 py-1.5 bg-linear-to-r from-gray-100 to-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-[#aa60c8]/30 transition-colors flex items-center gap-1.5"
            >
              {Icon && <Icon className="w-4 h-4" />}
              {tech.name}
            </span>
          );
        })}

        {remaining > 0 && (
          <span className="px-3 py-1.5 bg-linear-to-r from-[#aa60c8]/10 to-[#ca80e8]/10 text-[#574964] text-sm font-semibold rounded-lg border border-[#aa60c8]/20">
            +{remaining} {moreLabel}
          </span>
        )}
      </div>
    </div>
  );
}

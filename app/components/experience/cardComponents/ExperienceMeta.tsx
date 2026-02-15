import { Calendar, MapPin, Target } from "lucide-react";

type Props = {
  period: string;
  location?: string;
  projectsCount?: number;
  translations: any;
};

export function ExperienceMeta({
  period,
  location,
  projectsCount,
  translations,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Calendar className="w-4 h-4" />
        <span>{translations.card.period}:</span>
        <span className="font-medium text-gray-900">{period}</span>
      </div>

      {location && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{translations.card.location}:</span>
          <span className="font-medium text-gray-900">{location}</span>
        </div>
      )}

      {projectsCount && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Target className="w-4 h-4" />
          <span>
            {projectsCount} {translations.card.projectsCount}
          </span>
        </div>
      )}
    </div>
  );
}

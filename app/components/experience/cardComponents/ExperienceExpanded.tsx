import { Props } from "@/app/ts/experiences";
import { Award, Target, Zap } from "lucide-react";
import { ExperienceSkills } from "./ExperienceSkills";

export function ExperienceExpanded({
  experience,
  translations,
  isExpanded,
  showAllSkills,
  setShowAllSkills,
}: Props) {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isExpanded ? "max-h-250 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-4 py-3 bg-gray-50">
        <div className="space-y-3">
          <p className="text-sm text-gray-600">{experience.description}</p>

          <ExperienceSkills
            skills={experience.skills}
            translations={translations}
            showAllSkills={showAllSkills}
            onShowAll={() => setShowAllSkills(true)}
          />

          <div className="space-y-2">
            {experience.achievements && experience.achievements.length > 0 && (
              <div>
                <h5 className="text-sm font-medium text-gray-900 mb-1 flex items-center gap-1">
                  <Award className="w-3 h-3 color-texto" />
                  {translations.content.achievements}
                </h5>

                <ul className="space-y-1 pl-4">
                  {experience.achievements.map((a, i) => (
                    <li key={i} className="text-xs text-gray-600">
                      • {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.impact && (
              <div>
                <h5 className="text-sm font-medium text-gray-900 mb-1 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {translations.content.impact}
                </h5>
                <p className="text-xs text-gray-600">{experience.impact}</p>
              </div>
            )}

            {experience.projectsCount && (
              <div>
                <h5 className="text-sm font-medium text-gray-900 mb-1 flex items-center gap-1">
                  <Target className="w-3 h-3" />
                  {translations.card.projectsSummary}
                </h5>

                <div className="flex items-center gap-2">
                  <div className="text-lg font-bold text-gray-900">
                    {experience.projectsCount}
                  </div>
                  <div className="text-xs text-gray-600">
                    {translations.card.completedProjects}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

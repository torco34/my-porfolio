import React from "react";

type Skill = { icon: React.ElementType; name: string };

type Props = {
  skills: Skill[];
  translations: any;
  showAllSkills: boolean;
  onShowAll: () => void;
};

export function ExperienceSkills({
  skills,
  translations,
  showAllSkills,
  onShowAll,
}: Props) {
  const displayedSkills = showAllSkills ? skills : skills.slice(0, 4);

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-900 mb-2">
        {translations.card.skillsApplied}
      </h4>

      <div className="flex flex-wrap gap-1.5">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-1 px-2 py-1 bg-white rounded-md border border-gray-200"
          >
            <skill.icon className="w-3 h-3 color-texto" />
            <span className="text-xs font-medium text-gray-800">
              {skill.name}
            </span>
          </div>
        ))}

        {skills.length > 4 && !showAllSkills && (
          <button
            onClick={onShowAll}
            className="px-2 py-1 text-xs text-blue-600 hover:text-blue-700"
          >
            +{skills.length - 4} {translations.card.more}
          </button>
        )}
      </div>
    </div>
  );
}

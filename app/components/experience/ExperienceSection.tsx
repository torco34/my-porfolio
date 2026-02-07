"use client";

import ExperienceCard from "./ExperienceCard";

interface ExperienceSectionProps {
  experiences: any[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <div className="space-y-6">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

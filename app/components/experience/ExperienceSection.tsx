"use client";

import { ExperienceSectionProps } from "@/app/ts/experiences";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimelineHeader from "./ExperienceTimelineHeader";

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <div className="space-y-6">
      <ExperienceTimelineHeader />
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

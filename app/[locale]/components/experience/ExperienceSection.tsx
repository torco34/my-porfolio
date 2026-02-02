"use client";

import { Experience } from "@/app/data/dataExperience";
import { BriefcaseBusiness } from "lucide-react";

type ExperienceProps = {
  experiences: Experience[];
};

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section className="space-y-6 z-10">
      <h2 className="flex justify-center items-center gap-3 text-2xl font-bold text-gray-700">
        <BriefcaseBusiness className="text-[#aa60c8]" />
        Experiencia en Desarrollo Web
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="border border-[#aa60c8]/30 backgroundShow text-gray-500 rounded-xl p-6 transition"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-500">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {exp.role}
                </h3>
                <p className=" font-medium pb-3">{exp.company}</p>
                <p className=" font-medium">{exp.description}</p>
              </div>
              <span className="text-sm mt-2 background-text md:mt-0">
                {exp.period}
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap  gap-2 mt-4">
              {exp.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <span
                    key={skill.name}
                    className="px-3 py-1 text-xs rounded-full bg-box-shadow flex items-center gap-2 hover:scale-105 transition"
                  >
                    <Icon
                      size={16}
                      className="animate-bounce background-text"
                    />
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

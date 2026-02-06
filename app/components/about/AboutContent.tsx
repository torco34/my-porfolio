"use client";

import { Award, Calendar, ChevronRight, User } from "lucide-react";
import { useTranslations } from "next-intl";
import SkillsByLevel from "./SkillsByLevel";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Skill {
  name: string;
  level: number;
}

interface SkillsData {
  frontend: Skill[];
  tools: Skill[];
  softSkills: string[];
}

interface SkillByLevel {
  name: string;
  level: "básico" | "medio" | "avanzado";
  category: "frontend" | "tools" | "soft";
}

interface PersonalInfo {
  bio: string;
  about: string;
  philosophy: string;
}

interface AboutContentProps {
  personalInfo: PersonalInfo;
  experience: ExperienceItem[];
  skills: SkillsData;
  skillsByLevel: SkillByLevel[];
  education: EducationItem[];
  activeTab: "about" | "experience" | "skills" | "education";
}

export default function AboutContent({
  personalInfo,
  experience,
  skills,
  skillsByLevel,
  education,
  activeTab,
}: AboutContentProps) {
  const t = useTranslations("About.content");

  return (
    <div className="min-h-100">
      {activeTab === "about" && (
        <div className="space-y-8">
          <div className="bg-white  rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-gray-500" />
              {t("aboutMe")}
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {personalInfo.about}
              </p>
              <div className="bg-gray-50 border-l-4 border-[#574964] p-4 rounded-r-lg">
                <p className="text-gray-800 italic">
                  &quot;{personalInfo.philosophy}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "experience" && (
        <div className="space-y-8">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-400"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-700 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-gray-500" />
                  {t("achievements")}
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "skills" && <SkillsByLevel skills={skillsByLevel} />}

      {activeTab === "education" && (
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-400"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 font-medium">
                    {edu.institution}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

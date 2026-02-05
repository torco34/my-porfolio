"use client";

import { useState } from "react";
import { User, Briefcase, Code, GraduationCap, Award, ChevronRight, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

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

interface AboutContentProps {
  personalInfo: {
    bio: string;
    about: string;
    philosophy: string;
  };
  experience: ExperienceItem[];
  skills: SkillsData;
  education: EducationItem[];
}

export default function AboutContent({ personalInfo, experience, skills, education }: AboutContentProps) {
  const [activeTab, setActiveTab] = useState("experience");
  const t = useTranslations("About.content");

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <User className="w-6 h-6 text-blue-500" />
          {t("aboutMe")}
        </h2>
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {personalInfo.about}
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-gray-800 italic">
              "{personalInfo.philosophy}"
            </p>
          </div>
        </div>
      </div>

      <div className="flex border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab("experience")}
          className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
            activeTab === "experience"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Briefcase className="w-5 h-5" />
          {t("experience")}
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
            activeTab === "skills"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Code className="w-5 h-5" />
          {t("skills")}
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
            activeTab === "education"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          {t("education")}
        </button>
      </div>

      <div className="min-h-[400px]">
        {activeTab === "experience" && (
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-500" />
                    {t("achievements")}
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "skills" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t("technicalSkills")}</h3>
              <div className="space-y-6">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">{t("tools")}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">{t("softSkills")}</h4>
                <div className="space-y-3">
                  {skills.softSkills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-lg text-green-600 font-medium">{edu.institution}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mt-2 md:mt-0">
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
    </div>
  );
}
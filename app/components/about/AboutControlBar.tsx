"use client";

import { Briefcase, Code, GraduationCap } from "lucide-react";

interface AboutControlBarProps {
  activeTab: "experience" | "skills" | "education";
  onTabChange: (tab: "experience" | "skills" | "education") => void;
  experienceCount: number;
  skillsCount: number;
  educationCount: number;
}

export default function AboutControlBar({
  activeTab,
  onTabChange,
  experienceCount,
  skillsCount,
  educationCount,
}: AboutControlBarProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              Explorando{" "}
              <span className="font-semibold text-gray-900">
                {activeTab === "experience" && `${experienceCount} experiencias profesionales`}
                {activeTab === "skills" && `${skillsCount} habilidades técnicas`}
                {activeTab === "education" && `${educationCount} certificaciones`}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Tab Switcher */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => onTabChange("experience")}
                 className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === "experience"
                    ? "bg-white shadow-sm text-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Experiencia"
              >
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">Experiencia</span>
                <span className="sm:hidden">Exp</span>
              </button>
              <button
                onClick={() => onTabChange("skills")}
                 className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === "skills"
                    ? "bg-white shadow-sm text-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Habilidades"
              >
                <Code className="w-4 h-4" />
                <span className="hidden sm:inline">Habilidades</span>
                <span className="sm:hidden">Skills</span>
              </button>
              <button
                onClick={() => onTabChange("education")}
                 className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === "education"
                    ? "bg-white shadow-sm text-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Educación"
              >
                <GraduationCap className="w-4 h-4" />
                <span className="hidden sm:inline">Educación</span>
                <span className="sm:hidden">Edu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
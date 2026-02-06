"use client";

import { Briefcase, Code, GraduationCap, User } from "lucide-react";
import { useTranslations } from "next-intl";

interface AboutControlBarProps {
  activeTab: "about" | "experience" | "skills" | "education";
  onTabChange: (tab: "about" | "experience" | "skills" | "education") => void;
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
  const t = useTranslations("About.controlBar");

  return (
    <div className="bg-white  rounded-lg shadow-md p-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-600">
            {t("exploring")}{" "}
            <span className="font-medium text-gray-900">
              {activeTab === "about" && t("profile")}
              {activeTab === "experience" &&
                `${experienceCount} ${t("experiences")}`}
              {activeTab === "skills" && `${skillsCount} ${t("skills")}`}
              {activeTab === "education" &&
                `${educationCount} ${t("certifications")}`}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Tab Switcher */}
          <div className="flex bg-[#574964] rounded-md p-0.5">
            <button
              onClick={() => onTabChange("about")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-md transition-colors text-sm ${
                activeTab === "about" ?
                  "bg-white shadow-sm text-color font-medium"
                : "text-gray-100 hover:text-white"
              }`}
              aria-label={t("tabs.about")}
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">{t("tabs.about")}</span>
              <span className="sm:hidden">{t("tabs.aboutShort")}</span>
            </button>
            <button
              onClick={() => onTabChange("experience")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-md transition-colors text-sm ${
                activeTab === "experience" ?
                  "bg-white shadow-sm text-color font-medium"
                : "text-gray-100 hover:text-white"
              }`}
              aria-label={t("tabs.experience")}
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">{t("tabs.experience")}</span>
              <span className="sm:hidden">{t("tabs.experienceShort")}</span>
            </button>
            <button
              onClick={() => onTabChange("skills")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-md transition-colors text-sm ${
                activeTab === "skills" ?
                  "bg-white shadow-sm text-color font-medium"
                : "text-gray-100 hover:text-white"
              }`}
              aria-label={t("tabs.skills")}
            >
              <Code className="w-4 h-4 " />
              <span className="hidden sm:inline">{t("tabs.skills")}</span>
              <span className="sm:hidden">{t("tabs.skillsShort")}</span>
            </button>
            <button
              onClick={() => onTabChange("education")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-md transition-colors text-sm ${
                activeTab === "education" ?
                  "bg-white shadow-sm text-color font-medium"
                : "text-gray-100 hover:text-white"
              }`}
              aria-label={t("tabs.education")}
            >
              <GraduationCap className="w-4 h-4 " />
              <span className="hidden sm:inline">{t("tabs.education")}</span>
              <span className="sm:hidden">{t("tabs.educationShort")}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Experience } from "@/app/data/dataExperience";
import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";
import {
  Award,
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  Code,
  ExternalLink,
  MapPin,
  Star,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ExperienceCardProps {
  experience: Experience & {
    type?: "professional" | "freelance" | "education";
    location?: string;
    achievements?: string[];
    impact?: string;
    projectsCount?: number;
  };
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const translations = useExperienceTranslations();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const getTypeColor = (type?: string) => {
    switch (type) {
      case "professional":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "freelance":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "education":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case "professional":
        return <Briefcase className="w-4 h-4" />;
      case "freelance":
        return <Code className="w-4 h-4" />;
      case "education":
        return <Award className="w-4 h-4" />;
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  const displayedSkills =
    showAllSkills ? experience.skills : experience.skills.slice(0, 4);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-gray-900">
                {experience.role}
              </h3>
              {experience.type && (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getTypeColor(
                    experience.type,
                  )}`}
                >
                  {getTypeIcon(experience.type)}
                  {experience.type === "professional" ?
                    translations.content.types.professional
                  : experience.type === "freelance" ?
                    translations.content.types.freelance
                  : translations.content.types.education}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-lg text-gray-700 mb-4">
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            {isExpanded ?
              <>
                <ChevronUp className="w-5 h-5" />
                <span className="font-semibold">
                  {translations.card.showLess}
                </span>
              </>
            : <>
                <ChevronDown className="w-5 h-5" />
                <span className="font-semibold">
                  {translations.card.showMore}
                </span>
              </>
            }
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{translations.card.period}:</span>
            <span className="font-medium text-gray-900">
              {experience.period}
            </span>
          </div>
          {experience.location && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{translations.card.location}:</span>
              <span className="font-medium text-gray-900">
                {experience.location}
              </span>
            </div>
          )}
          {experience.projectsCount && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Target className="w-4 h-4" />
              <span>
                {experience.projectsCount} {translations.card.projectsCount}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6 bg-gray-50">
          <div className="space-y-6">
            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                {translations.card.skillsApplied}
              </h4>
              <div className="flex flex-wrap gap-2">
                {displayedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200"
                  >
                    <skill.icon className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">
                      {skill.name}
                    </span>
                  </div>
                ))}
                {experience.skills.length > 4 && !showAllSkills && (
                  <button
                    onClick={() => setShowAllSkills(true)}
                    className="px-3 py-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    +{experience.skills.length - 4} {translations.card.more}
                  </button>
                )}
              </div>
            </div>

            {/* Details Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience Details */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  {translations.card.experienceDetails}
                </h5>
                <div className="space-y-3">
                  <div>
                    <h6 className="font-medium text-gray-900 mb-1">
                      {translations.card.skillsApplied}
                    </h6>
                    <ul className="space-y-1">
                      {experience.skills.slice(0, 3).map((skill, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          • {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              {experience.achievements &&
                experience.achievements.length > 0 && (
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {translations.content.achievements}
                    </h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Impact */}
              {experience.impact && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    {translations.content.impact}
                  </h5>
                  <p className="text-sm text-gray-600">{experience.impact}</p>
                </div>
              )}

              {/* Projects Summary */}
              {experience.projectsCount && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    {translations.card.projectsSummary}
                  </h5>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {experience.projectsCount}
                    </div>
                    <div className="text-sm text-gray-600">
                      {translations.card.completedProjects}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Related Projects */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <h5 className="font-semibold text-gray-900">
                  {translations.card.viewRelatedProjects}
                </h5>
                <Link
                  href="/projects"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <span>View all</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {isExpanded ?
                translations.card.viewLess
              : translations.card.viewDetails}
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {experience.type === "professional" ?
              translations.content.types.professional
            : experience.type === "freelance" ?
              translations.content.types.freelance
            : translations.content.types.education}
          </div>
        </div>
      </div>
    </div>
  );
}

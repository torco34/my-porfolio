"use client";

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

interface ExperienceCardJSONProps {
  experience: {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    type?: "professional" | "freelance" | "education";
    location?: string;
    achievements?: string[];
    impact?: string;
    projectsCount?: number;
    skills: string[];
  };
  translations: {
    showLess: string;
    showMore: string;
    experienceDetails: string;
    skillsApplied: string;
    location: string;
    period: string;
    projectsCount: string;
    viewLess: string;
    viewDetails: string;
    more: string;
    achievements: string;
    impactGenerated: string;
    projectsSummary: string;
    completedProjects: string;
    viewRelatedProjects: string;
  };
}

export default function ExperienceCardJSON({
  experience,
  translations,
}: ExperienceCardJSONProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const typeConfig = {
    professional: {
      label: "Profesional",
      color: "bg-blue-100 text-blue-700 border-blue-200",
      icon: <Briefcase className="w-4 h-4" />,
    },
    freelance: {
      label: "Freelance",
      color: "bg-purple-100 text-purple-700 border-purple-200",
      icon: <Briefcase className="w-4 h-4" />,
    },
    education: {
      label: "Educación",
      color: "bg-green-100 text-green-700 border-green-200",
      icon: <Award className="w-4 h-4" />,
    },
  } as const;

  const config = typeConfig[experience.type as keyof typeof typeConfig] ?? {
    label: "Experiencia",
    color: "bg-gray-100 text-gray-700 border-gray-200",
    icon: <Briefcase className="w-4 h-4" />,
  };

  const getTypeColor = (type?: string) => {
    switch (type) {
      case "professional":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "freelance":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "education":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case "professional":
        return <Briefcase className="w-4 h-4" />;
      case "freelance":
        return <Briefcase className="w-4 h-4" />;
      case "education":
        return <Award className="w-4 h-4" />;
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type?: string) => {
    switch (type) {
      case "professional":
        return "Profesional";
      case "freelance":
        return "Freelance";
      case "education":
        return "Educación";
      default:
        return "Experiencia";
    }
  };

  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#aa60c8]/5 rounded-full blur-2xl group-hover:bg-[#aa60c8]/10 transition-all duration-500" />

      <div className="p-7">
        <div className="flex justify-between items-start mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(experience.type)}`}
              >
                {/* {typeConfig.education}
                {typeConfig} */}
              </span>
              <span className="text-sm text-gray-500">
                ID: #{experience.id}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8a40a8] transition-colors duration-300">
              {experience.role}kmkk
            </h3>
            <p className="text-lg text-blue-600 font-medium mt-1">
              {experience.company}
            </p>

            <div className="h-1 w-12 bg-gradient-to-r from-[#aa60c8] to-[#ca80e8] rounded-full mt-3 mb-4"></div>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {translations.period}: {experience.period}
                </span>
              </div>
              {experience.location && (
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">
                    {translations.location}: {experience.location}
                  </span>
                </div>
              )}
              {experience.projectsCount !== undefined && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm">
                    {experience.projectsCount} {translations.projectsCount}
                  </span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 p-2.5 bg-gray-100 hover:bg-[#aa60c8]/10 rounded-xl transition-all duration-300 group-hover:scale-110"
            aria-label={
              isExpanded ? translations.showLess : translations.showMore
            }
          >
            {isExpanded ?
              <ChevronUp className="w-5 h-5 text-[#aa60c8]" />
            : <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-[#aa60c8]" />
            }
          </button>
        </div>

        <p className="text-gray-700 mb-6 line-clamp-2 leading-relaxed">
          {experience.description}
        </p>

        <div className="mb-7">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-500" />
            {translations.skillsApplied}
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-[#aa60c8]/30 transition-colors"
              >
                <Code className="w-4 h-4" />
                {skill}
              </span>
            ))}
            {experience.skills.length > 4 && (
              <span className="px-3 py-1.5 bg-gradient-to-r from-[#aa60c8]/10 to-[#ca80e8]/10 text-[#8a40a8] text-sm font-semibold rounded-lg border border-[#aa60c8]/20">
                +{experience.skills.length - 4} {translations.more}
              </span>
            )}
          </div>
        </div>

        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-100 animate-fade-in">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#aa60c8] rounded-full"></div>
              {translations.experienceDetails}
            </h4>
            <p className="text-gray-700 mb-6 leading-relaxed bg-gray-50 p-4 rounded-xl">
              {experience.description}
            </p>

            <div className="mb-6">
              <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#ca80e8] rounded-full"></div>
                {translations.skillsApplied}
              </h5>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-linear-to-r from-[#aa60c8]/5 to-[#ca80e8]/5 text-[#8a40a8] text-sm font-medium rounded-lg border border-[#aa60c8]/20 hover:bg-[#aa60c8]/10 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {experience.achievements && experience.achievements.length > 0 && (
              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-500" />
                  {translations.achievements}
                </h5>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.impact && (
              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  {translations.impactGenerated}
                </h5>
                <p className="text-gray-700 bg-purple-50 p-4 rounded-lg">
                  {experience.impact}
                </p>
              </div>
            )}

            {experience.projectsCount !== undefined && (
              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  {translations.projectsSummary}
                </h5>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {experience.projectsCount}
                      </div>
                      <div className="text-sm text-gray-600">
                        {translations.completedProjects}
                      </div>
                    </div>
                    <Link
                      href="/projects"
                      className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {translations.viewRelatedProjects}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex gap-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              {isExpanded ?
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span className="font-semibold">{translations.showLess}</span>
                </>
              : <>
                  <ChevronDown className="w-4 h-4" />
                  <span className="font-semibold">{translations.showMore}</span>
                </>
              }
            </button>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#aa60c8] hover:text-[#8a40a8] font-semibold text-sm flex items-center gap-1 group/btn"
          >
            {isExpanded ?
              <>
                {translations.viewLess}
                <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
              </>
            : <>
                {translations.viewDetails}
                <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
              </>
            }
          </button>
        </div>
      </div>
    </div>
  );
}

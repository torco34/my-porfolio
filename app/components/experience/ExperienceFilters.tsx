"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";
import {
  Award,
  Briefcase,
  Calendar,
  Code,
  Link,
  TrendingUp,
  Users,
} from "lucide-react";

interface ExperienceFiltersProps {
  filterType: string;
  sortBy: "date" | "relevance";
  useJSON: boolean;
  filteredExperiences: unknown[];
  onFilterChange: (type: string) => void;
  onSortChange: (sort: "date" | "relevance") => void;
  onDataSourceChange: (useJSON: boolean) => void;
}

export default function ExperienceFilters({
  filterType,
  sortBy,
  useJSON,
  filteredExperiences,
  onFilterChange,
  onSortChange,
  onDataSourceChange,
}: ExperienceFiltersProps) {
  const translations = useExperienceTranslations();
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "professional":
        return <Briefcase className="w-4 h-4" />;
      case "freelance":
        return <Users className="w-4 h-4" />;
      case "education":
        return <Award className="w-4 h-4" />;
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
      {/* filtro */}

      {/* Type Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">
          {translations.filters.experienceType}
        </h4>
        <div className="space-y-2">
          {["all", "professional", "freelance", "education"].map((type) => (
            <button
              key={type}
              onClick={() => onFilterChange(type)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                filterType === type ?
                  "bg-blue-50 text-blue-700 border border-blue-200"
                : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-2">
                {type !== "all" && getTypeIcon(type)}
                <span className="capitalize">
                  {type === "all" ?
                    translations.filters.all
                  : type === "professional" ?
                    translations.filters.professional
                  : type === "freelance" ?
                    translations.filters.freelance
                  : translations.filters.education}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">
          {translations.sort.title}
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => onSortChange("date")}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              sortBy === "date" ?
                "bg-[#f0f9ff] text-[#574964] border border-[#f0f9ff]"
              : "text-[#574964] hover:bg-gray-00"
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{translations.sort.date}</span>
            </div>
          </button>
          <button
            onClick={() => onSortChange("relevance")}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              sortBy === "relevance" ?
                "bg-blue-50 text-blue-700 border border-blue-200"
              : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>{translations.sort.relevance}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Data Source Toggle */}
      <div className="mb-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">
          {translations.dataSource.title}
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => onDataSourceChange(false)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              !useJSON ?
                "bg-blue-50 text-blue-700 border border-blue-200"
              : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>{translations.dataSource.static}</span>
            </div>
          </button>
          <button
            onClick={() => onDataSourceChange(true)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              useJSON ?
                "bg-green-50 text-green-700 border border-green-200"
              : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Link className="w-4 h-4" />
              <span>{translations.dataSource.dynamic}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">
          {translations.summary.title}
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              {translations.summary.experiencesShown}
            </span>
            <span className="font-semibold text-gray-900">
              {useJSON ? "Cargando..." : filteredExperiences.length}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              {translations.summary.activeFilter}
            </span>
            <span className="font-semibold text-gray-900 capitalize">
              {filterType === "all" ? translations.filters.all : filterType}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              {translations.summary.source}
            </span>
            <span className="font-semibold text-gray-900">
              {useJSON ? "JSON" : "TypeScript"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

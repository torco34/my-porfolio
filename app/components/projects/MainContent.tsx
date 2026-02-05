"use client";

import { Search, X } from "lucide-react";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import { Project } from "@/app/ts/projets";

interface MainContentProps {
  showFilters: boolean;
  viewMode: "grid" | "list";
  filteredProjects: Project[];
  allTechnologies: string[];
  selectedTechs: string[];
  searchTerm: string;
  onToggleTech: (tech: string) => void;
  onClearFilters: () => void;
  onSearchChange: (value: string) => void;
}

export default function MainContent({
  showFilters,
  viewMode,
  filteredProjects,
  allTechnologies,
  selectedTechs,
  searchTerm,
  onToggleTech,
  onClearFilters,
  onSearchChange,
}: MainContentProps) {
  const t = useTranslations("Projects.mainContent");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t("filters.title")}
                </h3>
                <button
                  onClick={onClearFilters}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                >
                  <X className="w-4 h-4" />
                  {t("filters.clear")}
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("filters.search")}
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder={t("filters.searchPlaceholder")}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Technologies Filter */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">
                  {t("filters.technologies")}
                </h4>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                  {allTechnologies.map((tech) => (
                    <label
                      key={tech}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTechs.includes(tech)}
                        onChange={() => onToggleTech(tech)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{tech}</span>
                      <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {
                          filteredProjects.filter((p) =>
                            p.technologies.includes(tech),
                          ).length
                        }
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Selected Filters */}
              {selectedTechs.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    {t("filters.activeFilters")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTechs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tech}
                        <button
                          onClick={() => onToggleTech(tech)}
                          className="hover:text-blue-900"
                          aria-label={`Quitar filtro ${tech}`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Projects Grid/List */}
        <div className={`${showFilters ? "lg:w-3/4" : "w-full"}`}>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("noResults.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("noResults.description")}
              </p>
              <button
                onClick={onClearFilters}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("noResults.clearFilters")}
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-6"
              }
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
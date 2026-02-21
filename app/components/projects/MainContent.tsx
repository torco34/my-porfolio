"use client";

import { Project } from "@/app/ts/projets";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";

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
  viewMode,
  filteredProjects,
  onClearFilters,
}: MainContentProps) {
  const t = useTranslations("Projects.mainContent");
  const tCard = useTranslations("Projects.card");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}

        {/* Projects Grid/List */}
        <div className="w-full">
          {filteredProjects.length === 0 ?
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                {/* <Search className="w-16 h-16 mx-auto" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("noResults.title")}
              </h3>
              <p className="text-gray-600 mb-6">{t("noResults.description")}</p>
              <button
                onClick={onClearFilters}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("noResults.clearFilters")}
              </button>
            </div>
          : <div
              className={
                viewMode === "grid" ?
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-6"
              }
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  translations={{
                    techs: tCard("techs"),
                    showLess: tCard("showLess"),
                    showMore: tCard("showMore"),
                    more: tCard("more"),
                    projectDetails: tCard("projectDetails"),
                    technologiesUsed: tCard("technologiesUsed"),
                    code: tCard("code"),
                    demo: tCard("demo"),
                    viewLess: tCard("viewLess"),
                    viewDetails: tCard("viewDetails"),
                  }}
                />
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

"use client";

import { ControlBarProps } from "@/app/ts/projets";
import { useTranslations } from "next-intl";

export default function ControlBar({
  filteredProjects,
  selectedCategory,
  onCategoryChange,
}: ControlBarProps) {
  const t = useTranslations("Projects.mainContent.results");
  const tFilters = useTranslations("Projects.mainContent.filters");

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-row justify-between items-center gap-4">
          {/* Izquierda */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600">
              {t("showing")}{" "}
              <span className="font-semibold text-[#574964]">
                {filteredProjects}
              </span>{" "}
              {filteredProjects === 1 ? t("project") : t("projects")}
              {selectedCategory && (
                <>
                  en <span className="font-medium">{selectedCategory}</span>
                </>
              )}
            </p>
          </div>

          {/* Derecha */}
          <div className="flex">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="px-3 py-1.5 border rounded-md text-sm bg-white text-[#574964] focus:outline-none focus:ring-2 focus:ring-[#574964]"
            >
              <option value="">{tFilters("title")}</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Vanilla">Vanilla</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

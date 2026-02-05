"use client";

import { Filter, Grid, List } from "lucide-react";

interface ControlBarProps {
  filteredProjects: number;
  totalProjects: number;
  selectedTechs: string[];
  viewMode: "grid" | "list";
  showFilters: boolean;
  onViewModeChange: (mode: "grid" | "list") => void;
  onToggleFilters: () => void;
}

export default function ControlBar({
  filteredProjects,
  totalProjects,
  selectedTechs,
  viewMode,
  showFilters,
  onViewModeChange,
  onToggleFilters,
}: ControlBarProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              Mostrando{" "}
              <span className="font-semibold text-gray-900">
                {filteredProjects}
              </span>{" "}
              de{" "}
              <span className="font-semibold text-gray-900">
                {totalProjects}
              </span>{" "}
              proyectos
              {selectedTechs.length > 0 && (
                <span>
                  {" "}
                  filtrados por{" "}
                  <span className="font-semibold text-gray-900">
                    {selectedTechs.join(", ")}
                  </span>
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => onViewModeChange("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid"
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Vista en cuadrícula"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => onViewModeChange("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list"
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Vista en lista"
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={onToggleFilters}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                showFilters || selectedTechs.length > 0
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Filter className="w-4 h-4" />
              Filtros
              {selectedTechs.length > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedTechs.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
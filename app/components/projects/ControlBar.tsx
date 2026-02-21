"use client";

import { Grid, List } from "lucide-react";

interface ControlBarProps {
  filteredProjects: number;
  totalProjects: number;
  selectedTechs: string[];
  selectedCategory: string;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  onCategoryChange: (value: string) => void;
}

export default function ControlBar({
  filteredProjects,
  selectedTechs,
  selectedCategory,
  viewMode,
  onViewModeChange,
  onCategoryChange,
}: ControlBarProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-row justify-between items-center gap-4">
          {/* Izquierda */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-[#574964]">
                {filteredProjects}
              </span>{" "}
              Proyectos
            </p>

            {/* SELECT */}
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="px-3 py-1.5 border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#574964]"
            >
              <option value="">Todos</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="HTML">Vanilla</option>
            </select>
          </div>

          {/* Derecha */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-1.5 rounded-md transition-all ${
                viewMode === "grid" ?
                  "bg-white shadow-sm text-[#574964]"
                : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>

            <button
              onClick={() => onViewModeChange("list")}
              className={`p-1.5 rounded-md transition-all ${
                viewMode === "list" ?
                  "bg-white shadow-sm text-[#574964]"
                : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

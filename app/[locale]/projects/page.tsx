"use client";

import MainContent from "@/app/components/projects/MainContent";
import { useMemo, useState } from "react";
import ControlBar from "../../components/projects/ControlBar";
import InterestedCTA from "../../components/projects/InterestedCTA";
import { projects } from "../../data/dataProjects";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  // Extract all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesTechs =
        selectedTechs.length === 0 ||
        selectedTechs.every((tech) => project.technologies.includes(tech));

      const matchesCategory =
        selectedCategory === "" ||
        project.technologies.includes(selectedCategory);

      return matchesSearch && matchesTechs && matchesCategory;
    });
  }, [searchTerm, selectedTechs, selectedCategory]); // 👈 AQUÍ VA EL [

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTechs([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Controls Bar */}
      <ControlBar
        filteredProjects={filteredProjects.length}
        totalProjects={projects.length}
        selectedTechs={selectedTechs}
        selectedCategory={selectedCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onCategoryChange={setSelectedCategory}
      />

      {/* Main Content */}
      <MainContent
        showFilters={showFilters}
        viewMode={viewMode}
        filteredProjects={filteredProjects}
        allTechnologies={allTechnologies}
        selectedTechs={selectedTechs}
        searchTerm={searchTerm}
        onToggleTech={toggleTech}
        onClearFilters={clearFilters}
        onSearchChange={setSearchTerm}
      />

      {/* Call to Action */}
      <InterestedCTA />
    </div>
  );
}

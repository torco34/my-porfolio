"use client";

import { useMemo, useState } from "react";
import ProjectsHero from "../../components/projects/ProjectsHero";
import ControlBar from "../../components/projects/ControlBar";
import MainContent from "../../components/projects/MainContent";
import InterestedCTA from "../../components/projects/InterestedCTA";
import { projects } from "../../data/dataProjects";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Extract all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search term filter
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      // Technology filter
      const matchesTechs =
        selectedTechs.length === 0 ||
        selectedTechs.every((tech) => project.technologies.includes(tech));

      return matchesSearch && matchesTechs;
    });
  }, [searchTerm, selectedTechs]);

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
      {/* Hero Section */}
      <ProjectsHero
        totalProjects={projects.length}
        totalTechnologies={allTechnologies.length}
        showingProjects={filteredProjects.length}
      />

      {/* Controls Bar */}
      <ControlBar
        filteredProjects={filteredProjects.length}
        totalProjects={projects.length}
        selectedTechs={selectedTechs}
        viewMode={viewMode}
        showFilters={showFilters}
        onViewModeChange={setViewMode}
        onToggleFilters={() => setShowFilters(!showFilters)}
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

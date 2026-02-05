"use client";

import { useMemo, useState } from "react";
import ProjectsHero from "../../components/projects/ProjectsHero";
import ControlBar from "../../components/projects/ControlBar";
import MainContent from "../../components/projects/MainContent";
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
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Interesado en colaborar?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Si te gusta mi trabajo y quieres discutir un proyecto, no dudes en
            contactarme.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </div>
  );
}

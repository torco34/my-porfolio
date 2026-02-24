"use client";

import MainContent from "@/app/components/projects/MainContent";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import ControlBar from "../../components/projects/ControlBar";
import InterestedCTA from "../../components/projects/InterestedCTA";
import { projects } from "../../data/dataProjects";

export default function ProjectsPage() {
  // const t = useTranslations("Projects.data");
  const tCard = useTranslations("Projects.card");
  const tData = useTranslations("Projects.data");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

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
      const title = tData(`${project.id}.title`, { default: "" });
      const description = tData(`${project.id}.description`, { default: "" });

      const matchesSearch =
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
  }, [searchTerm, selectedTechs, selectedCategory, t]);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTechs([]);
    setSelectedCategory("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ControlBar
        filteredProjects={filteredProjects.length}
        totalProjects={projects.length}
        selectedTechs={selectedTechs}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <MainContent
        showFilters={showFilters}
        filteredProjects={filteredProjects}
        allTechnologies={allTechnologies}
        selectedTechs={selectedTechs}
        searchTerm={searchTerm}
        onToggleTech={toggleTech}
        onClearFilters={clearFilters}
        onSearchChange={setSearchTerm}
      />

      <InterestedCTA />
    </div>
  );
}

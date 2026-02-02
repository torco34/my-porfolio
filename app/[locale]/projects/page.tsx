"use client";

import { Filter, Grid, List, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import ProjectCard from "../../components/projects/ProjectCard";
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mis Proyectos
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explora mi portafolio de proyectos desarrollados con las últimas
              tecnologías. Cada proyecto incluye descripción detallada,
              tecnologías utilizadas y enlaces al código y demo.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {projects.length}
                </div>
                <div className="text-sm text-gray-600">Proyectos Totales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {allTechnologies.length}
                </div>
                <div className="text-sm text-gray-600">Tecnologías</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {filteredProjects.length}
                </div>
                <div className="text-sm text-gray-600">Mostrando</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid" ?
                      "bg-white shadow-sm text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
                  aria-label="Vista en cuadrícula"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list" ?
                      "bg-white shadow-sm text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
                  aria-label="Vista en lista"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  showFilters || selectedTechs.length > 0 || searchTerm ?
                    "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Filter className="w-4 h-4" />
                Filtros
                {(selectedTechs.length > 0 || searchTerm) && (
                  <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {selectedTechs.length + (searchTerm ? 1 : 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Filtros
                  </h3>
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                  >
                    <X className="w-4 h-4" />
                    Limpiar
                  </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Buscar proyectos
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar por título, descripción o tecnología..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Technologies Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    Tecnologías
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
                          onChange={() => toggleTech(tech)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{tech}</span>
                        <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {
                            projects.filter((p) =>
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
                      Filtros activos
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTechs.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {tech}
                          <button
                            onClick={() => toggleTech(tech)}
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
            {filteredProjects.length === 0 ?
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No se encontraron proyectos
                </h3>
                <p className="text-gray-600 mb-6">
                  Intenta con otros términos de búsqueda o ajusta los filtros.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Limpiar todos los filtros
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
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            }

            {/* Results Info */}
            {filteredProjects.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-center">
                  Mostrando{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredProjects.length}
                  </span>{" "}
                  de{" "}
                  <span className="font-semibold text-gray-900">
                    {projects.length}
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
            )}
          </div>
        </div>
      </div>

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

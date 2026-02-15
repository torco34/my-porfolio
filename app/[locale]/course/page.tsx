"use client";

import {
  BarChart3,
  BookOpen,
  CheckCircle,
  Clock,
  Filter,
  Grid,
  List,
  Search,
  TrendingUp,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import CourseCard from "../../components/courses/CourseCard";
import CourseModal from "../../components/courses/CourseModal";
import { dataCourses } from "../../data/dataCourses";
import { Course } from "../../ts/course";

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [showCompleted, setShowCompleted] = useState<boolean | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique categories and levels
  const categories = useMemo(() => {
    const cats = new Set<string>();
    dataCourses.forEach((course) => {
      if (course.category) cats.add(course.category);
    });
    return Array.from(cats).sort();
  }, []);

  const levels = useMemo(() => {
    const lvls = new Set<string>();
    dataCourses.forEach((course) => {
      if (course.level) lvls.add(course.level);
    });
    return Array.from(lvls).sort();
  }, []);

  // Filter courses
  const filteredCourses = useMemo(() => {
    return dataCourses.filter((course) => {
      // Search term filter
      const matchesSearch =
        searchTerm === "" ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        ) ||
        course.platform.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      // Level filter
      const matchesLevel =
        selectedLevel === "all" || course.level === selectedLevel;

      // Completed filter
      const matchesCompleted =
        showCompleted === null ||
        (showCompleted ? course.completed : !course.completed);

      return (
        matchesSearch && matchesCategory && matchesLevel && matchesCompleted
      );
    });
  }, [searchTerm, selectedCategory, selectedLevel, showCompleted]);

  // Statistics
  const stats = useMemo(() => {
    const totalCourses = dataCourses.length;
    const completedCourses = dataCourses.filter((c) => c.completed).length;
    const totalHours = dataCourses.reduce((sum, course) => {
      if (course.duration) {
        const hours = parseInt(course.duration.split(" ")[0]);
        return sum + (isNaN(hours) ? 0 : hours);
      }
      return sum;
    }, 0);
    const avgProgress =
      dataCourses.reduce((sum, course) => sum + (course.progress || 0), 0) /
      dataCourses.length;

    return { totalCourses, completedCourses, totalHours, avgProgress };
  }, []);

  const handleViewDetails = (course: Course) => {
    setSelectedCourse(course);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setShowCompleted(null);
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "frontend":
        return "Frontend";
      case "backend":
        return "Backend";
      case "devops":
        return "DevOps";
      case "tools":
        return "Herramientas";
      case "ux":
        return "UX/UI";
      default:
        return category;
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case "beginner":
        return "Principiante";
      case "intermediate":
        return "Intermedio";
      case "advanced":
        return "Avanzado";
      default:
        return level;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mis Cursos</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Una colección de cursos y certificaciones que he completado para
              mantenerme actualizado en el desarrollo frontend moderno.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900">
                  {stats.totalCourses}
                </div>
              </div>
              <div className="text-sm text-gray-600">Cursos Totales</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div className="text-3xl font-bold text-gray-900">
                  {stats.completedCourses}
                </div>
              </div>
              <div className="text-sm text-gray-600">Completados</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-orange-600" />
                <div className="text-3xl font-bold text-gray-900">
                  {stats.totalHours}+
                </div>
              </div>
              <div className="text-sm text-gray-600">Horas de Estudio</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BarChart3 className="w-6 h-6 text-purple-600" />
                <div className="text-3xl font-bold text-gray-900">
                  {Math.round(stats.avgProgress)}%
                </div>
              </div>
              <div className="text-sm text-gray-600">Progreso Promedio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
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
                  Buscar cursos
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar por título, plataforma o tecnología..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Categoría</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === "all" ?
                        "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Todas las categorías
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category ?
                          "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {getCategoryLabel(category)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Nivel</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedLevel("all")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedLevel === "all" ?
                        "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Todos los niveles
                  </button>
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedLevel === level ?
                          "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {getLevelLabel(level)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Completed Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Estado</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setShowCompleted(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      showCompleted === null ?
                        "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Todos los estados
                  </button>
                  <button
                    onClick={() => setShowCompleted(true)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      showCompleted === true ?
                        "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Completados</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setShowCompleted(false)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      showCompleted === false ?
                        "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      <span>En progreso</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* View Mode */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Vista</h4>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-colors ${
                      viewMode === "grid" ?
                        "bg-white shadow-sm text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    <span className="text-sm">Cuadrícula</span>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-colors ${
                      viewMode === "list" ?
                        "bg-white shadow-sm text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <List className="w-4 h-4" />
                    <span className="text-sm">Lista</span>
                  </button>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategory !== "all" ||
                selectedLevel !== "all" ||
                showCompleted !== null ||
                searchTerm) && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Filtros activos
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== "all" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {getCategoryLabel(selectedCategory)}
                        <button
                          onClick={() => setSelectedCategory("all")}
                          className="hover:text-blue-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedLevel !== "all" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                        {getLevelLabel(selectedLevel)}
                        <button
                          onClick={() => setSelectedLevel("all")}
                          className="hover:text-purple-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {showCompleted !== null && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        {showCompleted ? "Completados" : "En progreso"}
                        <button
                          onClick={() => setShowCompleted(null)}
                          className="hover:text-green-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {searchTerm && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        "{searchTerm}"
                        <button
                          onClick={() => setSearchTerm("")}
                          className="hover:text-gray-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="lg:w-3/4">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Catálogo de Cursos
                  </h2>
                  <p className="text-gray-600">
                    {filteredCourses.length} de {dataCourses.length} cursos
                    encontrados
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Filter className="w-4 h-4" />
                    {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  {/* Mobile filter content would go here */}
                  <p className="text-gray-600 text-center">
                    Usa los filtros en la versión de escritorio para mejores
                    resultados
                  </p>
                </div>
              </div>
            )}

            {filteredCourses.length === 0 ?
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <div className="text-gray-400 mb-4">
                  <BookOpen className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No se encontraron cursos
                </h3>
                <p className="text-gray-600 mb-6">
                  Intenta ajustar los filtros o términos de búsqueda.
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
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            }

            {/* Summary */}
            {filteredCourses.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {filteredCourses.length}
                      </div>
                      <div className="text-sm text-gray-600">
                        Cursos mostrados
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {filteredCourses.filter((c) => c.completed).length}
                      </div>
                      <div className="text-sm text-gray-600">
                        Completados en resultados
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {Math.round(
                          filteredCourses.reduce(
                            (sum, c) => sum + (c.progress || 0),
                            0,
                          ) / filteredCourses.length,
                        )}
                        %
                      </div>
                      <div className="text-sm text-gray-600">
                        Progreso promedio
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            {/* <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Interesado en aprender?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                El aprendizaje continuo es clave en el desarrollo web. Siempre
                estoy buscando nuevos cursos para mantenerme actualizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/experience"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Ver Mi Experiencia
                </a>
                <a
                  href="/projects"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Ver Proyectos
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

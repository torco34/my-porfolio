"use client";

import CourseCard from "@/app/components/courses/CourseCard";
import { StatsGrid } from "@/app/components/StatsGrid";
import { BarChart3, BookOpen, CheckCircle, Clock } from "lucide-react";
import { useMemo, useState } from "react";
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
  const items = [
    {
      icon: BookOpen,
      value: stats.totalCourses,
      label: "Cursos Totales",
    },
    {
      icon: CheckCircle,
      value: stats.completedCourses,
      label: "Completados",
    },
    {
      icon: Clock,
      value: `${stats.totalHours}+`,
      label: "Horas de Estudio",
    },
    {
      icon: BarChart3,
      value: `${Math.round(stats.avgProgress)}%`,
      label: "Progreso Promedio",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
      />
      <StatsGrid items={items} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {/* <div className="lg:w-1/4"></div> */}

          {/* Courses Grid */}
          <div className="lg:w-3/2">
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
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  {/* Mobile filter content would go here */}
                  {/* <p className="text-gray-600 text-center">
                    Usa los filtros en la versión de escritorio para mejores
                    resultados
                  </p> */}
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

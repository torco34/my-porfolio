"use client";

import { useState, useMemo } from "react";
import { experiencia, type Experience } from "../data/dataExperience";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  TrendingUp, 
  Filter,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Star,
  Code,
  Users,
  Target,
  Zap
} from "lucide-react";

export default function ExperiencePage() {
  const [filterType, setFilterType] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"date" | "relevance">("date");

  // Enhanced experience data
  const enhancedExperiences: (Experience & {
    type: "professional" | "freelance" | "education";
    location: string;
    achievements: string[];
    impact: string;
    projectsCount: number;
  })[] = [
    {
      ...experiencia[0],
      type: "professional",
      location: "Bogotá, Colombia",
      achievements: [
        "Desarrollo de 5+ proyectos con WordPress y Next.js",
        "Optimización de performance en 40%",
        "Implementación de mejores prácticas de SEO"
      ],
      impact: "Contribución significativa al crecimiento de la empresa mediante desarrollo de soluciones escalables",
      projectsCount: 8
    },
    {
      ...experiencia[1],
      type: "freelance",
      location: "Remoto",
      achievements: [
        "Completados 12+ proyectos freelance",
        "Satisfacción del cliente del 95%",
        "Desarrollo de soluciones personalizadas"
      ],
      impact: "Entrega de proyectos de alta calidad que superan expectativas del cliente",
      projectsCount: 12
    },
    // Additional experiences
    {
      id: 3,
      role: "Mentor de Desarrollo Frontend",
      company: "Comunidad Tech",
      period: "2024 - Presente",
      description: "Mentoría a desarrolladores junior y estudiantes, compartiendo conocimientos y mejores prácticas en desarrollo frontend moderno.",
      skills: [
        { name: "React", icon: Code },
        { name: "TypeScript", icon: Code },
        { name: "Mentoría", icon: Users },
        { name: "Comunicación", icon: Users }
      ],
      type: "education",
      location: "Online",
      achievements: [
        "Mentoría a 15+ desarrolladores",
        "Creación de material educativo",
        "Talleres y workshops online"
      ],
      impact: "Contribución al crecimiento de la comunidad tech local",
      projectsCount: 5
    },
    {
      id: 4,
      role: "Contribuidor Open Source",
      company: "Proyectos Open Source",
      period: "2023 - Presente",
      description: "Contribuciones activas a proyectos open source relacionados con React y herramientas de desarrollo frontend.",
      skills: [
        { name: "Git", icon: Code },
        { name: "Open Source", icon: Code },
        { name: "Code Review", icon: Code },
        { name: "Documentación", icon: Code }
      ],
      type: "professional",
      location: "Global",
      achievements: [
        "50+ contribuciones aceptadas",
        "Mantenimiento de librerías",
        "Reporte y fix de bugs"
      ],
      impact: "Mejora de herramientas utilizadas por miles de desarrolladores",
      projectsCount: 20
    }
  ];

  // Filter and sort experiences
  const filteredExperiences = useMemo(() => {
    let filtered = enhancedExperiences;
    
    // Apply type filter
    if (filterType !== "all") {
      filtered = filtered.filter(exp => exp.type === filterType);
    }
    
    // Apply sorting
    if (sortBy === "date") {
      filtered = [...filtered].sort((a, b) => {
        const getYear = (period: string) => parseInt(period.split(" ")[0]);
        return getYear(b.period) - getYear(a.period);
      });
    } else {
      filtered = [...filtered].sort((a, b) => b.projectsCount - a.projectsCount);
    }
    
    return filtered;
  }, [filterType, sortBy]);

  // Statistics
  const stats = useMemo(() => {
    const totalYears = 3; // Based on experience periods
    const totalProjects = enhancedExperiences.reduce((sum, exp) => sum + exp.projectsCount, 0);
    const totalAchievements = enhancedExperiences.reduce((sum, exp) => sum + exp.achievements.length, 0);
    const skillsCount = new Set(enhancedExperiences.flatMap(exp => exp.skills.map(s => s.name))).size;
    
    return { totalYears, totalProjects, totalAchievements, skillsCount };
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "professional": return "bg-blue-100 text-blue-700 border-blue-200";
      case "freelance": return "bg-purple-100 text-purple-700 border-purple-200";
      case "education": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "professional": return <Briefcase className="w-4 h-4" />;
      case "freelance": return <Users className="w-4 h-4" />;
      case "education": return <Award className="w-4 h-4" />;
      default: return <Briefcase className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mi Experiencia</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Un recorrido por mi trayectoria profesional, proyectos destacados y el impacto generado a lo largo de los años.
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
                <Calendar className="w-6 h-6 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900">{stats.totalYears}+</div>
              </div>
              <div className="text-sm text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Briefcase className="w-6 h-6 text-purple-600" />
                <div className="text-3xl font-bold text-gray-900">{stats.totalProjects}+</div>
              </div>
              <div className="text-sm text-gray-600">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-green-600" />
                <div className="text-3xl font-bold text-gray-900">{stats.totalAchievements}</div>
              </div>
              <div className="text-sm text-gray-600">Logros Destacados</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code className="w-6 h-6 text-orange-600" />
                <div className="text-3xl font-bold text-gray-900">{stats.skillsCount}</div>
              </div>
              <div className="text-sm text-gray-600">Habilidades Técnicas</div>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtros
              </h3>

              {/* Type Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Tipo de Experiencia</h4>
                <div className="space-y-2">
                  {["all", "professional", "freelance", "education"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilterType(type)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        filterType === type
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {type !== "all" && getTypeIcon(type)}
                        <span className="capitalize">
                          {type === "all" ? "Todas" : 
                           type === "professional" ? "Profesional" :
                           type === "freelance" ? "Freelance" : "Educación"}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Ordenar por</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSortBy("date")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      sortBy === "date"
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Fecha más reciente</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSortBy("relevance")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      sortBy === "relevance"
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Relevancia</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Stats Summary */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Resumen</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Experiencias mostradas</span>
                    <span className="font-semibold text-gray-900">{filteredExperiences.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Filtro activo</span>
                    <span className="font-semibold text-gray-900 capitalize">
                      {filterType === "all" ? "Todos" : filterType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experiences Timeline */}
          <div className="lg:w-3/4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Linea de Tiempo</h2>
              <p className="text-gray-600">
                Explora mi trayectoria profesional organizada cronológicamente
              </p>
            </div>

            {filteredExperiences.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <div className="text-gray-400 mb-4">
                  <Briefcase className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No se encontraron experiencias
                </h3>
                <p className="text-gray-600">
                  Intenta ajustar los filtros para ver más resultados
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredExperiences.map((experience, index) => (
                  <div
                    key={experience.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    {/* Experience Header */}
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(experience.type)}`}>
                              {getTypeIcon(experience.type)}
                              {experience.type === "professional" ? "Profesional" : 
                               experience.type === "freelance" ? "Freelance" : "Educación"}
                            </span>
                            <span className="text-sm text-gray-500">#{experience.id}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
                          <p className="text-lg text-blue-600 font-medium">{experience.company}</p>
                          
                          <div className="flex flex-wrap items-center gap-4 mt-3">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{experience.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Briefcase className="w-4 h-4" />
                              <span className="text-sm">{experience.projectsCount} proyectos</span>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => toggleExpand(experience.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          aria-label={expandedId === experience.id ? "Mostrar menos" : "Ver detalles"}
                        >
                          {expandedId === experience.id ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              <span className="font-medium">Menos</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              <span className="font-medium">Más</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Basic Info (Always visible) */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-6">{experience.description}</p>
                      
                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Code className="w-5 h-5 text-blue-500" />
                          Habilidades Aplicadas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, idx) => {
                            const Icon = skill.icon;
                            return (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                              >
                                <Icon className="w-4 h-4" />
                                {skill.name}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {expandedId === experience.id && (
                        <div className="mt-6 pt-6 border-t border-gray-100 animate-fade-in">
                          {/* Achievements */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Award className="w-5 h-5 text-green-500" />
                              Logros Destacados
                            </h4>
                            <ul className="space-y-3">
                              {experience.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Impact */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Target className="w-5 h-5 text-purple-500" />
                              Impacto Generado
                            </h4>
                            <p className="text-gray-700 bg-purple-50 p-4 rounded-lg">
                              {experience.impact}
                            </p>
                          </div>

                          {/* Projects Summary */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Zap className="w-5 h-5 text-orange-500" />
                              Resumen de Proyectos
                            </h4>
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-2xl font-bold text-gray-900">{experience.projectsCount}</div>
                                  <div className="text-sm text-gray-600">Proyectos completados</div>
                                </div>
                                <a
                                  href="/projects"
                                  className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Ver proyectos relacionados
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Timeline Legend */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Leyenda de la Línea de Tiempo</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="font-medium text-gray-900">Experiencia Profesional</div>
                    <div className="text-sm text-gray-600">Trabajo en empresas</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <div>
                    <div className="font-medium text-gray-900">Trabajo Freelance</div>
                    <div className="text-sm text-gray-600">Proyectos independientes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div>
                    <div className="font-medium text-gray-900">Educación & Mentoría</div>
                    <div className="text-sm text-gray-600">Aprendizaje y enseñanza</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Interesado en mi experiencia?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Si buscas un desarrollador con experiencia comprobada y pasión por crear soluciones innovadoras, ¡hablemos!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contactar Ahora
                </a>
                <a
                  href="/projects"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Ver Proyectos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
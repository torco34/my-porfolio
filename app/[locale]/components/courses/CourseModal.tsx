"use client";

import { Course } from "@/app/ts/course";
import { 
  X, 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  ExternalLink,
  CheckCircle,
  PlayCircle,
  Star,
  BarChart3,
  Calendar,
  Tag,
  Users,
  Target,
  Download,
  Share2
} from "lucide-react";
import { useEffect } from "react";

interface CourseModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!course || !isOpen) return null;

  const getLevelColor = (level?: string) => {
    switch (level) {
      case "beginner": return "bg-green-100 text-green-700 border-green-200";
      case "intermediate": return "bg-blue-100 text-blue-700 border-blue-200";
      case "advanced": return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "frontend": return "bg-blue-50 text-blue-600 border border-blue-200";
      case "backend": return "bg-green-50 text-green-600 border border-green-200";
      case "devops": return "bg-orange-50 text-orange-600 border border-orange-200";
      case "tools": return "bg-purple-50 text-purple-600 border border-purple-200";
      case "ux": return "bg-pink-50 text-pink-600 border border-pink-200";
      default: return "bg-gray-50 text-gray-600 border border-gray-200";
    }
  };

  const getProgressColor = (progress?: number) => {
    if (!progress) return "bg-gray-200";
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    return "bg-yellow-500";
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: course.title,
        text: `Mira este curso que tomé: ${course.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {course.level && (
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border ${getLevelColor(course.level)}`}>
                      <TrendingUp className="w-4 h-4" />
                      {course.level === "beginner" ? "Principiante" : 
                       course.level === "intermediate" ? "Intermedio" : "Avanzado"}
                    </span>
                  )}
                  {course.category && (
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(course.category)}`}>
                      {course.category === "frontend" ? "Frontend" :
                       course.category === "backend" ? "Backend" :
                       course.category === "devops" ? "DevOps" :
                       course.category === "tools" ? "Herramientas" : "UX/UI"}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <div className="flex items-center gap-4 text-blue-100">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.platform}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{course.year}</span>
                  </div>
                  {course.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
            <div className="p-6">
              {/* Progress Section */}
              {course.progress !== undefined && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-500" />
                      Progreso del Curso
                    </h3>
                    <div className="flex items-center gap-2">
                      {course.completed ? (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Completado
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          <PlayCircle className="w-4 h-4" />
                          En progreso
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progreso general</span>
                        <span className="text-lg font-bold text-gray-900">{course.progress}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${getProgressColor(course.progress)}`}
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    {course.progress >= 80 && !course.completed && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <Star className="w-5 h-5 text-yellow-600" />
                          <div>
                            <p className="font-medium text-yellow-800">¡Casi listo!</p>
                            <p className="text-sm text-yellow-700">
                              Solo te falta un {100 - course.progress}% para completar este curso.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción del Curso</h3>
                <p className="text-gray-700 leading-relaxed">{course.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-blue-500" />
                  Tecnologías Aprendidas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-500" />
                  Objetivos de Aprendizaje
                </h3>
                <ul className="space-y-3">
                  {course.technologies.slice(0, 5).map((tech, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Dominio de {tech} y sus mejores prácticas</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Aplicación de conocimientos en proyectos reales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Resolución de problemas comunes en desarrollo</span>
                  </li>
                </ul>
              </div>

              {/* Platform Info */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  Información de la Plataforma
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Plataforma</h4>
                    <p className="text-gray-700">{course.platform}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Año de realización</h4>
                    <p className="text-gray-700">{course.year}</p>
                  </div>
                  {course.duration && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Duración</h4>
                      <p className="text-gray-700">{course.duration}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Estado</h4>
                    <p className="text-gray-700">
                      {course.completed ? "Completado exitosamente" : "En progreso"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                {course.certificateUrl && (
                  <a
                    href={course.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Award className="w-4 h-4" />
                    <span className="font-medium">Ver Certificado</span>
                  </a>
                )}
                
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="font-medium">Compartir</span>
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cerrar
                </button>
                {course.certificateUrl && (
                  <a
                    href={course.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span className="font-medium">Descargar Certificado</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
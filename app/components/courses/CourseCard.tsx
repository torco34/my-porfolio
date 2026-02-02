"use client";

import { Course } from "@/app/ts/course";
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  ExternalLink,
  CheckCircle,
  PlayCircle,
  Star,
  BarChart3
} from "lucide-react";
import { useState } from "react";

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
}

export default function CourseCard({ course, onViewDetails }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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
      case "frontend": return "bg-blue-50 text-blue-600";
      case "backend": return "bg-green-50 text-green-600";
      case "devops": return "bg-orange-50 text-orange-600";
      case "tools": return "bg-purple-50 text-purple-600";
      case "ux": return "bg-pink-50 text-pink-600";
      default: return "bg-gray-50 text-gray-600";
    }
  };

  const getProgressColor = (progress?: number) => {
    if (!progress) return "bg-gray-200";
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    return "bg-yellow-500";
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(course)}
    >
      {/* Course Header with Gradient */}
      <div className={`relative h-32 overflow-hidden ${isHovered ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-gray-900 to-blue-900'}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/20 text-6xl font-bold">
            <BookOpen className="w-16 h-16" />
          </div>
        </div>
        
        {/* Progress Badge */}
        {course.progress !== undefined && (
          <div className="absolute top-4 right-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">{course.progress}%</span>
              </div>
              {course.completed && (
                <div className="absolute -top-1 -right-1">
                  <CheckCircle className="w-5 h-5 text-green-400" fill="white" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Level Badge */}
        {course.level && (
          <div className="absolute bottom-4 left-4">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(course.level)}`}>
              <TrendingUp className="w-3 h-3" />
              {course.level === "beginner" ? "Principiante" : 
               course.level === "intermediate" ? "Intermedio" : "Avanzado"}
            </span>
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Title and Platform */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-2">{course.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium text-gray-600">{course.platform}</span>
            </div>
            <span className="text-sm text-gray-500">{course.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-6 line-clamp-3">
          {course.description}
        </p>

        {/* Category */}
        {course.category && (
          <div className="mb-4">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
              {course.category === "frontend" ? "Frontend" :
               course.category === "backend" ? "Backend" :
               course.category === "devops" ? "DevOps" :
               course.category === "tools" ? "Herramientas" : "UX/UI"}
            </span>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {course.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
              >
                {tech}
              </span>
            ))}
            {course.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded">
                +{course.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Stats and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Stats */}
          <div className="flex items-center gap-4">
            {course.duration && (
              <div className="flex items-center gap-1 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-xs">{course.duration}</span>
              </div>
            )}
            
            {course.certificateUrl && (
              <div className="flex items-center gap-1 text-blue-600">
                <Award className="w-4 h-4" />
                <span className="text-xs">Certificado</span>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(course);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="font-medium text-sm">Ver detalles</span>
          </button>
        </div>

        {/* Progress Bar */}
        {course.progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-600">Progreso</span>
              <span className="text-xs font-medium text-gray-900">{course.progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${getProgressColor(course.progress)}`}
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-500">
                {course.completed ? "Completado" : "En progreso"}
              </span>
              {course.progress >= 80 && !course.completed && (
                <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Casi listo
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Hover Effect */}
      {isHovered && (
        <div className="absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none"></div>
      )}
    </div>
  );
}
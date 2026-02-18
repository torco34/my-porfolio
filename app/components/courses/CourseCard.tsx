"use client";

import { Course } from "@/app/ts/course";
import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  ExternalLink,
  Star,
  TrendingUp,
} from "lucide-react";

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
}

const levelConfig = {
  beginner: {
    color: "bg-green-100 text-green-700 border-green-200",
    label: "Principiante",
  },
  intermediate: {
    color: "bg-blue-100 text-blue-700 border-blue-200",
    label: "Intermedio",
  },
  advanced: {
    color: "bg-purple-100 text-purple-700 border-purple-200",
    label: "Avanzado",
  },
  default: {
    color: "bg-gray-100 text-gray-700 border-gray-200",
    label: "Nivel",
  },
} as const;

const categoryConfig = {
  frontend: {
    color: "bg-blue-50 text-[#3B82F6]",
    label: "",
  },
  backend: {
    color: "bg-green-50 text-[#3B82F6]",
    label: "Backend",
  },
  devops: {
    color: "bg-orange-50 text-orange-600",
    label: "DevOps",
  },
  tools: {
    color: "bg-purple-50 text-purple-600",
    label: "Herramientas",
  },
  ux: {
    color: "bg-pink-50 text-pink-600",
    label: "UX/UI",
  },
  default: {
    color: "bg-gray-50 text-gray-600",
    label: "Categoría",
  },
} as const;

function getLevelConfig(level?: string) {
  if (level && level in levelConfig) {
    return levelConfig[level as keyof typeof levelConfig];
  }
  return levelConfig.default;
}

function getCategoryConfig(category?: string) {
  if (category && category in categoryConfig) {
    return categoryConfig[category as keyof typeof categoryConfig];
  }
  return categoryConfig.default;
}

function getProgressColor(progress?: number) {
  if (progress === undefined) return "bg-gray-200";
  if (progress >= 80) return "bg-green-500";
  if (progress >= 50) return "bg-blue-500";
  return "bg-yellow-500";
}

export default function CourseCard({ course, onViewDetails }: CourseCardProps) {
  const level = getLevelConfig(course.level);
  const category = getCategoryConfig(course.category);

  return (
    <div
      onClick={() => onViewDetails(course)}
      className="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-[#FFDAB3] cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Header */}
      <div className="relative h-32 overflow-hidden bg-linear-to-r from-[#574964] to-[#9F8383] transition-all duration-300 group-hover:from-[#574964] group-hover:to-[#574964]">
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-white" />
        </div>

        {/* Progress Badge */}
        {course.progress !== undefined && (
          <div className="absolute top-4 right-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {course.progress}%
                </span>
              </div>

              {course.completed && (
                <div className="absolute -top-1 -right-1">
                  <CheckCircle
                    className="w-5 h-5 text-[#F5AD18]"
                    fill="white"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Level Badge */}
        {course.level && (
          <div className="absolute bottom-4 left-4">
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${level.color}`}
            >
              <TrendingUp className="w-3 h-3" />
              {level.label}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-2">
            {course.title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium text-gray-600">
                {course.platform}
              </span>
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
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${category.color}`}
            >
              {category.label}
            </span>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {course.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
              >
                {tech}
              </span>
            ))}

            {course.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-md">
                +{course.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
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
                <span className="text-xs font-medium">Certificado</span>
              </div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(course);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="font-medium text-sm">Ver detalles</span>
          </button>
        </div>

        {/* Progress bar */}
        {course.progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-600">Progreso</span>
              <span className="text-xs font-medium text-gray-900">
                {course.progress}%
              </span>
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

      {/* Border hover effect */}
      <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

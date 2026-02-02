"use client";

import { Project } from "@/app/ts/projets";
import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold text-gray-800/20">
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
            {project.technologies.length} techs
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            <p className="text-sm text-gray-500 mt-1">ID: #{project.id}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isExpanded ? "Mostrar menos" : "Ver más detalles"}
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Short Description */}
        <p className="text-gray-700 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
            <h4 className="font-semibold text-gray-900 mb-2">Detalles del Proyecto</h4>
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h5 className="font-medium text-gray-900 mb-2">Tecnologías Utilizadas</h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technologies Tags */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm font-medium rounded-full">
                +{project.technologies.length - 3} más
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="font-medium">Código</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-medium">Demo</span>
            </a>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            {isExpanded ? "Ver menos" : "Ver detalles"}
          </button>
        </div>
      </div>
    </div>
  );
}
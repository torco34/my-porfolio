"use client";

import { Project } from "@/app/ts/projets";
import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("Projects.card");

  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50">
      {/* Elemento decorativo de fondo */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#aa60c8]/5 rounded-full blur-2xl group-hover:bg-[#aa60c8]/10 transition-all duration-500" />
      
      {/* Project Image con overlay mejorado */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        
        {/* Badge de tecnologías */}
        <div className="absolute top-4 right-4">
          <span className="px-4 py-2 bg-gradient-to-r from-[#aa60c8]/90 to-[#8a40a8]/90 backdrop-blur-md text-white text-xs font-semibold rounded-full shadow-lg">
            {project.technologies.length} {t("techs")}
          </span>
        </div>
        
        {/* ID del proyecto */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            ID: #{project.id}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-7">
        {/* Header con título y botón expandir */}
        <div className="flex justify-between items-start mb-5">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8a40a8] transition-colors duration-300">
              {project.title}
            </h3>
            <div className="h-1 w-12 bg-gradient-to-r from-[#aa60c8] to-[#ca80e8] rounded-full mt-2 mb-3"></div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 p-2.5 bg-gray-100 hover:bg-[#aa60c8]/10 rounded-xl transition-all duration-300 group-hover:scale-110"
            aria-label={isExpanded ? t("showLess") : t("showMore")}
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#aa60c8]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-[#aa60c8]" />
            )}
          </button>
        </div>

        {/* Short Description */}
        <p className="text-gray-700 mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies Tags mejorados */}
        <div className="mb-7">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-[#aa60c8]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1.5 bg-gradient-to-r from-[#aa60c8]/10 to-[#ca80e8]/10 text-[#8a40a8] text-sm font-semibold rounded-lg border border-[#aa60c8]/20">
                +{project.technologies.length - 4} {t("more")}
              </span>
            )}
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-100 animate-fade-in">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#aa60c8] rounded-full"></div>
              {t("projectDetails")}
            </h4>
            <p className="text-gray-700 mb-6 leading-relaxed bg-gray-50 p-4 rounded-xl">
              {project.description}
            </p>
            
            <div className="mb-6">
              <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#ca80e8] rounded-full"></div>
                {t("technologiesUsed")}
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-[#aa60c8]/5 to-[#ca80e8]/5 text-[#8a40a8] text-sm font-medium rounded-lg border border-[#aa60c8]/20 hover:bg-[#aa60c8]/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons mejorados */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github className="w-4 h-4" />
              <span className="font-semibold">{t("code")}</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#aa60c8] to-[#8a40a8] text-white rounded-xl hover:shadow-lg hover:shadow-[#aa60c8]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-semibold">{t("demo")}</span>
            </a>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#aa60c8] hover:text-[#8a40a8] font-semibold text-sm flex items-center gap-1 group/btn"
          >
            {isExpanded ? (
              <>
                {t("viewLess")}
                <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                {t("viewDetails")}
                <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import { Project } from "@/app/ts/projets";
import { ExternalLink, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import TechBadges from "../common/TechBadges";
import ToggleExpandButton from "../common/ToggleExpandButton";
import { technologies } from "../home/data";
interface ProjectCardProps {
  project: Project;
  translations: {
    techs: string;
    showLess: string;
    showMore: string;
    more: string;
    projectDetails: string;
    technologiesUsed: string;
    code: string;
    demo: string;
    viewLess: string;
    viewDetails: string;
  };
}

export default function ProjectCard({
  project,
  translations,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const tCard = useTranslations("Projects.card");
  const tData = useTranslations("Projects.data");
  return (
    <div className="group relative bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50">
      {/* Elemento decorativo de fondo */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#aa60c8]/5 rounded-full blur-2xl group-hover:bg-[#aa60c8]/10 transition-all duration-500" />

      {/* Project Image con overlay mejorado */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={project.image}
          alt={String(project.title)}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

        {/* Badge de tecnologías */}
        <div className="absolute top-4 right-4">
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-4 py-2 bg-linear-to-r from-[#574964]/90 to-[#574964]/90 backdrop-blur-md text-white text-xs font-semibold rounded-full shadow-lg">
              {project.technologies.length} Techs
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-5">
          <div className="flex-1">
            <h2>{tData(`${project.id}.title`)}</h2>
            <div className="h-1 w-5 bg-linear-to-r from-[#574964] to-[#574964] rounded-full mt-2 mb-3"></div>
          </div>
          <ToggleExpandButton
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
            labelExpand={tCard("showMore")}
            labelCollapse={tCard("showLess")}
          />
        </div>

        <p className="text-gray-700 mt-4">
          {tData(`${project.id}.shortDescription`)}
        </p>
        <p className="text-sm my-2"></p>
        <TechBadges technologies={technologies} moreLabel={t("more")} />

        {isExpanded && (
          <div className="mt-6 pt-2 border-t border-gray-100 animate-fade-in">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#574964] rounded-full"></div>
              {translations.projectDetails}
            </h4>
            <p className="text-gray-700 mb-2 leading-relaxed bg-gray-50 p-4 rounded-xl">
              {tData(`${project.id}.longDescription`)}
            </p>

            <div className="mb-4">
              <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#574964] rounded-full"></div>
                {translations.technologiesUsed}
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-linear-to-r from-[#aa60c8]/5 to-[#ca80e8]/5 text-[#574964] text-sm font-medium rounded-lg border border-[#aa60c8]/20 hover:bg-[#aa60c8]/10 transition-colors"
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
              className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-gray-900 to-black text-white rounded-xl hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github className="w-4 h-4" />
              <span className="font-semibold">{translations.code}</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-[#574964] to-[#574964] text-white rounded-xl hover:shadow-lg hover:shadow-[#aa60c8]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-semibold">{translations.demo}</span>
            </a>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#574964] hover:text-[#] font-semibold text-sm flex items-center gap-1 group/btn"
          >
            {isExpanded ?
              <>{translations.viewLess}</>
            : <>{translations.viewDetails}</>}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Project } from "../../ts/projets";

type Props = {
  project: Project;
};

export default function CardProjects({ project }: Props) {
  return (
    <div className="background rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 text-gray-200">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm mt-2 text-gray-400">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-purple-800/10 hover:bg-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 background-text bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition"
          >
            <Github size={18} />
            Código
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 background-text bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition"
          >
            <ExternalLink size={18} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  skills: string[];
};

type ProjectsBySkillProps = {
  projects: Project[];
};

export default function ProjectsBySkill({ projects }: ProjectsBySkillProps) {
  const [selectedSkill, setSelectedSkill] = useState("");

  const skills = Array.from(
    new Set(projects.flatMap((project) => project.skills)),
  );

  const filteredProjects =
    selectedSkill ?
      projects.filter((project) => project.skills.includes(selectedSkill))
    : projects;

  return (
    <div className="space-y-4 z-10 ">
      <div className="font-bold text-2xl text-gray-500">
        <h2>Buscar por habilidades</h2>
      </div>
      <select
        value={selectedSkill}
        onChange={(e) => setSelectedSkill(e.target.value)}
        className="border border-[#aa60c8]/60 rounded-full font-bold px-2 p-2 py-1 bg-[#aa60c8] text-gray-100 text-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#aa60c8]/40 transition"
      >
        <option value="">Todas las habilidades</option>
        {skills.map((skill) => (
          <option key={skill} value={skill}>
            {skill}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 rounded-xl p-6 bg-white"
          >
            <h3 className="font-semibold mt-4 w-50 px-3 py-1 text-lg  ">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

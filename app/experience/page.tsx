"use client";

import ExperienceSection from "../components/experience/ExperienceSection";
import ProjectsBySkill from "../components/ProjectsBySkill";
import { experiencia } from "../data/dataExperience";
import { dataFilter } from "../data/dataFilter";

export default function ExperiencePage() {
  return (
    <>
      <section className="min-h-screen ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna izquierda */}
          <div className="w-full col-span-2">
            <ExperienceSection experiences={experiencia} />
          </div>

          {/* Columna derecha */}
          <div className=" flex  rounded-2xl justify-center pb-10">
            <ProjectsBySkill projects={dataFilter} />
          </div>
        </div>
      </section>
    </>
  );
}

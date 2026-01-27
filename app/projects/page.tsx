"use client";
import CardProjects from "../components/CardProjects";
import { projects } from "../data/dataProjects";

export default function pagesProjects() {
  return (
    <>
      <h2>hola mundo </h2>
      <div className="grid grid-cols-1 md;grid-cols-2 lg:grid-cols-3 gap-2">
        {projects.map((project) => (
          <CardProjects key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

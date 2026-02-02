"use client";

import { X } from "lucide-react";
import { Course } from "../../ts/course";

type Props = {
  course: Course;
  onClose: () => void;
};

export default function Modal({ course, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-[#0f172a] rounded-2xl max-w-md w-full p-6 relative">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <h3 className="text-2xl font-semibold text-white">{course.title}</h3>
        <p className="mt-2 text-gray-400">{course.description}</p>

        <div className="mt-4 text-gray-300 space-y-2">
          <p>
            <strong>Plataforma:</strong>
            {course.platform}
          </p>
          <p>
            <strong>Año:</strong> {course.year}
          </p>
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mt-4">
          {course.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-purple-800/20 rounded-full text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

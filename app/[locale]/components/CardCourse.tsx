"use client";

import { useState } from "react";

import { Course } from "../../ts/course";
import CourseModal from "./Modal";
type Props = {
  course: Course;
};

export default function CardCourse({ course }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0f172a] rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition">
        <h3 className="text-lg font-semibold text-white">{course.title}</h3>
        <p className="text-sm mt-2 text-gray-400 line-clamp-2">
          {course.description}
        </p>

        <p className="mt-3 text-sm text-gray-300">
          {course.platform} · {course.year}
        </p>

        {/* Botón */}
        <button
          onClick={() => setOpen(true)}
          className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm text-white transition"
        >
          Ver detalles
        </button>
      </div>

      {/* Modal */}
      {open && <CourseModal course={course} onClose={() => setOpen(false)} />}
    </>
  );
}

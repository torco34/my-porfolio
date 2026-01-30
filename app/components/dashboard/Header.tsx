"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0  bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="w-full hidden md:block">
            <h1 className="text-lg font-semibold text-gray-900">Portafolio</h1>
            <p className="text-sm text-gray-600">Desarrollador Frontend</p>
          </div>
          <SearchBar placeholder="Buscar proyectos..." onSearch={setSearch} />
        </div>

        <nav className="flex items-center space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
            Inicio
          </a>
          <a
            href="/projects"
            className="text-gray-700 hover:text-blue-600 px-3 py-2"
          >
            Proyectos
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-blue-600 px-3 py-2"
          >
            Acerca de
          </a>
          <a
            href="/experience"
            className="text-gray-700 hover:text-blue-600 px-3 py-2"
          >
            Experiencia
          </a>
          <a
            href="/course"
            className="text-gray-700 hover:text-blue-600 px-3 py-2"
          >
            Cursos
          </a>
          <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <span className="text-sm font-medium text-gray-700">
              📧 Contacto
            </span>
          </button>
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#aa60c8]/20 transition"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="es">🇨🇴 Español</option>
            <option value="en">🇺🇸 English</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

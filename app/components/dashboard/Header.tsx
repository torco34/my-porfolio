"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";

export default function Header() {
  const [search, setSearch] = useState("");
  // const filteredUsers = users.filter((user) =>
  //   user.toLowerCase().includes(search.toLowerCase())
  // );
  return (
    <header className="background-base">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <SearchBar placeholder="Buscar proyectos " onSearch={setSearch} />
        <nav className="flex gap-6 items-center">
          <select
            className="border border-[#aa60c8]/60 rounded-full px-2 p-2 py-1 bg-white text-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#aa60c8]/40 transition"
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

"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import NavLink from "./NavLink";
import LanguageSelector from "./LanguageSelector";
import ContactButton from "./ContactButton";
import Logo from "./Logo";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Logo />
          <SearchBar onSearch={setSearch} />
        </div>

        <nav className="flex items-center space-x-4">
          <NavLink href="/" translationKey="home" />
          <NavLink href="/projects" translationKey="projects" />
          <NavLink href="/about" translationKey="about" />
          <NavLink href="/experience" translationKey="experience" />
          <NavLink href="/course" translationKey="courses" />
          <ContactButton />
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
}

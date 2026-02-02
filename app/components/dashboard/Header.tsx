"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import ContactButton from "./ContactButton";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";

import { navItems } from "@/app/data/dataHeader";
import NavLink from "./NavLink";
import SearchBar from "./components/SearchBar";

export default function Header() {
  const [search, setSearch] = useState("");
  const locale = useLocale();

  // 🎨 colores según idioma
  const isSpanish = locale === "es";

  const headerStyles =
    isSpanish ?
      "bg-white border-gray-200 text-gray-900"
    : "bg-slate-900 border-slate-700 text-white";

  return (
    <header
      className={`sticky top-0 border-b shadow-sm transition-colors ${headerStyles}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Logo />
          <SearchBar onSearch={setSearch} />
        </div>

        <nav className="flex items-center space-x-4">
          {navItems.map(({ href, key }) => (
            <NavLink key={key} href={href} translationKey={key} />
          ))}

          <ContactButton />
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
}

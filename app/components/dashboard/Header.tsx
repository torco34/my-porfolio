"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import ContactButton from "./ContactButton";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";

import { navItems } from "@/app/data/dataHeader";
import NavLink from "./NavLink";
import SearchBar from "./components/SearchBar";

export default function Header() {
  const [search, setSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Search - Left side */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="hidden md:block ml-6">
              <SearchBar onSearch={setSearch} />
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(({ href, key }) => (
              <NavLink key={key} href={href} translationKey={key} />
            ))}
          </nav>

          {/* Desktop Actions - Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <ContactButton />
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="mr-2">
              <SearchBar onSearch={setSearch} />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#aa60c8] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ?
                <X className="block h-6 w-6" aria-hidden="true" />
              : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {navItems.map(({ href, key }) => (
            <div
              key={key}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <NavLink href={href} translationKey={key} />
            </div>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-between px-5">
              <ContactButton />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

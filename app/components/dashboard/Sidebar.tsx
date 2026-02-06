import { JSX } from "react";

import Image from "next/image";
import Link from "next/link";

import { menuItems } from "@/app/data/dataHeader";

export default function Sidebar(): JSX.Element {
  return (
    <aside className="sticky top-0 h-screen w-64 bg-gray-900 border-r border-gray-800 shadow-lg">
      <div className="p-6">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src="/img/fotomia.jpg"
              alt="Torcoroma Arias"
              fill
               className="rounded-full object-cover border-4 border-[#aa60c8] shadow-xl shadow-[#aa60c8]/20"
            />
          </div>
          <h2 className="text-xl font-bold text-white">Torcoroma Arias</h2>
           <p className="text-sm text-[#aa60c8] font-semibold mt-1 bg-gradient-to-r from-[#aa60c8] to-[#ca80e8] bg-clip-text text-transparent">
              Frontend Developer
            </p>
          <p className="text-xs text-gray-400 mt-2 text-center">
            React • Next.js • TypeScript
          </p>
        </div>
      </div>

      <nav className="px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 mb-1 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors group"
            >
              <Icon className="w-5 h-5 group-hover:text-[#aa60c8] transition-colors" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
        <div className="text-center">
          <p className="text-sm text-gray-400">Disponible para proyectos</p>
          <button className="mt-3 w-full bg-[#aa60c8] text-white font-medium py-2 rounded-lg hover:bg-[#9a50b8] transition-colors">
            Contactar
          </button>
        </div>
      </div>
    </aside>
  );
}

import { JSX } from "react";

import Image from "next/image";
import Link from "next/link";

import { menuItems } from "@/app/data/dataHeader";

export default function Sidebar(): JSX.Element {
  return (
    <aside className="sticky font-medium top-0 shadow-lg w-67 background px- py-">
      <div className="flex w-full justify-center pb-10">
        <div className="relative w-full h-40  overflow-hidden">
          <Image
            src="/img/imfondo.jpg"
            alt="Fondo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute bottom-3 left-1/2  w-full -translate-x-1/2 flex flex-col items-center text-white">
            <Image
              src="/img/fotomia.jpg"
              alt="Avatar"
              width={64}
              height={64}
              className="rounded-full object-cover border-4 border-[#FFF] shadow-md"
            />
            <h2 className="mt-2 font-bold">Software Developer</h2>
            <p className="text-sm background-text font-bold text-center">
              Frontend
            </p>
          </div>
        </div>
      </div>

      <nav className="flex justify-center flex-col items-center">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center font-thin text-yellow-50 gap-2 my-1 px-3 text-sm w-60  hover:bg-[rgba(85,85,71,0.4)] py-2 rounded-full hover:border-[rgba(241,233,158,0.2)] hover:text-[#AA60C8]  transition"
            >
              <Icon className="" size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

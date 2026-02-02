"use client";

import { useRouter } from "next/navigation";

export default function LanguageSelector() {
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(es|en)/, "");
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <select
      className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#aa60c8]/20 transition"
      onChange={handleLanguageChange}
      defaultValue="es"
    >
      <option value="es">🇨🇴 Español</option>
      <option value="en">🇺🇸 English</option>
    </select>
  );
}
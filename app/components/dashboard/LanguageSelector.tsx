"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;

    // 🔑 esto es CLAVE
    router.replace(`/${nextLocale}${pathname.replace(/^\/(es|en)/, "")}`);
  }

  return (
    <select
      value={locale}
      onChange={onChange}
      className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm cursor-pointer"
    >
      <option value="es">🇨🇴 Español</option>
      <option value="en">🇺🇸 English</option>
    </select>
  );
}

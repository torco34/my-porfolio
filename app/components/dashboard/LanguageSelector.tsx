"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}${pathname.replace(/^\/(es|en)/, "")}`);
  }

  return (
    <select
      value={locale}
      onChange={onChange}
      className="border border-gray-300 rounded-lg px-2 md:px-3 py-1.5 md:py-2 bg-white text-xs md:text-sm cursor-pointer"
    >
      <option value="es">🇨🇴 ES</option>
      <option value="en">🇺🇸 EN</option>
    </select>
  );
}

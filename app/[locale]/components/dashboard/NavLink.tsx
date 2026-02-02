"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  translationKey: string;
}

export default function NavLink({ href, translationKey }: NavLinkProps) {
  const t = useTranslations("Header.nav");

  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors"
    >
      {t(translationKey)}
    </Link>
  );
}
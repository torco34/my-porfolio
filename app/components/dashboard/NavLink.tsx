// "use client";

// import { useTranslations } from "next-intl";
// import Link from "next/link";

// interface NavLinkProps {
//   href: string;
//   translationKey: string;
// }

// export default function NavLink({ href, translationKey }: NavLinkProps) {
//   const t = useTranslations("Header.nav");

//   return (
//     <Link
//       href={href}
//       className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors"
//     >
//       {t(translationKey)}
//     </Link>
//   );
// }
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  translationKey: string;
}

export default function NavLink({ href, translationKey }: NavLinkProps) {
  const t = useTranslations("Header.nav");
  const pathname = usePathname();

  const isActive =
    href === "/" ?
      pathname === "/" || pathname.endsWith("/es") || pathname.endsWith("/en")
    : pathname.endsWith(href);

  return (
    <Link
      href={href}
      className={`px-3 py-2 transition-colors ${
        isActive ?
          "text-purple-600 font-semibold md:border-b-2 md:border-purple-200"
        : "text-gray-700 hover:text-purple-500"
      }`}
    >
      {t(translationKey)}
    </Link>
  );
}

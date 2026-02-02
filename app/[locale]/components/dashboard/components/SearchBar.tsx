"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const t = useTranslations("Header.search");
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setValue(text);
    onSearch(text);
  };

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={t("placeholder")}
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm transition-all outline-none focus:outline-none
            focus:border-[#aa60c8]
            focus:ring-2
            focus:ring-[#aa60c8]/20
            hover:border-gray-400
          "
        />

        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

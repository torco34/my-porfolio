import { useState } from "react";

type SearchBarProps = {
  placeholder?: string;
  onSearch: (value: string) => void;
};

export default function SearchBar({
  placeholder = "Buscar...",
  onSearch,
}: SearchBarProps) {
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
          placeholder={placeholder}
          className="w-full rounded-full border border-[#aa60c8]/60 bg-white py-2 pl-10 pr-4 text-xs transitio outline-none focus:outline-none
            focus-visible:border-[#fdeb9e]/40
            focus-visible:ring-2
            focus-visible:ring-[#aa60c8] animate-pulse
          "
        />

        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#aa60c8]"
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

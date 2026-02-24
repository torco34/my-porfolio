import { ChevronDown, ChevronUp } from "lucide-react";

interface ToggleExpandButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
  labelExpand: string; // ej: t("showMore")
  labelCollapse: string; // ej: t("showLess")
  className?: string;
}

export default function ToggleExpandButton({
  isExpanded,
  onToggle,
  labelExpand,
  labelCollapse,
  className = "",
}: ToggleExpandButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`ml-4 p-2.5 bg-gray-100 hover:bg-[#574964]/10 rounded-xl transition-all duration-300 hover:scale-110 ${className}`}
      aria-label={isExpanded ? labelCollapse : labelExpand}
    >
      {isExpanded ?
        <ChevronUp className="w-5 h-5 text-[#574964]" />
      : <ChevronDown className="w-5 h-5 text-gray-600 hover:text-[#574964]" />}
    </button>
  );
}

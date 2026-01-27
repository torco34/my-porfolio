import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        font-medium
        text-gray-100
        bg-[#AA60C8]
        hover:bg-[#AA60C8]/70
        rounded-full
        px-6 py-2
        transition-colors duration-200 ease-out
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-pink-300/40
        ${className}
      `}
    >
      {children}
    </button>
  );
}

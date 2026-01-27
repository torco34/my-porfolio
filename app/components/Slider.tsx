"use client";

import { StepBack, StepForward } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { SliderComponentProps } from "../ts/inicio";

export default function Slider({ slides }: SliderComponentProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-2xl overflow-hidden bg-whit">
        <div className="p-6 text-gray-300">
          <div className="relative w-full h-56 md:h-64">
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover pb-4 rounded-md"
              priority
            />
          </div>
          <div className="w-full">
            <h3 className="text-lg font-semibold">{slides[current].title}</h3>
            <p className="mt-1">{slides[current].description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="flex">
          <button
            onClick={prevSlide}
            className="px-2 py-2 background-text rounded-full hover:bg-[rgba(85,85,71,0.4)] transition"
          >
            <StepBack />
          </button>
          <button
            onClick={nextSlide}
            className="px-2 py-2 background-text rounded-full hover:bg-[rgba(85,85,71,0.4)] transition"
          >
            <StepForward />
          </button>
        </div>
      </div>
    </div>
  );
}

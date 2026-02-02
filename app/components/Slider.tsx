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
    <div className="w-full">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <div className="relative h-64 md:h-72">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              {slides[current].title}
            </h3>
            <p className="text-gray-200">{slides[current].description}</p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? "bg-[#aa60c8]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label="Previous slide"
              >
                <StepBack className="w-4 h-4 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label="Next slide"
              >
                <StepForward className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

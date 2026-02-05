"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
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
      <div className=" to-black rounded-2xl overflow-hidden   relative">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-linear-to-r from-[#aa60c8]/90 to-purple-600/30 rounded-full blur-2xl"></div>
        {/* <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-r from-purple-700/30 to-purple-900/30 rounded-full blur-2xl"></div> */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-900/10 rounded-full blur-3xl"></div> */}

        <div className="relative h-64 md:h-72 group z-10">
          <div className="absolute inset-0 bg-black/90 z-0"></div>
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/10  to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className=" from-black/90  backdrop-blur-md rounded-2xl p-5   shadow-2xl transform transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r "></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                  {slides[current].title}
                </h3>
                <p className="text-gray-50 text-sm leading-relaxed">
                  {slides[current].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <button
                onClick={prevSlide}
                className="p-3 bg-linear-to-r from-[#aa60c8] to-purple-700 rounded-full hover:from-purple-700 hover:to-[#aa60c8] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>

              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === current ?
                          "bg-linear-to-r from-[#aa60c8] to-purple-600 scale-125 shadow-lg ring-2 ring-purple-300 ring-offset-1 ring-offset-gray-900"
                        : "bg-purple-500/60 hover:bg-purple-400 hover:scale-110"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="text-sm font-medium text-white bg-linear-to-r from-[#aa60c8]/80 to-purple-600/80 px-3 py-1 rounded-full border border-purple-500/30">
                  {current + 1} / {slides.length}
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="p-3 bg-linear-to-r from-[#aa60c8] to-purple-700 rounded-full hover:from-purple-700 hover:to-[#aa60c8] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="text-sm text-purple-700 font-medium animate-pulse flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-ping"></div>
              ✨ Proyectos destacados
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

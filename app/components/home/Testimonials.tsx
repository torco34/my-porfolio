"use client";

import { testimonials as testimonialData } from "@/app/data/dataHome";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard";

export default function Testimonials() {
  const t = useTranslations("Home.testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = testimonialData.map((testimonial) => ({
    ...testimonial,
    content:
      testimonial.content.startsWith("content.") ?
        t(testimonial.content as `content.${string}`)
      : testimonial.content,
  }));

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 4 ? 0 : prev + 1));
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 4 : prev - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{t("title")}</h2>
          <p className="text-gray-600">{t("subtitle")}</p>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">
            {t("rating")}
          </span>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Testimonial Cards Grid */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[25%] px-1">
                <div className="h-full">
                  <TestimonialCard {...testimonial} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-100 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {[...Array(Math.max(1, testimonials.length - 3))].map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#aa60c8]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ),
            )}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 bg-gray-100 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export type StatItem = {
  icon: React.ElementType;
  value: string | number;
  label: string;
};

type Props = {
  items: StatItem[];
};

export function StatsGrid({ items }: Props) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="text-center">
                <div className="flex items-center color-texto justify-center gap-2 mb-2">
                  <Icon className="w-6 h-6" />
                  <div className="text-3xl font-bold text-gray-900">
                    {item.value}
                  </div>
                </div>

                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

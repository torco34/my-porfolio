import React from "react";

import { BarChart3, BookOpen, CheckCircle, Clock } from "lucide-react";

// ----------------------
// 1️⃣ Tipo de tus estadísticas
// ----------------------
export type Stats = {
  totalCourses: number;
  completedCourses: number;
  totalHours: number;
  avgProgress: number;
};

// ----------------------
// 2️⃣ Tipo de item del grid
// ----------------------
export type CourseStatItem = {
  key: keyof Stats; // "totalCourses" | "completedCourses" | "totalHours" | "avgProgress"
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  labelKey: keyof Stats;
  suffix?: string; // opcional
};

// ----------------------
// 3️⃣ Configuración de los items
// ----------------------
export const coursesStatsConfig: CourseStatItem[] = [
  { key: "totalCourses", icon: BookOpen, labelKey: "totalCourses" },
  { key: "completedCourses", icon: CheckCircle, labelKey: "completedCourses" },
  { key: "totalHours", icon: Clock, labelKey: "totalHours", suffix: "+" },
  { key: "avgProgress", icon: BarChart3, labelKey: "avgProgress", suffix: "%" },
];

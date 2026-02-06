// Paleta de colores mejorada para el portfolio
// Manteniendo purple primario (#aa60c8) con black y white

export const colors = {
  // Colores principales
  primary: {
    DEFAULT: '#aa60c8',
    dark: '#8a40a8',
    light: '#ca80e8',
    lighter: '#e9d4f2',
  },
  
  // Neutrales
  black: '#000000',
  white: '#ffffff',
  
  // Escala de grises
  gray: {
    900: '#111827',
    800: '#1f2937',
    700: '#374151',
    600: '#4b5563',
    500: '#6b7280',
    400: '#9ca3af',
    300: '#d1d5db',
    200: '#e5e7eb',
    100: '#f3f4f6',
    50: '#f9fafb',
  },
  
  // Acentos
  accent: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Gradientes comunes
  gradients: {
    primary: 'from-[#aa60c8] to-[#8a40a8]',
    dark: 'from-gray-900 to-gray-800',
    light: 'from-white to-gray-100',
  }
} as const;
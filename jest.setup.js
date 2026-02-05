// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: (namespace) => {
    const translations = {
      'Projects.hero': {
        title: 'Mis Proyectos',
        description: 'Explora mi portafolio de proyectos desarrollados con las últimas tecnologías. Cada proyecto incluye descripción detallada, tecnologías utilizadas y enlaces al código y demo.',
        stats: {
          total: 'Proyectos Totales',
          technologies: 'Tecnologías',
          showing: 'Mostrando'
        }
      }
    }
    
    return (key) => {
      const keys = key.split('.')
      let value = translations[namespace]
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          return key
        }
      }
      
      return value || key
    }
  }
}))
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
      },
      'About.hero': {
        connect: 'Conéctate conmigo',
        downloadCV: 'Descargar CV'
      },
      'About.content': {
        aboutMe: 'Sobre Mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        education: 'Educación',
        achievements: 'Logros Principales',
        technicalSkills: 'Habilidades Técnicas',
        tools: 'Herramientas',
        softSkills: 'Habilidades Blandas'
      },
      'About.cta': {
        title: '¿Listo para trabajar juntos?',
        description: 'Si estás buscando un desarrollador frontend comprometido y apasionado por crear experiencias digitales excepcionales, ¡hablemos!',
        contactNow: 'Contactar Ahora',
        viewProjects: 'Ver Mis Proyectos'
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
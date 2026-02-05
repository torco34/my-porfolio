import { render, screen } from '@testing-library/react'
import ProjectCard from './ProjectCard'

// Mock para next-intl
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      'Projects.card.showMore': 'Ver más detalles',
      'Projects.card.showLess': 'Mostrar menos',
      'Projects.card.projectDetails': 'Detalles del Proyecto',
      'Projects.card.technologiesUsed': 'Tecnologías Utilizadas',
      'Projects.card.code': 'Código',
      'Projects.card.demo': 'Demo',
      'Projects.card.viewLess': 'Ver menos',
      'Projects.card.viewDetails': 'Ver detalles',
      'Projects.card.techs': 'techs',
      'Projects.card.more': 'más'
    }
    return translations[key] || key
  }
}))

describe('ProjectCard', () => {
  const mockProject = {
    id: 1,
    title: 'Proyecto de Prueba',
    description: 'Descripción del proyecto de prueba',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/test/project',
    demoUrl: 'https://demo.test.com',
    image: '/test-image.jpg'
  }

  it('debería renderizar el título del proyecto', () => {
    render(<ProjectCard project={mockProject} />)
    
    const title = screen.getByText('Proyecto de Prueba')
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('text-xl')
  })

  it('debería renderizar la descripción del proyecto', () => {
    render(<ProjectCard project={mockProject} />)
    
    const description = screen.getByText('Descripción del proyecto de prueba')
    expect(description).toBeInTheDocument()
  })

  it('debería mostrar las tecnologías utilizadas', () => {
    render(<ProjectCard project={mockProject} />)
    
    mockProject.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })

  it('debería tener enlaces a GitHub y Demo cuando están disponibles', () => {
    render(<ProjectCard project={mockProject} />)
    
    const githubLink = screen.getByText('code').closest('a')
    const demoLink = screen.getByText('demo').closest('a')
    
    expect(githubLink).toHaveAttribute('href', mockProject.githubUrl)
    expect(demoLink).toHaveAttribute('href', mockProject.demoUrl)
  })

  it('debería manejar proyectos con enlaces vacíos', () => {
    const projectWithEmptyUrls = {
      ...mockProject,
      githubUrl: '',
      demoUrl: ''
    }
    
    render(<ProjectCard project={projectWithEmptyUrls} />)
    
    // Los enlaces deberían estar presentes pero con href vacío
    const githubLink = screen.getByText('code').closest('a')
    const demoLink = screen.getByText('demo').closest('a')
    
    expect(githubLink).toHaveAttribute('href', '')
    expect(demoLink).toHaveAttribute('href', '')
  })

  it('debería tener la imagen del proyecto', () => {
    render(<ProjectCard project={mockProject} />)
    
    // El componente no muestra una imagen real, muestra una letra inicial
    // Verificamos que muestra la letra 'P' (primera letra del título)
    const initial = screen.getByText('P')
    expect(initial).toBeInTheDocument()
    expect(initial).toHaveClass('text-4xl')
  })

  it('debería tener el botón para ver más detalles', () => {
    render(<ProjectCard project={mockProject} />)
    
    const detailsButton = screen.getByText('viewDetails')
    expect(detailsButton).toBeInTheDocument()
    expect(detailsButton).toHaveClass('text-blue-600')
  })
})
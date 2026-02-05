import { render, screen, fireEvent } from '@testing-library/react'
import ControlBar from './ControlBar'

describe('ControlBar', () => {
  const defaultProps = {
    filteredProjects: 8,
    totalProjects: 10,
    selectedTechs: ['React', 'TypeScript'],
    viewMode: 'grid' as const,
    showFilters: false,
    onViewModeChange: jest.fn(),
    onToggleFilters: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('debería mostrar el contador de proyectos correctamente', () => {
    render(<ControlBar {...defaultProps} />)
    
    // Verificar que los números están presentes
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    
    // Verificar que el texto completo está presente en algún lugar
    const container = screen.getByText('8').closest('p')
    expect(container?.textContent).toContain('Mostrando')
    expect(container?.textContent).toContain('de')
    expect(container?.textContent).toContain('proyectos')
  })

  it('debería mostrar las tecnologías filtradas cuando hay seleccionadas', () => {
    render(<ControlBar {...defaultProps} />)
    
    expect(screen.getByText('filtrados por')).toBeInTheDocument()
    expect(screen.getByText('React, TypeScript')).toBeInTheDocument()
  })

  it('no debería mostrar "filtrados por" cuando no hay tecnologías seleccionadas', () => {
    const propsWithoutTechs = {
      ...defaultProps,
      selectedTechs: []
    }
    
    render(<ControlBar {...propsWithoutTechs} />)
    
    expect(screen.queryByText('filtrados por')).not.toBeInTheDocument()
  })

  it('debería tener el botón de vista en cuadrícula activo cuando viewMode es "grid"', () => {
    render(<ControlBar {...defaultProps} />)
    
    const gridButton = screen.getByLabelText('Vista en cuadrícula')
    expect(gridButton).toHaveClass('bg-white')
    expect(gridButton).toHaveClass('text-blue-600')
  })

  it('debería tener el botón de vista en lista activo cuando viewMode es "list"', () => {
    const propsWithListMode = {
      ...defaultProps,
      viewMode: 'list' as const
    }
    
    render(<ControlBar {...propsWithListMode} />)
    
    const listButton = screen.getByLabelText('Vista en lista')
    expect(listButton).toHaveClass('bg-white')
    expect(listButton).toHaveClass('text-blue-600')
  })

  it('debería llamar a onViewModeChange al hacer clic en el botón de vista en cuadrícula', () => {
    render(<ControlBar {...defaultProps} />)
    
    const gridButton = screen.getByLabelText('Vista en cuadrícula')
    fireEvent.click(gridButton)
    
    expect(defaultProps.onViewModeChange).toHaveBeenCalledWith('grid')
  })

  it('debería llamar a onViewModeChange al hacer clic en el botón de vista en lista', () => {
    render(<ControlBar {...defaultProps} />)
    
    const listButton = screen.getByLabelText('Vista en lista')
    fireEvent.click(listButton)
    
    expect(defaultProps.onViewModeChange).toHaveBeenCalledWith('list')
  })

  it('debería mostrar el contador de filtros cuando hay tecnologías seleccionadas', () => {
    render(<ControlBar {...defaultProps} />)
    
    const filterBadge = screen.getByText('2')
    expect(filterBadge).toBeInTheDocument()
    expect(filterBadge).toHaveClass('bg-blue-600')
    expect(filterBadge).toHaveClass('text-white')
  })

  it('no debería mostrar el contador de filtros cuando no hay tecnologías seleccionadas', () => {
    const propsWithoutTechs = {
      ...defaultProps,
      selectedTechs: []
    }
    
    render(<ControlBar {...propsWithoutTechs} />)
    
    expect(screen.queryByText('2')).not.toBeInTheDocument()
  })

  it('debería tener el botón de filtros con estilo activo cuando showFilters es true', () => {
    const propsWithFiltersOpen = {
      ...defaultProps,
      showFilters: true
    }
    
    render(<ControlBar {...propsWithFiltersOpen} />)
    
    const filterButton = screen.getByText('Filtros').closest('button')
    expect(filterButton).toHaveClass('bg-blue-100')
    expect(filterButton).toHaveClass('text-blue-700')
  })

  it('debería tener el botón de filtros con estilo activo cuando hay tecnologías seleccionadas', () => {
    render(<ControlBar {...defaultProps} />)
    
    const filterButton = screen.getByText('Filtros').closest('button')
    expect(filterButton).toHaveClass('bg-blue-100')
    expect(filterButton).toHaveClass('text-blue-700')
  })

  it('debería tener el botón de filtros con estilo inactivo cuando no hay filtros activos', () => {
    const propsWithoutFilters = {
      ...defaultProps,
      selectedTechs: [],
      showFilters: false
    }
    
    render(<ControlBar {...propsWithoutFilters} />)
    
    const filterButton = screen.getByText('Filtros').closest('button')
    expect(filterButton).toHaveClass('bg-gray-100')
    expect(filterButton).toHaveClass('text-gray-700')
  })

  it('debería llamar a onToggleFilters al hacer clic en el botón de filtros', () => {
    render(<ControlBar {...defaultProps} />)
    
    const filterButton = screen.getByText('Filtros')
    fireEvent.click(filterButton)
    
    expect(defaultProps.onToggleFilters).toHaveBeenCalledTimes(1)
  })

  it('debería tener la estructura responsive correcta', () => {
    render(<ControlBar {...defaultProps} />)
    
    // Buscar el contenedor principal por su clase
    const container = document.querySelector('.flex-col.md\\:flex-row')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('flex-col')
    expect(container).toHaveClass('md:flex-row')
  })
})
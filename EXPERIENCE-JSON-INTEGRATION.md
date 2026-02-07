# Integración de Componente JSON en Página de Experiencia

## Problema Original
Ya existía una página `/experience` funcionando con datos estáticos de TypeScript. En lugar de crear una página duplicada, integré la funcionalidad JSON directamente en la página existente.

## Solución Implementada

### 1. **Componentes Creados**
- `ExperienceCardJSON.tsx` - Similar al `ExperienceCard` existente pero con tipos simplificados para JSON
- `ExperienceSectionJSON.tsx` - Componente que carga datos desde JSON y renderiza las tarjetas

### 2. **Integración en la Página Existente**
- **Toggle de fuente de datos**: Botón para cambiar entre datos TypeScript y JSON
- **Mismo diseño**: Se mantiene el mismo layout y estilos
- **Filtros deshabilitados para JSON**: Los filtros solo funcionan con datos TypeScript

### 3. **Cambios en `/experience/page.tsx`**
- **Estado `useJSON`**: Controla qué fuente de datos mostrar
- **Sección en sidebar**: Opción para cambiar entre "Datos Estáticos (TypeScript)" y "Datos Dinámicos (JSON)"
- **Render condicional**: Muestra `ExperienceSectionJSON` cuando `useJSON` es true

### 4. **Estructura de Datos JSON**
Los datos en `/public/experience-translations.json` tienen:
```json
{
  "es": {
    "experiences": [...],
    "translations": {...}
  },
  "en": {
    "experiences": [...],
    "translations": {...}
  }
}
```

## Cómo Funciona

### Para el Usuario:
1. Visita `/experience`
2. En la barra lateral, ve la sección "Fuente de Datos"
3. Puede elegir entre:
   - **Datos Estáticos**: Los originales de TypeScript con filtros
   - **Datos Dinámicos**: Cargados desde JSON (sin filtros)

### Ventajas de esta Integración:
1. **No hay páginas duplicadas**
2. **Mismo diseño y experiencia de usuario**
3. **Fácil de mantener** - solo una página
4. **Comparación directa** entre ambas fuentes de datos
5. **Migración gradual** - se puede empezar a usar JSON y luego migrar completamente

## Archivos Modificados/Creados

### Nuevos:
1. `app/components/experience/ExperienceCardJSON.tsx`
2. `app/components/experience/ExperienceSectionJSON.tsx`
3. `public/experience-translations.json`

### Modificados:
1. `app/[locale]/experience/page.tsx` - Agregado toggle y lógica JSON

### Eliminados:
1. Página duplicada `/experience-json`
2. Componentes innecesarios creados anteriormente

## Uso

### Para Desarrolladores:
- Los datos JSON están en `/public/experience-translations.json`
- Para agregar una experiencia: añadir al array `experiences`
- Para cambiar traducciones: modificar objeto `translations`

### Para Usuarios:
- Visitar `/experience`
- En sidebar, cambiar entre TypeScript y JSON
- Ver diferencias en tiempo real

## Beneficios
- ✅ **Unificada**: Una sola página para ambas fuentes
- ✅ **Comparativa**: Fácil ver diferencias
- ✅ **Mantenible**: Código organizado
- ✅ **Escalable**: Fácil migrar a JSON completamente
- ✅ **User-friendly**: Interfaz intuitiva
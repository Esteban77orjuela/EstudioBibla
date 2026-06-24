# Bitácora de Desarrollo — Biblioteca Bíblica

## [2026-06-24] — Sprint 0: Fundación

### Añadido
- Estructura de documentación profesional (`docs/`)
  - `PHASES.md` — Marco de 13 fases de desarrollo
  - `VISION.md` — Visión del producto
  - `ROADMAP.md` — Plan de desarrollo contra las fases
  - `CHANGELOG.md` — Esta bitácora
  - `REQUIREMENTS.md` — Requerimientos funcionales y no funcionales
  - `ARCHITECTURE.md` — Arquitectura del sistema y modelo de datos
- Análisis del proyecto existente exportado desde Google AI Studio
- Todo list de tareas pendientes

### Estado Actual del Proyecto
- Proyecto base: React 19 + TypeScript + Vite + Tailwind CSS v4
- Contenido: Estudio de Efesios 1 con exégesis versículo por versículo
- Componentes: App, Reader, VerseCard, LeftSidebar, RightSidebar
- Sistema de temas: light, sepia, dark
- Control de tamaño de fuente
- Panel de navegación por libros/capítulos
- Panel de herramientas (IA, Notas, Bibliografía)

## [2026-06-24] — Sprint 0.1: Sistema de Referencias

### Añadido
- Sistema de tipos separado: `src/types/study.ts` y `src/types/reference.ts`
- Catálogo de fuentes bibliográficas: `src/data/sources.ts` (15 fuentes iniciales)
- Patrón Repository: `src/data/index.ts` (abstracción de acceso a datos)
- Componente `ReferenceTooltip` — tooltip emergente al hover sobre [1], [2],
  con datos de autor, obra, año
- Componente `ReferenceModal` — modal con datos bibliográficos completos,
  incluyendo editorial, año, tipo, URL, y cita textual

### Modificado
- `VerseCard` — ahora muestra números de referencia en el texto, tooltips
  interactivos, y botón "VER FUENTES" con acceso al modal
- `App.tsx` — ahora usa el repositorio (`studyRepo.getStudy()`) en lugar de
  import directo
- `data.ts` — ahora re-exporta desde la nueva estructura modular
- `types.ts` — ahora re-exporta desde los nuevos archivos de tipos
- `Reader.tsx` — limpieza de imports no usados

### Estado
- ✅ Todo compila sin errores (`npm run lint` pasa limpio)
- ✅ Sistema de referencias funcional con tooltips y modal
- ✅ Arquitectura preparada para escalar a más estudios

### Pendiente
- Expansión a más libros bíblicos
- Integración de IA con fuentes verificables (Epic 4)
- Subida a GitHub
- Pruebas y calidad

---

*Bitácora — Biblioteca Bíblica*

# Diseño Técnico — Biblioteca Bíblica

## Estructura de Carpetas

```
src/
├── main.tsx                    # Entry point
├── index.css                   # Estilos globales
├── types/                      # Definiciones de tipos
│   ├── index.ts                # Re-exportaciones
│   ├── study.ts                # Tipos de estudio bíblico
│   └── reference.ts            # Tipos de referencias y citas
├── data/                       # Capa de datos
│   ├── index.ts                # Data access layer (Repository)
│   ├── studies/                # Estudios bíblicos
│   │   └── ephesians-1.ts
│   └── references/             # Fuentes bibliográficas
│       └── sources.ts
├── components/                 # Componentes UI
│   ├── layout/                 # Componentes de layout
│   │   ├── App.tsx
│   │   ├── LeftSidebar.tsx
│   │   └── RightSidebar.tsx
│   ├── study/                  # Componentes de estudio
│   │   ├── Reader.tsx
│   │   └── VerseCard.tsx
│   └── ui/                     # Componentes UI reutilizables
│       ├── ReferenceTooltip.tsx
│       └── ReferenceModal.tsx
└── hooks/                      # Custom hooks
    ├── useReferences.ts
    └── useScrollProgress.ts
```

## Sistema de Referencias

Cada cita en un estudio tendrá una estructura como:

```
Texto del estudio con una cita importante [1]
                                     ↓
                              ┌─────────────┐
                              │ Tooltip:      │
                              │ Calvino, J.   │
                              │ Institutas    │
                              │ 3.2.1         │
                              │ [Ver más →]   │
                              └─────────────┘
                                     ↓ (clic)
                              ┌─────────────────────┐
                              │ Modal:               │
                              │ #1                   │
                              │ Autor: Juan Calvino   │
                              │ Obra: Institutas...  │
                              │ Editorial:           │
                              │ Año: 1559            │
                              │ URL: ...             │
                              └─────────────────────┘
```

## Patrón Repository

Toda la lógica de acceso a datos se abstrae mediante un patrón Repository:

```typescript
// src/data/index.ts
class StudyRepository {
  getStudy(book: string, chapter: number): FullStudy | null
  getAllStudies(): FullStudy[]
  getSourceById(id: string): Source | null
  searchStudies(query: string): FullStudy[]
}
```

Esto permite:
- Cambiar la fuente de datos (estático → API → DB) sin modificar componentes
- Testing más fácil
- Separación clara de responsabilidades

---

*Diseño Técnico — Biblioteca Bíblica*

# Arquitectura del Sistema — Biblioteca Bíblica

## Decisión Arquitectónica Principal

**Fase actual:** Frontend monolítico con datos estáticos
**Fase objetivo:** Frontend + API REST + Base de datos relacional

### Estrategia de Evolución

No construimos el sistema final de golpe. Evolucionamos:

```
Fase 1 (ahora):
[Navegador] → [React App] → [Archivos TS/JSON estáticos]

Fase 2 (próxima):
[Navegador] → [React App] → [Express API] → [PostgreSQL]

Fase 3 (futuro):
[Navegador/Móvil] → [API Gateway] → [Microservicios] → [PostgreSQL + Redis]
```

Esto nos permite:
- Entregar valor rápidamente (Fase 1 funcional ahora)
- Migrar sin reescribir (misma interfaz, cambia la fuente de datos)
- Escalar cuando sea necesario

---

## Diagrama de Arquitectura Actual

```
┌─────────────────────────────────────────────┐
│                Navegador                      │
│                                              │
│  ┌─────────────────────────────────────────┐ │
│  │           React 19 App                   │ │
│  │                                          │ │
│  │  ┌──────────┐  ┌──────────┐  ┌────────┐ │ │
│  │  │   App    │  │  Reader  │  │ Verse  │ │ │
│  │  │  (Shell) │──│ (Centro) │──│ Card   │ │ │
│  │  └────┬─────┘  └──────────┘  └────────┘ │ │
│  │       │                                   │ │
│  │  ┌────▼─────┐  ┌──────────┐              │ │
│  │  │ Left     │  │ Right    │              │ │
│  │  │ Sidebar  │  │ Sidebar  │              │ │
│  │  └──────────┘  └──────────┘              │ │
│  │                                          │ │
│  │  ┌──────────┐                            │ │
│  │  │ data.ts  │ ← Contenido estático       │ │
│  │  └──────────┘                            │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

---

## Principios Arquitectónicos

1. **Separation of Concerns** — Cada capa tiene una responsabilidad única
2. **Dependency Inversion** — Las capas altas no dependen de las bajas
3. **Domain-Driven Design** — El modelo de datos refleja el dominio bíblico
4. **Prepare for scale** — Diseñado para migrar a DB sin reescribir lógica
5. **Content as Data** — El contenido teológico es datos, no código

---

## Decisiones Técnicas

| Decisión | Opción Elegida | Razón |
|----------|---------------|-------|
| Framework | React 19 | Maduro, ecosistema, Concurrent Features |
| Lenguaje | TypeScript | Tipado estricto para modelo de datos complejo |
| Build | Vite | Extremadamente rápido, moderno |
| CSS | Tailwind v4 | Utility-first, diseño rápido, tema dinámico |
| Animaciones | Motion | API declarativa, AnimatePresence |
| Backend | Express (futuro) | Simple, conocido, suficiente |
| Base de Datos | PostgreSQL (futuro) | JSONB para flexibilidad, relational para integridad |
| IA | Google Gen AI SDK | Ya integrado en el proyecto |

---

## Modelo de Datos (Futuro)

```
┌───────────────┐     ┌───────────────┐     ┌──────────────────┐
│     Book      │     │   Chapter     │     │      Study       │
│───────────────│     │───────────────│     │──────────────────│
│ id (PK)       │────→│ id (PK)       │────→│ id (PK)          │
│ name          │     │ book_id (FK)  │     │ chapter_id (FK)  │
│ testament     │     │ number        │     │ theological_title│
│ position      │     │               │     │ subtitle         │
└───────────────┘     └───────────────┘     │ contextual_intro │
                                            │ historical_ctx   │
┌───────────────┐     ┌───────────────┐     │ literary_ctx     │
│    Verse      │     │   Source      │     │ redemptive_line  │
│───────────────│     │───────────────│     │ pastoral_reflect │
│ id (PK)       │     │ id (PK)       │     └────────┬─────────┘
│ study_id (FK) │     │ name          │              │
│ number        │     │ author        │     ┌────────▼─────────┐
│ text          │────→│ type          │     │ VerseStudy       │
│ lexical_analysis│    │ publisher     │     │──────────────────│
│ cultural_ctx  │     │ year          │     │ id (PK)          │
│ theological_meaning│ │ url           │     │ study_id (FK)    │
│ pastoral_app  │     │ doi           │     │ verse_number     │
└───────┬───────┘     └───────────────┘     │ text             │
        │                                    └──────────────────┘
        │          ┌───────────────┐
        └─────────→│  Citation     │
                   │───────────────│
                   │ id (PK)       │
                   │ verse_id (FK) │
                   │ source_id (FK)│
                   │ number        │
                   └───────────────┘
```

---

*Arquitectura — Biblioteca Bíblica*

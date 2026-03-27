# Wolves FC - Plan de Ejecución y Stack Técnico

## 1. Stack Tecnológico

### Core
| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 18.x | Framework principal |
| TypeScript | 5.x | Tipado estático |
| Vite | 5.x | Build tool y dev server |

### Styling & UI
| Tecnología | Uso |
|------------|-----|
| Tailwind CSS | Utility-first CSS |
| clsx / class-variance-authority | Conditional classes |
| Lucide React | Iconos |

### State & Data
| Tecnología | Uso |
|------------|-----|
| TanStack Query | Server state, caching, sync |
| Zustand | Client state management |
| React Hook Form | Formularios |
| Zod | Validación de schemas |

### Routing & Navigation
| Tecnología | Uso |
|------------|-----|
| React Router | SPA routing |

### Testing
| Tecnología | Uso |
|------------|-----|
| Vitest | Unit/integration tests |
| Testing Library | Component testing |
| Playwright | E2E testing |

### Deployment
| Tecnología | Uso |
|------------|-----|
| Vercel / Netlify | Hosting estático |

---

## 2. Estructura del Proyecto

```plaintext
src/
├── assets/           # Imágenes, iconos, fuentes
├── components/       # UI primitivas reutilizables
│   └── ui/           # Componentes base (Button, Input, Modal, Card)
├── features/         # Agrupación por dominio
│   ├── home/
│   ├── news/
│   ├── players/
│   ├── matches/
│   ├── shop/
│   └── ticketing/
├── layouts/          # Estructuras de página
├── pages/            # Vistas principales enrutables
├── routes/           # Configuración de rutas
├── services/         # Llamadas API y endpoints
├── store/            # Estado global (Zustand)
├── styles/           # Variables globales, tailwind config
└── utils/            # Helpers (fechas, formateo, etc.)
```

---

## 3. Fases de Ejecución

### Fase 1: Setup y Configuración
**Duración estimada:** 1-2 días

- [ ] Inicializar proyecto con Vite + React + TypeScript
- [ ] Configurar ESLint + Prettier
- [ ] Configurar Tailwind CSS
- [ ] Configurar path aliases (@/)
- [ ] Configurar Vitest
- [ ] Crear estructura de carpetas
- [ ] Configurar Git hooks (husky, lint-staged)

### Fase 2: UI Primitives
**Duración estimada:** 2-3 días

- [ ] Button (variants: primary, secondary, ghost, outline)
- [ ] Input (text, email, password, search)
- [ ] Card (news card, player card, match card)
- [ ] Modal
- [ ] Badge
- [ ] Skeleton (loading states)
- [ ] Avatar
- [ ] Select / Dropdown

### Fase 3: Layout System
**Duración estimada:** 1 día

- [ ] MainLayout (header, nav, footer)
- [ ] AuthLayout (para páginas de autenticación)
- [ ] Header con navegación principal
- [ ] Footer con links y redes sociales
- [ ] Responsive breakpoints

### Fase 4: Home + Landing
**Duración estimada:** 2-3 días

- [ ] Hero section con CTA principal
- [ ] Últimos resultados / próximo partido
- [ ] News preview (últimas 3 noticias)
- [ ] Stats highlights
- [ ] Sponsors carousel
- [ ] Call to action (tickets, membership)

### Fase 5: News Module
**Duración estimada:** 3-4 días

- [ ] News listing page
- [ ] News card component
- [ ] News detail page
- [ ] Photo gallery
- [ ] Video gallery
- [ ] Category filtering
- [ ] Pagination

### Fase 6: First Team (Roster)
**Duración estimada:** 3-4 días

- [ ] Roster listing page
- [ ] Player card component
- [ ] Player detail page
- [ ] Player stats
- [ ] Position filtering
- [ ] Coaching staff section
- [ ] Squad number sorting

### Fase 7: Matches Module
**Duración estimada:** 3-4 días

- [ ] Match schedule calendar
- [ ] Match result cards
- [ ] League standings table
- [ ] Match detail page
- [ ] Lineup visualization
- [ ] Match statistics
- [ ] Venue information

### Fase 8: Shop (E-commerce)
**Duración estimada:** 5-7 días

- [ ] Product listing with filters
- [ ] Product detail page
- [ ] Shopping cart
- [ ] Checkout flow
- [ ] Order confirmation
- [ ] Wishlist
- [ ] Size guide

### Fase 9: Ticketing
**Duración estimada:** 4-5 días

- [ ] Match ticket selection
- [ ] Stadium map / seat picker
- [ ] Price categories
- [ ] Checkout flow
- [ ] QR code ticket generation
- [ ] My tickets page
- [ ] Ticket validation

### Fase 10: Club, Academy, Fans
**Duración estimada:** 4-5 días

- [ ] Club history timeline
- [ ] Honors / trophies display
- [ ] Stadium virtual tour
- [ ] Board of directors
- [ ] Youth teams listing
- [ ] Tryout registration form
- [ ] Membership tiers
- [ ] Fan groups directory

### Fase 11: Testing y Polish
**Duración estimada:** 3-4 días

- [ ] Unit tests (critical paths)
- [ ] Integration tests
- [ ] E2E tests (user flows)
- [ ] Accessibility audit (WCAG)
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Mobile testing

### Fase 12: Deployment
**Duración estimada:** 1 día

- [ ] Environment configuration
- [ ] CI/CD pipeline
- [ ] Production build
- [ ] Monitoring setup
- [ ] Analytics integration

---

## 4. Prioridades de Entrega

### MVP (Mes 1)
1. Setup + UI Primitives
2. Layout System
3. Home
4. Matches (standings + schedule)
5. News

### Conversión (Mes 2)
1. Ticketing
2. Shop
3. Membership

### Expansión (Mes 3)
1. First Team / Roster
2. Club, Academy, Fans
3. Testing + Polish

---

## 5. Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x",
    "@tanstack/react-query": "^5.x",
    "zustand": "^4.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "@hookform/resolvers": "^3.x",
    "lucide-react": "^0.x",
    "clsx": "^2.x",
    "date-fns": "^3.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "vite": "^5.x",
    "@vitejs/plugin-react": "^4.x",
    "tailwindcss": "^3.x",
    "eslint": "^8.x",
    "prettier": "^3.x",
    "vitest": "^1.x",
    "@testing-library/react": "^14.x",
    "@playwright/test": "^1.x"
  }
}
```

---

## 6. Convenciones de Commit

```bash
# Formato
<tipo>(<módulo>): descripción

# Ejemplos
feat(home): agregar hero section
feat(matches): implementar standings
fix(tickets): corregir validación de asientos
chore(deps): actualizar react-query
docs(readme): actualizar instrucciones
test(players): agregar tests de filtrado
```

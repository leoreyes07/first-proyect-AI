# Wolves FC Web Project - Agent Guidelines

## 1. Project Overview

A sports club website focused on conversion (ticketing/shop) and quick information consumption.

---

## 2. Sitemap

* **Home**
* **News:** Latest News, Official Announcements, Galleries (Photos/Videos).
* **First Team:** Roster (Players), Coaching Staff.
* **Matches:** Schedule & Results, Standings (League Table).
* **The Club:** History & Honors, Stadium/Facilities, Board of Directors.
* **Youth Academy:** Youth Teams, Tryout Information.
* **Fans:** Become a Member / Memberships, Fan Groups.
* **Shop (E-commerce)**
* **Ticketing**
* **Contact**

---

## 3. Project Folder Structure

```plaintext
src/
├── assets/        # Images, icons, crests, fonts
├── components/    # Reusable UI components (Buttons, Inputs, Modals)
├── features/      # Domain-based grouping (e.g., /players, /matches, /news)
├── layouts/       # Page structures (MainLayout, AuthLayout)
├── pages/         # Routable main views (Home, Roster, MatchCenter)
├── routes/        # Routing configuration
├── services/      # API calls and endpoints
├── store/         # Global state management
├── styles/        # Global variables/styles
└── utils/         # Helper functions (date formatting, conversions)
```

---

## 4. Build & Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint (ESLint)
npm run lint

# Type check (TypeScript)
npm run typecheck

# Run all checks (lint + typecheck + test)
npm run check

# Run tests
npm test                    # Run all tests
npm test -- --watch         # Watch mode
npm test -- src/__tests__/Specific.test.tsx  # Run single test file
npm test -- --coverage      # With coverage report
npm test -- --ui            # Interactive test runner

# Run specific test with pattern
npm test -- --testNamePattern="PlayerCard"
```

### Testing Guidelines
- Use **Vitest** for unit/integration tests
- Use **Testing Library** for component testing
- Tests should be co-located: `ComponentName.test.tsx` next to `ComponentName.tsx`
- Aim for 80% code coverage on critical paths
- Mock external API calls in tests

---

## 5. Code Style Guidelines

### General Principles
- Write self-documenting code; avoid comments that merely restate the obvious
- Prefer composition over inheritance
- Keep functions small and focused (single responsibility)
- Use meaningful, descriptive names

### TypeScript/Types

```typescript
// Prefer interfaces for object shapes
interface Player {
  id: string;
  name: string;
  position: Position;
  number: number;
}

// Use type for unions and computed types
type Position = 'GK' | 'DEF' | 'MID' | 'FWD';
type ApiResponse<T> = { data: T; status: number };

// Always explicit return types for exported functions
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB').format(date);
}

// Use strict null checking
function getPlayer(id: string): Player | null {
  return players.get(id) ?? null;
}
```

### Naming Conventions

```typescript
// Components: PascalCase
PlayerCard, MatchSchedule, TicketButton

// Hooks: camelCase with 'use' prefix
useAuth, usePlayer, useMatchData

// Utils/functions: camelCase, verb-prefixed for actions
formatCurrency, getOrdinalSuffix, sortByDate

// Constants: SCREAMING_SNAKE_CASE
const MAX_PLAYERS = 23;
const API_BASE_URL = '/api/v1';

// Interfaces/types: PascalCase, no 'I' prefix
// ❌ Bad: IPlayer, IResponse
// ✅ Good: Player, ApiResponse

// Files: kebab-case
player-card.tsx, match-schedule.tsx, api-service.ts
```

### Imports

```typescript
// 1. External libraries
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// 2. Internal components
import { PlayerCard } from '@/components/player-card';
import { Button } from '@/components/ui/button';

// 3. Types/interfaces
import type { Player, Match } from '@/types';

// 4. Utils and hooks
import { formatDate } from '@/utils/date';

// 5. Styles
import './player-card.css';

// Use absolute imports via path aliases (@/)
import { formatCurrency } from '@/utils/currency';
```

### Components

```typescript
// ✅ Good: Explicit props interface, destructured props
interface PlayerCardProps {
  player: Player;
  onSelect?: (id: string) => void;
  variant?: 'default' | 'compact';
}

export function PlayerCard({ player, onSelect, variant = 'default' }: PlayerCardProps) {
  const handleClick = () => onSelect?.(player.id);
  
  return (
    <div className={cn('player-card', `player-card--${variant}`)} onClick={handleClick}>
      <img src={player.photo} alt={player.name} />
      <span className="player-card__number">#{player.number}</span>
    </div>
  );
}

// Prefer composition over prop drilling
// ❌ Avoid: <Parent prop1={x} prop2={y} prop3={z} />
// ✅ Better: <Parent><Child1 /><Child2 /></Parent>
```

### Error Handling

```typescript
// Use custom error classes for domain-specific errors
class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public code: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Wrap async operations with proper error handling
async function fetchPlayer(id: string): Promise<Player> {
  try {
    const response = await api.get(`/players/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Failed to fetch player', 500, 'FETCH_ERROR');
  }
}

// Handle errors in components
function PlayerProfile({ id }: { id: string }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['player', id],
    queryFn: () => fetchPlayer(id),
  });

  if (isLoading) return <Skeleton />;
  if (error) return <ErrorMessage error={error} />;
  
  return <PlayerCard player={data} />;
}
```

### State Management

```typescript
// Prefer React Query/TanStack Query for server state
// Use Zustand or Context for client state
// Keep global state minimal

// ✅ Good: Colocation of state
function MatchList() {
  const [filter, setFilter] = useState<FilterState>(defaultFilter);
  return <List filter={filter} onFilterChange={setFilter} />;
}

// ❌ Avoid: Premature optimization, lifting all state up
```

### Styling

```typescript
// Use CSS modules or Tailwind CSS
// Avoid inline styles except for dynamic values
// Prefer utility classes for common patterns

// CSS Modules: component-name.module.css
// Utility classes: Tailwind built-ins

// ✅ Good: Semantic class names with BEM for CSS Modules
// .player-card__name {}
// .player-card--featured {}

// ❌ Avoid: .blue-box, .big-text {}
```

---

## 6. Git Conventions

```bash
# Branch naming
feature/add-player-filter
fix/modal-closing-issue
chore/update-dependencies

# Commit messages (Conventional Commits)
feat: add player search functionality
fix: resolve ticket button not working on mobile
docs: update API documentation
refactor: extract date formatting utilities
test: add tests for MatchSchedule component
```

---

## 7. Performance Guidelines

- Lazy load routes with `React.lazy()` and `Suspense`
- Memoize expensive computations with `useMemo`
- Use `useCallback` for event handlers passed to child components
- Optimize images: WebP format, proper sizing, lazy loading
- Monitor bundle size with `npm run build -- --analyze`

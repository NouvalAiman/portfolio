# Portfolio - Next.js 16 App Router

## Commands
- `npm run dev` - Start dev server (Turbopack)
- `npm run build` - Production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint (extends next/core-web-vitals + next/typescript)

## Architecture
- **Framework**: Next.js 16 (App Router), React 19, TypeScript (strict)
- **Styling**: Tailwind CSS v4 (PostCSS), CSS variables for theming
- **Animation**: Framer Motion (planned)
- **Icons**: Lucide React (planned)
- **Fonts**: Geist Sans + Geist Mono via next/font
- **Path alias**: `@/*` → `./*`

## Project Structure
```
app/           # App Router pages (layout.tsx, page.tsx, globals.css)
components/    # Planned: ui/, layout/, sections/
lib/           # Planned: utilities
data/          # Planned: portfolio.ts (typed data)
types/         # Planned: index.ts (Project, Skill, Experience interfaces)
```

## Design System: "High-Tech Minimalism"
- **Background**: `#050505` with subtle `#1A1A1A` grid/dots
- **Cards**: Glassmorphism `rgba(255,255,255,0.03)` + border `#1F2937`
- **Primary**: Neon Cyan `#00E5FF` (hover, active, primary buttons)
- **Secondary**: Electric Purple `#B026FF` (badges, secondary accents)
- **Typography**: Sans-serif (Space Grotesk/Inter) for headings, Monospace (JetBrains Mono/Fira Code) for body/data
- **Interactions**: Magnetic buttons, glow on hover, staggered fade-in on scroll

## Execution Protocol (from design.md)
Work in **phases** - never generate code outside requested phase, no placeholders. Phases:
1. Architecture & Config (tailwind.config.ts, globals.css, folder structure)
2. Data Layer & Types (types/index.ts, data/portfolio.ts)
3. Global UI & Layout (Navbar, Footer, layout.tsx)
4. Hero & About
5. Skills & Projects
6. Experience & Contact
7. Extra Routes (/open-source, /journal)
8. Polish, Animations, A11y

## Key Files
- `design.md` - Full design tokens, roadmap, phase details
- `tsconfig.json` - Strict mode, path aliases, Next.js plugin
- `eslint.config.mjs` - Extends next/core-web-vitals + next/typescript
- `postcss.config.mjs` - Tailwind v4 PostCSS plugin
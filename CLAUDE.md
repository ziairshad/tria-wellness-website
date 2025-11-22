# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Project Architecture

This is a Next.js 16 landing page for Tria, a wellness studio offering yoga and Lagree Method classes. The application uses:

- **Framework**: Next.js 16 with App Router and TypeScript
- **Styling**: Tailwind CSS v4 with custom brand colors
- **UI Components**: shadcn/ui components with custom styling
- **Animations**: Framer Motion for smooth transitions
- **Fonts**: Custom Vonca font family + Google Fonts (Montserrat)

### Key Directories

- `src/app/` - Next.js App Router pages and layout
- `src/components/sections/` - Main page sections (hero, classes, studio, etc.)
- `src/components/ui/` - Reusable UI components (shadcn/ui + custom)
- `src/data/constants.ts` - All static content and configuration data
- `src/types/` - TypeScript type definitions
- `public/vonca-font/` - Custom Vonca font files (.otf format)

### Component Structure

The main page (`src/app/page.tsx`) is composed of section components:
- Navigation - Fixed header with smooth scroll navigation
- Hero - Main landing area with brand messaging
- MarqueeSection - Animated text marquee
- Classes - Class offerings with schedule information
- Studio - Studio spaces and features
- Instructors - Team member profiles
- Services - Service offerings and features
- Testimonials - Client testimonials carousel
- Instagram - Social media integration
- CTA - Call-to-action section
- Footer - Site footer with contact info

### Data Management

All content is centralized in `src/data/constants.ts` including:
- Class schedules and descriptions
- Instructor profiles
- Service offerings
- Studio features
- Navigation links
- Brand colors and styling data

### Brand Implementation

The Tria brand identity is implemented through:
- Custom Vonca font family (extralight to extrabold weights)
- Eucalyptus-based color palette with CSS custom properties
- Tailwind configuration using brand colors
- Consistent typography scale
- Gradient and shadow styling patterns

### shadcn/ui Configuration

Components are configured in `components.json`:
- Style: "new-york"
- Base color: "neutral"
- CSS variables enabled
- Custom aliases for imports (@/components, @/lib, etc.)

## Brand Colors & Implementation

```css
/* Implemented as Tailwind CSS custom colors */
primary: #5A6E53     /* Deep Eucalyptus */
secondary: #A85C42   /* Clay Brown */
accent: #C0CBBD      /* Eucalyptus Green */
background: #E6E3DC  /* Drift White */
muted: #E0D4C8       /* Zen Sand */
```

## Font Implementation

- **Vonca**: Custom local font for headings (200-800 weights)
- **Montserrat**: Google Font for body text (300-700 weights)
- Both configured as CSS variables in layout.tsx

## Development Notes

- The project follows Next.js 16 App Router conventions
- All animations use Framer Motion for consistency
- Brand guidelines are documented in `/Brandguidelines` (parent directory)
- Static assets include class images and studio photos
- No testing framework is currently configured
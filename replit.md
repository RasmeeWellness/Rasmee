# Rasmee Wellness

A wellness website built with React, Vite, TypeScript, and Tailwind CSS. Originally created in Lovable and migrated to Replit.

## Project Structure

- `src/` - Main source code
  - `pages/` - Page components: Index, Services, Retreat, Phototherapy, NotFound
  - `components/` - Shared components: Navbar, HeroSection, AboutSection, FooterSection, TestimonialSection, NavLink, and UI primitives
  - `assets/` - Image assets (butterfly logo, hero images, etc.)
- `public/` - Static public assets
- `index.html` - Entry HTML
- `vite.config.ts` - Vite configuration (port 5000, host 0.0.0.0 for Replit)
- `tailwind.config.ts` - Tailwind CSS configuration
- `components.json` - shadcn/ui component registry config

## Tech Stack

- React 18 + TypeScript
- Vite (dev server on port 5000)
- Tailwind CSS + shadcn/ui components
- React Router v6 for navigation
- Framer Motion for animations
- TanStack Query
- Lucide React for icons

## Running the App

```bash
npm run dev
```

The dev server runs on port 5000.

## Key Notes

- Pure frontend app — no backend server required
- `lovable-tagger` was removed from Vite config during migration (Replit-incompatible)
- `retreat-main-Morpho.jpg` is used as the retreat hero image

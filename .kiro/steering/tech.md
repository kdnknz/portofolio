# Tech Stack

## Core

- **Framework:** React 18 (JSX, functional components with hooks)
- **Routing:** React Router DOM v7 (BrowserRouter, client-side routing)
- **Build Tool:** Vite 5 (dev server on port 3000, auto-opens browser)
- **Language:** JavaScript (ES modules, no TypeScript in source)

## Dependencies

- `react` ^18.2.0
- `react-dom` ^18.2.0
- `react-router-dom` ^7.11.0

## Dev Dependencies

- `@vitejs/plugin-react` ^4.2.1
- `vite` ^5.0.8
- `@types/react` ^18.2.43 (type hints only, no TS compilation)
- `@types/react-dom` ^18.2.17

## Styling

- CSS-in-JS via inline `<style jsx>` blocks inside components
- Global CSS in `src/index.css` with CSS custom properties (variables)
- No external CSS framework (custom styles throughout)

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (port 3000) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |

## Notes

- No test framework is configured
- No linter/formatter configured
- No CI/CD pipeline
- Static data lives in `src/database.js` (no backend API)

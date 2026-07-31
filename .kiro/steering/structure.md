# Project Structure

```
portofolio/
├── public/                  # Static assets served as-is
│   └── image/              # Images (avatar, project screenshots)
├── src/
│   ├── main.jsx            # App entry point (renders <App /> into DOM)
│   ├── App.jsx             # Root component with Router and route definitions
│   ├── index.css           # Global styles and CSS custom properties
│   ├── database.js         # All portfolio content data (static, no API)
│   ├── components/         # All React components (flat, no nesting)
│   └── hooks/              # Custom React hooks
├── index.html              # HTML shell (Vite entry)
├── vite.config.js          # Vite configuration
└── package.json
```

## Architecture Patterns

- **Single-page app** with React Router for page-like navigation
- **Data-driven components:** All content comes from `src/database.js` and is passed as props
- **Flat component directory:** All components live directly in `src/components/` (no sub-folders)
- **Component-scoped CSS:** Each component contains its own `<style jsx>` block for styles
- **No state management library:** Local state via `useState`/`useEffect` only
- **Custom hooks** in `src/hooks/` for reusable logic (e.g., IntersectionObserver)

## Conventions

- Components are functional (arrow functions), exported as default
- File names match component names in PascalCase (e.g., `HeroParticles.jsx`)
- Props are destructured in function parameters
- Routes defined centrally in `App.jsx` inside `AnimatedRoutes`
- Images referenced via absolute paths from `public/` (e.g., `/image/adet.png`)

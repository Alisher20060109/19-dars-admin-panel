# Copilot Instructions for 19-dars Project

## Project Overview
React + Vite learning project using React 19 with Fast Refresh for development and production builds. Minimal configuration setup focused on educational demonstration.

## Architecture & Key Files

### Entry Point
- **[index.html](index.html)**: Single entry point that mounts React app in `#root` element
- **[src/main.jsx](src/main.jsx)**: Bootstrap file that creates root and renders App in StrictMode
- **[src/App.jsx](src/App.jsx)**: Root component with example counter and HMR demo

### Build System
- **[vite.config.js](vite.config.js)**: Minimal Vite config using `@vitejs/plugin-react` for JSX + Fast Refresh
- **[package.json](package.json)**: Scripts include `dev` (Vite dev server), `build` (production), `lint`, `preview`

### Code Quality
- **[eslint.config.js](eslint.config.js)**: Flat-config ESLint with:
  - ESLint JS recommended rules
  - React Hooks plugin (detects hook dependency issues)
  - React Refresh plugin (ensures exported components can be hot-reloaded)
  - Custom rule: `no-unused-vars` ignores PascalCase (components)

## Developer Workflows

### Development
```bash
npm run dev  # Start Vite dev server with HMR on localhost:5173
```
Uses React Fast Refresh - changes to `.jsx` files instantly update in browser without state loss.

### Production Build
```bash
npm run build    # Creates optimized build in dist/ directory
npm run preview  # Preview production build locally
```

### Code Quality
```bash
npm run lint     # Check ESLint violations on all .js/.jsx files
```
The linter enforces React Hooks patterns - watch for missing dependencies in useEffect/useMemo/useCallback.

## Conventions & Patterns

### Component Structure
- **Functional components only** - useState for state, hooks for side effects
- **File naming**: PascalCase for components (App.jsx), lowercase for utilities
- **CSS organization**: Each component has adjacent `.css` file (App.jsx → App.css)
- **Assets**: Store in `src/assets/` - imported images get processed by Vite

### React-Specific Rules
- **Fast Refresh**: Don't export non-component values from component files (breaks HMR)
- **PascalCase exports**: Component names start with capital letter; used to distinguish from primitive values in linter
- **StrictMode**: Always wrap root render in `<StrictMode>` to catch common issues

### Development Patterns
- **JSX parsing**: ESLint configured for `ecmaVersion: 'latest'` with full JSX support
- **Import statements**: ES6 module syntax (`import`/`export`)
- **Browser globals**: ESLint environment set to `browser` (no Node.js globals)

## Integration Points

### External Dependencies
- **React 19.2.0**: Latest version with compiler-ready features
- **Vite 7.2.4**: Fast build tool with zero-config preset for React
- **No database/API**: This is a learning project without external service integration

### Development Dependencies Focus
- **@vitejs/plugin-react**: Handles JSX transpilation and Fast Refresh
- **eslint-plugin-react-hooks**: Validates hook usage patterns
- **eslint-plugin-react-refresh**: Ensures component exports compatible with HMR

## Critical Commands Reference

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Check lint errors | `npm run lint` |
| Preview prod build | `npm run preview` |

## When Modifying This Project

1. **Adding new components**: Create `.jsx` file in `src/`, add adjacent `.css` file if styling needed
2. **Modifying App.jsx**: Changes reflect instantly in browser via HMR
3. **Linting errors**: Check React Hooks deps, ensure components exported with PascalCase
4. **State management**: Use `useState` hook; for complex state consider custom hooks

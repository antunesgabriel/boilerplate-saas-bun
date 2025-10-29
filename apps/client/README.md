# Client App

Vite + React + TypeScript application with React Router and @repo/ui components.

## Getting Started

```bash
# Install dependencies (from root)
bun install

# Run development server
bun dev --filter=@apps/client
# or
cd apps/client && bun dev

# Build for production
bun build --filter=@apps/client
# or
cd apps/client && bun build

# Preview production build
bun preview
```

## Tech Stack

- **Vite**: Fast build tool and dev server
- **React 19**: Latest React version
- **TypeScript**: Full type safety
- **React Router v7**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **@repo/ui**: Shared UI component library from monorepo

## Features

- ⚡️ Fast HMR (Hot Module Replacement)
- routing with React Router
- 🎨 Shared UI components from @repo/ui
- 📦 TypeScript for type safety
- 🚀 Ready for Vercel deployment (vercel.json included)

## Project Structure

```
apps/client/
├── src/
│   ├── pages/          # Page components
│   ├── router/         # React Router configuration
│   ├── App.tsx         # Root app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles (imports @repo/ui styles)
├── public/             # Static assets
├── vercel.json         # Vercel SPA routing configuration
└── vite.config.ts      # Vite configuration
```

## Vercel Deployment

The `vercel.json` file is configured to handle client-side routing properly. All routes will be served through `index.html`, preventing 404 errors on page refresh.

## Routing

Routes are defined in `src/router/index.tsx`:

- `/` - Home page
- `/about` - About page

Add more routes by updating the router configuration.

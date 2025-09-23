# AGENTS.md

This document provides guidance for AI coding agents working with the Suparoute monorepo. It contains essential information about the project structure, setup commands, and development workflows.

## Project Overview

Suparoute is a monorepo built with Bun and Turborepo, containing:

- `packages/ui`: A shared component library using Tailwind CSS
- `apps/client`: A React + Vite application that consumes the UI package
- `apps/api`: An Elysia API server with Better Auth integration
- `packages/eslint-config`: Shared ESLint configurations
- `packages/typescript-config`: Shared TypeScript configurations

## Setup Commands

### Root Project

```bash
# Install dependencies
bun install

# Start all development servers
bun dev

# Build all packages
bun build

# Lint all packages
bun lint

# Type check all packages
bun check-types

# Format code
bun format

# Start only the client and API apps
bun dev:client
```

### UI Package

```bash
# Navigate to UI package
cd packages/ui

# Lint UI package
bun lint

# Type check UI package
bun check-types

# Generate a new component
bun generate:component
```

### Client App

```bash
# Navigate to client app
cd apps/client

# Start development server
bun dev

# Build client app
bun build

# Preview production build
bun preview

# Lint client app
bun lint
```

### API App

```bash
# Navigate to API app
cd apps/api

# Install dependencies (if needed)
bun install

# Set up environment variables
cp .env.example .env
# Edit .env with required variables (see ENVIRONMENT.md)

# Initialize database
bun run db:generate
bun run db:push

# Start development server (with hot reload)
bun dev

# Build API server
bun build

# Start production server
bun start

# Database management
bun run db:studio    # Open Drizzle Studio
bun run db:migrate   # Run migrations

# Type checking
bun run check-types
```

## Code Style Guidelines

- Use TypeScript with strict mode enabled
- Follow the ESLint configurations provided in `packages/eslint-config`
- Use the TypeScript configurations from `packages/typescript-config`
- Use functional React components with hooks
- Use Tailwind CSS for styling

## UI Package Guidelines

### Component Structure

- Components are located in `packages/ui/src/components`
- Use the `tailwind-variants` library for component variants
- Follow the polymorphic component pattern for flexible component APIs
- Use the `@radix-ui/react-slot` for component composition
- Global styles are in `packages/ui/src/styles/globals.css`

### Component Usage

Components are exported with a component-as-namespace pattern:

```tsx
import * as Button from "@repo/ui/components/button";

// Usage
<Button.Root variant="neutral" mode="filled">
  Click me
</Button.Root>
```

## Client App Guidelines

### Project Structure

- Source code is in `apps/client/src`
- Components are in `apps/client/src/components`
- Providers are in `apps/client/src/providers`
- Hooks are in `apps/client/src/hooks`

### Importing UI Components

The client app imports UI components from the shared package:

```tsx
import * as Button from "@repo/ui/components/button";
import * as ButtonGroup from "@repo/ui/components/button-group";
```

### Path Aliases

- `~/*` maps to `./src/*` in the client app
- `@ui/*` maps to `../../packages/ui/src/*` in the client app

## API App Guidelines

### Project Structure

```
apps/api/
├── src/
│   ├── lib/           # Core services (auth, db, openai)
│   ├── middleware/    # Authentication middleware
│   ├── routes/        # API route handlers
│   ├── index.ts       # Main application entry
│   └── migrate.ts     # Database migration script
├── drizzle/           # Generated migration files
├── drizzle.config.ts  # Drizzle Kit configuration
├── ENVIRONMENT.md     # Environment variables documentation
└── README.md          # Comprehensive API documentation
```

### Technology Stack

- **Runtime**: Bun
- **Framework**: Elysia.js
- **Authentication**: Better Auth with social providers
- **Database**: SQLite (local) / Turso (production)
- **ORM**: Drizzle ORM
- **AI**: OpenAI API integration
- **TypeScript**: Strict mode enabled with full type safety

### Core Features

- 🔐 **Authentication**: Email/password + GitHub/Google OAuth
- 🤖 **AI Integration**: Chat, embeddings, image generation, TTS
- 🗄️ **Database**: Auto-migrating SQLite schema
- 🌐 **CORS**: Configured for client app integration
- 🔒 **Security**: Content moderation, input validation
- 📊 **Monitoring**: Health checks, error handling

### Development

- The API runs on `http://localhost:3000` by default
- Uses Bun's `--watch` flag for hot reloading during development
- Build output is compiled to `./dist/api` as a single executable
- Database auto-creates on first run (SQLite)

### Required Environment Variables

```bash
# Authentication
BETTER_AUTH_SECRET=your-super-secret-32-char-string-here

# AI Features
OPENAI_API_KEY=sk-your-openai-api-key-here

# Optional - Social Auth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### API Endpoints

#### Authentication Routes (`/auth`)
- `POST /auth/sign-in` - Email/password sign in
- `POST /auth/sign-up` - Register new account
- `GET /auth/me` - Get current user profile
- `PATCH /auth/profile` - Update user profile
- OAuth callbacks for GitHub/Google

#### AI Routes (`/ai`) - Requires Authentication
- `POST /ai/chat` - Chat completion
- `POST /ai/chat/stream` - Streaming chat
- `POST /ai/embeddings` - Generate embeddings
- `POST /ai/images/generate` - Image generation
- `POST /ai/speech` - Text-to-speech
- `POST /ai/moderate` - Content moderation

#### General Routes
- `GET /` - API status and service information
- `GET /health` - Detailed health check
- `GET /docs` - Interactive API documentation

### Dependencies

- `elysia`: Fast and ergonomic web framework for Bun
- `better-auth`: Modern authentication library
- `openai`: OpenAI API client
- `drizzle-orm`: Type-safe SQL ORM
- `@libsql/client`: SQLite/Turso database client
- `@elysiajs/cors`: CORS middleware

## Testing Guidelines

- Add tests for new components and features
- Ensure all tests pass before submitting changes
- Run `bun lint` and `bun check-types` to verify code quality

## PR Guidelines

- Keep PRs focused on a single task or feature
- Ensure all tests pass before submitting
- Follow the existing code style and patterns
- Include a clear description of the changes

## Monorepo Management

- Use Turborepo for task orchestration
- Use Bun as the package manager
- Use workspaces to manage dependencies between packages
- Use filters to run commands on specific packages: `bun turbo run dev --filter=@apps/client`
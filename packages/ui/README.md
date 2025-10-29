# @repo/ui

Shared UI component library built with shadcn/ui, Tailwind CSS, and Radix UI primitives.

## Installation

This package is part of the monorepo and uses Bun workspaces. Install dependencies from the root:

```bash
bun install
```

## Usage

Import components from the package:

```tsx
import { Button, Card, Dialog } from "@repo/ui";
// or
import * as Button from "@repo/ui/components/button";
import * as Card from "@repo/ui/components/card";
```

## Available Components

All shadcn/ui components are available:

- **Form & Input**: Button, Input, Textarea, Checkbox, Radio Group, Select, Switch, Slider, Calendar, Date Picker, Combobox, Label
- **Layout & Navigation**: Accordion, Breadcrumb, Navigation Menu, Sidebar, Tabs, Separator, Scroll Area, Resizable
- **Overlays & Dialogs**: Dialog, Alert Dialog, Sheet, Drawer, Popover, Tooltip, Hover Card, Context Menu, Dropdown Menu, Menubar, Command
- **Feedback & Status**: Alert, Toast, Progress, Spinner, Skeleton, Badge, Empty
- **Display & Media**: Avatar, Card, Table, Chart, Carousel, Aspect Ratio, Typography, Item, Kbd

## Adding Components from Other Registries

You can add components from other shadcn/ui registries (like `@ai-elements`, `@magicui`, etc.) to this package:

### Method 1: Using the CLI (Recommended)

Navigate to the `packages/ui` directory and run the shadcn CLI:

```bash
# From the root of the monorepo
cd packages/ui

# Add a specific component from another registry
bunx shadcn@latest add @ai-elements/conversation

# Add all components from a registry (if available)
bunx shadcn@latest add @ai-elements/all

# Add multiple components
bunx shadcn@latest add @magicui/animated-beam @magicui/animated-grid
```

The components will be installed in `packages/ui/src/components/` and their dependencies will be added to `packages/ui/package.json`.

### Method 2: Using the Script

From the root of the monorepo, you can use:

```bash
# Add components to @repo/ui
bun run ui:add @ai-elements/conversation

# Or add multiple
bun run ui:add @ai-elements/conversation @magicui/animated-beam
```

### Example: Adding Components from @ai-elements

```bash
cd packages/ui
bunx shadcn@latest add @ai-elements/conversation @ai-elements/message @ai-elements/chat-input
```

After installation, you can import them like any other component:

```tsx
import { Conversation, Message, ChatInput } from "@repo/ui";
```

### Available Community Registries

Check the [shadcn/ui Directory](https://ui.shadcn.com/docs/directory) for available registries:

- `@ai-elements` - AI-native components
- `@magicui` - Animated components
- `@shadcnblocks` - Extra blocks
- `@reui` - UI components and effects
- And many more...

## Styling

Import the global styles in your app:

```tsx
import "@repo/ui/styles/globals.css";
```

## Configuration

The package is configured for monorepo use via `components.json`. All components follow the shadcn/ui patterns and use Tailwind CSS for styling.

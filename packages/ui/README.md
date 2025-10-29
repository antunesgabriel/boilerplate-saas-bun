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

## Styling

Import the global styles in your app:

```tsx
import "@repo/ui/styles/globals.css";
```

## Configuration

The package is configured for monorepo use via `components.json`. All components follow the shadcn/ui patterns and use Tailwind CSS for styling.


# Adding Components to @repo/ui

This guide explains how to add components from different shadcn/ui registries to the `@repo/ui` package.

## Quick Start

### From the Root Directory

```bash
# Add a component from another registry
bun run ui:add @ai-elements/conversation

# Add multiple components
bun run ui:add @ai-elements/conversation @ai-elements/message

# Add all components from a registry (if available)
bun run ui:add @ai-elements/all
```

### From the packages/ui Directory

```bash
# Navigate to the UI package
cd packages/ui

# Add components using shadcn CLI
bunx shadcn@latest add @ai-elements/conversation
bunx shadcn@latest add @magicui/animated-beam
bunx shadcn@latest add @shadcnblocks/dashboard-01
```

## Step-by-Step Example

Let's add components from `@ai-elements`:

1. **From the root**, run:
   ```bash
   bun run ui:add @ai-elements/conversation @ai-elements/message @ai-elements/chat-input
   ```

2. **Or from `packages/ui`**:
   ```bash
   cd packages/ui
   bunx shadcn@latest add @ai-elements/conversation @ai-elements/message @ai-elements/chat-input
   ```

3. The components will be installed in:
   - `packages/ui/src/components/conversation.tsx`
   - `packages/ui/src/components/message.tsx`
   - `packages/ui/src/components/chat-input.tsx`

4. Update the exports in `packages/ui/src/index.ts`:
   ```tsx
   export * from "./components/conversation";
   export * from "./components/message";
   export * from "./components/chat-input";
   ```

5. Use in your apps:
   ```tsx
   import { Conversation, Message, ChatInput } from "@repo/ui";
   ```

## Available Registries

Browse the [shadcn/ui Directory](https://ui.shadcn.com/docs/directory) for available registries:

### Popular Registries

- **@ai-elements** - AI-native components (conversations, messages, etc.)
- **@magicui** - Animated components and effects
- **@shadcnblocks** - Extra blocks and layouts
- **@reui** - UI components with animations
- **@shadcndesign** - High-quality blocks and themes
- **@cult-ui** - Headless and composable components
- **@motion-primitives** - Motion components
- **@animate-ui** - Fully animated components

### Example: Adding Multiple Components

```bash
# Add animated components from magicui
bun run ui:add @magicui/animated-beam @magicui/animated-grid @magicui/blur-in

# Add AI components
bun run ui:add @ai-elements/conversation @ai-elements/message

# Add blocks
bun run ui:add @shadcnblocks/login-01 @shadcnblocks/signup-01
```

## Important Notes

1. **Always run from `packages/ui`** - The shadcn CLI needs to find the `components.json` file
2. **Dependencies are auto-added** - The CLI will automatically update `package.json` with required dependencies
3. **Update exports** - After adding components, manually update `src/index.ts` to export them
4. **Check compatibility** - Some components may have additional peer dependencies

## Troubleshooting

### Components not found?
- Check the registry name and component name on the [directory page](https://ui.shadcn.com/docs/directory)
- Some registries use different naming conventions

### Type errors?
- Run `bun install` after adding components to ensure all dependencies are installed
- Check if the component requires specific React versions

### Import errors in apps?
- Make sure to export the new components in `packages/ui/src/index.ts`
- Restart your dev server after adding components


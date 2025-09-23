"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import { tv, type VariantProps } from "tailwind-variants";

import * as Modal from "@ui/components/modal";
import { cn } from "@ui/utils/cn";
import { PolymorphicComponentProps } from "@ui/utils/polymorphic";

const CommandDialogTitle = Modal.Title;
const CommandDialogDescription = Modal.Description;

const CommandDialog = ({
  children,
  className,
  overlayClassName,
  ...rest
}: DialogProps & {
  className?: string;
  overlayClassName?: string;
}) => {
  return (
    // @ts-expect-error - conflit with react 19
    <Modal.Root {...rest}>
      {/* @ts-expect-error - conflit with react 19 */}
      <Modal.Content
        overlayClassName={cn("justify-start pt-20", overlayClassName)}
        showClose={false}
        className={cn(
          "flex max-h-full max-w-[720px] flex-col overflow-hidden rounded-2xl",
          className,
        )}
      >
        {/* @ts-expect-error - conflit with react 19 */}
        <Command
          className={cn(
            "divide-y divide-stroke-soft-200",
            "grid min-h-0 auto-cols-auto grid-flow-row",
            "[&>[cmdk-label]+*]:!border-t-0",
          )}
        >
          {children}
        </Command>
      </Modal.Content>
    </Modal.Root>
  );
};

const CommandInput = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof Command.Input>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof Command.Input>
  // @ts-expect-error - conflit with react 19
>(({ className, ...rest }, forwardedRef) => {
  return (
    // @ts-expect-error - conflit with react 19
    <Command.Input
      // @ts-expect-error - conflit with react 19
      ref={forwardedRef}
      className={cn(
        // base
        "w-full bg-transparent text-paragraph-sm text-text-strong-950 outline-none",
        "transition duration-200 ease-out",
        // placeholder
        "placeholder:[transition:inherit]",
        "placeholder:text-text-soft-400",
        // hover
        "group-hover/cmd-input:placeholder:text-text-sub-600",
        // focus
        "focus:outline-none",
        className,
      )}
      {...rest}
    />
  );
});
CommandInput.displayName = "CommandInput";

const CommandList = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof Command.List>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof Command.List>
  // @ts-expect-error - conflit with react 19
>(({ className, ...rest }, forwardedRef) => {
  return (
    // @ts-expect-error - conflit with react 19
    <Command.List
      // @ts-expect-error - conflit with react 19
      ref={forwardedRef}
      className={cn(
        "flex max-h-min min-h-0 flex-1 flex-col",
        "[&>[cmdk-list-sizer]]:divide-y [&>[cmdk-list-sizer]]:divide-stroke-soft-200",
        "[&>[cmdk-list-sizer]]:overflow-auto",
        className,
      )}
      {...rest}
    />
  );
});
CommandList.displayName = "CommandList";

const CommandGroup = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof Command.Group>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof Command.Group>
  // @ts-expect-error - conflit with react 19
>(({ className, ...rest }, forwardedRef) => {
  return (
    // @ts-expect-error - conflit with react 19
    <Command.Group
      // @ts-expect-error - conflit with react 19
      ref={forwardedRef}
      className={cn(
        "relative px-2 py-3",
        // heading
        "[&>[cmdk-group-heading]]:text-label-xs [&>[cmdk-group-heading]]:text-text-sub-600",
        "[&>[cmdk-group-heading]]:mb-2 [&>[cmdk-group-heading]]:px-3 [&>[cmdk-group-heading]]:pt-1",
        className,
      )}
      {...rest}
    />
  );
});
CommandGroup.displayName = "CommandGroup";

const commandItemVariants = tv({
  base: [
    "flex items-center gap-3 rounded-10 bg-bg-white-0",
    "cursor-pointer text-paragraph-sm text-text-strong-950",
    "transition duration-200 ease-out",
    // hover/selected
    "data-[selected=true]:bg-bg-weak-50",
  ],
  variants: {
    size: {
      small: "px-3 py-2.5",
      medium: "px-3 py-3",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

type CommandItemProps = VariantProps<typeof commandItemVariants> &
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof Command.Item>;

const CommandItem = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof Command.Item>,
  CommandItemProps
  // @ts-expect-error - conflit with react 19
>(({ className, size, ...rest }, forwardedRef) => {
  return (
    // @ts-expect-error - conflit with react 19
    <Command.Item
      // @ts-expect-error - conflit with react 19
      ref={forwardedRef}
      className={commandItemVariants({ size, class: className })}
      {...rest}
    />
  );
});
CommandItem.displayName = "CommandItem";

function CommandItemIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn("size-5 shrink-0 text-text-sub-600", className)}
      {...rest}
    />
  );
}

function CommandFooter({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-12 items-center justify-between gap-3 px-5",
        className,
      )}
      {...rest}
    />
  );
}

function CommandFooterKeyBox({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded bg-bg-weak-50 text-text-sub-600 ring-1 ring-inset ring-stroke-soft-200",
        className,
      )}
      {...rest}
    />
  );
}

export {
  CommandDialog as Dialog,
  CommandDialogTitle as DialogTitle,
  CommandDialogDescription as DialogDescription,
  CommandInput as Input,
  CommandList as List,
  CommandGroup as Group,
  CommandItem as Item,
  CommandItemIcon as ItemIcon,
  CommandFooter as Footer,
  CommandFooterKeyBox as FooterKeyBox,
};

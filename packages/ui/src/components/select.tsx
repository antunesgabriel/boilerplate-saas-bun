"use client";

import * as React from "react";
import * as ScrollAreaPrimitives from "@radix-ui/react-scroll-area";
import * as SelectPrimitives from "@radix-ui/react-select";
import { Slottable } from "@radix-ui/react-slot";
import { RiArrowDownSLine, RiCheckLine } from "@remixicon/react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@ui/utils/cn";
import type { PolymorphicComponentProps } from "@ui/utils/polymorphic";

export const selectVariants = tv({
  slots: {
    triggerRoot: [
      // base
      "group/trigger min-w-0 shrink-0 bg-bg-white-0 shadow-regular-xs outline-none ring-1 ring-inset ring-stroke-soft-200",
      "text-paragraph-sm text-text-strong-950",
      "flex items-center text-left",
      "transition duration-200 ease-out",
      // hover
      "hover:bg-bg-weak-50 hover:ring-transparent",
      // focus
      "focus:shadow-button-important-focus focus:outline-none focus:ring-stroke-strong-950",
      "focus:text-text-strong-950 data-[placeholder]:focus:text-text-strong-950",
      // disabled
      "disabled:pointer-events-none disabled:bg-bg-weak-50 disabled:text-text-disabled-300 disabled:shadow-none disabled:ring-transparent data-[placeholder]:disabled:text-text-disabled-300",
      // placeholder state
      "data-[placeholder]:text-text-sub-600",
    ],
    triggerArrow: [
      // base
      "ml-auto size-5 shrink-0",
      "transition duration-200 ease-out",
      // placeholder state
      "group-data-[placeholder]/trigger:text-text-soft-400",
      // filled state
      "text-text-sub-600",
      // hover
      "group-hover/trigger:text-text-sub-600 group-data-[placeholder]/trigger:group-hover:text-text-sub-600",
      // focus
      "group-focus/trigger:text-text-strong-950 group-data-[placeholder]/trigger:group-focus/trigger:text-text-strong-950",
      // disabled
      "group-disabled/trigger:text-text-disabled-300 group-data-[placeholder]/trigger:group-disabled/trigger:text-text-disabled-300",
      // open
      "group-data-[state=open]/trigger:rotate-180",
    ],
    triggerIcon: [
      // base
      "h-5 w-auto min-w-0 shrink-0 object-contain text-text-sub-600",
      "transition duration-200 ease-out",
      // placeholder state
      "group-data-[placeholder]/trigger:text-text-soft-400",
      // hover
      "group-hover/trigger:text-text-sub-600 group-data-[placeholder]/trigger:group-hover:text-text-sub-600",
      // disabled
      "group-disabled/trigger:text-text-disabled-300 group-data-[placeholder]/trigger:group-disabled/trigger:text-text-disabled-300",
      "group-disabled/trigger:[&:not(.remixicon)]:opacity-[.48]",
    ],
    selectItemIcon: [
      "size-5 shrink-0 bg-[length:1.25rem] text-text-sub-600",
      // 'group-has-[&]-ml-0.5',
      // disabled
      "[[data-disabled]_&:not(.remixicon)]:opacity-[.48] [[data-disabled]_&]:text-text-disabled-300",
    ],
  },
  variants: {
    size: {
      medium: {},
      small: {},
      xsmall: {},
    },
    variant: {
      default: {
        triggerRoot: "w-full",
      },
      compact: {
        triggerRoot: "w-auto",
      },
      compactForInput: {
        triggerRoot: [
          // base
          "w-auto rounded-none shadow-none ring-0",
          // focus
          "focus:bg-bg-weak-50 focus:shadow-none focus:ring-0 focus:ring-transparent",
        ],
      },
      inline: {
        triggerRoot: [
          // base
          "h-5 min-h-5 w-auto gap-0 rounded-none bg-transparent p-0 text-text-sub-600 shadow-none ring-0",
          // hover
          "hover:bg-transparent hover:text-text-strong-950",
          // focus
          "focus:shadow-none",
          // open
          "data-[state=open]:text-text-strong-950",
        ],
        triggerIcon: [
          // base
          "mr-1.5 text-text-soft-400",
          // hover
          "group-hover/trigger:text-text-sub-600",
          // open
          "group-data-[state=open]/trigger:text-text-sub-600",
        ],
        triggerArrow: [
          // base
          "ml-0.5",
          // hover
          "group-hover/trigger:text-text-strong-950",
          // open
          "group-data-[state=open]/trigger:text-text-strong-950",
        ],
        selectItemIcon:
          "text-text-soft-400 group-hover/trigger:text-text-sub-600",
      },
    },
    hasError: {
      true: {
        triggerRoot: [
          // base
          "ring-error-base",
          // focus
          "focus:shadow-button-error-focus focus:ring-error-base",
        ],
      },
    },
  },
  compoundVariants: [
    //#region default
    {
      size: "medium",
      variant: "default",
      class: {
        triggerRoot: "h-10 min-h-10 gap-2 rounded-10 pl-3 pr-2.5",
      },
    },
    {
      size: "small",
      variant: "default",
      class: {
        triggerRoot: "h-9 min-h-9 gap-2 rounded-lg pl-2.5 pr-2",
      },
    },
    {
      size: "xsmall",
      variant: "default",
      class: {
        triggerRoot: "h-8 min-h-8 gap-1.5 rounded-lg pl-2 pr-1.5",
      },
    },
    //#endregion

    //#region compact
    {
      size: "medium",
      variant: "compact",
      class: {
        triggerRoot: "h-10 gap-1 rounded-10 pl-3 pr-2.5",
        triggerIcon: "-ml-0.5",
        selectItemIcon: "group-has-[&]/trigger:-ml-0.5",
      },
    },
    {
      size: "small",
      variant: "compact",
      class: {
        triggerRoot: "h-9 gap-1 rounded-lg pl-3 pr-2",
        triggerIcon: "-ml-0.5",
        selectItemIcon: "group-has-[&]/trigger:-ml-0.5",
      },
    },
    {
      size: "xsmall",
      variant: "compact",
      class: {
        triggerRoot: "h-8 gap-0.5 rounded-lg pl-2.5 pr-1.5",
        triggerIcon: "-ml-0.5 size-4",
        selectItemIcon: "size-4 bg-[length:1rem] group-has-[&]/trigger:-ml-0.5",
      },
    },
    //#endregion

    //#region compactForInput
    {
      size: "medium",
      variant: "compactForInput",
      class: {
        triggerRoot: "pl-2.5 pr-2",
        triggerIcon: "mr-2",
        triggerArrow: "ml-0.5",
      },
    },
    {
      size: "small",
      variant: "compactForInput",
      class: {
        triggerRoot: "px-2",
        triggerIcon: "mr-2",
        triggerArrow: "ml-0.5",
      },
    },
    {
      size: "xsmall",
      variant: "compactForInput",
      class: {
        triggerRoot: "pl-2 pr-1.5",
        triggerIcon: "mr-1.5 size-4",
        triggerArrow: "ml-0.5",
        selectItemIcon: "size-4 bg-[length:1rem]",
      },
    },
    //#endregion
  ],
  defaultVariants: {
    variant: "default",
    size: "medium",
  },
});

type SelectContextType = Pick<
  VariantProps<typeof selectVariants>,
  "variant" | "size" | "hasError"
>;

const SelectContext = React.createContext<SelectContextType>({
  size: "medium",
  variant: "default",
  hasError: false,
});

const useSelectContext = () => React.useContext(SelectContext);

const SelectRoot = ({
  size = "medium",
  variant = "default",
  hasError,
  ...rest
  // @ts-expect-error - conflit with react 19
}: React.ComponentProps<typeof SelectPrimitives.Root> & SelectContextType) => {
  return (
    <SelectContext.Provider value={{ size, variant, hasError }}>
      {/* @ts-expect-error - conflit with react 19*/}
      <SelectPrimitives.Root {...rest} />
    </SelectContext.Provider>
  );
};
SelectRoot.displayName = "SelectRoot";

const SelectGroup = SelectPrimitives.Group;
SelectGroup.displayName = "SelectGroup";

const SelectValue = SelectPrimitives.Value;
SelectValue.displayName = "SelectValue";

const SelectSeparator = SelectPrimitives.Separator;
SelectSeparator.displayName = "SelectSeparator";

const SelectGroupLabel = SelectPrimitives.Label;
SelectGroupLabel.displayName = "SelectGroupLabel";

const SELECT_TRIGGER_ICON_NAME = "SelectTriggerIcon";

const SelectTrigger = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof SelectPrimitives.Trigger>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger>
  // @ts-expect-error - conflit with react 19
>(({ className, children, ...rest }, forwardedRef) => {
  const { size, variant, hasError } = useSelectContext();

  const { triggerRoot, triggerArrow } = selectVariants({
    size,
    variant,
    hasError,
  });

  return (
    // @ts-expect-error - conflit with react 19
    <SelectPrimitives.Trigger
      // @ts-expect-error - conflit with react 19
      ref={forwardedRef}
      className={triggerRoot({ class: className })}
      {...rest}
    >
      {/* @ts-expect-error - conflit with react 19 */}
      <Slottable>{children}</Slottable>
      {/* @ts-expect-error - conflit with react 19 */}
      <SelectPrimitives.Icon asChild>
        {/* @ts-expect-error - conflit with react 19 */}
        <RiArrowDownSLine className={triggerArrow()} />
      </SelectPrimitives.Icon>
    </SelectPrimitives.Trigger>
  );
});

SelectTrigger.displayName = "SelectTrigger";

function TriggerIcon<T extends React.ElementType = "div">({
  as,
  className,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  const { size, variant, hasError } = useSelectContext();
  const { triggerIcon } = selectVariants({ size, variant, hasError });

  return <Component className={triggerIcon({ class: className })} {...rest} />;
}
TriggerIcon.displayName = SELECT_TRIGGER_ICON_NAME;

const SelectContent = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof SelectPrimitives.Content>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Content>
>(
  (
    {
      // @ts-expect-error - conflit with react 19
      className,
      // @ts-expect-error - conflit with react 19
      position = "popper",
      // @ts-expect-error - conflit with react 19
      children,
      // @ts-expect-error - conflit with react 19
      sideOffset = 8,
      // @ts-expect-error - conflit with react 19
      collisionPadding = 8,
      ...rest
    },
    forwardedRef,
  ) => (
    // @ts-expect-error - conflit with react 19
    <SelectPrimitives.Portal>
      {/* @ts-expect-error - conflit with react 19 */}
      <SelectPrimitives.Content
        // @ts-expect-error - conflit with react 19
        ref={forwardedRef}
        className={cn(
          // base
          "relative z-50 overflow-hidden rounded-2xl bg-bg-white-0 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200",
          // widths
          "min-w-[--radix-select-trigger-width] max-w-[max(var(--radix-select-trigger-width),320px)]",
          // heights
          "max-h-[--radix-select-content-available-height]",
          // animation
          "data-[state=open]:animate-in data-[state=open]:fade-in-0",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        sideOffset={sideOffset}
        position={position}
        collisionPadding={collisionPadding}
        {...rest}
      >
        {/* @ts-expect-error - conflit with react 19 */}
        <ScrollAreaPrimitives.Root type="auto">
          {/* @ts-expect-error - conflit with react 19 */}
          <SelectPrimitives.Viewport asChild>
            {/* @ts-expect-error - conflit with react 19 */}
            <ScrollAreaPrimitives.Viewport
              style={{ overflowY: undefined }}
              className="max-h-[196px] w-full scroll-py-2 overflow-auto p-2"
            >
              {children}
            </ScrollAreaPrimitives.Viewport>
          </SelectPrimitives.Viewport>
          {/* @ts-expect-error - conflit with react 19 */}
          <ScrollAreaPrimitives.Scrollbar orientation="vertical">
            {/* @ts-expect-error - conflit with react 19 */}
            <ScrollAreaPrimitives.Thumb className="!w-1 rounded bg-bg-soft-200" />
          </ScrollAreaPrimitives.Scrollbar>
        </ScrollAreaPrimitives.Root>
      </SelectPrimitives.Content>
    </SelectPrimitives.Portal>
  ),
);

SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof SelectPrimitives.Item>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item>
  // @ts-expect-error - conflit with react 19
>(({ className, children, ...rest }, forwardedRef) => {
  const { size } = useSelectContext();

  return (
    // @ts-expect-error - conflit with react 19
    <SelectPrimitives.Item
      // @ts-expect-error - conflit with react 19
      ref={forwardedRef}
      className={cn(
        // base
        "group relative cursor-pointer select-none rounded-lg p-2 pr-9 text-paragraph-sm text-text-strong-950",
        "flex items-center gap-2 transition duration-200 ease-out",
        // disabled
        "data-[disabled]:pointer-events-none data-[disabled]:text-text-disabled-300",
        // hover, focus
        "data-[highlighted]:bg-bg-weak-50 data-[highlighted]:outline-0",
        {
          "gap-1.5 pr-[34px]": size === "xsmall",
        },
        className,
      )}
      {...rest}
    >
      {/*@ts-expect-error - conflit with react 19*/}
      <SelectPrimitives.ItemText asChild>
        <span
          className={cn(
            // base
            "flex flex-1 items-center gap-2",
            // disabled
            "group-disabled:text-text-disabled-300",
            {
              "gap-1.5": size === "xsmall",
            },
          )}
        >
          {typeof children === "string" ? (
            <span className="line-clamp-1">{children}</span>
          ) : (
            children
          )}
        </span>
      </SelectPrimitives.ItemText>
      {/*@ts-expect-error - conflit with react 19*/}
      <SelectPrimitives.ItemIndicator asChild>
        {/*@ts-expect-error - conflit with react 19*/}
        <RiCheckLine className="absolute right-2 top-1/2 size-5 shrink-0 -translate-y-1/2 text-text-sub-600" />
      </SelectPrimitives.ItemIndicator>
    </SelectPrimitives.Item>
  );
});

SelectItem.displayName = "SelectItem";

function SelectItemIcon<T extends React.ElementType>({
  as,
  className,
  ...rest
}: PolymorphicComponentProps<T>) {
  const { size, variant } = useSelectContext();
  const { selectItemIcon } = selectVariants({ size, variant });

  const Component = as || "div";

  return (
    <Component className={selectItemIcon({ class: className })} {...rest} />
  );
}

export {
  SelectRoot as Root,
  SelectContent as Content,
  SelectGroup as Group,
  SelectGroupLabel as GroupLabel,
  SelectItem as Item,
  SelectItemIcon as ItemIcon,
  SelectSeparator as Separator,
  SelectTrigger as Trigger,
  TriggerIcon,
  SelectValue as Value,
};

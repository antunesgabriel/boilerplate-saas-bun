"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";

import { cn } from "@ui/utils/cn";
import type { PolymorphicComponentProps } from "@ui/utils/polymorphic";

const ACCORDION_ITEM_NAME = "AccordionItem";
const ACCORDION_ICON_NAME = "AccordionIcon";
const ACCORDION_ARROW_NAME = "AccordionArrow";
const ACCORDION_TRIGGER_NAME = "AccordionTrigger";
const ACCORDION_CONTENT_NAME = "AccordionContent";

const AccordionRoot = AccordionPrimitive.Root;
const AccordionHeader = AccordionPrimitive.Header;

const AccordionItem = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
  // @ts-expect-error - conflit with react 19
>(({ className, ...rest }, forwardedRef) => {
  return (
    // @ts-expect-error - conflit with react 19
    <AccordionPrimitive.Item
      // @ts-expect-error - conflit with react 19
      ref={forwardedRef}
      className={cn(
        // base
        "group/accordion",
        "rounded-10 bg-bg-white-0 p-3.5 ring-1 ring-inset ring-stroke-soft-200",
        "transition duration-200 ease-out",
        // hover
        "hover:bg-bg-weak-50 hover:ring-transparent",
        // has-focus-visible
        "has-[:focus-visible]:bg-bg-weak-50 has-[:focus-visible]:ring-transparent",
        // open
        "data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent",
        className,
      )}
      {...rest}
    />
  );
});
AccordionItem.displayName = ACCORDION_ITEM_NAME;

const AccordionTrigger = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
  // @ts-expect-error - conflit with react 19
>(({ children, className, ...rest }, forwardedRef) => {
  return (
    // @ts-expect-error - conflit with react 19
    <AccordionPrimitive.Trigger
      // @ts-expect-error - conflit with react 19
      ref={forwardedRef}
      className={cn(
        // base
        "w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950",
        "grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5",
        "-m-3.5 p-3.5 outline-none",
        // focus
        "focus:outline-none",
        className,
      )}
      {...rest}
    >
      {children}
    </AccordionPrimitive.Trigger>
  );
});
AccordionTrigger.displayName = ACCORDION_TRIGGER_NAME;

function AccordionIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn("size-5 text-text-sub-600", className)}
      {...rest}
    />
  );
}
AccordionIcon.displayName = ACCORDION_ICON_NAME;

type AccordionArrowProps = React.HTMLAttributes<HTMLDivElement> & {
  openIcon?: React.ElementType;
  closeIcon?: React.ElementType;
};

// open/close
function AccordionArrow({
  className,
  // @ts-expect-error - conflit with react 19
  openIcon: OpenIcon = RiAddLine,
  // @ts-expect-error - conflit with react 19
  closeIcon: CloseIcon = RiSubtractLine,
  ...rest
}: AccordionArrowProps) {
  return (
    <>
      <OpenIcon
        className={cn(
          "size-5 text-text-soft-400",
          "transition duration-200 ease-out",
          // hover
          "group-hover/accordion:text-text-sub-600",
          // open
          "group-data-[state=open]/accordion:hidden",
          className,
        )}
        {...rest}
      />
      <CloseIcon
        className={cn(
          "size-5 text-text-sub-600",
          // close
          "hidden group-data-[state=open]/accordion:block",
          className,
        )}
        {...rest}
      />
    </>
  );
}
AccordionArrow.displayName = ACCORDION_ARROW_NAME;

const AccordionContent = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
  // @ts-expect-error - conflit with react 19
>(({ children, className, ...rest }, forwardedRef) => {
  return (
    // @ts-expect-error - conflit with react 19
    <AccordionPrimitive.Content
      // @ts-expect-error - conflit with react 19
      ref={forwardedRef}
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...rest}
    >
      <div
        className={cn("pt-1.5 text-paragraph-sm text-text-sub-600", className)}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = ACCORDION_CONTENT_NAME;

export {
  AccordionRoot as Root,
  AccordionHeader as Header,
  AccordionItem as Item,
  AccordionTrigger as Trigger,
  AccordionIcon as Icon,
  AccordionArrow as Arrow,
  AccordionContent as Content,
};

"use client";

import * as React from "react";
import * as LabelPrimitives from "@radix-ui/react-label";

import { cn } from "@ui/utils/cn";

const LabelRoot = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof LabelPrimitives.Root>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> & {
    disabled?: boolean;
  }
  // @ts-expect-error - conflit with react 19
>(({ className, disabled, ...rest }, forwardedRef) => {
  return (
    // @ts-expect-error - conflit with react 19
    <LabelPrimitives.Root
      // @ts-expect-error - conflit with react 19
      ref={forwardedRef}
      className={cn(
        "group cursor-pointer flex items-center gap-px aria-disabled:text-text-disabled-300 !text-label-sm text-text-strong-950",
        className,
      )}
      aria-disabled={disabled}
      {...rest}
    />
  );
});
LabelRoot.displayName = "LabelRoot";

function LabelAsterisk({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-primary-base",
        // disabled
        "group-aria-disabled:text-text-disabled-300",
        className,
      )}
      {...rest}
    >
      {children || "*"}
    </span>
  );
}

function LabelSub({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-paragraph-sm text-text-sub-600",
        // disabled
        "group-aria-disabled:text-text-disabled-300",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export { LabelRoot as Root, LabelAsterisk as Asterisk, LabelSub as Sub };

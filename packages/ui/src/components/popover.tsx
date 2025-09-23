// AlignUI Popover v0.0.0

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Slottable } from "@radix-ui/react-slot";

import { cn } from "@ui/utils/cn";

const PopoverRoot = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    showArrow?: boolean;
    unstyled?: boolean;
  }
>(
  (
    {
      // @ts-expect-error - conflit with react 19
      children,
      // @ts-expect-error - conflit with react 19
      className,
      // @ts-expect-error - conflit with react 19
      align = "center",
      // @ts-expect-error - conflit with react 19
      sideOffset = 12,
      // @ts-expect-error - conflit with react 19
      collisionPadding = 12,
      // @ts-expect-error - conflit with react 19
      arrowPadding = 12,
      showArrow = true,
      unstyled,
      ...rest
    },
    forwardedRef,
  ) => (
    // @ts-expect-error - conflit with react 19
    <PopoverPrimitive.Portal>
      {/* @ts-expect-error - conflit with react 19 */}
      <PopoverPrimitive.Content
        // @ts-expect-error - conflit with react 19
        ref={forwardedRef}
        align={align}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        arrowPadding={arrowPadding}
        className={cn(
          // base
          [
            !unstyled &&
              "w-max rounded-2xl bg-bg-white-0 p-5 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200",
          ],
          "z-50",
          // animation
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...rest}
      >
        {/* @ts-expect-error - conflit with react 19 */}
        <Slottable>{children}</Slottable>
        {showArrow && (
          // @ts-expect-error - conflit with react 19
          <PopoverPrimitive.Arrow asChild>
            <div className="size-[11px] -translate-y-[calc(50%+1px)] -rotate-45 rounded-bl-[3px] border border-stroke-soft-200 bg-bg-white-0 [clip-path:polygon(0_100%,0_0,100%_100%)]"></div>
          </PopoverPrimitive.Arrow>
        )}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  ),
);
PopoverContent.displayName = "PopoverContent";

const PopoverClose = React.forwardRef<
  // @ts-expect-error - conflit with react 19
  React.ComponentRef<typeof PopoverPrimitive.Close>,
  // @ts-expect-error - conflit with react 19
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close> & {
    unstyled?: boolean;
  }
  // @ts-expect-error - conflit with react 19
>(({ className, unstyled, ...rest }, forwardedRef) => (
  // @ts-expect-error - conflit with react 19
  <PopoverPrimitive.Close
    // @ts-expect-error - conflit with react 19
    ref={forwardedRef}
    className={cn([!unstyled && "absolute right-4 top-4"], className)}
    {...rest}
  />
));
PopoverClose.displayName = "PopoverClose";

export {
  PopoverRoot as Root,
  PopoverAnchor as Anchor,
  PopoverTrigger as Trigger,
  PopoverContent as Content,
  PopoverClose as Close,
};

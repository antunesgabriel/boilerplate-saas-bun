"use client";

import * as React from 'react';
import * as NotificationPrimitives from '@radix-ui/react-toast';

type ToastViewportElement = HTMLOListElement;
type ToastRootElement = HTMLLIElement;
import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
  RiMagicFill,
} from '@remixicon/react';

import * as Alert from '@ui/components/alert';
import { cn } from '@ui/utils/cn';

const NotificationProvider = NotificationPrimitives.Provider;
const NotificationAction = NotificationPrimitives.Action;

const NotificationViewport = React.forwardRef<
  ToastViewportElement,
  // @ts-expect-error - React 19 type compatibility
  React.ComponentPropsWithoutRef<typeof NotificationPrimitives.Viewport>
  // @ts-expect-error - React 19 type compatibility
>(({ className, ...rest }, forwardedRef) => (
  // @ts-expect-error - React 19 compatibility issue
  <NotificationPrimitives.Viewport
    ref={forwardedRef}
    className={cn(
      'fixed left-0 top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-5 p-4 sm:bottom-0 sm:left-auto sm:right-0 sm:top-auto sm:max-w-[438px] sm:flex-col sm:p-6',
      className,
    )}
    {...rest}
  />
));
NotificationViewport.displayName = 'NotificationViewport';

type NotificationProps =
  // @ts-expect-error - React 19 type compatibility
  React.ComponentPropsWithoutRef<typeof NotificationPrimitives.Root> &
  Pick<
    React.ComponentPropsWithoutRef<typeof Alert.Root>,
    'status' | 'variant'
  > & {
    className?: string;
    title?: string;
    description?: React.ReactNode;
    action?: React.ReactNode;
    disableDismiss?: boolean;
  };

const Notification = React.forwardRef<
  ToastRootElement,
  NotificationProps
>(
  (
    {
      className,
      status,
      variant = 'filled',
      title,
      description,
      action,
      disableDismiss = false,
      ...rest
    }: NotificationProps,
    forwardedRef,
  ) => {
    let Icon: React.ComponentType<any>;

    switch (status) {
      case 'success':
        Icon = RiCheckboxCircleFill as React.ComponentType<any>;
        break;
      case 'warning':
        Icon = RiAlertFill as React.ComponentType<any>;
        break;
      case 'error':
        Icon = RiErrorWarningFill as React.ComponentType<any>;
        break;
      case 'information':
        Icon = RiInformationFill as React.ComponentType<any>;
        break;
      case 'feature':
        Icon = RiMagicFill as React.ComponentType<any>;
        break;
      default:
        Icon = RiErrorWarningFill as React.ComponentType<any>;
        break;
    }

    return (
      // @ts-expect-error - React 19 compatibility issue
      <NotificationPrimitives.Root
        ref={forwardedRef}
        className={cn(
          // open
          'data-[state=open]:animate-in data-[state=open]:max-[639px]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-right-full',
          // close
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:max-[639px]:slide-out-to-top-full data-[state=closed]:sm:slide-out-to-right-full',
          // swipe
          'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[swipe=end]:animate-out',
          className,
        )}
        asChild
        {...rest}
      >
        <Alert.Root variant={variant} status={status} size='large'>
          <Alert.Icon as={Icon} aria-hidden='true' />
          <div className='flex w-full flex-col gap-2.5'>
            <div className='flex w-full flex-col gap-1'>
              {title && (
                // @ts-expect-error - React 19 compatibility issue
                <NotificationPrimitives.Title className='text-label-sm'>
                  {title}
                </NotificationPrimitives.Title>
              )}
              {description && (
                // @ts-expect-error - React 19 compatibility issue
                <NotificationPrimitives.Description>
                  {description}
                </NotificationPrimitives.Description>
              )}
            </div>
            {action && <div className='flex items-center gap-2'>{action}</div>}
          </div>
          {!disableDismiss && (
            // @ts-expect-error - React 19 compatibility issue
            <NotificationPrimitives.Close aria-label='Close'>
              <Alert.CloseIcon />
            </NotificationPrimitives.Close>
          )}
        </Alert.Root>
      </NotificationPrimitives.Root>
    );
  },
);
Notification.displayName = 'Notification';

export {
  Notification as Root,
  NotificationProvider as Provider,
  NotificationAction as Action,
  type NotificationProps,
};

export { NotificationViewport as Viewport };

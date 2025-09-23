"use client";

import * as React from 'react';
import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
  RiMagicFill,
} from '@remixicon/react';

import * as Alert from '@ui/components/alert';
import { toast } from '@ui/components/toast';

type AlertToastProps = {
  t: string | number;
  status?: React.ComponentPropsWithoutRef<typeof Alert.Root>['status'];
  variant?: React.ComponentPropsWithoutRef<typeof Alert.Root>['variant'];
  message: string;
  dismissable?: boolean;
  icon?: React.ElementType;
};

const AlertToast = React.forwardRef<
  React.ComponentRef<typeof Alert.Root>,
  AlertToastProps
>(
  (
    {
      t,
      status = 'feature',
      variant = 'stroke',
      message,
      dismissable = true,
      icon,
    },
    forwardedRef,
  ) => {
    let Icon: React.ElementType;

    if (icon) {
      Icon = icon;
    } else {
      switch (status) {
        case 'success':
            // @ts-expect-error - React 19 type compatibility
          Icon = RiCheckboxCircleFill;
          break;
        case 'warning':
            // @ts-expect-error - React 19 type compatibility
          Icon = RiAlertFill;
          break;
        case 'error':
            // @ts-expect-error - React 19 type compatibility
          Icon = RiErrorWarningFill;
          break;
        case 'information':
            // @ts-expect-error - React 19 type compatibility
          Icon = RiInformationFill;
          break;
        case 'feature':
            // @ts-expect-error - React 19 type compatibility
          Icon = RiMagicFill;
          break;
        default:
            // @ts-expect-error - React 19 type compatibility
          Icon = RiErrorWarningFill;
          break;
      }
    }

    return (
      <Alert.Root
        ref={forwardedRef}
        status={status}
        variant={variant}
        size='small'
        className='w-[360px]'
      >
        <Alert.Icon as={Icon} />
        {message}
        {dismissable && (
          <button type='button' onClick={() => toast.dismiss(t)}>
            <Alert.CloseIcon />
          </button>
        )}
      </Alert.Root>
    );
  },
);
AlertToast.displayName = 'AlertToast';

export { AlertToast as Root };

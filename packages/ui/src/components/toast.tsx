"use client";

import { toast as sonnerToast, Toaster, type ToasterProps } from 'sonner';

const defaultOptions: ToasterProps = {
  className: 'group/toast',
  position: 'bottom-center',
};

const customToast = (
  renderFunc: (t: string | number) => React.ReactElement,
  options: ToasterProps = {},
) => {
  const mergedOptions = { ...defaultOptions, ...options };
  return sonnerToast.custom(renderFunc, mergedOptions);
};


const toast: typeof sonnerToast & { custom: (renderFunc: (t: string | number) => React.ReactElement, options?: ToasterProps) => string | number } = {
  ...sonnerToast,
  // @ts-expect-error - React 19 type compatibility
  custom: customToast,
};

export { toast, Toaster };

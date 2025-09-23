'use client';

import * as Notification from '@ui/components/notification';
import { useNotification } from '@ui/hooks/use-notification';

const NotificationProvider = () => {
  const { notifications } = useNotification();

  return (
    // @ts-expect-error - React 19 type compatibility
    <Notification.Provider>
      {notifications.map(({ id, ...rest }) => {
        return <Notification.Root key={id} {...rest} />;
      })}
      <Notification.Viewport />
    </Notification.Provider>
  );
};

export { NotificationProvider };

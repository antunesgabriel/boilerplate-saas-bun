import { RiLoader4Line } from "@remixicon/react";
import { Navigate, Outlet } from "react-router";

import { useSession } from "~/hooks/use-session";

export function ProtectedLayout() {
  const { isPending, error, data } = useSession();

  if (isPending) {
    return (
      <div className="flex justify-center items-center bg-bg-white-0 h-dvh">
        <RiLoader4Line className="animate-spin size-6 text-text-soft-400" />
      </div>
    );
  }

  if (error || !data) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  // TODO: Add dashboard layout
  return <Outlet />;
}

import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <main className="w-full h-dvh flex flex-col justify-center items-center bg-bg-soft-200 p-4 min-h-screen">
      <Outlet />
    </main>
  );
}

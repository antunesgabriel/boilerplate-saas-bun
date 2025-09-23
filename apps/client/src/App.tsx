import { Route, Routes } from "react-router";
import { NotificationProvider } from "@repo/ui/providers/notification-provider";

import { ThemeProvider } from "~/providers/theme-provider";
import { AuthLayout } from "~/layouts/auth.layout";
import { ProtectedLayout } from "~/layouts/protected.layout";
import { SignInPage } from "~/pages/auth/sign-in.page";
import { SignUpPage } from "~/pages/auth/sign-up.page";
import { ExamplePage } from "~/pages/protecteds/example.page";

// TODO: Add lazy import for pages

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="suparoute-theme">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>

        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<ExamplePage />} />
        </Route>
      </Routes>
      <NotificationProvider />
    </ThemeProvider>
  );
}

export default App;

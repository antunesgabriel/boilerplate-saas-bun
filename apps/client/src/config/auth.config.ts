import { createAuthClient } from "better-auth/react";

const { VITE_API_URL } = import.meta.env;

const { useSession, signIn, signUp, signOut } = createAuthClient({
  baseURL: VITE_API_URL,
  basePath: "/auth",
});

const authClient = {
  signIn,
  signUp,
  signOut,
};

export { useSession, authClient };

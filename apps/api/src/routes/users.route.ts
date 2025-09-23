import { Elysia } from "elysia";

import { betterAuthMacro } from "@/macros/auth";

export const usersRoutes = new Elysia({ prefix: "/users" })
  .use(betterAuthMacro)
  .get("/me", ({ user }) => user, {
    auth: true,
    detail: {
      tags: ["Users"],
      description: "Returns the current user's information",
    },
  });

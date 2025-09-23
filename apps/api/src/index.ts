import { Elysia, redirect } from "elysia";
import { cors } from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";

import { env } from "@/config/env";
import { auth, AuthOpenAPI } from "@/config/auth";
import { betterAuthMacro } from "@/macros/auth";
import { healthRoutes } from "@/routes/health.route";
import { usersRoutes } from "@/routes/users.route";

const app = new Elysia()
  .use(
    openapi({
      documentation: {
        components: await AuthOpenAPI.components,
        paths: await AuthOpenAPI.getPaths(),
        info: {
          title: "Suparoute API",
          version: "1.0.0",
          description: "API for Suparoute",
        },
        tags: [
          {
            name: "Health",
            description: "Health check endpoints",
          },
          {
            name: "Better Auth",
            description: "Authentication endpoints powered by Better Auth",
          },
        ],
      },
    }),
  )
  .use(
    cors({
      origin: env.ORIGINS_ALLOWED.split(","),
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    }),
  )
  .get("/", () => redirect("/openapi"), {
    detail: {
      hide: true,
    },
  })
  // Better Auth Routes
  .mount(auth.handler, {
    detail: {
      tags: ["Better Auth"],
    },
  })

  .use(betterAuthMacro)

  // Routes
  .use(healthRoutes)
  .use(usersRoutes)

  // Custom Error Handling
  .onError(({ code, error, set }) => {
    console.error(`Error ${code}:`, error);

    switch (code) {
      case "VALIDATION":
        set.status = 400;
        return { error: "Validation failed", details: error.message };
      case "NOT_FOUND":
        set.status = 404;
        return { error: "Route not found" };
      case "INTERNAL_SERVER_ERROR":
        set.status = 500;
        return { error: "Internal server error" };
      default:
        set.status = 500;
        return { error: "Unknown error occurred" };
    }
  })

  // Start app
  .listen(env.PORT);

console.log(
  `🦊 Suparoute API is running at http://${app.server?.hostname}:${app.server?.port}`,
);

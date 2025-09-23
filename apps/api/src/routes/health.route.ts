import { Elysia } from "elysia";

export const healthRoutes = new Elysia({ prefix: "/health" }).get(
  "/",
  () => {
    return {
      status: "healthy",
      timestamp: new Date().toISOString(),
      services: {
        database: "connected",
        auth: "active",
      },
      uptime: process.uptime(),
      memory: process.memoryUsage(),
    };
  },
  {
    detail: {
      tags: ["Health"],
      description: "Returns the health status of the API",
    },
  },
);

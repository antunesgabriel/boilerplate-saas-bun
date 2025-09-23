import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schemas/index.ts",
  out: "./migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  casing: "snake_case",
});

import { env } from "@/config/env";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "@/database/schemas";

if (env.NODE_ENV === "production" && !env.TURSO_AUTH_TOKEN) {
  throw new Error("Missing environment variables TURSO_AUTH_TOKEN");
}

export const dbClient = drizzle({
  connection: {
    url: env.TURSO_CONNECTION_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  casing: "snake_case",
  schema: schema,
});

import Type from "typebox";
import { Compile } from "typebox/compile";

const EnvSchema = Compile(
  Type.Object({
    PORT: Type.Number({ default: 4200 }),
    TURSO_CONNECTION_URL: Type.String(),
    TURSO_AUTH_TOKEN: Type.Optional(Type.String()),
    ORIGINS_ALLOWED: Type.String(),
    BETTER_AUTH_SECRET: Type.String(),
    BETTER_AUTH_URL: Type.String(),
    NODE_ENV: Type.Optional(Type.String({ default: "development" })),
    OPENAI_API_KEY: Type.Optional(Type.String()),
    GITHUB_CLIENT_ID: Type.Optional(Type.String()),
    GITHUB_CLIENT_SECRET: Type.Optional(Type.String()),
    GOOGLE_CLIENT_ID: Type.Optional(Type.String()),
    GOOGLE_CLIENT_SECRET: Type.Optional(Type.String()),
  }),
);

export const env = EnvSchema.Parse(Bun.env);

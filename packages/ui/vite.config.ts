import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    postcss: {},
  },
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "./src"),
    },
  },
});
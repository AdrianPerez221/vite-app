import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

function resolveBase(mode: string) {
  if (process.env.VITE_BASE) {
    return process.env.VITE_BASE;
  }

  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (process.env.GITHUB_ACTIONS && repo) {
    return `/${repo}/`;
  }

  if (mode === "github") {
    return "/vite-app/";
  }

  return "/";
}

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), react()],
  base: resolveBase(mode),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));

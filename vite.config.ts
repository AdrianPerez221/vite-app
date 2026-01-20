import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const base =
    mode === "github" ? "/vite-app/" : "/"; // <- tu repo: vite-app

  return {
    plugins: [react()],
    base,
  };
});

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    watch: false,
    globals: true,
    // Strict file matching - ONLY look for test files
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/build/**",
      "**/.vercel/**",
      "**/coverage/**",
      "**/.git/**",
    ],
    // Use threads pool with limited workers
    pool: "threads",
    // Timeouts
    testTimeout: 10000,
    hookTimeout: 10000,
    // Bail on first failure to speed up
    bail: 1,
  },
});

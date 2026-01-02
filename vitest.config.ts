import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    watch: false,
    globals: true,
    // Add these configurations:
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/build/**",
      "**/.vercel/**",
    ],
    testTimeout: 30000, // 30 seconds timeout for individual tests
    hookTimeout: 30000, // 30 seconds timeout for hooks
  },
});

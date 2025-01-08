import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  webpackDevMiddleware: (config) => {
    // Ensure hot reloading works in Docker
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay rebuild after the first change
    };
    return config;
  },
};

export default nextConfig;

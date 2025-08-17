import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    domains: ["localhost", "backend"], // Agrega aquí los dominios permitidos
  },
};

export default nextConfig;

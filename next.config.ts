import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    domains: ["res.cloudinary.com"], // Agrega aquí los dominios permitidos
  },
};

export default nextConfig;

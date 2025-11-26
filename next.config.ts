import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3845',
        pathname: '/assets/**',
      },
    ],
  },
  // Ignora errores de TypeScript durante el build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignora errores de ESLint durante el build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

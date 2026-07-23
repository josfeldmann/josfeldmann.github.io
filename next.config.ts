import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  experimental: {
    serverSourceMaps : true
  },

   // Required when using next/image without a Next.js server.
  images: {
    unoptimized: true,
  },

  // Optional, but often works more predictably with GitHub Pages.
  trailingSlash: true,
};

export default nextConfig;

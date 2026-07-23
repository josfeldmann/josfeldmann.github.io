import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  experimental: {
    serverSourceMaps : true
  },

  
};

export default nextConfig;

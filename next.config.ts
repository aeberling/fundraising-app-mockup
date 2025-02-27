import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['d3-shape', 'victory-vendor', 'recharts'],
  webpack: (config) => {
    // This is needed to fix issues with d3-shape and other ESM modules
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
    };
    return config;
  },
};

export default nextConfig;

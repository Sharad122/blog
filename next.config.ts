import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '*': ['.prisma/client'],
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /prisma\/.*\.node$/,
      loader: 'file-loader',
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
    ],
  },
};

export default nextConfig;
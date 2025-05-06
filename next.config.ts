import type { NextConfig } from "next";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin"; 

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [
        ...(config.plugins || []),
        new PrismaPlugin(),
      ];
    }
    return config;
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['.prisma/client'],
    },
  } as any,
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

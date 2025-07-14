import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
    ],
  },
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://172.19.65.226:3001",
  ],
};

export default nextConfig;

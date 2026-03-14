// apps/fe/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/config", "@repo/common"], // keep your existing monorepo packages
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://accounts.google.com https://apis.google.com",
              "frame-src 'self' https://accounts.google.com",
              "connect-src 'self' http://localhost:3002 ws://localhost:8080 https://accounts.google.com https://oauth2.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://accounts.google.com",
              "img-src 'self' data: https://*.googleusercontent.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
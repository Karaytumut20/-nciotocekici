import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"], unoptimized: true },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.inciotocekici.com" }],
        destination: "https://inciotocekici.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
      "frame-ancestors 'none'",
      "img-src 'self' data: blob: https://*.google.com https://*.google-analytics.com https://*.doubleclick.net https://*.googleadservices.com",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net",
      "connect-src 'self' https://*.google.com https://*.google-analytics.com https://*.googletagmanager.com https://*.doubleclick.net https://*.googleadservices.com https://*.googlesyndication.com",
      "frame-src https://*.google.com https://*.doubleclick.net",
    ].join("; ");
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;

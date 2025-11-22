/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Enable compression (default: true)
  compress: true,
  // Optimize package imports for better tree-shaking
  experimental: {
    optimizePackageImports: ["styled-components"],
  },
}

module.exports = nextConfig

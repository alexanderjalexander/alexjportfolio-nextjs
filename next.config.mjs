/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ["@heroui", "@heroui/react", "framer-motion"],
  },
  expireTime: 604800,
  images: {
    qualities: [50, 67, 75],
    contentDispositionType: 'inline',
    remotePatterns: [
      new URL("https://yt3.googleusercontent.com/**"),
    ]
  }
};

export default nextConfig;

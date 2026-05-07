/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@heroui", "@heroui/react", "framer-motion"],
  },
  expireTime: 604800,
};

export default nextConfig;

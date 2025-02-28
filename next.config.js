/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
          fullUrl: true,
          hmrRefreshes: true,
        },
    },
    experimental: {
        optimizePackageImports: ['@heroui', '@heroui/react', 'framer-motion']
    }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
